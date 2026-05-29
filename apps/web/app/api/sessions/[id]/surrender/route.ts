import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function PATCH(request: NextRequest) {
  try {
    const { id } = await request.json();
    const session = await prisma.session.findUnique({
      where: { id },
    });

    if (!session) {
      return NextResponse.json({
        status: 404,
        error: "Session not found",
      });
    }

    const updatedSession = await prisma.session.update({
      where: { id },
      data: {
        status: "FAILED",
      },
    });

    return NextResponse.json({
      status: 200,
      data: updatedSession,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}