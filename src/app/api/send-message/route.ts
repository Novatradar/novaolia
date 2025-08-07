// app/api/send-message/route.ts
import { NextResponse } from 'next/server';

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const CHAT_ID = process.env.TELEGRAM_CHAT_ID;


export async function POST(req: Request) {
  const { name, email, message, phoneNumber, purpose } = await req.json();

  const text = `📬 New Contact Message:\n\n👤 Name: ${name}\n📧 Email: ${email}\n📧 Phone: ${phoneNumber}\n📧 Purpose: ${purpose}\n📝 Message:\n${message}`;

  const telegramUrl = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

  try {
    const res = await fetch(telegramUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: CHAT_ID, text }),
    });

    if (!res.ok) {
      throw new Error('Telegram API error');
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}