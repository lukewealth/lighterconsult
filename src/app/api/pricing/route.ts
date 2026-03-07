import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { email, company, product, plan, price } = data;

    // 1. Log or Send to Admin (lighterconsult@gmail.com)
    console.log('--- NEW SMM PLAN INQUIRY ---');
    console.log(`Plan: ${plan}`);
    console.log(`Price: $${price}`);
    console.log(`User: ${email}`);
    console.log(`Company: ${company}`);
    console.log(`Details: ${product}`);
    console.log('---------------------------');

    // 2. Prepare the Auto-Response HTML Email
    // const paymentLink = `https://paystack.com/pay/lighter-smm?email=${email}&amount=${price.replace(',', '')}&plan=${plan}`;
    
    /*
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
          .button { display: inline-block; background: #3b82f6; color: white !important; padding: 16px 32px; border-radius: 12px; text-decoration: none; font-weight: 700; margin-top: 24px; }
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
              <div class="price">$${price}<span style="font-size: 14px; font-weight: 400;">/month</span></div>
              <div class="details">Strategic SMM for ${product}</div>
            </div>

            <p>To finalize your onboarding and secure your slot for the 2026 cycle, please proceed with payment using the link below or via bank transfer.</p>
            
            <a href="${paymentLink}" class="button">PROCEED TO SECURE PAYMENT</a>

            <div class="account-details">
              <h4 style="margin-top: 0; color: #3b82f6;">BANK TRANSFER DETAILS</h4>
              <p style="margin: 4px 0;"><strong>Bank:</strong> LiGHTER Global Treasury (Digital)</p>
              <p style="margin: 4px 0;"><strong>Account Name:</strong> LiGHTER DIGITAL SOLUTIONS</p>
              <p style="margin: 4px 0;"><strong>Account Number:</strong> 1234567890</p>
              <p style="margin: 4px 0;"><strong>Swift Code:</strong> LIGHTNGXXX</p>
              <p style="margin: 12px 0 0 0; font-size: 11px; opacity: 0.7;">Please use "SMM-${plan}-${company}" as payment reference.</p>
            </div>

            <p>Once payment is confirmed, your dedicated strategist will contact you within 4 hours to begin the brand audit.</p>
          </div>
          <div class="footer">
            <p>LiGHTER DIGITAL HQ: KM 34, Lekki-Epe Expressway, Lekki, Lagos, Nigeria</p>
            <p>&copy; 2026 LiGHTER DIGITAL. All rights reserved.</p>
          </div>
        </div>
      </body>
      </html>
    `;
    */

    // In a real production app, you would use a service like Resend or SendGrid here:
    // await resend.emails.send({ from: 'LiGHTER <onboarding@lighter.online>', to: email, subject: '...', html: emailHtml });

    return NextResponse.json({ success: true, message: 'Inquiry processed successfully' });
  } catch {
    return NextResponse.json({ success: false, error: 'Failed to process inquiry' }, { status: 500 });
  }
}
