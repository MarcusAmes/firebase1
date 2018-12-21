import React, { Component } from 'react';
import TopNav from './components/TopNav'
import {Route, Switch} from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNav />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/login' exact component={Login}/>
        </Switch>
      </div>
    );
  }
}

export default App;
