import React from 'react';
import ReactDOM from 'react-dom';
import './frontend/css/index.css';
import App from './frontend/components/App';
import registerServiceWorker from './frontend/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
