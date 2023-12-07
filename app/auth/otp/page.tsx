'use client'
import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import firebase_app from '@/firebase/config';
import { useRouter } from 'next/navigation';
import GoogleAuthButton from '@/components/GoogleAuthButton';

const ConfirmEmail = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [error, setError] = useState(null);
  const router= useRouter()

  const auth = getAuth(firebase_app);

  const sendVerificationEmail = async () => {
    try {
      if(auth.currentUser){
        await sendEmailVerification(auth.currentUser);
        alert('Verification email sent. Check your inbox.');
      }else{
        router.push('/auth/sign-up');
      }
    } catch (error:any) {
      setError(error.message);
    }
  };

  const confirmEmailWithOtp = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, otp);
      alert('Email confirmed successfully!');
    } catch (error:any) {
      setError(error.message);
    }
  };

  return (
    <div className='flex flex-col'>
      <h1>Confirm Email with OTP</h1>
      <GoogleAuthButton/>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>OTP:</label>
        <input
          type="text"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />
      </div>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <div>
        <button onClick={sendVerificationEmail}>Send Verification Email</button>
        <button onClick={confirmEmailWithOtp}>Confirm Email with OTP</button>
      </div>
    </div>
  );
};

export default ConfirmEmail;
