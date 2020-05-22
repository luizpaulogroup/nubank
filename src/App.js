import React from 'react';

import { BrowserRouter, Switch, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import SignIn from './pages/SignIn';
import Transactions from './pages/Transactions';
import Bills from './pages/Bills';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/transactions" component={Transactions} />
        <Route path="/bills" component={Bills} />
      </Switch>
    </BrowserRouter>
  )
}
