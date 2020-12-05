import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';
import Warning from '../messages/Warning';

const StreamShow = ({ stream, fetchStreams }) => {

    useEffect(() => {
        fetchStreams();
    }, [fetchStreams])

    if (!stream) return <Warning title="The required stream does not exist." />
    return (
        <div>
            <div className="ui card container">
                <div className="image">
                    <img alt='video-player' src="https://store-images.s-microsoft.com/image/apps.12246.13510798887394810.e8a09938-7296-4009-ac8e-66655a794ce2.d917a088-acc8-40e9-90c7-b1534013beb2?mode=scale&q=90&h=200&w=200&background=%230078D7" />
                </div>
                <div className="content">
                    <div className="header">{stream.title}</div>
                    <div className="description">{stream.description}</div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams.find(s => s.id.toString() === ownProps.match.params.id.toString()) }
}

export default connect(mapStateToProps, { fetchStreams })(StreamShow);