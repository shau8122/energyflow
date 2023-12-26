import Image from "next/image";
import signinbg from "@/public/signinbg.jpg";

const AuthImage = () => {
  return ( 
    <div className="w-full h-[40vh] md:h-[60vh]">
      <Image src={signinbg} alt="auth image" fill style={{
          objectFit: 'cover', // cover, contain, none
        
      }} />
    </div>
   );
}
 
export default AuthImage;