import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getSelectedStream, unselectStream } from '../../actions';

const StreamShow = ({ match, getSelectedStream, unselectStream, stream }) => {

    useEffect(() => {
        getSelectedStream(match.params.id);

        return () => {
            unselectStream();
        }
    }, [])

    if (!stream) return <div>Loading</div>
    return (
        <div>
            <div class="ui card container">
                <div class="image">
                    <img src="https://store-images.s-microsoft.com/image/apps.12246.13510798887394810.e8a09938-7296-4009-ac8e-66655a794ce2.d917a088-acc8-40e9-90c7-b1534013beb2?mode=scale&q=90&h=200&w=200&background=%230078D7" />
                </div>
                <div class="content">
                    <div class="header">{stream.title}</div>
                    <div class="description">{stream.description}</div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return { stream: state.selectedStream }
}

export default connect(mapStateToProps, { getSelectedStream, unselectStream })(StreamShow);