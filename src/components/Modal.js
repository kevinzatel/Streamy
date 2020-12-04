import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ header, content, actions, onDismiss }) => ReactDOM.createPortal(
    <div onClick={onDismiss} className='ui dimmer modals  visible active'>
        <div onClick={(e) => e.stopPropagation()} className="ui standard modal visible active">
            <div className="header">{header}</div>
            <div className="content">
                <p>{content}</p>
            </div>
            <div className="actions">
                {actions}
            </div>
        </div>
    </div>
    ,
    document.querySelector('#modal')
)

export default Modal;