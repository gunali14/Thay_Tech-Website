import React from 'react';
import Navbar from './components/navbar/Navbar';
import HomePage from './components/home/HomePage';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ProductDeveloper from './components/service/ProductDeveloper';
import Footer from './components/footer/Footer';
import InfrastructureOutsourcing from './components/service/InfrastructureOutsourcing';

import HomeService from './components/service/HomeService';

import SlideShow from './components/service/SlideShow';
import HeaderService from './components/service/HeaderService';
import SoftwareDeveloper from './components/service/SoftwareDeveloper';
import Software from './components/service/Software';
import SoftwareTraining from './components/service/SoftwareTraining';
import CloudSupport from './components/service/CloudSupport';








const App: React.FC = () => {
  return (
    <div>
    <Router>
     <Navbar/>
    <Routes>
     <Route path='*' element={<HomePage />} />
     <Route path='/SlideShow' element={<SlideShow/>} />
     <Route path='/SoftwareDeveloper' element={<SoftwareDeveloper/>} />
     <Route path='/Software' element={<Software/>} />
     <Route path='/InfrastructureOutsourcing' element={<InfrastructureOutsourcing />} />
     <Route path='/HomeService' element={<HomeService/>} />
     <Route path='/HeaderService' element={<HeaderService/>} />
     <Route path='/SoftwareTraining' element={<SoftwareTraining/>} />
     <Route path='/CloudSupport' element={<CloudSupport/>} />

     </Routes>
     <Footer/>
   </Router>

  
 </div>
  );
};

export default App;
