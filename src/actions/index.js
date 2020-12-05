import streamsAPI from '../apis/streams';
import history from '../history';
import { INIT, SIGN_IN, SIGN_OUT, CREATE_STREAM, FETCH_STREAMS, EDIT_STREAM, DELETE_STREAM } from './types';

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
    const response = await streamsAPI.get('latest');

    dispatch({
        type: FETCH_STREAMS,
        payload: response.data
    })
}

export const createStream = (formValues) => async (dispatch, getState) => {
    const { userId } = getState().auth;
    const { streams } = getState();
    const id = streams.length !== 0 ? streams[streams.length - 1].id + 1 : 1;
    const newStream = { ...formValues, id, userId };
    const response = await streamsAPI.put('', [...streams, newStream]);

    dispatch({
        type: CREATE_STREAM,
        payload: response.data.data
    });

    history.push('/');
}

export const editStream = (id, formValues) => async (dispatch, getState) => {
    const { streams } = getState();
    const { title, description } = formValues;
    const streamIndex = streams.findIndex((s => s.id.toString() === id.toString()));
    streams[streamIndex].title = title;
    streams[streamIndex].description = description;
    const response = await streamsAPI.put('', streams);

    dispatch({
        type: EDIT_STREAM,
        payload: response.data.data
    })

    history.push('/');
}

export const deleteStream = id => async (dispatch, getState) => {
    const { streams } = getState();
    const newStreamList = streams.filter(s => s.id !== id);
    const response = await streamsAPI.put('', newStreamList);

    dispatch({
        type: DELETE_STREAM,
        payload: response.data.data
    })

    history.push('/');
}