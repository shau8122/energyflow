// components/Footer.tsx
'use client'
import React, { useEffect,useState } from 'react';
import Counter from './Counter';
import AuthenticationModal from '@/components/AuthenticationModal';
import { getAuth } from 'firebase/auth';
import firebase_app from '@/firebase/config';

const Footer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const auth=getAuth(firebase_app)
  useEffect(() => {
    // Check if the modal has been shown before
    const hasSignupModalBeenShown = localStorage.getItem(
      "hasSignupModalBeenShown"
    );

    const user = auth.currentUser
    if(!user){
      setIsOpen(true);
      localStorage.setItem("hasModalBeenShown", "true");
    }
    if(!hasSignupModalBeenShown){
      setIsOpen(false);
    }
  }, []);

  const onClose = () => {
    setIsOpen(false);
  };
  return (
    <footer className="bg-[#50b8e7] p-5 text-center">
      <div className="mx-auto max-w-screen-md">
        <Counter />
        <p>&copy; {new Date().getFullYear()} Energyflow. All rights reserved.</p>
      </div>
      <AuthenticationModal isOpen={isOpen} onClose={onClose} />
    </footer>
  );
};

export default Footer;
