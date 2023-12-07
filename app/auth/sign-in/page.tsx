'use client'
import { useState, useEffect } from 'react';
import { getAuth, sendSignInLinkToEmail, isSignInWithEmailLink, signInWithEmailLink } from 'firebase/auth';
import firebase_app from '@/firebase/config';

const Signin = () => {
  const [email, setEmail] = useState('');

  const auth = getAuth(firebase_app);
  const actionCodeSettings = {
    url: `${process.env.NEXT_PUBLIC_APP_URL}/auth/sign-in`, // Replace with your application URL
    handleCodeInApp: true,
  };

  const sendSignInLink = () => {
    sendSignInLinkToEmail(auth, email, actionCodeSettings)
      .then(() => {
        alert(`Sign-in link sent to ${email}. Check your inbox!`);
        window.localStorage.setItem('emailForSignIn', email);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(`Error: ${errorMessage}`);
      });
  };

  useEffect(() => {
    const completeSignIn = async () => {
      if (isSignInWithEmailLink(auth, window.location.href)) {
        let email = window.localStorage.getItem('emailForSignIn');
        if (!email) {
          email = window.prompt('Please provide your email for confirmation');
        }
        try {
          const result = await signInWithEmailLink(auth, email, window.location.href);
          window.localStorage.removeItem('emailForSignIn');
          const user = result.user;
          console.log('Successfully signed in:', user);
        } catch (error: any) {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error(`Error: ${errorMessage}`);
        }
      }
    };

    completeSignIn();
  }, []); // Run only once when the component mounts

  return (
    <div>
      <h1>Firebase Email Link Authentication</h1>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={sendSignInLink}>Send Sign-In Link</button>
    </div>
  );
};

export default Signin;
