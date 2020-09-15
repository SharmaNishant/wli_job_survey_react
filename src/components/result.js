import React from 'react';
import PropTypes from 'prop-types';

function Result(props) {

    let subjects_element = []
    if(props.preferred_subjects !== "Doesn't matter") {
        let subjects = props.preferred_subjects.split(';')
        subjects.map((value)=>(
            (value !== props.subject)?
                subjects_element.push(
                <div key={value} className="card mb-3">
                    <h3 className="card-header">{value}</h3>
                    <div className="card-body">
                        <p className="card-text">
                        {props.results[value]}
                        </p>
                    </div>
                </div>
            ):''
        ))
    }

    return (
        <div className="container">
            <h2>Future path based on your selection</h2>
            <hr />

            <div className="card mb-3">
                <h3 className="card-header">{props.subject}</h3>
                <div className="card-body">
                    <p className="card-text">
                        {props.results[props.subject]}
                    </p>
                </div>
            </div>
        
            {subjects_element}
        </div>
    );
}

Result.propTypes = {
    subject: PropTypes.string.isRequired,
    preferred_subjects: PropTypes.string.isRequired,
    results: PropTypes.object.isRequired,
};

export default Result;
