import React from 'react';

//routing and api - this may have all moved into the Signup/Login/PrivateRoute components.
import { Route, Redirect, Link } from 'react-router-dom'
import { axiosWithAuth as axios } from './utils/api'
import {Button} from 'reactstrap'

//component imports
import DriverSignup from './components/Login - Logout - Signup - PrivateRoute/DriverSignup'
import RiderSignup from './components/Login - Logout - Signup - PrivateRoute/RiderSignup'
import Login from './components/Login - Logout - Signup - PrivateRoute/Login'
import Logout from './components/Login - Logout - Signup - PrivateRoute/Logout'
import PrivateRoute from './components/Login - Logout - Signup - PrivateRoute/PrivateRoute'

//navigation
import Nav from './components/Navigation/Nav'
import Dashboard from './components/Users/Dashboard'

function App() {
  return (
    <div className="App">
      <h1>Hello. Welcome to Ride for Life.</h1>

      <Link to={'/driver-signup'} > <Button color='secondary'>Driver Signup</Button> </Link>
      <Link to={'/rider-signup'} > <Button color='secondary'>Rider Signup</Button> </Link>
      <Link to={'/login'} > <Button color='secondary'>Login</Button> </Link>

      <Route exact path='/' component={Dashboard} />
      <Route exact path='/driver-signup' component={DriverSignup} />
      <Route exact path='/rider-signup' component={RiderSignup} />
      <Route exact path='/login' component={Login} />

    </div>
    
  );
}

export default App;