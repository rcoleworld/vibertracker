import React from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter, Redirect} from "react-router-dom";
import Login from './components/pages/Login';
import Home from './components/pages/Home';
import MyVibes from './components/pages/MyVibes';
import NearbyVibes from './components/pages/NearbyVibes';
import TrackVibe from './components/pages/TrackVibe';
import SignUp from './components/pages/SignUp';

import { SnackbarProvider } from 'notistack';

import './App.css';

import { decode } from './functions/login';

if (localStorage.getItem("jwtToken")) {
  var jwtInfo = JSON.parse(decode());
  const currentTime = Date.now() / 1000;
  if (jwtInfo.exp < currentTime) {
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("email");
  }
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    localStorage.getItem("jwtToken")
      ? <Component {...props}/>
      : <Redirect to='/' />
  )} />
)

const AllowedRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    !localStorage.getItem("jwtToken")
      ? <Component {...props}/>
      : <Redirect to='/home' />
  )} />
)
function App() {
  return (
    <SnackbarProvider maxSnack={1}>
      <div className="App">
        <Router>
          <Switch>
            <AllowedRoute exact path='/' component={withRouter(Login)}/>
            <AllowedRoute exact path='/createuser' component={withRouter(SignUp)}/>
            <PrivateRoute exact path='/home' component={withRouter(Home)}/>
            <PrivateRoute exact path='/vibes' component={withRouter(MyVibes)}/>
            <PrivateRoute exact path='/nearby' component={withRouter(NearbyVibes)}/>
            <PrivateRoute exact path='/track' component={withRouter(TrackVibe)}/>
          </Switch>
        </Router>
      </div>
    </SnackbarProvider>
  );
}

export default App;
