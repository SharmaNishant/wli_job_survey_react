import React from 'react';
import PropTypes from 'prop-types';

function EmailInputQuestion(props) {
    return (
        <div>
            <form onSubmit={props.handle_result}>
                <div className="form-group">
                    <label htmlFor="question">
                        <h5>{props.content["question"]}</h5>
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        name="question"
                        maxLength={props.content["length"] || 100}
                        id="result"
                        pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                        required
                        autoFocus
                    />
                    <small>We do not share this information with anyone.</small>
                </div>
                <input type="submit" value="Next" className="btn btn-primary" />
                <input type="hidden" id="nextQuestionId" value={props.content["next"]} readOnly />
                <input type="hidden" id="answerId" value={props.content["value"]} readOnly />

            </form>
        </div>
    );
}

EmailInputQuestion.propTypes = {
    content: PropTypes.object.isRequired,
    handle_result: PropTypes.func.isRequired,
};

export default EmailInputQuestion;