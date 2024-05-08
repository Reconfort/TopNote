import { NextRequest, NextResponse } from "next/server";
import Schema from "../shema";
import prisma from "@/prisma/client";

interface Props {
  params: { id: string };
}

//GET SINGLE PRODUCT
export async function GET(request: NextRequest, { params }: Props) {
  const product = await prisma.product.findUnique({
    where: { id: parseInt(params.id) },
  })
  if (!product)
    return NextResponse.json({ error: "Product not found" }, { status: 404 });

  return NextResponse.json(product);
}


//UPDATE
export async function PUT(request: NextRequest, { params }: Props) {
  const body = await request.json();
  const validatedBody = Schema.safeParse(body);
  if (!validatedBody.success)
    return NextResponse.json(validatedBody.error.errors, { status: 400 });

  const product = await prisma.product.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!product)
    return NextResponse.json({ error: "Product not found" }, { status: 404 });

  const updatedProduct = await prisma.product.update({
    where: { id: parseInt(params.id) },
    data: { name: body.name, price: body.price },
  });

  return NextResponse.json(updatedProduct);
}


//DELETE
export async function DELETE(request: NextRequest, { params }: Props) {
  const product = await prisma.product.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!product)
    return NextResponse.json({ error: "Product not found" }, { status: 404 });

  await prisma.product.delete({
    where: { id: product.id },
  });
  return NextResponse.json({});
}
