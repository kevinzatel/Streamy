import streams from '../apis/streams';
import history from '../history';
import { INIT, SIGN_IN, SIGN_OUT, CREATE_STREAM, FETCH_STREAMS, EDIT_STREAM, DELETE_STREAM, SELECT_STREAM, UNSELECT_STREAM } from './types';

export const signIn = (userId) => async dispatch => {
    dispatch({
        type: SIGN_IN,
        payload: userId
    });
};

export const signOut = () => async dispatch => {
    dispatch({
        type: SIGN_OUT,
    });
};

export const init = () => async dispatch => {
    window.gapi.load('client:auth2', () => {
        window.gapi.client.init({
            clientId: '80591047580-qo2p91vbju9lrtig9jhdvt53c22285lq.apps.googleusercontent.com',
            scope: 'email',
        }).then(() => {
            dispatch({
                type: INIT,
                payload: window.gapi.auth2.getAuthInstance()
            });
        });
    });
}

export const fetchStreams = () => async dispatch => {
    const response = await streams.get('/latest');

    dispatch({
        type: FETCH_STREAMS,
        payload: response.data.streams
    })
}

export const createStream = (formValues) => async (dispatch, getState) => {
    const { userId } = getState().auth;
    const response = await streams.post('/streams', { ...formValues, userId });

    dispatch({
        type: CREATE_STREAM,
        payload: response.data.streams
    });

    history.push('/');
}

export const editStream = (id, formValues) => async dispatch => {
    const response = await streams.patch(`/streams/${id}`, formValues);

    dispatch({
        type: EDIT_STREAM,
        payload: response.data.streams
    })

    history.push('/');
}

export const deleteStream = id => async dispatch => {
    await streams.delete(`/streams/${id}`);

    dispatch({
        type: DELETE_STREAM,
        payload: id
    })

    history.push('/');
}

export const getSelectedStream = id => async dispatch => {
    const response = await streams.get(`/streams/${id}`);

    dispatch({
        type: SELECT_STREAM,
        payload: response.data.streams
    })
}

export const unselectStream = () => {
    return {
        type: UNSELECT_STREAM,
    }
}