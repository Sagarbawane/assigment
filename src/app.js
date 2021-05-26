import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import { Login } from './components/login'
import { Product } from './components/products'
import { ProductDescription } from './components/productDescription'


export const App = () => {

    return (
            <BrowserRouter>
                <React.Fragment>
                    <Link to='/' ></Link>
                    <Link to='/products' ></Link>
                    <Link to='/productDescription' ></Link>

                    <Route path='/' component={Login} exact={true}></Route>
                    <Route path='/products' component={Product} exact={true}></Route>
                    <Route path='/productDescription/:id' component={ProductDescription} exact={true}></Route>

                </React.Fragment>


            </BrowserRouter>


    )
}
