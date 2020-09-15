import React from 'react';
import PropTypes from 'prop-types';

function TextboxInputQuestion(props) {
    return (
        <div>
            <form onSubmit={props.handle_result}>
                <div className="form-group">
                    <label htmlFor="question">
                        <h5>{props.content["question"]}</h5>
                    </label>
                    <textarea
                        className="form-control"
                        name="question"
                        maxLength={props.content["length"] || 500}
                        id="result"
                        rows="5"
                        required
                        autoFocus
                    />
                </div>
                <input type="submit" value="Next" className="btn btn-primary" />
                <input type="hidden" id="nextQuestionId" value={props.content["next"]} readOnly />
                <input type="hidden" id="answerId" value={props.content["value"]} readOnly />

            </form>
        </div >
    );
}

TextboxInputQuestion.propTypes = {
    content: PropTypes.object.isRequired,
    handle_result: PropTypes.func.isRequired,
};

export default TextboxInputQuestion;