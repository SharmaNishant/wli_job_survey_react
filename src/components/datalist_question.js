import React from 'react';
import PropTypes from 'prop-types';
import BaseSelect from 'react-select'
import FixRequiredSelect from './FixRequiredSelect'


function DataListQuestion(props) {
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

    return (
        <div>
            <form onSubmit={props.handle_result}>
                <div className="form-group">
                    <label htmlFor="question">
                        <h5>{props.content["question"]}</h5>
                    </label>
                    <br />
                    <Selecter
                        id="question"
                        options={options}
                        onChange={(selectedOption) => {
                            props.update_selected_result(selectedOption.value)
                        }}
                        isSearchable
                        required />
                </div>
                <input type="submit" value="Next" className="btn btn-primary" />
                <input type="hidden" id="result" value="check_datalist_value" readOnly />
                <input type="hidden" id="nextQuestionId" value={props.content["next"]} readOnly />
                <input type="hidden" id="answerId" value={props.content["value"]} readOnly />
            </form>
        </div >
    );
}

DataListQuestion.propTypes = {
    content: PropTypes.object.isRequired,
    handle_result: PropTypes.func.isRequired,
    update_selected_result: PropTypes.func.isRequired,
    selected_option: PropTypes.string.isRequired
};

export default DataListQuestion;

