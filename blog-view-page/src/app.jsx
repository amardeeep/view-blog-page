import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Nav from './nav'
import Aside from './aside'
import Footer from './footer'
import Main from './main'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav/>
    <Main/>
    <Aside/>
    <Footer/>
  </StrictMode>,
)
