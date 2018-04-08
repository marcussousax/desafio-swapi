import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Containers/App';
import registerServiceWorker from './registerServiceWorker';

import "./assets/source-sans.css";

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
