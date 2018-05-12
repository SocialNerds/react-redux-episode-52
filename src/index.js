import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoList from './TodoList';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<TodoList item={{test: 'name'}}/>, document.getElementById('root'));
registerServiceWorker();
