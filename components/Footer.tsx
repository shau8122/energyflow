// components/Footer.tsx

import React from 'react';
import Counter from './Counter';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#50b8e7] p-5 text-center">
    
      <div className="mx-auto max-w-screen-md">
        <Counter />
        <p>&copy; {new Date().getFullYear()} Energyflow. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
