import React from 'react';
import Navbar from './components/navbar/Navbar';
import HomePage from './components/home/HomePage';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SoftwareDeveloper from './components/service/SoftwareDeveloper';
import ProductDeveloper from './components/service/ProductDeveloper';
import Footer from './components/footer/Footer';
import InfrastructureOutsourcing from './components/service/InfrastructureOutsourcing';
import Review from './components/service/Review';



const App: React.FC = () => {
  return (
    <div>
    <Router>
     <Navbar/>
    <Routes>
     <Route path='*' element={<HomePage />} />
     <Route path='/SoftwareDeveloper' element={<SoftwareDeveloper />} />
     <Route path='/ProductDeveloper' element={<ProductDeveloper />} />
     <Route path='/InfrastructureOutsourcing' element={<InfrastructureOutsourcing />} />
     <Route path='/Review' element={<Review />} />
     </Routes>
     <Footer/>
   </Router>

  
 </div>
  );
};

export default App;
