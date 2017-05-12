import React from 'react'
import ReactDOM from 'react-dom'
import Home from './components/Home'
import { HashRouter, Route, IndexRoute } from 'react-router-dom'

class App extends React.Component{

  render(){
    return (
      <HashRouter>
        <div className='container'>
          <Route exact path="/" component={Home} />
        </div>
      </HashRouter>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))