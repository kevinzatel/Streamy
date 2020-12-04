import React from 'react';
import { Route, Switch } from 'react-router-dom';
import StreamList from '../streams/StreamList';
import StreamCreate from '../streams/StreamCreate';
import StreamEdit from '../streams/StreamEdit';
import StreamDelete from '../streams/StreamDelete';
import StreamShow from '../streams/StreamShow';

const Routes = () => {
    return (
        <div style={{ marginTop: 30 }}>
            <Switch>
                <Route path='/' exact component={StreamList}></Route>
                <Route path='/streams/new' exact component={StreamCreate}></Route>
                <Route path='/streams/edit/:id' exact component={StreamEdit}></Route>
                <Route path='/streams/delete/:id' exact component={StreamDelete}></Route>
                <Route path='/streams/:id' exact component={StreamShow}></Route>
            </Switch>
        </div>
    )
}

export default Routes;