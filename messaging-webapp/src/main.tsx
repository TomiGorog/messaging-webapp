import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Navigation from './components/Navigation'
import { AuthProvider } from './contexts/authContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <Navigation />
      <App />
    </AuthProvider>
  </React.StrictMode>,
)
