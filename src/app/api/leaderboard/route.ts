import { NextRequest, NextResponse } from "next/server";
import { redis } from "@/lib/redis";

export interface LeaderboardEntry {
  name: string;
  score: number;
  timestamp: string;
}

const LEADERBOARD_KEY = "rayan-trivia:leaderboard";

export async function GET() {
  try {
    // Get top 100 scores with their scores using zrange with REV option
    const results = await redis.zrange(LEADERBOARD_KEY, 0, 99, {
      withScores: true,
      rev: true,
    });

    // Format results into LeaderboardEntry array
    const leaderboard: LeaderboardEntry[] = [];

    for (let i = 0; i < results.length; i += 2) {
      const memberData = results[i] as string;
      const score = results[i + 1] as number;

      // Parse the member data (format: "name|timestamp")
      const [name, timestamp] = memberData.split("|");

      leaderboard.push({
        name,
        score,
        timestamp,
      });
    }

    return NextResponse.json(leaderboard);
  } catch (error) {
    console.error("Failed to read leaderboard:", error);
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

    const timestamp = new Date().toISOString();

    // Create a unique member by combining name and timestamp
    // This allows multiple entries from the same person
    const member = `${name.trim()}|${timestamp}`;

    // Add score to Redis sorted set using zadd
    await redis.zadd(LEADERBOARD_KEY, {
      score,
      member,
    });

    const newEntry: LeaderboardEntry = {
      name: name.trim(),
      score,
      timestamp,
    };

    return NextResponse.json({ success: true, entry: newEntry });
  } catch (error) {
    console.error("Leaderboard error:", error);
    return NextResponse.json(
      { error: "Failed to save score" },
      { status: 500 }
    );
  }
}
