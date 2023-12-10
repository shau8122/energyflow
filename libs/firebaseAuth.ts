// firebaseAuth.js

import firebase from '@/firebase/config';
import 'firebase/compat/auth';
// Ensure you import the compatibility module for authentication

export async function sendOTP(phoneNumber: string) {
  // Ensure recaptcha-container is in the DOM before creating appVerifier
  // const appVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
  //   size: 'invisible',
  //   callback: (response:any) => {
  //     // reCAPTCHA solved, allow signInWithPhoneNumber.
  //     console.log('reCAPTCHA solved:', response);
  //   },
  //   'expired-callback': () => {
  //     // Handle expiration.
  //     console.error('reCAPTCHA expired');
  //   },
  // });

  // try {
  //   const confirmationResult = await firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier);
  //   return confirmationResult.verificationId;
  // } catch (error) {
  //   console.error('Error sending OTP:', error);
  //   throw error; // You might want to handle this error in your application
  // }
}

export async function verifyOTP(verificationId: any, otp: string) {
  // try {
  //   const credential = firebase.auth.PhoneAuthProvider.credential(verificationId, otp);
  //   const userCredential = await firebase.auth().signInWithCredential(credential);
  //   return userCredential.user;
  // } catch (error) {
  //   console.error('Error verifying OTP:', error);
  //   throw error; // You might want to handle this error in your application
  // }
}
