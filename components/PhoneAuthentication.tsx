'use client'
import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import "firebase/compat/auth";




const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const PhoneAuthentication = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [verificationId, setVerificationId] = useState(null as any);
  const [error, setError] = useState<string | null>(null);

  const handleSendCode = () => {
    const recaptchaVerifier = new firebase.auth.RecaptchaVerifier('send-code-button', {
      size: 'invisible',
    });

    firebase.auth().signInWithPhoneNumber(phoneNumber, recaptchaVerifier)
      .then((vid) => {
        console.log(vid)
        setVerificationId(vid.verificationId);
        setError(null);
      })
      .catch((err) => {
        console.error(err);
        setError(err.message || 'Failed to send verification code.');
      });
  };

  const handleVerifyCode = () => {
    const credential = firebase.auth.PhoneAuthProvider.credential(verificationId!, verificationCode);

    firebase.auth().signInWithCredential(credential)
      .then((userCredential) => {
        // User signed in successfully
        console.log(userCredential);
      })
      .catch((err) => {
        console.error(err);
        setError(err.message || 'Failed to verify code.');
      });
  };

  return (
    <div className='flex flex-col gap-4 w-1/2'>
      <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
      <button id="send-code-button" onClick={handleSendCode}>Send Code</button>
      <div>{error}</div>
      <input type="text" value={verificationCode} onChange={(e) => setVerificationCode(e.target.value)} />
      <button onClick={handleVerifyCode}>Verify Code</button>
    </div>
  );
};

export default PhoneAuthentication;
