import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './theme/reset.css'
import './theme/index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
