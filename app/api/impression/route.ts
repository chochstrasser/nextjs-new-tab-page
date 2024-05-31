import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  if (req.method === "POST") {
    console.log("Impression logged:", req.body);
    return NextResponse.json({ message: "Impression logged" }, { status: 200 });
  } else {
    return NextResponse.json(
      { message: "Method Not Allowed" },
      { status: 405 }
    );
  }
}
