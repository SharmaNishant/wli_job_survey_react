import React from 'react';
import PropTypes from 'prop-types';

function NumberInputQuestion(props) {
    return (
        <div>
            <form onSubmit={props.handle_result}>
                <div className="form-group">
                    <label htmlFor="question">
                        <h5>{props.content["question"]}</h5>
                    </label>
                    <input
                        type="number"
                        className="form-control"
                        name="question"
                        min={props.content["min"] || 10}
                        max={props.content["max"] || 100}
                        id="result"
                        autoFocus
                        required
                    />
                </div>
                <input type="submit" value="Next" className="btn btn-primary" />
                <input type="hidden" id="nextQuestionId" value={props.content["next"]} readOnly />
                <input type="hidden" id="answerId" value={props.content["value"]} readOnly />
            </form>
        </div>
    );
}

NumberInputQuestion.propTypes = {
    content: PropTypes.object.isRequired,
    handle_result: PropTypes.func.isRequired,
};

export default NumberInputQuestion;