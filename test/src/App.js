import React, { Component } from 'react';
import {BrowserRouter as BR, Route} from 'react-router-dom';
import Home from './Home';


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
          <Route exact path="/" component={Home}></Route>
        </BR>
      </div>
    );
  }
}

export default App;
