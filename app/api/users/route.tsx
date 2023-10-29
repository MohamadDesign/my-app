import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
  return NextResponse.json("Hello World");
}

export async function POST(request: NextRequest) {
  const reqBody = await request.json();
  if (!reqBody.name) {
    return NextResponse.json({ error: "Name is require" }, { status: 400 });
  }
  return NextResponse.json({
    id: 1,
    name: reqBody.name,
  });
}
