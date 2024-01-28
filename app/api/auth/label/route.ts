
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
export async function PATCH(
  req:Request
){
  try {
    const session = await auth();
    if(!session?.user){
      return new NextResponse("Unauthorized",{status:401})
    }
    const body = await req.json();

    const {fileId,filename} = body;
    if(!fileId || !filename){
      return new NextResponse("missing fields",{status:403})
    }
    const getLable = await db.label.findUnique({
      where:{
        id:fileId 
      }
    })
    if(!getLable){
      return new NextResponse("Label is not available",{status:403})
    }
    const updateLabelName = await db.label.update({
      where:{
        id:getLable.id
      },
      data:{
        name:filename
      }
    })
    return NextResponse.json(updateLabelName);
  } catch (error) {
    console.log(error, 'UPDATE_ERROR');
    return new NextResponse('Internal Error', { status: 500 })
  }
}
export async function DELETE(req:Request){
  try {
    const session  = await auth();
    if(!session?.user){
      return new NextResponse("Unauthorized",{status:401})
    }
    const params = new URLSearchParams(req.url.split('?')[1]);
    const id = params.get('id');
    const getLable = await db.label.findUnique({
      where:{
        id:String(id) 
      }
    })
    if(getLable?.userId!==session.user.id){
      return new NextResponse("Unauthorized",{status:403})
    }
    const deletedLabel = await db.label.delete({
      where:{
        id:getLable.id
      }
    })
    return NextResponse.json(deletedLabel);
  } catch (error) {
    console.log(error, 'DELETE_ERROR');
    return new NextResponse('Internal Error', { status: 500 })
  }
}