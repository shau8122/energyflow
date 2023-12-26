"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import GoogleAuthButton from "@/components/GoogleAuthButton";
import Image from "next/image";
import { CircleDashedIcon } from "lucide-react";
import OtpInput from "react-otp-input";
import PhoneInput from "react-phone-input-2";
import { useRouter } from "next/navigation";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";

import { firebaseConfig } from "@/firebase/config";
import MainBottle from "@/public/bottleMain.jpg";
import toast from "react-hot-toast";
import signinbg from "@/public/signinbg.jpg";
import facebookIcon from "@/public/FacebookIcon.svg";
import Carousel from "@/components/Carousel";
import AuthCarousel from "./_components/AuthCarousel";

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const Home = () => {
  // const auth = getAuth(firebase_app);
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [otp, setOtp] = useState("");
  const [ph, setPh] = useState("");

  const [verificationCode, setVerificationCode] = useState("");
  const [verificationId, setVerificationId] = useState(null as any);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const handleSendCode = () => {
    setLoading(true);
    const recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "send-code-button",
      {
        size: "invisible",
      }
    );

    const formatPh = "+" + ph;
    firebase
      .auth()
      .signInWithPhoneNumber(formatPh, recaptchaVerifier)
      .then((vid) => {
        console.log(vid);
        setVerificationId(vid.verificationId);
        setError(null);
        setLoading(false);
        setShowOTP(true);
        toast.success("OTP sended successfully!");
      })
      .catch((err) => {
        console.error(err);
        setError(err.message || "Failed to send verification code.");
        setLoading(false);
      });
  };

  const handleVerifyCode = () => {
    setLoading(true);
    const credential = firebase.auth.PhoneAuthProvider.credential(
      verificationId!,
      otp
    );

    firebase
      .auth()
      .signInWithCredential(credential)
      .then((userCredential) => {
        // User signed in successfully
        sessionStorage.setItem("user", JSON.stringify(userCredential.user));
        setLoading(false);
        toast.success("OTP verified successfully!");
        router.push("/");
      })
      .catch((err) => {
        console.error(err);
        setError(err.message || "Failed to verify code.");
      });
  };
  useEffect(() => {
    const user = sessionStorage.getItem("user");
    if (user && router) {
      router.replace("/");
    }
  }, [router]);

  return (
    <div
      className="relative w-full mt-4 mb-64"
      // style={{
      //   backgroundImage: 'url("/signinbg.jpg")',
      //   backgroundSize: "cover",
      //   backgroundRepeat: "no-repeat",
      //   backgroundPosition: "center",
      // }}
    >
      {/* <div className="hidden w-1/2 h-full  relative  lg:flex justify-center items-center">
        <Image src={signinbg} alt={"signinbg.jpg"} fill style={{
            objectFit: 'cover', // cover, contain, none
          }}  />
      </div> */}
      <div className="">
        <AuthCarousel />
      </div>
      <div className="w-[90%] md:w-[70%] rounded-xl flex flex-col gap-3 p-4 absolute   text-[#0084CB] -translate-y-[50%] z-10 left-[50%] -translate-x-[50%] items-center bg-white shadow-xl border  px-4">
        <h1 className="text-2xl text-center font-semibold">
          {"Sign in "}
          to Enerzyflow
        </h1>
        <div className="w-full flex flex-col lg:flex-row gap-2">
          <div className="w-full lg:w-1/2  flex flex-col items-center justify-center p-2 gap-3">
            {showOTP ? (
              <>
                <div className="w-full flex flex-col gap-6 h-auto">
                  <label
                    htmlFor="otp"
                    className="font-semibold text-xl text-center"
                  >
                    Enter your OTP
                  </label>
                  <div className="flex items-center md:flex-row flex-col   gap-2 justify-center ">
                    <OtpInput
                      value={otp}
                      onChange={setOtp}
                      numInputs={6}
                      renderSeparator={
                        <span className="p-3 text-[#0084CB]">-</span>
                      }
                      renderInput={(props) => <input {...props} />}
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
                      className="bg-[#0084CB] hover:text-[#0084CB] hover:border-2 border-[#0084CB] w-full flex gap-1 items-center justify-center py-4 text-white rounded-xl"
                    >
                      {loading && (
                        <CircleDashedIcon
                          size={20}
                          className="mt-1 animate-spin"
                        />
                      )}
                      <span className="text-lg">Verify OTP</span>
                    </Button>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="w-full flex md:flex-row flex-col justify-between gap-2">
                  <div className="w-full  md:w-1/2 ">
                    <GoogleAuthButton />
                  </div>
                  <div className="w-full  md:w-1/2 ">
                    <button className=" w-full  font-semibold">
                      <div className="flex  justify-center border-2 p-2  gap-3 rounded-xl border-blue-300 items-center">
                        <Image
                          width={30}
                          height={30}
                          className="mr-2"
                          src={facebookIcon}
                          alt="google"
                        />
                        <p className="text-lg">Facebook</p>
                      </div>
                    </button>
                  </div>
                </div>
                <div className="line bg-[#0084CB] h-1 w-full my-2 relative">
                  <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-3">
                    Or
                  </span>
                </div>
             
                  <div className="flex w-full md:flex-row flex-col items-center gap-2 justify-around ">
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
                      className="bg-[#0084CB] w-1/2 mt-6 hover:text-[#0084CB] hover:border-2 border-[#0084CB]  flex gap-1 items-center justify-center py-3 text-white rounded-xl"
                    >
                      {loading && (
                        <>
                          <CircleDashedIcon
                            size={20}
                            className="mt-1 animate-spin"
                          />
                        </>
                      )}
                      <span className="text-lg">Send OTP</span>
                    </Button>
                  </div>
              
              </>
            )}
          </div>
          <div className="w-full hidden lg:block lg:w-1/2 h-[30vh]  relative">
            <Image
              alt=""
              src={signinbg}
              fill
              style={{
                objectFit: "cover", // cover, contain, none
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
