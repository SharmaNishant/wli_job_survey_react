import React, { Component } from 'react';

import QuizQuestions from './api/quiz_questions'
import Question from './components/questions';
import QuestionCount from './components/question_count';
import AnswerSelect from './components/answer_select';
import Result from './components/result';

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
      answers: { "name": "" },
      selectedOption: "",
    };
  }

  componentDidMount() {
    this.setState({
      questions: QuizQuestions,
    });
  }

  updateNextQuestion(nextQuestionId) {
    // console.log(nextQuestionId)
    this.setState({
      currentQuestionId: nextQuestionId,
    });
  }

  updateSelectedOption(event) {
    console.log(event.target.value)
    this.setState({
      selectedOption: event.target.value
    });
  }


  handleResult(event) {
    // console.log("I am here")
    // console.log(event.target)

    event.preventDefault();

    let answersCopy = this.state.answers

    let key = event.target.answerId.value
    let value = event.target.result.value

    if (value === "check_selected_value") {
      value = this.state.selectedOption
      this.setState({ selectedOption: "" });
    }

    answersCopy[key] = value

    this.setState({
      answers: answersCopy
    });

    this.updateNextQuestion(event.target.nextQuestionId.value)
    console.log(this.state.answers)
  }


  render() {
    const vals = QuizQuestions || {};

    if (isEmpty(vals)) {
      return;
    }


    let renderElement
    if (this.state.currentQuestionId === "wjs-results") {
      renderElement = <Result
        content={this.state.answers}
      />
    }
    else {
      const currentQuestionData = vals[this.state.currentQuestionId]
      const currentQuestionType = currentQuestionData["type"]

      renderElement = <Question
        content={currentQuestionData}
        question_type={currentQuestionType}
        handle_result={this.handleResult.bind(this)}
        update_selected_result={this.updateSelectedOption.bind(this)}
        selected_option={this.state.selectedOption}
      />
    }

    return (
      <div className="App" >
        <div className="App-header">
          <h2>Water Job Survey</h2>
        </div>
        {renderElement}
      </div>
    );
  }
}

export default App;
