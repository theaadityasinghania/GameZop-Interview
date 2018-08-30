import React, { Component } from 'react';
import {BrowserRouter as BR, Route} from 'react-router-dom';
import Home from './Home';
import './style.css'


class App extends Component {
  render() {
    
    const headStyle = {
      background: "#003791",
      padding: "56px"
    };

    return (
      <div>
        <header style={headStyle}></header>
        <center>
          <ul>
            <li>Home</li>
            <li>News</li>
            <li>Sports</li>
          </ul>
        </center>
        <BR>
          <Route exact path="/" component={Home}></Route>
        </BR>
      </div>
    );
  }
}

export default App;
