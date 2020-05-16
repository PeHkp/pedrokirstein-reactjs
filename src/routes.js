import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"

import Home from "./pages/Home/"
import HomePt from "./pages/HomePt/"

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={HomePt}/>
                <Route path="/ingles" component={Home}/>
            </Switch>
        </BrowserRouter>
    )
}