// components/Footer.tsx
'use client'
import React, { useEffect,useState } from 'react';
import Counter from './Counter';
import AuthenticationModal from '@/components/AuthenticationModal';
import { User, getAuth, onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'next/navigation';


const Footer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter()
  useEffect(() => {
    const user = sessionStorage.getItem('user');
    const isAlreadyOpen = sessionStorage.getItem('isAlreadyOpen');
    if (!user && !isAlreadyOpen) {
      setIsOpen(true);
      sessionStorage.setItem('isAlreadyOpen', 'true');
    }
  }, [])
  
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
