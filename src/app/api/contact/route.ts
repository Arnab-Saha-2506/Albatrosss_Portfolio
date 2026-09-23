import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, header, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required fields." },
        { status: 400 }
      );
    }

    const scriptUrl = process.env.GOOGLE_SHEETS_SCRIPT_URL;

    if (!scriptUrl) {
      console.warn("GOOGLE_SHEETS_SCRIPT_URL is not configured in environment variables.");
      return NextResponse.json(
        {
          error:
            "Google Sheets integration endpoint is not configured. Please set GOOGLE_SHEETS_SCRIPT_URL in .env.local.",
        },
        { status: 500 }
      );
    }

    const payload = {
      name: String(name).trim(),
      email: String(email).trim(),
      header: String(header || subject || "Direct Ingress").trim(),
      message: String(message).trim(),
      timestamp: new Date().toISOString(),
    };

    const response = await fetch(scriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      redirect: "follow",
    });

    if (!response.ok) {
      const responseText = await response.text();
      console.error("Google Apps Script error response:", responseText);
      return NextResponse.json(
        { error: "Failed to persist payload to Google Sheets." },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Payload dispatched and stored successfully.",
    });
  } catch (error: unknown) {
    console.error("Contact API error:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Internal Server Error";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
