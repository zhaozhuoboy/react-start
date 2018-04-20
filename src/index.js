import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style/base';

// import promis from 'es6-promise';
// promis.polyfill();
if (module.hot) {
    module.hot.accept()
}


ReactDOM.render(<App/>,document.getElementById('app'));