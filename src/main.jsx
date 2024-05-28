import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './UI Pages/Routes/Router'
import AuthProvider from './Authentication/Providers/AuthProvider'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}/>
    </AuthProvider>
    <Toaster toastOptions={{
        style: {
          background: '#cbd5e1',
          color: '#3C3C59'
        }
      }}/>
  </React.StrictMode>,
)
