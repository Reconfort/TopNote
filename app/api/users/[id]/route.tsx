import { NextRequest, NextResponse } from "next/server";
import Schema from "../schema";
import prisma from "@/prisma/client";

interface Props {
  params: { id: string };
}

//GET SINGLE USER
export async function GET(request: NextRequest, { params }: Props) {
  const user = await prisma.user.findUnique({
    where: { id: params.id },
  });

  if (!user)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  return NextResponse.json(user);
}

//UPDATE
export async function PUT(request: NextRequest, { params }: Props) {
  const body = await request.json();
  const validatedBody = Schema.safeParse(body);
  if (!validatedBody.success)
    return NextResponse.json(validatedBody.error.errors, { status: 400 });

  const user = await prisma.user.findUnique({
    where: { id: params.id },
  });

  if (!user)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  const updatedUser = await prisma.user.update({
    where: { id: params.id },
    data: { name: body.name, email: body.email },
  });

  return NextResponse.json(updatedUser);
}

//DELETE
export async function DELETE(request: NextRequest, { params }: Props) {
  const user = await prisma.user.findUnique({
    where: { id: params.id },
  });

  if (!user)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  await prisma.user.delete({
    where: { id: user.id },
  });
  return NextResponse.json({});
}
