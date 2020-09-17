import React, { Component } from 'react';

import QuizQuestions from './api/quiz_questions'
import Question from './components/questions';
import QuestionCount from './components/question_count';
import Result from './components/result';
import SUBJECTS_TO_JOBS from './api/subjects_to_jobs';
import JOB_DESCRIPTIONS from './api/job_descriptions';

import './App.css';

function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      questions: {},
      currentQuestionId: "wjs-q1",
      answers: {},
      selectedOption: "",
      counter: 1
    };
  }

  componentDidMount() {
    this.setState({
      questions: QuizQuestions,
      subjects_to_jobs: SUBJECTS_TO_JOBS,
      job_descriptions: JOB_DESCRIPTIONS,
    });
  }

  // We don't want to rerender components unless the question is updating.
  shouldComponentUpdate(nextProps, nextState) {
    return this.state.currentQuestionId !== nextState.currentQuestionId;
  }

  updateNextQuestion(nextQuestionId) {
    this.setState({
      currentQuestionId: nextQuestionId,
    });
  }

  // This is used by Select and Datalist type questions to set the current value in state onChange.
  setSelectedOption(option) {
    this.setState({
      selectedOption: option
    });
  }

  async saveAnswers(){
        // POST request using fetch with async/await
        const requestOptions = {
          method: 'POST',
          headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(this.state.answers)
      };
      console.log(requestOptions)
      const response = await fetch('http://162.207.43.121:3001/addresult', requestOptions);
      console.log(response);
  }


  // main function logic to handle answers from each question, this also builds the candidate profile for when we are ready to save the output in the database.
  handleResult(event) {
    event.preventDefault();

    // a copy of our current answers for state update later
    let answersCopy = this.state.answers
    let key = event.target.answerId.value
    let value = event.target.result.value

    // handle select and datalist type questions 
    if (value === "check_selected_value" || value === "check_datalist_value") {
      value = this.state.selectedOption
      this.setState({ selectedOption: "" });
    }

    if (value === "check_datalist_multi_value") {
      if (event.target.doesnt_matter.checked) {
        value = "Doesn't matter"
      }
      // if string being empty (not set) and checkbox being unselected
      else if (this.state.selectedOption === "" && !event.target.doesnt_matter.checked) {
        //raise alert, user either need to select a value or select doesn't matter
        alert("Please make a selection or check 'doesn't matter'")
        return
      }
      else {
        value = this.state.selectedOption
      }

      this.setState({ selectedOption: "" });
    }

    // save new answer pair 
    answersCopy[key] = value

    this.setState({
      answers: answersCopy,
      counter: this.state.counter + 1
    });

    this.updateNextQuestion(event.target.nextQuestionId.value)
    event.target.reset();

    if(event.target.nextQuestionId.value === "wjs-results"){
      this.saveAnswers()
    }
  }


  render() {
    const vals = QuizQuestions || {};

    if (isEmpty(vals)) {
      return;
    }

    let renderElement
    if (this.state.currentQuestionId === "wjs-results") {
      renderElement = <Result
                      subject={this.state.answers['subject']}
                      preferred_subjects={this.state.answers['subjects_of_interest']}
                      subjects_to_jobs={this.state.subjects_to_jobs}
                      job_descriptions={this.state.job_descriptions}
      />
    }
    else {
      const currentQuestionData = vals[this.state.currentQuestionId]
      const currentQuestionType = currentQuestionData["type"]

      renderElement = <div className="container">
        <div style={{ padding: "18px" }} className="card mb-3 border-0">
          <div className="card-body">
            <div className="row">
              <div className="col-md-8 order-md-1"></div>
              <div className="col-md-4 order-md-2 mb-4">
                < QuestionCount counter={this.state.counter} total={Object.keys(QuizQuestions).length} />
              </div>
            </div>
            < Question
              content={currentQuestionData}
              question_type={currentQuestionType}
              handle_result={this.handleResult.bind(this)}
              update_selected_result={this.setSelectedOption.bind(this)}
              selected_option={this.state.selectedOption}
            />
          </div>
        </div>
        {/* {Object.entries(this.state.answers)
          .map(([key, value]) =>
            <div key={key}>
              {key} {value} <br />
            </div>
          )} */}
      </div>
    }

    return (
      <div className="App" >
        <div className="App-header">
          <h2>Water Job Survey</h2>
        </div>
        { renderElement}
      </div>
    );
  }
}

export default App;
