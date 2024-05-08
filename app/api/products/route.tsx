import { NextRequest, NextResponse } from "next/server";
import Schema from "./shema";
import prisma from "@/prisma/client";

//GET PRODUCTS
export async function GET(request: NextRequest) {
  const products = await prisma.product.findMany();
  return NextResponse.json(products);
}

// ADD PRODUCTS
export async function POST(request: NextRequest) {
  const body = await request.json();
  const validatedBody = Schema.safeParse(body);
  if (!validatedBody.success)
    return NextResponse.json(validatedBody.error.errors, { status: 400 });

  const product = await prisma.product.create({
    data: {
      name: body.name,
      price: body.price,
    }
  })
  return NextResponse.json(product, { status: 201 });
}
