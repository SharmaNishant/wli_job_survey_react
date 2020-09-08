import React from 'react';
import PropTypes from 'prop-types';

function TextInputQuestion(props) {
    return (
        <div>
            <form onSubmit={props.handle_result}>
                <label className="inputQuestion" htmlFor={props.content["question"]}>
                    <b>{props.content["question"]}</b>
                </label>
                <br />
                <input
                    type="text"
                    className="inputAnswer"
                    name="question"
                    maxlength={props.content["length"] || 32}
                    id="result"
                    required
                />
                <br />
                <input type="submit" value="Next"></input>
                <input /*type="hidden"*/ id="nextQuestionId" value={props.content["next"]} />
                <input /*type="hidden"*/ id="answerId" value={props.content["value"]} />

            </form>
        </div>
    );
}

TextInputQuestion.propTypes = {
    content: PropTypes.string.isRequired,
    question_type: PropTypes.string.isRequired,
    handle_result: PropTypes.func.isRequired,
};

function NumberInputQuestion(props) {
    return (
        <div>
            <form onSubmit={props.handle_result}>
                <label className="inputQuestion" htmlFor={props.content["question"]}>
                    <b>{props.content["question"]}</b>
                </label>
                <br />
                <input
                    type="number"
                    className="inputAnswer"
                    name="question"
                    min={props.content["min"] || 10}
                    max={props.content["max"] || 100}
                    id="result"
                    required
                />
                <br />
                <input type="submit" value="Next"></input>
                <input /*type="hidden"*/ id="nextQuestionId" value={props.content["next"]} />
                <input /*type="hidden"*/ id="answerId" value={props.content["value"]} />
            </form>
        </div>
    );
}

NumberInputQuestion.propTypes = {
    content: PropTypes.string.isRequired,
    question_type: PropTypes.string.isRequired,
    handle_result: PropTypes.func.isRequired,
};


function SelectInputQuestion(props) {
    return (
        <div>
            <form onSubmit={props.handle_result}>
                <label className="inputQuestion" htmlFor={props.content["question"]}>
                    <b>{props.content["question"]}</b>
                </label>
                <br />

                <br />
                <input type="submit" value="Next"></input>
                <input /*type="hidden"*/ id="result" value="test" />
                <input /*type="hidden"*/ id="nextQuestionId" value={props.content["next"]} />
                <input /*type="hidden"*/ id="answerId" value={props.content["value"]} />
            </form>
        </div>
    );
}

SelectInputQuestion.propTypes = {
    content: PropTypes.string.isRequired,
    question_type: PropTypes.string.isRequired,
    handle_result: PropTypes.func.isRequired,
};


function Question(props) {
    let question;
    if (props.question_type === "input-text") {
        question =
            <TextInputQuestion
                content={props.content}
                value={props.value}
                handle_result={props.handle_result}
            />
    }
    if (props.question_type === "input-number") {
        question =
            <NumberInputQuestion
                content={props.content}
                value={props.value}
                handle_result={props.handle_result}
            />
    }
    if (props.question_type === "select") {
        question =
            <SelectInputQuestion
                content={props.content}
                value={props.value}
                handle_result={props.handle_result}
            />
    }
    return (
        <div>
            {question}
        </div>
    );
}

Question.propTypes = {
    content: PropTypes.string.isRequired,
    question_type: PropTypes.string.isRequired,
    handle_result: PropTypes.func.isRequired,
};

export default Question;


