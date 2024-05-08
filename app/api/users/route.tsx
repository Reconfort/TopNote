import { NextRequest, NextResponse } from "next/server";
import Schema from "./schema";
import prisma from "@/prisma/client";
//GET
export async function GET(request: NextRequest) {
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
}

//POST
export async function POST(request: NextRequest) {
  const body = await request.json();
  const validatedBody = Schema.safeParse(body);
  if (!validatedBody.success)
    return NextResponse.json(validatedBody.error.errors, { status: 400 });

  const user = await prisma.user.findUnique({
    where: {
      email: body.email,
    },
  });

  if (user)
    return NextResponse.json({ error: "User already exist" }, { status: 400 });

  const newUser = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
    },
  });
  return NextResponse.json(newUser, { status: 201 });
}
