import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { AppProvider } from './context/AppProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <main className="my-page-container">
        <App />
      </main>
    </AppProvider>
  </React.StrictMode>,
)