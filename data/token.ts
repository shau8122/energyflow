import db  from "@/libs/db";

export const getTokenByMobile= async (mobile: number) => {
  try {
    const token  =  await db.mobileVerificationToken.findUnique({
      where:{
        mobile
      }
    })
    return token;
  } catch (error) {
    return null;
  }
}