import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { deleteStream, getSelectedStream, unselectStream } from '../../actions';
import history from '../../history';
import Warning from '../messages/Warning';
import Modal from '../Modal';

const StreamDelete = ({ getSelectedStream, deleteStream, unselectStream, stream, match, account }) => {

    useEffect(() => {
        getSelectedStream(match.params.id);

        return () => {
            unselectStream()
        }
    }, [])

    const onDismiss = () => {
        history.push('/');
    }

    const actions = (
        <>
            <div onClick={() => deleteStream(stream.id)} className="ui button negative">Delete</div>
            <div onClick={onDismiss} className="ui button cancel">Cancel</div>
        </>
    )

    if (!stream) return <div>Loading...</div>
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

const mapPropsToState = state => {
    return { stream: state.selectedStream, account: state.auth }
}

export default connect(mapPropsToState, { getSelectedStream, deleteStream, unselectStream })(StreamDelete);