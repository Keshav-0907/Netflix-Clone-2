import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import NetflixPop from './Pages/NetflixPop';
import Footer from './Pages/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar/>
    <Home/>
    <NetflixPop/>
    <Footer/>
  </React.StrictMode>
);
