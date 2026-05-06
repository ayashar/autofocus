import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl;
    const userId = searchParams.get("userId");

    if (!userId) {
      return NextResponse.json({
        status: 400,
        error: "User ID is required",
      });
    }

    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        email: true,
        name: true,
        photoId: true,
        currentStreak: true,
        highestStreak: true,
        gracePeriodUsed: true,
        sessions: {
          orderBy: { createdAt: 'desc' },
          take: 10,
          include: {
            _count: {
              select: { distractions: true }
            }
          }
        }
      },
    });

    if (!user) {
      return NextResponse.json({
        status: 404,
        error: "User not found",
      });
    }

    return NextResponse.json({
      status: 200,
      data: user,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const { userId, name, photoId } = await request.json();

    if (!userId) {
      return NextResponse.json({
        status: 400,
        error: "User ID is required",
      });
    }

    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: {
        name,
        photoId,
      },
      select: {
        id: true,
        email: true,
        name: true,
        photoId: true,
      }
    });

    return NextResponse.json({
      status: 200,
      data: updatedUser,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
