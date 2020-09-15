import React from 'react';
import PropTypes from 'prop-types';

function QuestionCount(props) {
    let percentage = (Math.round(((props.counter - 1) / props.total) * 100).toFixed(1));
    return (
        <div className="progress">
            <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow={percentage}
                aria-valuemin="0" aria-valuemax="100" style={{ width: percentage + "%" }}>
                {percentage}%
            </div>
        </div >
    );
}

QuestionCount.propTypes = {
    counter: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired
};

export default QuestionCount;