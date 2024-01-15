import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react';


ReactDOM.createRoot(document.getElementById('root')).render(

  <Auth0Provider
    domain="dev-n52aaknvouq5estx.us.auth0.com"
    clientId="HLvylx0TJpee5mJzUd6vD24mGuPTOcQb"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >

    <App />

  </Auth0Provider>

)
