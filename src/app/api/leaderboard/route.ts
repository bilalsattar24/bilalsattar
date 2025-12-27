import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export interface LeaderboardEntry {
  name: string;
  score: number;
  timestamp: string;
}

const LEADERBOARD_FILE = path.join(process.cwd(), "public", "leaderboard.json");

export async function GET() {
  try {
    const fileContents = await fs.readFile(LEADERBOARD_FILE, "utf-8");
    const leaderboard: LeaderboardEntry[] = JSON.parse(fileContents);

    // Sort by score descending
    const sorted = leaderboard.sort((a, b) => b.score - a.score);

    return NextResponse.json(sorted);
  } catch (error) {
    // If file doesn't exist, return empty array
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return NextResponse.json([]);
    }
    return NextResponse.json(
      { error: "Failed to read leaderboard" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const { name, score } = await request.json();

    if (!name || typeof score !== "number") {
      return NextResponse.json({ error: "Invalid data" }, { status: 400 });
    }

    let leaderboard: LeaderboardEntry[] = [];

    // Read existing leaderboard
    try {
      const fileContents = await fs.readFile(LEADERBOARD_FILE, "utf-8");
      leaderboard = JSON.parse(fileContents);
    } catch (error) {
      // File doesn't exist yet, start with empty array
      if ((error as NodeJS.ErrnoException).code !== "ENOENT") {
        throw error;
      }
    }

    // Add new entry
    const newEntry: LeaderboardEntry = {
      name: name.trim(),
      score,
      timestamp: new Date().toISOString(),
    };

    leaderboard.push(newEntry);

    // Sort by score descending
    leaderboard.sort((a, b) => b.score - a.score);

    // Keep top 100 entries
    if (leaderboard.length > 100) {
      leaderboard = leaderboard.slice(0, 100);
    }

    // Write back to file
    await fs.writeFile(LEADERBOARD_FILE, JSON.stringify(leaderboard, null, 2));

    return NextResponse.json({ success: true, entry: newEntry });
  } catch (error) {
    console.error("Leaderboard error:", error);
    return NextResponse.json(
      { error: "Failed to save score" },
      { status: 500 }
    );
  }
}
