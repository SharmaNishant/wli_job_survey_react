import React, { Component } from 'react';

import QuizQuestions from './api/quizQuestions'
import Question from './components/inputStringQuestion';

import './App.css';


class App extends Component {


  state = {
    questions: {},
    currentQuestionId: "wli-q1"
  };

  componentDidMount() {
    this.setState({
      questions: QuizQuestions,
    });
  }

  render() {
    const vals = QuizQuestions || {};

    return (
      <div className="App" >
        <div className="App-header">
          <h2>Water Job Survey</h2>
        </div>
        <div>
          {
            Object.keys(vals).map((key, index) => (
              <div>
                {<Question content={vals[key]["question"]} />}
              </div>
            ))
          }
        </div>

      </div>
    );
  }
}

export default App;
