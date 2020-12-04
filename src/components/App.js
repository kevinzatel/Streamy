import React from 'react';
import { Router } from 'react-router-dom';
import Header from './header/Header';
import Routes from './routes/Routes';
import history from '../history';

const App = () => {
    return (
        <Router history={history}>
            <div className='ui container'>
                <Header />
                <Routes />
            </div>
        </Router>
    )
}

export default App;