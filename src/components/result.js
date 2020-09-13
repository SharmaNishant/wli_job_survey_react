import React from 'react';
import PropTypes from 'prop-types';

function Result(props) {
    return (
        <div>
            {Object.entries(props.content)
                .map(([key, value]) =>
                    <div>
                        {key} {value} <br />
                    </div>
                )}
        </div>
    );
}

Result.propTypes = {
    content: PropTypes.object.isRequired,
};

export default Result;
