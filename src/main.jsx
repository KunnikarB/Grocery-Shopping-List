import ReactDOM from 'react-dom/client';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
  domain='dev-65bai1l8zmi1ebli.us.auth0.com'
  clientId='JqQaTQ0ALTb6s0dt0IQWBDYDxKSoSU6D'
  authorizationParams={{ redirect_uri: window.location.origin }}>
  <App />
</Auth0Provider>
);