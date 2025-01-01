import { NextResponse } from "next/server";
import { verifyToken } from "@/lib/auth";
import {
  getStakingPlatforms,
  createStakingPlatform,
  updateStakingPlatform,
  deleteStakingPlatform,
} from "@/lib/db";

async function authenticateRequest(request: Request) {
  const token = request.headers.get("Authorization")?.split(" ")[1];
  if (!token) {
    return false;
  }
  return await verifyToken(token);
}

export async function GET() {
  try {
    const platforms = await getStakingPlatforms();
    return console.log(platforms), NextResponse.json(platforms);
  } catch (error) {
    console.error("Error fetching platforms:", error);
    return NextResponse.json({ error: "获取平台列表失败" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  if (!(await authenticateRequest(request))) {
    return NextResponse.json({ error: "未授权" }, { status: 401 });
  }

  try {
    const platform = await request.json();
    const result = await createStakingPlatform(platform);
    return NextResponse.json(result);
  } catch (error) {
    console.error("Error creating platform:", error);
    return NextResponse.json({ error: "创建平台失败" }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  if (!(await authenticateRequest(request))) {
    return NextResponse.json({ error: "未授权" }, { status: 401 });
  }

  try {
    const { id, ...platform } = await request.json();
    const result = await updateStakingPlatform(id, platform);
    if (!result) {
      return NextResponse.json({ error: "平台不存在" }, { status: 404 });
    }
    return NextResponse.json(result);
  } catch (error) {
    console.error("Error updating platform:", error);
    return NextResponse.json({ error: "更新平台失败" }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  const token = request.headers.get("Authorization")?.split(" ")[1];
  if (!token || !(await verifyToken(token))) {
    return NextResponse.json({ error: "未授权" }, { status: 401 });
  }

  try {
    const { id } = await request.json();
    const result = await deleteStakingPlatform(id);
    if (!result) {
      return NextResponse.json({ error: "平台不存在" }, { status: 404 });
    }
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting platform:", error);
    return NextResponse.json({ error: "删除平台失败" }, { status: 500 });
  }
}
