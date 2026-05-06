import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string; distractionId: string }> }
) {
  try {
    const { id, distractionId } = await params;
    
    const distraction = await prisma.distractionEvent.findUnique({
      where: { id: distractionId, sessionId: id },
    });

    if (!distraction) {
      return NextResponse.json({
        status: 404,
        error: "Distraction event not found",
      });
    }

    const updatedDistraction = await prisma.distractionEvent.update({
      where: { id: distractionId },
      data: {
        isResolved: true,
      },
    });

    return NextResponse.json({
      status: 200,
      data: updatedDistraction,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
