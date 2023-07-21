import React from 'react';
import HowToBuy from './HowToBuy';
import Payments from './Payments';
import Shipping from './Shipping';

const ComoComprar = () => {
  return (
    <div>
      <h1>Bienvenido a Nuestro E-Commerce</h1>
      <HowToBuy />
      <Payments />
      <Shipping />
    </div>
  );
};

export default ComoComprar;
