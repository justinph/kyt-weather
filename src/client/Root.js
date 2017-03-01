
import React from 'react';
import Router from 'react-router/lib/Router';
import browserHistory from 'react-router/lib/browserHistory';
import routes from '../routes';

// We need a Root component for React Hot Loading.
function Root() {
  //console.log('root arg', store);
  const store = 'goober';
  return (
    <Router history={browserHistory} routes={routes(store)} />
  );
}

export default Root;
