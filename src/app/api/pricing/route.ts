import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: Request) {
  try {
    const resend = new Resend(process.env.Resend_API);
    const data = await req.json();
    const { email, company, product, plan, price, currency } = data;

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
    const emailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: 'Inter', sans-serif; line-height: 1.6; color: #1a1a1a; margin: 0; padding: 0; }
          .container { max-width: 600px; margin: 0 auto; padding: 40px; border: 1px solid #f0f0f0; }
          .header { text-align: center; margin-bottom: 40px; }
          .logo { font-size: 24px; font-weight: 900; color: #3b82f6; letter-spacing: -1px; }
          .content { margin-bottom: 40px; }
          .plan-box { background: #f8fafc; padding: 24px; border-radius: 16px; border: 1px solid #e2e8f0; margin: 24px 0; }
          .price { font-size: 32px; font-weight: 900; color: #0f172a; }
          .details { margin-top: 12px; font-size: 14px; color: #64748b; }
          .account-details { background: #0f172a; color: white; padding: 24px; border-radius: 16px; margin: 24px 0; }
          .footer { font-size: 12px; color: #94a3b8; text-align: center; margin-top: 40px; border-top: 1px solid #f0f0f0; padding-top: 20px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="logo">LiGHTER CONSULT</div>
          </div>
          <div class="content">
            <h2>Hello, ${company} Team!</h2>
            <p>Thank you for choosing <strong>LiGHTER CONSULT</strong> for your Social Media Management. We have received your request for the <strong>${plan} Plan</strong>.</p>
            
            <div class="plan-box">
              <div class="price">${currencySymbol}${price}<span style="font-size: 14px; font-weight: 400;">/month</span></div>
              <div class="details">Strategic SMM for ${product}</div>
            </div>

            <p>Our team is reviewing your details and will contact you within 4 hours to begin the brand audit and finalize onboarding.</p>
            
            <div class="account-details">
              <h4 style="margin-top: 0; color: #3b82f6;">OFFICIAL PAYMENT CHANNELS</h4>
              <p style="margin: 4px 0;">A secure payment link will be sent to this email address shortly.</p>
              <p style="margin: 12px 0 0 0; font-size: 11px; opacity: 0.7;">Reference: SMM-${plan}-${company.substring(0,3).toUpperCase()}</p>
            </div>

            <p>We look forward to sparking your growth!</p>
          </div>
          <div class="footer">
            <p>LiGHTER DIGITAL HQ: KM 34, Lekki-Epe Expressway, Lekki, Lagos, Nigeria</p>
            <p>&copy; 2026 LiGHTER DIGITAL. All rights reserved.</p>
          </div>
        </div>
      </body>
      </html>
    `;

    await resend.emails.send({
      from: 'LiGHTER CONSULT <onboarding@lighter.online>',
      to: email,
      subject: `Your LiGHTER CONSULT Quote - ${plan} Plan`,
      html: emailHtml
    });

    return NextResponse.json({ success: true, message: 'Inquiry processed successfully' });
  } catch (error: any) {
    console.error('Error sending email:', error);
    return NextResponse.json({ success: false, error: 'Failed to process inquiry' }, { status: 500 });
  }
}
