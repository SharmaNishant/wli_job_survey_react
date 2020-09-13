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
                    maxLength={props.content["length"] || 32}
                    id="result"
                    required
                />
                <br />
                <input type="submit" value="Next"></input>
                <input type="hidden" id="nextQuestionId" value={props.content["next"]} readOnly />
                <input type="hidden" id="answerId" value={props.content["value"]} readOnly />

            </form>
        </div>
    );
}

TextInputQuestion.propTypes = {
    content: PropTypes.object.isRequired,
    handle_result: PropTypes.func.isRequired,
};

export default TextInputQuestion;