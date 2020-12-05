import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStreams } from '../../actions';
import history from '../../history';

const StreamList = ({ streams, fetchStreams, account }) => {

    useEffect(() => {
        fetchStreams();
    }, [fetchStreams]);

    const renderCreateButton = () => {
        if (account.isSignedIn) {
            return <Link className='ui button primary right floated' to='/streams/new'>Create new</Link>
        }
    }

    const renderAdminButtons = (stream) => {
        if (stream.userId === account.userId) {
            return (
                <div onClick={e => e.stopPropagation()} className='ui right floated'>
                    <Link to={`/streams/edit/${stream.id}`} className='ui button'>Edit</Link>
                    <Link to={`/streams/delete/${stream.id}`} className='ui button'>Delete</Link>
                </div>
            )
        }
    }

    const renderStreams = () => {
        if (!streams) return;
        return streams.map(stream => {
            return (
                <div onClick={() => history.push(`/streams/${stream.id}`)} style={{ cursor: 'pointer' }} className='item' key={stream.id}>
                    <div className='ui clearing segment items'>
                        <div className='item'>
                            <i className='large icon camera' />
                            <div className='content'>
                                {stream.title}
                                <div className='description'>
                                    {stream.description}
                                </div>
                            </div>
                            {renderAdminButtons(stream)}
                        </div>
                    </div >
                </div>
            )
        });
    }

    return (
        <div>
            <h3>Streams</h3>
            <div className='ui list'>
                {renderStreams()}
            </div>
            <div> {renderCreateButton()} </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return { streams: state.streams, account: state.auth }
}

export default connect(mapStateToProps, { fetchStreams })(StreamList);