import React from 'react';
import PropTypes from 'prop-types';

function Question(props) {
    return (
        <b className="question">{props.content}</b>
    );
}

Question.propTypes = {
    content: PropTypes.string.isRequired
};

export default Question;


