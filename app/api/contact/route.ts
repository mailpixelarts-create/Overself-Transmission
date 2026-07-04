import { NextResponse } from "next/server";

/**
 * POST /api/contact
 * Structured placeholder for handling contact form submissions.
 * Future: Integrate with an email service like Resend, SendGrid, or Postmark.
 */
export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, message } = body;

        // ── Validation ──────────────────────────────────────────────
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        // ── Future Integration Point ────────────────────────────────
        // Example with Resend:
        // const res = await fetch('https://api.resend.com/emails', {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/json',
        //     'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        //   },
        //   body: JSON.stringify({
        //     from: 'Overself <contact@overselftransmission.com>',
        //     to: ['your@email.com'],
        //     subject: `New Message from ${name}`,
        //     text: message,
        //   }),
        // });

        console.log("Contact Form Submission:", { name, email, message });

        // Simulate network delay
        await new Promise((resolve) => setTimeout(resolve, 500));

        return NextResponse.json({ success: true, message: "Transmission received" });
    } catch (error) {
        console.error("API Error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
