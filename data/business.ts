import db from '@/libs/db'

export const getBusinessById = async (id: string ) => {
  try {
    const user = await db.bussiness.findUnique({ where: { id } });
    console.log(user)
    console.log("wow")
    return user;
  } catch {
    return null;
  }
};