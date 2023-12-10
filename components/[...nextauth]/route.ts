// import { compare } from 'bcrypt';
// import NextAuth, { AuthOptions } from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import GithubProvider from 'next-auth/providers/github';
// import GoogleProvider from 'next-auth/providers/google';
// import { PrismaAdapter } from '@auth/prisma-adapter';

// import prismadb from '@/libs/prismadb';
// import { sendOTP, verifyOTP } from '@/libs/firebaseAuth';
// export const authOptions: AuthOptions = {
//   adapter: PrismaAdapter(prismadb),
//   providers: [
//     GithubProvider({
//       clientId: process.env.GITHUB_CLIENT_ID as string,
//       clientSecret: process.env.GITHUB_CLIENT_SECRET as string
//     }),
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID as string,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
//     }),
//     CredentialsProvider({
//       name: 'credentials',
//       credentials: {
//         email: { label: 'email', type: 'text' },
//         password: { label: 'password', type: 'password' }
//       },
//       async authorize(credentials) {
//         if (!credentials?.email || !credentials?.password) {
//           throw new Error('Invalid credentials');
//         }
//         const user = await prismadb.user.findUnique({
//           where: {
//             email: credentials.email
//           }
//         });
//         if (!user || !user?.hashedPassword) {
//           throw new Error('Invalid credentials');
//         }

//         const isCorrectPassword = await compare(
//           credentials.password,
//           user.hashedPassword
//         );

//         if (!isCorrectPassword) {
//           throw new Error('Invalid credentials');
//         }
//         return user;
//       }
//     }),
//   ],
//   debug: process.env.NODE_ENV === 'development',
//   session: {
//     strategy: "jwt",
//   },
//   secret: process.env.NEXTAUTH_SECRET,
// };

// const handler = NextAuth(authOptions);

// export { handler as GET, handler as POST };

// // CredentialsProvider({
// //   // The name to display on the sign-in form (e.g., 'Sign in with...')
// //   name: 'mobileNumber',
// //   credentials: {
// //     phoneNumber: { label: 'Phone Number', type: 'text' },
// //     otp: { label: 'One-Time Password (OTP)', type: 'text' },
// //   },
// //   async authorize(credentials){
// //     try {
// //       // Send OTP and verify it using Firebase
// //       const verificationId = await sendOTP(`+${credentials?.phoneNumber}`);
// //       // const user = await verifyOTP(verificationId, credentials?.otp);

// //       // Return the user if the OTP verification is successful
// //       // if (user) {
// //       //   return Promise.resolve(user);
// //       // } else {
// //       //   return Promise.resolve(null);
// //       return Promise.resolve("what is your name")
// //       // }
// //     } catch (error) {
// //       console.error('Error during Firebase phone authentication:', error);
// //       return Promise.resolve(null);
// //     }
// //   },
// // }),