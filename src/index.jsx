import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './Styles/DarkTheme.css'
import './Styles/QueryMobile.css'
import './Styles/Loader.css'
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ContextProvider from './Components/utils/global.context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
    <BrowserRouter>
      <ContextProvider>
        <App/>
      </ContextProvider>
    </BrowserRouter>
  //</React.StrictMode>
);


