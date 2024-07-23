import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
import { Button } from "./ui/button";
import facebookIcon from "@/public/FacebookIcon.svg";

interface GoogleAuthButtonProps {
  onClose?: () => void;
}

const SocialAuthButton: React.FC<GoogleAuthButtonProps> = ({ onClose }) => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");
  const handleClick = (provider: "google" | "facebook") => {
    signIn(provider, {
      redirectTo: callbackUrl || DEFAULT_LOGIN_REDIRECT,
    });
  };
  return (
    <div className="w-full flex md:flex-row flex-col justify-between gap-2">
      <div className="w-full  md:w-1/2 ">
        <Button
          className="w-full font-semibold"
          onClick={() => handleClick("google")}
        >
          <div className="flex w-full justify-center border-2 p-2 rounded-xl border-blue-300 items-center">
            <Image
              width={25}
              height={25}
              className="mr-2"
              src="/google.png"
              alt="google"
            />
            <p className="text-lg">Google</p>
          </div>
        </Button>
      </div>
      <div className="w-full  md:w-1/2 ">
        <Button
          onClick={() => handleClick("facebook")}
          className=" w-full  font-semibold"
        >
          <div className="flex w-full  justify-center border-2 p-2  gap-3 rounded-xl border-blue-300 items-center">
            <Image
              width={30}
              height={30}
              className="mr-2"
              src={facebookIcon}
              alt="google"
            />
            <p className="text-lg">Facebook</p>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default SocialAuthButton;
