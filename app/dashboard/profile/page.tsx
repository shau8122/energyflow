import { auth } from "@/auth";
import { getUserById } from "@/data/user";
import { redirect } from "next/navigation";
import db from "@/libs/db";
import { ProfileForm } from "./_components/ProfileForm";
import BussinessComp from "./_components/Bussiness";

const ProfilePage = async () => {
  const session = await auth();
  if (!session?.user || !session.user.id) {
    console.log(session?.user, "session:");
    return redirect("/");
  }

  const userDetails = await getUserById(session.user.id);
  const userId = session.user.id;
  const bussinessDetails = await db.bussiness.findFirst({
    where: {
      userId,
    },
  });
  return (
    <div className="my-5 md:mx-5">
      <ProfileForm userDetails={userDetails} />

      <BussinessComp bussinessDetails={bussinessDetails} />
    </div>
  );
};

export default ProfilePage;
