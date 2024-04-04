import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Data from "./Components/datacomponent"
import AppClass from "./AppClass";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App  Data={Data}/>
    <AppClass  Data={Data}/>  
    {/* change the above line - for interchaning between App and AppClass */}
  </React.StrictMode>
);
