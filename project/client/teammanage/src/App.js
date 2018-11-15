import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Member } from './components/screens/Member';
import { Project } from './components/screens/Project';

import { Provider } from 'react-redux';
import { store } from './redux/store'

class App extends Component {
  
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="app">
            <button
              className="btn btn-warning menu"
            >
              <Link to="/member">Member</Link>
            </button>

            <button
              className="btn btn-warning menu"
            >
              <Link to="/project">Project</Link>
            </button>

            <hr />

            <Route exact path="/member" component={Member} />
            <Route exact path="/project" component={Project} />

          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
