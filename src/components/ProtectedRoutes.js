import React, { useState, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Axios from 'axios';

const ProtectedRoutes = ({ component: Component }) => {
  const [tokenAuth, setTokenAuth] = useState(false);
  const [token, setToken] = useState(sessionStorage.getItem('token'));

  Axios.defaults.withCredentials = true;

  useEffect(() => {
    setToken(sessionStorage.getItem('token'));

    Axios.get('https://www.test.pinsoutinnovation.com/isAuthorised', {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'x-access-token': token,
      },
    }).then((res, err) => {
      if (err) {
        console.log(err);
      } else {
        // console.log(res.data.isAuth);
        if (res.data.isAuth === true) {
          setTokenAuth(true);
        } else {
          // console.log(res);
        }
      }
    });
  }, [tokenAuth]);

  return (
    <Route
      render={(props) => {
        if (sessionStorage.getItem('loggedIn') === 'true') {
          if (tokenAuth) {
            return <Component />;
          } else {
            <Redirect
              to={{ pathname: '/login', state: { from: props.location } }}
            />;
          }
        } else {
          return (
            <Redirect
              to={{ pathname: '/login', state: { from: props.location } }}
            />
          );
        }
      }}
    />
  );
};

export default ProtectedRoutes;
