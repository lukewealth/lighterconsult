import * as React from 'react';

interface PricingEmailProps {
  company: string;
  plan: string;
  price: string;
  currencySymbol: string;
  product: string;
}

export const PricingEmail: React.FC<Readonly<PricingEmailProps>> = ({
  company,
  plan,
  price,
  currencySymbol,
  product,
}) => (
  <div style={{
    fontFamily: 'Inter, system-ui, sans-serif',
    lineHeight: '1.6',
    color: '#1a1a1a',
    backgroundColor: '#ffffff',
    padding: '40px',
    maxWidth: '600px',
    margin: '0 auto',
    border: '1px solid #f0f0f0',
    borderRadius: '16px'
  }}>
    <div style={{ textAlign: 'center', marginBottom: '40px' }}>
      <h1 style={{ fontSize: '24px', fontWeight: '900', color: '#2563eb', letterSpacing: '-1px', margin: '0' }}>
        LiGHTER CONSULT
      </h1>
    </div>
    
    <div style={{ marginBottom: '40px' }}>
      <h2 style={{ fontSize: '20px', fontWeight: '800', marginBottom: '16px' }}>Hello, {company} Team!</h2>
      <p style={{ color: '#4b5563' }}>
        Thank you for choosing <strong>LiGHTER CONSULT</strong> for your Social Media Management. 
        We have received your request for the <strong>{plan} Plan</strong>.
      </p>
      
      <div style={{ 
        backgroundColor: '#f8fafc', 
        padding: '24px', 
        borderRadius: '16px', 
        border: '1px solid #e2e8f0', 
        margin: '24px 0' 
      }}>
        <div style={{ fontSize: '32px', fontWeight: '900', color: '#0f172a' }}>
          {currencySymbol}{price}<span style={{ fontSize: '14px', fontWeight: '400' }}>/month</span>
        </div>
        <div style={{ marginTop: '12px', fontSize: '14px', color: '#64748b' }}>
          Strategic SMM for {product}
        </div>
      </div>

      <p style={{ color: '#4b5563' }}>
        Our team is currently reviewing your details. A dedicated strategist will contact you within 4 hours 
        to begin the brand audit and finalize your onboarding for the 2026 cycle.
      </p>
      
      <div style={{ 
        backgroundColor: '#0f172a', 
        color: 'white', 
        padding: '24px', 
        borderRadius: '16px', 
        margin: '24px 0' 
      }}>
        <h4 style={{ margin: '0 0 12px 0', color: '#3b82f6', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>
          Official Payment Channels
        </h4>
        <p style={{ margin: '4px 0', fontSize: '14px' }}>
          A secure payment link will be sent to this email address shortly after the initial audit.
        </p>
        <p style={{ margin: '12px 0 0 0', fontSize: '11px', opacity: '0.7' }}>
          Reference: SMM-{plan}-{company.substring(0,3).toUpperCase()}
        </p>
      </div>

      <p style={{ color: '#4b5563' }}>We look forward to sparking your growth!</p>
    </div>

    <div style={{ 
      fontSize: '12px', 
      color: '#94a3b8', 
      textAlign: 'center', 
      marginTop: '40px', 
      borderTop: '1px solid #f0f0f0', 
      paddingTop: '20px' 
    }}>
      <p style={{ margin: '4px 0' }}>LiGHTER DIGITAL HQ: KM 34, Lekki-Epe Expressway, Lekki, Lagos, Nigeria</p>
      <p style={{ margin: '4px 0' }}>&copy; 2026 LiGHTER DIGITAL. All rights reserved.</p>
    </div>
  </div>
);
