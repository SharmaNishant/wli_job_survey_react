import React from 'react';
import PropTypes from 'prop-types';

function getJobsDescription(job_descriptions, job) {
    if(!(job in job_descriptions)){
            return <p className="text-danger">Something went wrong. We couldn't find this job in our database.</p>    
    }

    return job_descriptions[job] 
}

function getJobsForSubject(subjects_to_jobs, subject, job_descriptions) {

    if(!(subject in subjects_to_jobs)){
        return <p className="text-danger">Something went wrong. We couldn't find this subject in our database.</p>
    }

    let subjects_element = []

    let jobs = subjects_to_jobs[subject]
    jobs.map((job)=>(
        subjects_element.push(
        <div key={job}>
            <h5 className="text-primary">{job}</h5>
            <div className="text-secondary card-text">
                {getJobsDescription(job_descriptions, job)}                
            </div>
        </div>
        )
    ))
    
    return subjects_element
}


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
                        {getJobsForSubject(props.subjects_to_jobs, value, props.job_descriptions)}
                    </div>
                </div>
            ):''
        ))
    }

    return (
        <div className="container">
            <br />
            <p className="lead">Thank you for taking the time to complete the survey. The water industry provides a variety of rewarding careers. Those careers that many companies do not focus on getting top talent besides in the engineering field.</p>
            <hr />

            <div className="card mb-3">
                <h3 className="card-header">{props.subject}</h3>
                <div className="card-body">
                    {getJobsForSubject(props.subjects_to_jobs, props.subject, props.job_descriptions)}
                </div>
            </div>
        
            {subjects_element}
        </div>
    );
}

Result.propTypes = {
    subject: PropTypes.string.isRequired,
    preferred_subjects: PropTypes.string.isRequired,
    subjects_to_jobs: PropTypes.object.isRequired,
    job_descriptions: PropTypes.object.isRequired,
};

export default Result;
