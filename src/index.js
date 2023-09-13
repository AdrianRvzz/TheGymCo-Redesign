import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import './fonts/HelveticaNowDisplay-Regular.ttf';
import firebaseConfig from './firebase-config.js';
import { FirebaseAppProvider } from 'reactfire';
import { UserProvider } from './UserContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <UserProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    </UserProvider>
  </FirebaseAppProvider>
);

reportWebVitals();
