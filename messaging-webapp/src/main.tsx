import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Navigation from './components/Navigation'
import { AuthProvider } from './contexts/authContext'
import './index.css'
import { ScopedCssBaseline } from '@mui/material'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ScopedCssBaseline>
      <AuthProvider>
        <Navigation />
        <App />
      </AuthProvider>
    </ScopedCssBaseline>
  </React.StrictMode>,
)
