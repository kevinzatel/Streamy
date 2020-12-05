import React, { useCallback, useEffect } from 'react';
import { connect } from 'react-redux';
import { init, signIn, signOut } from '../../actions';

const GoogleAuth = ({ init, signIn, signOut, account }) => {

    useEffect(() => {
        init();
    }, [init]);

    const onSignedInChange = useCallback(isSignedIn => {
        const userId = account.auth.currentUser.get().getId();
        isSignedIn ? signIn(userId) : signOut();
    }, [signIn, signOut, account.auth])

    useEffect(() => {
        if (!account.auth) return;
        onSignedInChange(account.auth.isSignedIn.get())
        account.auth.isSignedIn.listen(onSignedInChange);
    }, [account.auth, onSignedInChange])

    const renderedSignIn = () => {
        return (
            account.isSignedIn ?
                <button className='ui button' onClick={() => account.auth.signOut()}>
                    <i className='google icon' />
                        Log Out
                </button>
                :
                <button className='ui button' onClick={() => account.auth.signIn()}>
                    <i className='google icon' />
                    Log In
                </button >
        )
    }
    return (
        <div>
            {renderedSignIn()}
        </div>
    )
}

const mapStateToProps = (state) => {
    return { account: state.auth }
};

export default connect(mapStateToProps, { init, signIn, signOut })(GoogleAuth);