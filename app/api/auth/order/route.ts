import { auth } from "@/auth";
import { NextResponse } from "next/server";
import db from '@/libs/db'

export async function POST(request: Request) {
  try {
    const session = await auth();

    if (!session?.user) {
      return new NextResponse("Unauthorized", { status: 401 })
    }
    const userId = session.user.id
    const body = await request.json();
    const {
      orderType,
      bottleLabel,
      totalQuantity,
      totalPrice,
      remark,

      item,
      quantity,

      price,
      state,
      city,
      pinCode,
      landmark } = body

    if (!orderType ||
      !bottleLabel ||
      !totalQuantity ||
      !totalPrice ||
      !remark ||

      !item ||
      !quantity ||

      !price ||
      !state ||
      !city ||
      !pinCode ||
      !landmark) {
      return new NextResponse("invalid fields", { status: 401 })
    }

    const order = await db.order.create({
      data: {
        userId,
        ...body
      }
    })
    return NextResponse.json(order);
  } catch (error) {
    console.log(error, 'ORDER_ERROR');
    return new NextResponse('Internal Error', { status: 500 })
  }
}