// components/GoogleAuthButton.js

import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { firebase_app } from '@/firebase/config';

import Image from 'next/image';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

interface GoogleAuthButtonProps {
  onClose?: () => void;
}

const GoogleAuthButton:React.FC<GoogleAuthButtonProps> = ({
  onClose,
}) => {
  const auth = getAuth(firebase_app);
  const router = useRouter()
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, new GoogleAuthProvider());
      const user = result.user;
      sessionStorage.setItem('user', JSON.stringify(user));
      toast.success('Login successfully!');
      router.push('/')
      window.location.reload();
      if(onClose)
      onClose()
    } catch (error:any) {
      console.error('Error signing in with Google:', error.message);
    }
  };

  return (
    <button className="w-full mt-4 font-semibold" onClick={signInWithGoogle}>
      <div className="flex justify-center border-2 p-2 rounded-xl border-blue-300 items-center">
        <Image width={25} height={25} className="mr-2" src="/google.png" alt="google" />
        <p className="text-lg">Google</p>
      </div>
    </button>
  );
};

export default GoogleAuthButton;
