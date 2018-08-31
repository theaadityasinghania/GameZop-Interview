import React, { Component } from 'react';
// import {BrowserRouter as BR, Route, Switch} from 'react-router-dom';
import Home from './Home';
import News from './News';
import Sports from './Sports';
import './style.css';
import 'materialize-css'; // It installs the JS asset only
import 'materialize-css/dist/css/materialize.min.css';
import { BrowserRouter as BR, Route, Switch, Redirect } from 'react-router-dom';
import { NavTab } from 'react-router-tabs';


class App extends Component {

  render() {
    
    const headStyle = {
      background: "#003791",
      padding: "56px"
    };

    return (
      <div>
        <header style={headStyle}></header>
        <BR>
          <div>
            <center className="main-navbar">
              <NavTab to="/home">Home</NavTab>
              <NavTab to="/news">News</NavTab>
              <NavTab to="/sports">Sports</NavTab>
            </center>
            
            <Switch>
              <Route exact path="/" render={() => <Redirect replace to="/home" />} />
              <Route path="/home" component={Home} />
              <Route path="/news" component={News} />
              <Route path="/sports" component={Sports} />
            </Switch>
          </div>
        </BR>
      </div>
    );
  }
}

export default App;
