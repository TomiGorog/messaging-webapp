import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Navigation from './components/Navigation'
import { AuthProvider } from './contexts/authContext'
import './index.css'
import { ScopedCssBaseline, ThemeProvider, createTheme } from '@mui/material'


// const theme = createTheme({
//   breakpoints: {
//     values: {
//       mobile: 0,
//       tablet: 640,
//       laptop: 1024,
//       desktop: 1280,
//     },
//   },
// });
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <ScopedCssBaseline> */}
    {/* <ThemeProvider theme={theme}> */}
    <AuthProvider>
      {/* <Navigation /> */}
      <App />
    </AuthProvider>
    {/* </ThemeProvider> */}
    {/* </ScopedCssBaseline> */}
  </React.StrictMode>,
)
