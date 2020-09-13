import React from 'react';
import PropTypes from 'prop-types';


function SelectInputQuestion(props) {
    return (
        <div>
            <form onSubmit={props.handle_result}>
                <label className="inputQuestion" htmlFor={props.content["question"]}>
                    <b>{props.content["question"]}</b>
                </label>
                <br />
                {props.content["options"].map(option => (
                    < div key={option} >
                        <label>
                            <input
                                type="radio"
                                value={option}
                                name="option"
                                // checked={props.selected_option === { option }}
                                onChange={props.update_selected_result}
                                required
                            />
                            &nbsp;{option}
                        </label>
                        <br />
                    </div>
                ))}
                <input type="submit" value="Next"></input>
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