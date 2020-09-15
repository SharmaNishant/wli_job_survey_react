import React from 'react';
import PropTypes from 'prop-types';

import TextQuestion from './text_question'
import TextboxInputQuestion from './textbox_input_question'
import EmailInputQuestion from './email_input_question'
import NumberInputQuestion from './number_input_question'
import SelectInputQuestion from './select_question'
import DataListQuestion from './datalist_question'
import DatalistMultiOptionQuestion from './datalist_multi_option_question'


function Question(props) {
    let question;
    if (props.question_type === "input-text") {
        question =
            <TextQuestion
                content={props.content}
                handle_result={props.handle_result}
            />
    }
    if (props.question_type === "input-textbox") {
        question =
            <TextboxInputQuestion
                content={props.content}
                handle_result={props.handle_result}
            />
    }
    if (props.question_type === "input-number") {
        question =
            <NumberInputQuestion
                content={props.content}
                handle_result={props.handle_result}
            />
    }
    if (props.question_type === "select") {
        question =
            <SelectInputQuestion
                content={props.content}
                handle_result={props.handle_result}
                update_selected_result={props.update_selected_result}
                selected_option={props.selected_option}
            />
    }
    if (props.question_type === "datalist") {
        question =
            <DataListQuestion
                content={props.content}
                handle_result={props.handle_result}
                update_selected_result={props.update_selected_result}
                selected_option={props.selected_option}
            />
    }
    if (props.question_type === "datalist-multiple") {
        question =
            <DatalistMultiOptionQuestion
                content={props.content}
                handle_result={props.handle_result}
                update_selected_result={props.update_selected_result}
                selected_option={props.selected_option}
            />
    }
    if (props.question_type === "input-email") {
        question =
            <EmailInputQuestion
                content={props.content}
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
    content: PropTypes.object.isRequired,
    handle_result: PropTypes.func.isRequired,
    update_selected_result: PropTypes.func.isRequired,
    // selected_option: PropTypes.string.isRequired,

};

export default Question;


