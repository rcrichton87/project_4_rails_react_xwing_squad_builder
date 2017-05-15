import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home'
import SquadsContainer from './containers/SquadsContainer'
import { HashRouter, Route } from 'react-router-dom'

window.onload = function(){
  ReactDOM.render(
    <HashRouter>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/squads" component={SquadsContainer} />
      </div>
    </HashRouter>,
    document.getElementById('app')
  );
}
