import React from 'react';
import Navbar from './components/navbar/Navbar';
import HomePage from './components/home/HomePage';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ProductDeveloper from './components/service/ProductDeveloper';
import Footer from './components/footer/Footer';
import InfrastructureOutsourcing from './components/service/InfrastructureOutsourcing';

import HomeService from './components/service/HomeService';

import SlideShow from './components/service/SlideShow';







const App: React.FC = () => {
  return (
    <div>
    <Router>
     <Navbar/>
    <Routes>
     <Route path='*' element={<HomePage />} />
     <Route path='/SlideShow' element={<SlideShow/>} />
     <Route path='/ProductDeveloper' element={<ProductDeveloper />} />
     <Route path='/InfrastructureOutsourcing' element={<InfrastructureOutsourcing />} />
     <Route path='/HomeService' element={<HomeService/>} />

     </Routes>
     <Footer/>
   </Router>

  
 </div>
  );
};

export default App;
