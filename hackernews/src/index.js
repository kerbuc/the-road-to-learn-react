import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import Calculator from './play.js'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

if (module.hot) {
  const d = new Date();
  console.log("[MHR] " + d.toLocaleTimeString());
  module.hot.accept();
}

registerServiceWorker();
