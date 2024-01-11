"use client";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { startTransition, useState } from "react";
import Image from "next/image";
import { CircleDashedIcon } from "lucide-react";
import OtpInput from "react-otp-input";
import PhoneInput from "react-phone-input-2";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
import signinbg from "@/public/signinbg.jpg";
import facebookIcon from "@/public/FacebookIcon.svg";
import AuthCarousel from "../_components/AuthCarousel";
import { signIn } from "next-auth/react";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { login } from "@/action/login";
import SocialAuthButton from "@/components/SocialAuthButton";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [otp, setOtp] = useState("");
  const [ph, setPh] = useState("");
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");
  const handleSendCode = async () => {
    setLoading(true);
    const formatPh = "+" + ph;
   
    axios
      .post("/api/auth/sms", {
        mobile:formatPh
      })
      .then(() => {
        toast.success("successfully sent")
      })
      .catch(() => toast.error("Something went wrong"))
      .finally(() => setLoading(false));
    
  };

  const handleVerifyCode = () => {
    setLoading(true);
    const formatPh = "+" + ph;
    const values = {
      mobile: formatPh,
      otp: otp,
    };
    startTransition(() => {
      login(values, callbackUrl)
        .then((data) => {
          if (data?.error) {
            setOtp("");
            toast.error(data.error);
          } else {
            toast.success("Login successfully!");
          }
        })
        .catch(() => toast.error("Something went wrong"));
    });
  };

  
  return (
    <div className="relative w-full mt-4 mb-64">
      <div className="">
        <AuthCarousel />
      </div>
      <div className="w-[90%] md:w-[70%] rounded-xl flex flex-col gap-3 p-4 absolute   text-white -translate-y-[50%] z-10 left-[50%] -translate-x-[50%] items-center bg-mainColor/20 shadow-xl border  px-4">
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
                        <span className="p-3 text-mainColor">-</span>
                      }
                      renderInput={(props) => <input {...props} />}
                      inputStyle={{
                        width: "100%",
                        border: "1px solid #ccc",
                        padding: "6px",
                        color: "black",
                        borderRadius: "12px",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                        outline: "none",
                        transition: "border-color 0.3s ease-in-out",
                      }}
                    />
                    <Button
                      onClick={handleVerifyCode}
                      className="bg-mainColor hover:text-mainColor hover:border-2 border-mainColor w-full flex gap-1 items-center justify-center py-4 text-white rounded-xl"
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
                <SocialAuthButton/>
                <div className="line bg-mainColor h-1 w-full my-2 relative">
                  <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-mainColor rounded-xl px-3">
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
                        color: "black",
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
                    className="bg-mainColor/80 w-1/2 mt-6 hover:text-mainColor hover:border-2 border-mainColor  flex gap-1 items-center justify-center py-3 text-white rounded-xl"
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
