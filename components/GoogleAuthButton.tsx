// components/GoogleAuthButton.js
import firebase_app from '@/firebase/config'; 
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';

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
    <button onClick={signInWithGoogle}>
      Sign in with Google
    </button>
  );
};

export default GoogleAuthButton;
