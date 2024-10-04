import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from './pages/Login/index.tsx';
import './index.css';
import Home from './pages/Home/index.tsx';
import Patient from './pages/Patient/index.tsx';
import AddPacient from './pages/AddPacient/index.tsx';
import Navbar from './components/Navbar/index.tsx';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path='/paciente/:id' element={<Patient />}/>
          <Route path='/adicionar_paciente' element={<AddPacient />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
