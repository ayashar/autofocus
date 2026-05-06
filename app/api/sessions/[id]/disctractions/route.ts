import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(request: NextRequest) {
  try {
    const { sessionId, levelReached } = await request.json();
    const session = await prisma.session.findUnique({
      where: { id: sessionId },
    });
    if (!session) {
      return NextResponse.json({
        status: 404,
        error: "Session not found",
      });
    }
    const distraction = await prisma.distractionEvent.create({
      data: {
        sessionId,
        levelReached,
        isResolved: false,
      },
    });
    return NextResponse.json({
      status: 201,
      data: distraction,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
