import React from 'react';
import PropTypes from 'prop-types';

function TextQuestion(props) {
    return (
        <div>
            <form onSubmit={props.handle_result}>
                <div className="form-group">
                    <label htmlFor="question">
                        <h5>{props.content["question"]}</h5>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="question"
                        maxLength={props.content["length"] || 32}
                        id="result"
                        autoFocus
                        required
                    />
                </div>
                <input type="submit" value="Next" className="btn btn-primary" />
                <input type="hidden" id="nextQuestionId" value={props.content["next"]} readOnly />
                <input type="hidden" id="answerId" value={props.content["value"]} readOnly />

            </form>
        </div >
    );
}

TextQuestion.propTypes = {
    content: PropTypes.object.isRequired,
    handle_result: PropTypes.func.isRequired,
};

export default TextQuestion;