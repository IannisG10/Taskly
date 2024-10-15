import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('roots')!).render(
  <StrictMode>
    <Router>
     <App />
    </Router>
  </StrictMode>,
)
