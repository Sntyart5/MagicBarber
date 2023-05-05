import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './Home/Home'
import 'bootstrap/dist/css/bootstrap.min.css' 
import 'bootstrap/dist/js/bootstrap.min.js' 
import 'bootstrap-icons/font/bootstrap-icons.css'



import { Agenda } from './assets/Agenda/Agenda'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home/>
    <Agenda/>
  </React.StrictMode>,
)
