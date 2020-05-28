import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import {HomePage, CartPage} from '../pages'
import ShopHeader from '../ShopHeader/ShopHeader';


const App = () => {
    return (
        <main role="main" className="container">
            <ShopHeader/>
            <Switch>
                <Route
                    path='/cart'
                    component={CartPage}
                />
                <Route
                    path='/'
                    component={HomePage}
                />

            </Switch>
        </main>
    )
}

export default App;