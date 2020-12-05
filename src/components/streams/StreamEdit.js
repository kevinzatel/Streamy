import React, { useEffect } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { editStream, fetchStreams } from '../../actions'
import StreamForm from './StreamForm';
import Warning from '../messages/Warning';

const StreamEdit = ({ editStream, stream, account, fetchStreams }) => {

    useEffect(() => {
        fetchStreams();
    }, [fetchStreams])

    const onSubmit = (formValues) => {
        editStream(stream.id, formValues)
    }

    if (!stream) return <Warning title="The required stream does not exist." />
    if (!account.isSignedIn || account.userId !== stream.userId)
        return <Warning title="You are not abled to edit this stream becuase you are not logged as it's owner." />

    return (
        <div>
            <h3>Edit stream</h3>
            <StreamForm onSubmit={onSubmit} initialValues={_.pick(stream, 'title', 'description')} />
        </div>
    )
}

const mapPropsToState = (state, ownProps) => {
    return { stream: state.streams.find(s => s.id.toString() === ownProps.match.params.id.toString()), account: state.auth }
}

export default connect(mapPropsToState, { editStream, fetchStreams })(StreamEdit);