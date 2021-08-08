import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Repostories from './Pages/Repositories/index';
import Home from './Pages/Home/index';

export default function Routes(){
    return(
        <BrowserRouter> 
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/repositories' component={Repostories}/>
            </Switch>
        </BrowserRouter>
    )
}

