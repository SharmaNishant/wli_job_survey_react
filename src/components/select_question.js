import React from 'react';
import PropTypes from 'prop-types';


function SelectInputQuestion(props) {
    return (
        <div>
            <form onSubmit={props.handle_result}>
                <div className="form-group">
                    <label htmlFor="question">
                        <h5>{props.content["question"]}</h5>
                    </label>
                    <br />
                    {props.content["options"].map(option => (
                        < div key={option} className="form-check">
                            <label className="form-check-label">
                                <input
                                    type="radio"
                                    value={option}
                                    className="form-check-input"
                                    name="question"
                                    // checked={props.selected_option === { option }}
                                    onChange={(event) => {
                                        props.update_selected_result(event.target.value)
                                    }}
                                    required
                                />
                            &nbsp;{option}
                            </label>
                            <br />
                        </div>
                    ))}
                </div>
                <input type="submit" value="Next" className="btn btn-primary" />
                <input type="hidden" id="result" value="check_selected_value" readOnly />
                <input type="hidden" id="nextQuestionId" value={props.content["next"]} readOnly />
                <input type="hidden" id="answerId" value={props.content["value"]} readOnly />
            </form>
        </div >
    );
}

SelectInputQuestion.propTypes = {
    content: PropTypes.object.isRequired,
    handle_result: PropTypes.func.isRequired,
    update_selected_result: PropTypes.func.isRequired,
    selected_option: PropTypes.string.isRequired,
};

export default SelectInputQuestion;