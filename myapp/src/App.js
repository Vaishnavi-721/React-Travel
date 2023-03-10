import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router ,Routes , Route } from 'react-router-dom'
import Home from './components/pages/Home'
import HeroSection from './components/HeroSection';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
 

function App() {
  return (
     <>
     <Router>
         <Navbar/>
         <Routes>
          <Route index  element ={<div><Home/></div>}/>
          <Route path='hero' element={<HeroSection/>}/>
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
         </Routes>
     </Router>
       
     </>
       
     
  );
}

export default App;
