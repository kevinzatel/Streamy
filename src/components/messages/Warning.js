import React from 'react';

const Warning = ({ title, content }) => (
    <div class="ui warning message">
        <div class="header">
            {title}
        </div>
        {content}
    </div>
)

export default Warning;