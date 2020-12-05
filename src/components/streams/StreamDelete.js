import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { deleteStream, fetchStreams } from '../../actions';
import history from '../../history';
import Warning from '../messages/Warning';
import Modal from '../Modal';

const StreamDelete = ({ deleteStream, stream, account, fetchStreams }) => {

    useEffect(() => {
        fetchStreams();
    }, [fetchStreams])

    const onDismiss = () => {
        history.push('/');
    }

    const actions = (
        <>
            <div onClick={() => deleteStream(stream.id)} className="ui button negative">Delete</div>
            <div onClick={onDismiss} className="ui button cancel">Cancel</div>
        </>
    )

    if (!stream) return <Warning title="The required stream does not exist." />
    if (!account.isSignedIn || account.userId !== stream.userId)
        return <Warning title="You are not abled to delete this stream becuase you are not logged as it's owner." />

    return (
        <Modal
            header='Delete Stream'
            content={`Are you sure you want to delete this stream: "${stream.title}"?`}
            actions={actions}
            onDismiss={onDismiss}
        />
    )
}

const mapPropsToState = (state, ownProps) => {
    return { stream: state.streams.find(s => s.id.toString() === ownProps.match.params.id.toString()), account: state.auth }
}

export default connect(mapPropsToState, { deleteStream, fetchStreams })(StreamDelete);