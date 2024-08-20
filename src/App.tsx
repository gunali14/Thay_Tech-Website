import React from 'react';
import Navbar from './components/navbar/Navbar';
import HomePage from './components/home/HomePage';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SoftwareDeveloper from './components/service/SoftwareDeveloper';



const App: React.FC = () => {
  return (
    <div>
    <Router>
     <Navbar/>
    <Routes>
     <Route path='*' element={<HomePage />} />
     <Route path='/SoftwareDeveloper' element={<SoftwareDeveloper />} />
     </Routes>
   </Router>
  
 </div>
  );
};

export default App;
