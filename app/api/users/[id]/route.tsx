import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

interface Props {
  params: { id: number };
}

export function GET(request: NextRequest, { params: { id } }: Props) {
  if (id >= 10) {
    return NextResponse.json({
      error: "User not found :(",
      status: 400,
    });
  }
  return NextResponse.json({
    id: 1,
    name: "Mmd",
  });
}

export async function PUT(request: NextRequest, { params: { id } }: Props) {
  //Validate the request body
  const reqBody = await request.json();
  const validation = schema.safeParse(reqBody);
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }
  //   Fetch the user with the given id
  //   If doesn't exist, return 404
  if (id >= 10) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }
  // Update the user
  // Return the updated user
  return NextResponse.json({ id: 1, name: reqBody.name });
}

export async function DELETE(request: NextRequest, { params: { id } }: Props) {
  const reqBody = await request.json();
  if (id >= 10) {
    return NextResponse.json(
      {
        error: "user not found",
      },
      {
        status: 404,
      }
    );
  }
  return NextResponse.json({});
}
