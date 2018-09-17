import React from 'react';
import ReactDOM from 'react-dom';

const title = 'My Minimal React Webpack Babel Setup';

import Test from "./Root"

const App = ({
  title
}) => {
  return <Test/>
}

ReactDOM.render( <App/> ,
  document.getElementById('app')
);

module.hot.accept();