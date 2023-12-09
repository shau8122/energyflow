"use client";

import Modal from "./Modal";

import * as z from "zod";
// import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import Link from "next/link";
// import toast from "react-hot-toast";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormLabel,
  FormMessage,
  FormItem,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// import signIn from "@/firebase/auth/signin";
// import signUp from "@/firebase/auth/signup";
import { useState } from "react";
import GoogleAuthButton from "./GoogleAuthButton";
import Image from "next/image";
import { CircleDashedIcon, PencilIcon } from "lucide-react";
import OtpInput from "react-otp-input";
import PhoneInput from "react-phone-input-2";
import toast from "react-hot-toast";
import { getAuth } from "firebase/auth";
import firebase_app from "@/firebase/config";
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

interface AuthenticationModalProps {
  isOpen: boolean;
  onClose: () => void;
}
const formSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(8),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
const AuthenticationModal: React.FC<AuthenticationModalProps> = ({
  isOpen,
  onClose,
}) => {
  const auth = getAuth(firebase_app);
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [otp, setOtp] = useState("");
  const [ph, setPh] = useState("");

  const [ForWhat, setForWhat] = useState<"signin" | "signup">("signup");
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values.email, values.password);
    // try {
    //   const response = await axios.post("/api/courses", values);
    //   router.push(`/teacher/courses/${response.data.id}`);
    //   toast.success("Course created");
    // } catch {
    //   toast.error("Something went wrong");
    // }
    // const { result, error } = await signUp(values.email, values.password);

    // if (error) {
    //   return console.log(error);
    // }

    // // else successful
    // console.log(result);
    return router.push("/");
  };
  const [verificationCode, setVerificationCode] = useState('');
  const [verificationId, setVerificationId] = useState(null as any);
  const [error, setError] = useState<string | null>(null);

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
      }).finally(() => {
        setLoading(false)
      });
  };

  const handleVerifyCode = () => {
    setLoading(true);
    const credential = firebase.auth.PhoneAuthProvider.credential(verificationId!, otp);

    firebase.auth().signInWithCredential(credential)
      .then((userCredential) => {
        // User signed in successfully
        console.log(userCredential);
        setLoading(false);
        toast.success("OTP verified successfully!");
        router.refresh()
      })
      .catch((err) => {
        console.error(err);
        setError(err.message || 'Failed to verify code.');
      });
  };
  
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="w-full bg-[#edf7fc] text-[#50b8e7] p-2">
        <h1 className="text-2xl text-center font-semibold">
          {"Sign in "}
          to Enerzyflow
        </h1>
        {/* <p className="text-sm text-slate-600">
          What would you like to name your course? Don&apos;t worry, you can change this later.
        </p> */}
        {/* first for google */}

        {/* second for email and password */}
        <div className="w-full mt-4 flex justify-between gap-2">
        <div className="w-1/2 ">
          <GoogleAuthButton />
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
    </Modal>
  );
};

export default AuthenticationModal;
