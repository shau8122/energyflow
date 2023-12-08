// components/GoogleAuthButton.js
import firebase_app from '@/firebase/config'; 
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { GoogleIcon } from './Icons';
import Image from 'next/image';

const GoogleAuthButton = () => {
  const auth = getAuth(firebase_app);
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, new GoogleAuthProvider());
      const user = result.user;
      console.log('Successfully signed in with Google:', user);
    } catch (error:any) {
      console.error('Error signing in with Google:', error.message);
    }
  };

  return (
    <button
      className=" w-full mt-4 font-semibold"
      onClick={signInWithGoogle}
    >
      <div className="flex  justify-center border-2 p-2  rounded-full border-blue-300 items-center">
        <Image  width={25} height={25} className='mr-2' src='/google.png' alt='google'/>
        <p className='text-lg'>Sign in with Google</p>
      </div>
    </button>
  );
};

export default GoogleAuthButton;
