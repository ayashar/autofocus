import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(request: NextRequest) {
  try {
    const { userId, targetDuration, targetBreakDuration, isRecovery } = await request.json();

    if (!userId || !targetDuration) {
      return NextResponse.json({
        status: 400,
        error: "User ID and target duration are required",
      });
    }

    const session = await prisma.session.create({
      data: {
        userId,
        targetDuration,
        targetBreakDuration: targetBreakDuration || null,
        isRecovery: isRecovery || false,
      },
    });

    return NextResponse.json({
      status: 201,
      data: session,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}