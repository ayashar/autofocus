import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(request: NextRequest) {
  try {
    const { userId, action } = await request.json();

    if (!userId || !action) {
      return NextResponse.json({
        status: 400,
        error: "User ID and action (RESET or RECOVER) are required",
      });
    }

    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      return NextResponse.json({
        status: 404,
        error: "User not found",
      });
    }

    if (action === "RESET") {
      const updatedUser = await prisma.user.update({
        where: { id: userId },
        data: {
          currentStreak: 0,
          gracePeriodUsed: false, // Reset grace period since they start a new streak
        },
      });

      return NextResponse.json({
        status: 200,
        message: "Streak reset successfully",
        data: updatedUser,
      });
    } else if (action === "RECOVER") {
      if (user.gracePeriodUsed) {
        return NextResponse.json({
          status: 400,
          error: "Grace period already used. Cannot recover streak.",
        });
      }

      const updatedUser = await prisma.user.update({
        where: { id: userId },
        data: {
          gracePeriodUsed: true,
        },
      });

      return NextResponse.json({
        status: 200,
        message: "Recovery mode activated successfully",
        data: updatedUser,
      });
    } else {
      return NextResponse.json({
        status: 400,
        error: "Invalid action. Use RESET or RECOVER.",
      });
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
