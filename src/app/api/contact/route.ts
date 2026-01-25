import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { firstName, lastName, email, phone, message } = body;

        // Construct email content
        const emailContent = `
            <h2>New Inquiry from Viksit Bharat Yatra Website</h2>
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <br/>
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, '<br/>')}</p>
        `;

        const payload = {
            recipient: "office@svaniti.in",
            subject: `Viksit Bharat Yatra Inquiry from ${firstName} ${lastName}`,
            body: emailContent
        };

        const apiToken = process.env.EMAIL_API_TOKEN;

        if (!apiToken) {
            return NextResponse.json(
                { error: "Server misconfiguration: Missing API Token" },
                { status: 500 }
            );
        }

        const response = await fetch("https://email-microservice-delusion.vercel.app/api/send-email", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-api-token": apiToken
            },
            body: JSON.stringify(payload)
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || "Failed to send email");
        }

        return NextResponse.json({ success: true, message: "Email sent successfully" });

    } catch (error: any) {
        console.error("Email API Error:", error);
        return NextResponse.json(
            { error: error.message || "Internal Server Error" },
            { status: 500 }
        );
    }
}
