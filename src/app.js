import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Register from './clients/components/register'
import Login from './clients/components/login'
import Events from './clients/components/event'


export const App = () => {

    return (
        <BrowserRouter>
            <React.Fragment>
                <Link to='/' ></Link>
                <Link to='/login' ></Link>
                <Link to='/events' ></Link>

                <Route path='/' component={Register} exact={true}></Route>
                <Route path='/login' component={Login} exact={true}></Route>
                <Route path='/events' component={Events} exact={true}></Route>

            </React.Fragment>


        </BrowserRouter>


    )
}
