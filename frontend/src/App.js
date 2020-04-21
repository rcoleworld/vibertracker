import React from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter, Redirect} from "react-router-dom";
import Login from './components/pages/Login';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={withRouter(Login)}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
