import  db  from "@/libs/db";

export const getUserByEmail = async (email: string) => {
  try {
    const user = await db.user.findUnique({ where: { email } });

    return user;
  } catch {
    return null;
  }
};

export const getUserById = async (id: string ) => {
  try {

    const user = await db.user.findUnique({ where: { id } });
    return user;
  } catch {
    return null;
  }
};

export const getUserByMobile= async (mobile: number) => {
  try {
    const user = await db.user.findFirst(
        { where: { mobile } }
      );
      
    return user;
  } catch {
    return null;
  }
}