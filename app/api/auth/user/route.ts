import { LoginSchema, UserIndividualSchema, UserOrganizationSchema } from "@/schemas";
import { NextResponse } from "next/server";
import db from '@/libs/db'
import { auth } from "@/auth";



export async function PATCH(
  request:Request ,
){
  try {
    const session = await auth();
    if(!session?.user?.id){

      return new NextResponse("Unauthorized",{status:401})
    }
    const body = await request.json();
    const {customerType} = body;

    console.log("customerType:",customerType)

    const validatedFields = customerType=='INDIVIDUAL'? UserIndividualSchema.safeParse(body):UserOrganizationSchema.safeParse(body);
    if(!validatedFields.success ){
      return new NextResponse('Invalid field',{status:400})
    }
    
    const updatedUser = await db.user.update({
      where:{
        id:session.user.id
      },
      data:{
        ...body
      }
    })
    return NextResponse.json(updatedUser);
  } catch (error:any) {
    console.log(error,'UPDATE_ERROR');
    return new NextResponse('Internal Error',{status:500})
  }
}