import React, { useEffect } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { editStream, getSelectedStream, unselectStream } from '../../actions'
import StreamForm from './StreamForm';
import Warning from '../messages/Warning';

const StreamEdit = ({ editStream, getSelectedStream, unselectStream, match, stream, account }) => {

    useEffect(() => {
        getSelectedStream(match.params.id)

        return () => {
            unselectStream()
        }
    }, [])

    const onSubmit = (formValues) => {
        editStream(stream.id, formValues)
    }

    if (!stream) return <div>Loading...</div>
    if (!account.isSignedIn || account.userId !== stream.userId)
        return <Warning title="You are not abled to edit this stream becuase you are not logged as it's owner." />

    return (
        <div>
            <h3>Edit stream</h3>
            <StreamForm onSubmit={onSubmit} initialValues={_.pick(stream, 'title', 'description')} />
        </div>
    )
}

const mapPropsToState = state => {
    return { stream: state.selectedStream, account: state.auth }
}

export default connect(mapPropsToState, { editStream, getSelectedStream, unselectStream })(StreamEdit);