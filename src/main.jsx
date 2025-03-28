import { StrictMode } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Rocket } from 'lucide-react';
import UserDashboard from './components/UserDashboard.jsx';

createRoot(document.getElementById('root')).render(

  <StrictMode>
  <BrowserRouter>

  <Routes>
    <Route path='/' element={<App/>}/>
    <Route path="/user-dashboard" element={<UserDashboard />} />
  </Routes>
  </BrowserRouter>
    
  </StrictMode>
  
)
