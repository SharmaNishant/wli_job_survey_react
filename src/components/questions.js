import React from 'react';
import PropTypes from 'prop-types';

import TextInputQuestion from './text_input_question'
import EmailInputQuestion from './email_input_question'
import NumberInputQuestion from './number_input_question'
import SelectInputQuestion from './select_question'


function Question(props) {
    let question;
    if (props.question_type === "input-text") {
        question =
            <TextInputQuestion
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
    if (props.question_type === "select" || props.question_type === "select-multiple") {
        question =
            <SelectInputQuestion
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
    question_type: PropTypes.string.isRequired,
    handle_result: PropTypes.func.isRequired,
    update_selected_result: PropTypes.func.isRequired,
};

export default Question;


