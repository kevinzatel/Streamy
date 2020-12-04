import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

const Header = () => {
    return (
        <div>
            <div className='ui secondary pointing menu'>
                <div className='item'>
                    <Link className='item' to='/'>Home</Link>
                </div>
                <div className='right menu'>
                    <div className='ui item'>
                        <GoogleAuth />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;