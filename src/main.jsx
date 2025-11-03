import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './context/UserContext'

createRoot(document.getElementById('root')).render(
  <UserProvider>
    <BrowserRouter>
      <StrictMode>
        <App />
      </StrictMode>
    </BrowserRouter>
  </UserProvider>,
)
