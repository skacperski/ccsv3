import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Awesomic from './awesomic/Awesomic.jsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Awesomic />
  </StrictMode>,
)
