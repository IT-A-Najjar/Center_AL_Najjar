import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Center from "./components/center";
import Example from "./components/Example";

if (document.getElementById('products')) {
    ReactDOM.render(<Center />, document.getElementById('products'));
}
