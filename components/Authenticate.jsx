// pages/index.js

import { useState } from 'react';
import { signIn } from 'next-auth/react';

export default function Home() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');

  const handleSendOTP = async () => {
    // Send the phone number to NextAuth.js for authentication
    await signIn('mobileNumber', { phoneNumber });
  };

  // const handleVerifyOTP = async () => {
  //   // Verify the OTP using NextAuth.js
  //   await signIn('mobileNumber', { phoneNumber, otp });
  // };

  return (
    <div>
      <h1>NextAuth.js with Firebase Phone Authentication</h1>

      {/* Step 1: Enter Phone Number */}
      <div>
        <label>
          Phone Number:
          <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        </label>
        <button onClick={handleSendOTP}>Send OTP</button>
      </div>

      {/* Step 2: Enter OTP */}
      <div>
        <label>
          OTP:
          <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} />
        </label>
        <button onClick={handleVerifyOTP}>Verify OTP</button>
      </div>
    </div>
  );
}
