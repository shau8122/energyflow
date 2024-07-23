"use client";

import Modal from "./Modal";

import { Button } from "@/components/ui/button";
import { startTransition, useState } from "react";
import { CircleDashedIcon } from "lucide-react";
import OtpInput from "react-otp-input";
import PhoneInput from "react-phone-input-2";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
import SocialAuthButton from "./SocialAuthButton";

import { login } from "@/action/login";

interface AuthenticationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AuthenticationModal: React.FC<AuthenticationModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [otp, setOtp] = useState("");
  const [ph, setPh] = useState("");
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");

  const handleSendCode = async () => {
    setLoading(true);
    toast.error("Please use other options. There is a server problem");

    const formatPh = "+" + ph;
    // await axios
    //   .post("/api/auth/sms", {
    //     mobile: formatPh,
    //   })
    //   .then((res) => {
    //     if (res.status === 200) {
    //       setShowOTP(true);
    //       toast.success("OTP sendt successfully!");
    //     } else {
    //       toast.error("Failed to send OTP!");
    //     }
    //   });
    setLoading(false);
  };

  const handleVerifyCode = () => {
    setLoading(true);
    const values = {
      mobile: parseInt(ph),
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
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="w-full bg-[#edf7fc] text-[#50b8e7] p-2">
        <h1 className="text-2xl text-center font-semibold">
          {"Sign in "}
          to Enerzyflow
        </h1>
        <div className="w-full mt-4 flex justify-between gap-2">
          <SocialAuthButton />
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
              <h2 className="text-xl text-center text-[#50b8e7] font-semibold">
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
    </Modal>
  );
};

export default AuthenticationModal;
