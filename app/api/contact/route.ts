import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!email || !message) {
      return NextResponse.json(
        { error: 'Email and message are required fields' },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;

    // Check if API key is missing or still set to placeholder
    if (!apiKey || apiKey.includes('your_api_key_here')) {
      console.warn('RESEND_API_KEY is not configured in .env.local');
      return NextResponse.json(
        {
          success: false,
          error: 'RESEND_API_KEY not set in .env.local. Please paste your Resend API key starting with re_ into .env.local'
        },
        { status: 400 }
      );
    }

    const resend = new Resend(apiKey);

    const data = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['harshpai0hp@gmail.com'],
      replyTo: email,
      subject: `New Portfolio Message from ${name || 'Visitor'}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; padding: 20px; border: 1px solid #A92C1F30; border-radius: 12px; background: #F2EFE7;">
          <h2 style="color: #A92C1F; margin-top: 0;">New Portfolio Message</h2>
          <p style="font-size: 14px; color: #2F2E2F;"><strong>Name:</strong> ${name || 'Not provided'}</p>
          <p style="font-size: 14px; color: #2F2E2F;"><strong>Visitor Email:</strong> ${email}</p>
          <hr style="border: 0; border-top: 1px solid #A92C1F30; margin: 20px 0;" />
          <p style="font-size: 14px; color: #2F2E2F; white-space: pre-wrap;"><strong>Message:</strong><br/>${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error: unknown) {
    console.error('Error in Resend email route:', error);
    const errorMessage = error instanceof Error ? error.message : 'Failed to dispatch email';
    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 }
    );
  }
}
