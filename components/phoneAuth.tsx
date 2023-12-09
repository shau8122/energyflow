// import { BsFillShieldLockFill, BsTelephoneFill } from "react-icons/bs";
// import { CgSpinner } from "react-icons/cg";
"use client";
import OtpInput from "react-otp-input";
import { PencilIcon, CircleDashedIcon, MonitorIcon } from "lucide-react";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";
// import { auth } from "./firebase.config";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { toast, Toaster } from "react-hot-toast";

const PhoneAuth = () => {
  const [otp, setOtp] = useState("");
  const [ph, setPh] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [user, setUser] = useState(null);

  // function onCaptchVerify() {
  //   if (!window.recaptchaVerifier) {
  //     window.recaptchaVerifier = new RecaptchaVerifier(
  //       "recaptcha-container",
  //       {
  //         size: "invisible",
  //         callback: (response) => {
  //           onSignup();
  //         },
  //         "expired-callback": () => {},
  //       },
  //       auth
  //     );
  //   }
  // }

  function onSignup() {
    setLoading(true);
    // onCaptchVerify();

    // const appVerifier = window.recaptchaVerifier;

    const formatPh = "+" + ph;
    console.log(formatPh);
    setTimeout(() => {
      setLoading(false);
      setShowOTP(true);
      toast.success("OTP sended successfully!");
    }, 2000);

    // signInWithPhoneNumber(auth, formatPh, appVerifier)
    //   .then((confirmationResult) => {
    //     window.confirmationResult = confirmationResult;
    //     setLoading(false);
    //     setShowOTP(true);
    //     toast.success("OTP sended successfully!");
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     setLoading(false);
    //   });
  }

  // function onOTPVerify() {
  //   setLoading(true);
  //   window.confirmationResult
  //     .confirm(otp)
  //     .then(async (res) => {
  //       console.log(res);
  //       setUser(res.user);
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       setLoading(false);
  //     });
  // }

  return (
    <section className="bg-blue-500 flex items-center justify-center w-1/2 h-1/2">
      <div>
        <Toaster toastOptions={{ duration: 4000 }} />
        <div id="recaptcha-container"></div>
        {user ? (
          <h2 className="text-center text-white font-medium text-2xl">
            👍Login Success
          </h2>
        ) : (
          <div className="w-80 flex flex-col gap-4 rounded-lg p-4">
            {showOTP ? (
              <>
                <div className="bg-white text-emerald-500 w-fit mx-auto p-4 rounded-full">
                  {/* <BsFillShieldLockFill size={30} /> */}
                  <PencilIcon size={30} />
                </div>
                <label
                  htmlFor="otp"
                  className="font-bold text-xl text-white text-center"
                >
                  Enter your OTP
                </label>
                <OtpInput
                  value={otp}
                  onChange={setOtp}
                  numInputs={6}
                  renderSeparator={<span>-</span>}
                  renderInput={(props) => <input {...props} />}
                />
                <button
                  // onClick={onOTPVerify}
                  className="bg-emerald-600 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded"
                >
                  {loading && (
                    <CircleDashedIcon size={20} className="mt-1 animate-spin" />
                  )}
                  <span>Verify OTP</span>
                </button>
              </>
            ) : (
              <>
                <label
                  htmlFor=""
                  className="font-bold text-xl text-white text-center"
                >
                  Sign in with phone number
                </label>
                <PhoneInput
                   inputProps={{
                    style: {
                      width: "100%",
                      border: '1px solid #ccc',
                      padding: '8px',
                      borderRadius: '4px',
                      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                      outline: 'none',
                      transition: 'border-color 0.3s ease-in-out',
                    },
                  }}
                  country={"in"}
                  value={ph}
                  onChange={setPh}
                />

                <button
                  onClick={onSignup}
                  className="bg-emerald-600 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded"
                >
                  {loading && (
                    <>
                      <CircleDashedIcon
                        size={20}
                        className="mt-1 animate-spin"
                      />
                    </>
                  )}
                  <span>Send code via SMS</span>
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default PhoneAuth;
