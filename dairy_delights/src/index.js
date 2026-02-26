import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import reportWebVitals from './reportWebVitals';

const initialOptions = {
  "client-id": "sb",   // sandbox shortcut client ID
  currency: "USD",
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <PayPalScriptProvider options={initialOptions}>
      <App />
    </PayPalScriptProvider>
  </React.StrictMode>
);

reportWebVitals();
