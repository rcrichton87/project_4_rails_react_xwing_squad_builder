import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home'
import NewSquadForm from './components/NewSquadForm'
import SquadsContainer from './containers/SquadsContainer'
import SquadContainer from './containers/SquadContainer'
import { HashRouter, Route } from 'react-router-dom'

window.onload = function(){
  ReactDOM.render(
    <HashRouter>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/squads" component={SquadsContainer} />
        <Route path="/squads/new" component={NewSquadForm} />
        <Route exact path={"/squads/show/:id"} component={SquadContainer} />
      </div>
    </HashRouter>,
    document.getElementById('app')
  );
}
