import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { UserContext, UserProvider } from './context/Usercontext.jsx'

createRoot(document.getElementById('root')).render(
  <UserProvider>
    <BrowserRouter>
      <StrictMode>
        <App />
      </StrictMode>
    </BrowserRouter>
  </UserProvider>,
)
