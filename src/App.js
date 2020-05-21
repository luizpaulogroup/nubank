import React from 'react';

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from './pages/Home';
import SignIn from './pages/SignIn';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/home" component={Home} />
      </Switch>
    </BrowserRouter>
  )
}
