import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import registerServiceWorker from './registerServiceWorker';

const TODOS = [
  {id: 'b2d18a3b-0981-45c8-8083-f7aceed0c5e0', title: 'Sporting Goods', completed: true},
  {id: 'b2d18a3b-0981-45c8-8083-f7aceed0c5e1', title: ' Goods', completed: true},
  {id: 'b2d18a3b-0981-45c8-8083-f7aceed0c5e2', title: 'Sporg Goods', completed: false}
];

ReactDOM.render(<App todos={TODOS}/>, document.getElementById('root'));
registerServiceWorker();
