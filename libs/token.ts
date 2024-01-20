import crypto from "crypto";
// import { v4 as uuidv4 } from "uuid";

import  db  from "@/libs/db";
import { getTokenByMobile } from "@/data/token";
// import { getTwoFactorTokenByEmail } from "@/data/twoFactorToken";
// import { getPasswordResetTokenByEmail } from "@/data/passwordResetToken";
// import { getVerificationTokenByEmail } from "@/data/verificationToken";

// export const generateTwoFactorToken = async (email: string) => {
//   const token = crypto.randomInt(100_000, 1_000_000).toString();
//   const expires = new Date(new Date().getTime() + 5 * 60 * 1000);

//   const existingToken = await getTwoFactorTokenByEmail(email);

//   if (existingToken) {
//     await db.twoFactorToken.delete({
//       where: {
//         id: existingToken.id,
//       }
//     });
//   }

//   const twoFactorToken = await db.twoFactorToken.create({
//     data: {
//       email,
//       token,
//       expires,
//     }
//   });

//   return twoFactorToken;
// }

// export const generatePasswordResetToken = async (email: string) => {
//   const token = uuidv4();
//   const expires = new Date(new Date().getTime() + 3600 * 1000);

//   const existingToken = await getPasswordResetTokenByEmail(email);

//   if (existingToken) {
//     await db.passwordResetToken.delete({
//       where: { id: existingToken.id }
//     });
//   }

//   const passwordResetToken = await db.passwordResetToken.create({
//     data: {
//       email,
//       token,
//       expires
//     }
//   });

//   return passwordResetToken;
// }

export const generateVerificationToken = async (mobile: number) => {
  // const token = uuidv4();
  const token = crypto.randomInt(100_000, 1_000_000).toString();
  const expires = new Date(new Date().getTime() + 3600 * 1000);

  const existingToken = await getTokenByMobile(mobile);
  if (existingToken) {
    await db.mobileVerificationToken.delete({
      where: {
        id: existingToken.id,
      },
    });
  }

  const verficationToken = await db.mobileVerificationToken.create({
    data: {
      mobile,
      token,
      expires,
    }
  });
  if(!verficationToken){
    return null
  }

  return token;
};