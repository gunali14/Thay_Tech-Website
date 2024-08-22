import React from 'react';
import SoftwareDeveloper from './SoftwareDeveloper';
import ProductDeveloper from './ProductDeveloper';


const ServicePage: React.FC = () => {
  return (
    <div className="homepage">
    <SoftwareDeveloper/>
    <ProductDeveloper/>
    </div>
  );
};

export default ServicePage;