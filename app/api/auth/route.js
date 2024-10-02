// app/api/auth/route.js
import { PrismaClient } from "@prisma/client";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(request) {
  const { username, password } = await request.json();

  const user = await prisma.user.findUnique({
    where: { username: username },
  });

  if (!user) {
    return NextResponse.json(
      { message: "Invalid credentials" },
      { status: 401 }
    );
  }

  const isPasswordValid = await compare(password, user.password);
  if (!isPasswordValid) {
    return NextResponse.json(
      { message: "Invalid credentials" },
      { status: 401 }
    );
  }

  const token = sign(
    { userId: user.id, username: user.username },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  cookies().set("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    sameSite: "strict",
    maxAge: 3600,
    path: "/",
  });

  return NextResponse.json({ message: "Logged in successfully" });
}
