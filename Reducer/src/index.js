import React from 'react';
import ReactDOM from 'react-dom/client';

import './css/index.css';
import App from './App';
import { AuthContextProvider }  from './store/authContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AuthContextProvider><App /></AuthContextProvider>);
