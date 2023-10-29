import { NextRequest, NextResponse } from "next/server";

import { z } from "zod";
const schema = z.object({
  email: z.string().email(),
  password: z.string().min(2),
});

export async function POST(request: NextRequest) {
  const reqBody = await request.json();

  const validation = schema.safeParse(reqBody);
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

    
}
