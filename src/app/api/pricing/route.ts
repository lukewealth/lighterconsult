import { Resend } from 'resend';
import { PricingEmail } from '@/components/emails/PricingEmail';
import * as React from 'react';

export async function POST(req: Request) {
  try {
    const resend = new Resend(process.env.Resend_API);
    const body = await req.json();
    const { email, company, product, plan, price, currency } = body;

    const currencySymbol = currency === 'NGN' ? '₦' : '$';

    // 1. Send to Admin
    await resend.emails.send({
      from: 'LiGHTER System <system@lighter.online>',
      to: 'lighterconsult@gmail.com',
      subject: `New SMM Inquiry: ${plan} Plan from ${company}`,
      html: `
        <h2>New Inquiry Received</h2>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Plan:</strong> ${plan}</p>
        <p><strong>Price:</strong> ${currencySymbol}${price}</p>
        <p><strong>Product Details:</strong> ${product}</p>
      `
    });

    // 2. Send Auto-Reply to User
    const { data, error } = await resend.emails.send({
      from: 'LiGHTER CONSULT <onboarding@lighter.online>',
      to: [email],
      subject: `Your LiGHTER CONSULT Quote - ${plan} Plan`,
      react: React.createElement(PricingEmail, {
        company,
        plan,
        price,
        currencySymbol,
        product
      }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
