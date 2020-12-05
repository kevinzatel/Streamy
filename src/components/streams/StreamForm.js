import React from 'react';
import { Field, reduxForm } from 'redux-form';

const fieldClass = ({ touched, error }) => {
    return `field ${touched && error ? 'error' : ''}`
}

const renderInput = ({ input, label, meta }) => {
    return (
        <div className={fieldClass(meta)}>
            <label htmlFor={input.name}> {label} </label>
            <input  {...input} autoComplete='off' />
            {renderError(meta)}
        </div>
    )
}

const renderError = ({ touched, error }) => {
    if (touched && error) {
        return <div style={{ color: '#9f3a38' }}> {error} </div >
    }
}

const validateForm = formValues => {
    const errors = {};
    if (!formValues.title) errors.title = 'You must enter a title'
    if (!formValues.description) errors.description = 'You must enter a description'
    return errors;
}

const StreamForm = ({ handleSubmit, onSubmit }) => {

    return (
        <div>
            <form className='ui form' onSubmit={handleSubmit(onSubmit)}>
                <Field name='title' component={renderInput} label='Enter title' />
                <Field name='description' component={renderInput} label='Enter description' />
                <button className='ui primary button right floated'>Submit</button>
            </form>
        </div>
    )
}

export default reduxForm({
    form: 'streamForm',
    validate: validateForm
})(StreamForm);