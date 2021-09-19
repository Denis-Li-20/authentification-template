import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

// this private route checks if the user is logged in
// if not - redirects to the login page, thus making /dashboard route dependent on the login information
export default function PrivateRoute({ component: Component, ...rest}) {
  const { currentUser } = useAuth();
  
  return (
    <Route       
      {...rest}
      render={ props => {
        return currentUser ? <Component {...props} /> : <Redirect to='/login' />
      }}
    >

    </Route>
  )
}
