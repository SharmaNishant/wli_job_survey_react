import React from 'react';
import PropTypes from 'prop-types';
import BaseSelect from 'react-select'
import FixRequiredSelect from './FixRequiredSelect'
import { components } from "react-select";

/// This function renders a searchable dropdowm with a limit of at most 3 selectable options 
function DatalistMultiOptionQuestion(props) {
    let options = []
    props.content["options"].map(option => (
        options.push({ label: option, value: option })
    ))

    const Selecter = props => (
        <FixRequiredSelect
            {...props}
            SelectComponent={BaseSelect}
            options={props.options || options}
        />
    );

    // Todo (Nishant): Figure out how to pass 3 as a variable.
    const Menu = (props) => {
        const optionSelectedLength = props.getValue().length || 0;
        return (
            <components.Menu {...props}>
                {optionSelectedLength < 3 ? (
                    props.children
                ) : (
                        <div style={{ margin: 15 }}>Max limit achieved</div>
                    )}
            </components.Menu>
        );
    };

    return (
        <div>
            <form onSubmit={props.handle_result}>
                <div className="form-group">
                    <label htmlFor="question">
                        <h5>{props.content["question"]}</h5>
                    </label>
                    <br />
                    <Selecter
                        id="result"
                        components={{ Menu }}
                        options={options}
                        onChange={(selectedOption) => {
                            // convert the selected options into an array of values only
                            let selectedOptionValues = []
                            selectedOption.map((option) => selectedOptionValues.push(option.value))
                            let selectedOptionString = selectedOptionValues.join(';')
                            props.update_selected_result(selectedOptionString)
                        }}
                        isMulti
                        isSearchable
                    />
                    <br />
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="Doesn't matter" id="doesnt_matter" />
                        <label className="form-check-label" htmlFor="doesnt matter">Doesn't matter</label>
                    </div>
                </div>
                <input type="submit" value="Next" className="btn btn-primary" />
                <input type="hidden" id="result" value="check_datalist_multi_value" readOnly />
                <input type="hidden" id="nextQuestionId" value={props.content["next"]} readOnly />
                <input type="hidden" id="answerId" value={props.content["value"]} readOnly />
            </form>
        </div >
    );
}

DatalistMultiOptionQuestion.propTypes = {
    content: PropTypes.object.isRequired,
    handle_result: PropTypes.func.isRequired,
    update_selected_result: PropTypes.func.isRequired,
};

export default DatalistMultiOptionQuestion;

