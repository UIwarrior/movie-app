import {BrowserRouter, Route } from 'react-router-dom';
import React from 'react';
import App from './components/App';
import MovieSearch from './components/MovieSearch';
import Home from './components/Home';

const Routes = () => {
    return (
        <div>
        <BrowserRouter>
           <Route path ='/' exact component = {Home} /> 
           <Route path ='/moviesearch' component = {MovieSearch} /> 
           <Route path ='/home' component = {Home} /> 
        </BrowserRouter>   
        </div>
 
    )
}

export default Routes;

