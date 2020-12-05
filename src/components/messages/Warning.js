import React from 'react';

const Warning = ({ title, content }) => (
    <div className="ui warning message">
        <div className="header">
            {title}
        </div>
        {content}
    </div>
)

export default Warning;