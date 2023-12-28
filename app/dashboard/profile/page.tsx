import { Input } from "@/components/ui/input";
import { ProfileForm } from "./_components/ProfileForm";


const ProfilePage = () => {
  return ( 
    <div className="my-5 md:mx-5">
      <div className="w-full border-2 pb-3 rounded-xl">
        <div className="w-full h-[60px] flex items-center rounded-t-xl bg-blue-500">
          <div className="text-3xl ml-2 font-semibold h-12 w-12 flex justify-center items-center rounded-full bg-white">👤</div>
          <h1 className="text-xl font-semibold text-white ml-2"> Your Profile</h1>
        </div>
          <ProfileForm/>
      </div>
    </div>
   );
}
 
export default ProfilePage;