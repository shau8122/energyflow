"use client";



import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import GoogleAuthButton from "@/components/GoogleAuthButton";
import Image from "next/image";
import { CircleDashedIcon } from "lucide-react";
import OtpInput from "react-otp-input";
import PhoneInput from "react-phone-input-2";
import { useRouter } from "next/navigation";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

import { firebaseConfig } from "@/firebase/config";
import toast from "react-hot-toast";

// Initialize Firebase
firebase.initializeApp(firebaseConfig)



const Home = () => {
  // const auth = getAuth(firebase_app);
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [otp, setOtp] = useState("");
  const [ph, setPh] = useState("");

  const [verificationCode, setVerificationCode] = useState('');
  const [verificationId, setVerificationId] = useState(null as any);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter()
  const handleSendCode = () => {
    setLoading(true);
    const recaptchaVerifier = new firebase.auth.RecaptchaVerifier('send-code-button', {
      size: 'invisible',
    });

    const formatPh = "+" + ph;
    firebase.auth().signInWithPhoneNumber(formatPh, recaptchaVerifier)
      .then((vid) => {
        console.log(vid)
        setVerificationId(vid.verificationId);
        setError(null);
        setLoading(false);
        setShowOTP(true);
        toast.success("OTP sended successfully!");
      })
      .catch((err) => {
        console.error(err);
        setError(err.message || 'Failed to send verification code.');
        setLoading(false);
      })
  };

  const handleVerifyCode = () => {
    setLoading(true);
    const credential = firebase.auth.PhoneAuthProvider.credential(verificationId!, otp);

    firebase.auth().signInWithCredential(credential)
      .then((userCredential) => {
        // User signed in successfully
        sessionStorage.setItem('user', JSON.stringify(userCredential.user))
        setLoading(false);
        toast.success("OTP verified successfully!");
        router.push('/')
      })
      .catch((err) => {
        console.error(err);
        setError(err.message || 'Failed to verify code.');
      });
  };
  useEffect(() => {
    const user = sessionStorage.getItem('user');
    if (user && router) {
      router.replace('/')
    }
  }, [router])
  
  return (
    <div className="flex justify-around items-center h-[80vh] mt-10 ">
      <div className="hidden w-1/2 h-full  lg:flex justify-center items-center">
      <Image
            src="/bottleMain.jpg"
            width={1000}
            height={500}
            alt={"bottle1"}
      />
      </div>
      <div className="
      rounded-xl
  
      bg-[#edf7fc]
      px-4 
      pb-4
      pt-5 
      text-left 
      shadow-md
      transition-all
      w-full
      sm:my-8 
      sm:w-full 
      sm:max-w-lg 
      sm:p-6
      ">

      <div className="w-full bg-[#edf7fc] text-[#50b8e7] p-2">
        <h1 className="text-2xl text-center font-semibold">
          {"Sign in "}
          to Enerzyflow
        </h1>
        <div className="w-full mt-4 flex justify-between gap-2">
        <div className="w-1/2 ">
          <GoogleAuthButton/>
        </div>
        <div className="w-1/2">
          <button className=" w-full mt-4 font-semibold">
            <div className="flex  bg-blue-500 text-white justify-center border-2 p-2  rounded-xl border-blue-300 items-center">
              <Image
                width={25}
                height={25}
                className="mr-2"
                src="/google.png"
                alt="google"
              />
              <p className="text-lg">Facebook</p>
            </div>
          </button>
        </div>
        </div>
        
        <div className="line bg-[#50b8e7] h-1 w-full my-9 relative">
          <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#edf7fc] px-3">
            Or
          </span>
        </div>
        <div className="w-full flex flex-col gap-6 h-auto">
          {showOTP ? (
            <>
              <label
                htmlFor="otp"
                className="font-semibold text-xl text-center"
              >
                Enter your OTP
              </label>
             
              <OtpInput
                  value={otp}
                  onChange={setOtp}
                  numInputs={6}
                  renderSeparator={<span className="p-3 text-[#50b8e7]">-</span>}
                  renderInput={(props) => <input  {...props} />}
                  inputStyle={{
                    width: "100%",
                    border: "1px solid #ccc",
                    padding: "6px",
                    borderRadius: "12px",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                    outline: "none",
                    transition: "border-color 0.3s ease-in-out",
                  }}
                />
              <Button
                onClick={handleVerifyCode}
                className="bg-[#50b8e7] hover:text-[#50b8e7] hover:border-2 border-[#50b8e7] w-full flex gap-1 items-center justify-center py-2.5 text-white rounded-xl"
              >
                {loading && (
                  <CircleDashedIcon size={20} className="mt-1 animate-spin" />
                )}
                <span className="text-lg">Verify OTP</span>
              </Button>
            </>
          ) : (
            <>
              <h2
                className="text-xl text-center text-[#50b8e7] font-semibold"
              >
                Sign in with phone number
              </h2>
              <PhoneInput
                inputProps={{
                  style: {
                    width: "100%",
                    border: "1px solid #ccc",
                    padding: "8px",
                    borderRadius: "12px",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                    outline: "none",
                    transition: "border-color 0.3s ease-in-out",
                  },
                }}
                country={"in"}
                value={ph}
                onChange={setPh}
              />

              <Button
                onClick={handleSendCode}
                id="send-code-button"
                className="bg-[#50b8e7] hover:text-[#50b8e7] hover:border-2 border-[#50b8e7] w-full flex gap-1 items-center justify-center py-3 text-white rounded-xl"
              >
                {loading && (
                  <>
                    <CircleDashedIcon size={20} className="mt-1 animate-spin" />
                  </>
                )}
                <span className="text-lg">Send code via SMS</span>
              </Button>
            </>
          )}
        </div>
      </div>
      </div>
    </div>
  );
};

export default Home;
