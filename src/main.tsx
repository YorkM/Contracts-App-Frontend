import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { ContractsApp } from './ContractsApp';

import './index.css';
import { Provider } from 'react-redux';
import { store } from './store/store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={ store }>
      <BrowserRouter>
        <ContractsApp />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
