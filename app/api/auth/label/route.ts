
import { NextResponse } from "next/server";
import db from '@/libs/db'
import { auth } from "@/auth";

export async function POST(
  request: Request,
) {
  try {
    const session = await auth();
    if (!session?.user?.id) {

      return new NextResponse("Unauthorized", { status: 401 })
    }
    const body = await request.json();
    const { name, cdrUrl, imgUrl } = body;
    
    if (!name || !cdrUrl || !imgUrl) {
      return new NextResponse("Invalid field", { status: 403 })
    }
    const createLabel = await db.label.create({
      data: {
        name, cdrUrl , imgUrl,
        userId:session.user.id
      }
    })
   
    return NextResponse.json(createLabel);
  } catch (error: any) {
    console.log(error, 'UPDATE_ERROR');
    return new NextResponse('Internal Error', { status: 500 })
  }
}