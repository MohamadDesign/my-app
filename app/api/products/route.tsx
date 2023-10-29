import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

interface Props {
  params: { id: number };
}

export function GET(request: NextRequest) {
  return NextResponse.json([
    { id: 1, name: "Milk", price: 1000 },
    { id: 2, name: "Rice", price: 2000 },
    { id: 3, name: "Fish", price: 3000 },
    { id: 4, name: "Banana", price: 4000 },
    { id: 5, name: "Cake", price: 5000 },
  ]);
}

export async function POST(request: NextRequest) {
  const reqBody = await request.json();
  const validation = schema.safeParse(reqBody);
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }
  return NextResponse.json(
    {
      id: 10,
      name: reqBody.name,
      price: reqBody.price,
    },
    { status: 200 }
  );
}
