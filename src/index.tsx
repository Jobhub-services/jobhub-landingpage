import React from 'react';
import ReactDOM from 'react-dom';
import App from '@/App';

import { Provider as StoreProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '@/config/store';

import reportWebVitals from '@/reportWebVitals';

const { PUBLIC_URL } = process.env;

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <PersistGate persistor={persistor} loading={<div>Loading...</div>}>
        <App basename={PUBLIC_URL} />
      </PersistGate>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
