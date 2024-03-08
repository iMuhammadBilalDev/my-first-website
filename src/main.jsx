import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import Layout from './components/Layout.jsx';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import Login from './components/Login/Login.jsx';
// const router=createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Layout />}>
//     <Route path='' element={<Home/>} />
//     <Route path='/about' element={<About/>} />
//     <Route path='/contact' element={<Contact/>} />

//     </Route>
//   )
// )
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/login" element={<Login/>} />

        </Route>
      </Routes>
    </BrowserRouter>
    <App />
  </React.StrictMode>,
);
