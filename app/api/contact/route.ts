import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
	try {
		const { name, email, message } = await request.json();
		if (!name || !email || !message) {
			return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
		}

		const apiKey = process.env.RESEND_API_KEY;
		const toEmail = process.env.CONTACT_TO_EMAIL;
		if (!apiKey || !toEmail) {
			return NextResponse.json({ error: 'Server not configured' }, { status: 500 });
		}

		const resend = new Resend(apiKey);
		await resend.emails.send({
			from: 'Portfolio <no-reply@resend.dev>',
			to: [toEmail],
			subject: `New message from ${name}`,
			html: `<p><strong>From:</strong> ${name} (${email})</p><p>${message}</p>`
		});

		return NextResponse.json({ ok: true });
	} catch (error) {
		return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
	}
}