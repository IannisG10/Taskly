import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import { TaskProvider } from './hook/TaskContext.tsx'

createRoot(document.getElementById('roots')!).render(
  <StrictMode>
    <Router>
      <TaskProvider>
        <App />
      </TaskProvider>
    </Router>
  </StrictMode>,
)
