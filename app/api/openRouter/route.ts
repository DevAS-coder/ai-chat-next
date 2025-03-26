import { NextResponse } from "next/server";

const apiKey = process.env.OPENROUTER_API;

export async function POST(req: Request) {
  const { message } = await req.json();
  const response = await fetch(
    "https://openrouter.ai/api/v1/chat/completions",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "deepseek/deepseek-r1:free",
        messages: [
          {
            role: "user",
            content: message,
          },
        ],
      }),
    }
  );
  const data = await response.json();
  return NextResponse.json(data);
}
