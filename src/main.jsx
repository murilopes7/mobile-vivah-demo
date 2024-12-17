import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
//import App from './App.jsx'

import BeautySalonPage  from './BeautySalonPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BeautySalonPage />
  </StrictMode>,
)
