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

    const configuration = await prisma.configuration.findUnique({
      where: { userId },
      include: {
        blockedApps: true,
      },
    });

    if (!configuration) {
      return NextResponse.json({
        status: 404,
        error: "Configuration not found",
      });
    }

    return NextResponse.json({
      status: 200,
      data: configuration,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const { userId, targetDuration, blockedApps } = await request.json();

    if (!userId || !targetDuration) {
      return NextResponse.json({
        status: 400,
        error: "User ID and target duration are required",
      });
    }

    const configuration = await prisma.configuration.upsert({
      where: { userId },
      update: {
        targetDuration,
        blockedApps: {
          deleteMany: {},
          create: blockedApps.map((app: any) => ({
            name: app.name,
            packageName: app.packageName,
          })),
        },
      },
      create: {
        userId,
        targetDuration,
        blockedApps: {
          create: blockedApps.map((app: any) => ({
            name: app.name,
            packageName: app.packageName,
          })),
        },
      },
    });

    return NextResponse.json({
      status: 200,
      data: configuration,
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
    const { userId, targetDuration, blockedApps } = await request.json();

    if (!userId || !targetDuration) {
      return NextResponse.json({
        status: 400,
        error: "User ID and target duration are required",
      });
    }

    const configuration = await prisma.configuration.update({
      where: { userId },
      data: {
        targetDuration,
        blockedApps: {
          deleteMany: {},
          create: blockedApps.map((app: any) => ({
            name: app.name,
            packageName: app.packageName,
          })),
        },
      },
    });

    return NextResponse.json({
      status: 200,
      data: configuration,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}