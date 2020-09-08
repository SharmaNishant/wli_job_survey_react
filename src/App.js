import React, { Component } from 'react';

import QuizQuestions from './api/quiz_questions'
import Question from './components/questions';
import QuestionCount from './components/question_count';
import AnswerSelect from './components/answer_select';

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
      answers: { "name": "" }
    };
  }

  componentDidMount() {
    this.setState({
      questions: QuizQuestions,
    });
  }

  updateNextQuestion(nextQuestionId) {
    console.log(nextQuestionId)
    this.setState({
      currentQuestionId: nextQuestionId,
    });
  }


  handleResult(event) {
    console.log("I am here")
    console.log(event.target)

    event.preventDefault();

    let answersCopy = this.state.answers

    let key = event.target.answerId.value
    let value = event.target.result.value
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

    const currentQuestionData = vals[this.state.currentQuestionId]
    console.log(currentQuestionData)
    const currentQuestionType = currentQuestionData["type"]

    return (
      <div className="App" >
        <div className="App-header">
          <h2>Water Job Survey</h2>
        </div>

        {
          <Question
            content={currentQuestionData}
            question_type={currentQuestionType}
            handle_result={this.handleResult.bind(this)}
          />
        }

      </div>
    );
  }
}

export default App;
