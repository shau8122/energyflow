import { auth } from "@/auth";
import { NextResponse } from "next/server";
import db from '@/libs/db'

export async function POST(req: Request) {
  try {
    const session = await auth();
    if (!session?.user) {
      return new NextResponse("Unauthorized", { status: 401 })
    }
    const userId = session.user.id as string;

    const body = await req.json();

    const { title, address, about, mobile, price, discount } = body
    if (!title || !address || !about || !mobile) {
      return new NextResponse("Invalid fields", { status: 403 });
    }
    const existingBussiness = await db.bussiness.findFirst({
      where: {
        userId
      }
    })
    if (existingBussiness) {
      return new NextResponse("Bussiness already exists", { status: 403 })
    }
    const newBussiness = await db.bussiness.create({
      data: {
        userId, about, address, title, mobile, price, discount
      }
    })
    return NextResponse.json(newBussiness)
  } catch (error) {
    console.log(error, 'BUSSINESS_ERROR');
    return new NextResponse('Internal Error', { status: 500 })
  }
}

export async function PATCH(
  req: Request
) {
  try {
    const session = await auth();
    if (!session?.user) {
      return new NextResponse("Unauthorized", { status: 401 })
    }

    const userId = session.user.id;
    const body = await req.json();

    const bussinessDetails = await db.bussiness.findFirst({
      where: {
        userId
      },
    })
    if (!bussinessDetails) {
      return new NextResponse("Bussiness details not found", { status: 403 })
    }
    const { downloadUrl, deleteUrl } = body;
    if (deleteUrl) {
      const updatedUrls = bussinessDetails.imgUrls.filter((url) => url != deleteUrl);
      const updatedBussines = await db.bussiness.update({
        where: {
          id: bussinessDetails.id
        },
        data: {
          imgUrls: updatedUrls
        }
      })
      return NextResponse.json(updatedBussines)
    }
    if (downloadUrl) {
      const updatedBussines = await db.bussiness.update({
        where: {
          id: bussinessDetails.id
        },
        data: {
          imgUrls: [...bussinessDetails.imgUrls, downloadUrl]
        }
      })
      return NextResponse.json(updatedBussines)
    } else {

      const updatedBussines = await db.bussiness.update({
        where: {
          id: bussinessDetails.id
        },
        data: {
          ...body
        }
      })
      return NextResponse.json(updatedBussines)
    }

  } catch (error) {
    console.log(error, 'BUSSINESS_ERROR');
    return new NextResponse('Internal Error', { status: 500 })
  }
}