import { BUSINESS_PHONE, BUSINESS_PHONE_FORMATTED, BUSINESS_EMAIL, BUSINESS_LOCATION, PRICING_PLANS, ADDITIONAL_SERVICES, OUR_PROMISES, SAFETY_PILLARS, TEAM_MEMBERS } from '../data/mockData';

export function generateStandaloneBrochureHtml(): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>DOG STAR — Official Service & Pricing Brochure</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');
    
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    
    body {
      font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background-color: #ffffff;
      color: #0A1128;
      line-height: 1.5;
      padding: 30px;
    }

    .container {
      max-width: 900px;
      margin: 0 auto;
    }

    /* Header */
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 3px solid #0A1128;
      padding-bottom: 20px;
      margin-bottom: 30px;
    }

    .logo-box {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .star-badge {
      width: 48px;
      height: 48px;
      background: #FFD700;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
      font-weight: 900;
      color: #0A1128;
      border: 2px solid #0A1128;
    }

    .brand-title {
      font-family: 'Outfit', sans-serif;
      font-size: 28px;
      font-weight: 900;
      text-transform: uppercase;
      letter-spacing: -0.5px;
    }

    .brand-subtitle {
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 2px;
      color: #718096;
    }

    .contact-box {
      text-align: right;
    }

    .phone-highlight {
      font-family: 'Outfit', sans-serif;
      font-size: 20px;
      font-weight: 800;
      color: #0A1128;
      background: #FFD700;
      padding: 6px 14px;
      border-radius: 20px;
      display: inline-block;
      margin-bottom: 4px;
    }

    .meta-text {
      font-size: 11px;
      color: #4A5568;
      font-weight: 600;
    }

    /* Section titles */
    .section-title {
      font-family: 'Outfit', sans-serif;
      font-size: 18px;
      font-weight: 900;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: #0A1128;
      background: #F7FAFC;
      padding: 8px 14px;
      border-left: 5px solid #FFD700;
      margin: 25px 0 15px 0;
      border-radius: 0 8px 8px 0;
    }

    /* Pricing Grid */
    .pricing-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 15px;
      margin-bottom: 25px;
    }

    .plan-card {
      border: 2px solid #E2E8F0;
      border-radius: 12px;
      padding: 16px;
      background: #FFFFFF;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .plan-card.featured {
      border-color: #0A1128;
      background: #0A1128;
      color: #FFFFFF;
    }

    .plan-title {
      font-family: 'Outfit', sans-serif;
      font-size: 15px;
      font-weight: 800;
      text-transform: uppercase;
      margin-bottom: 4px;
    }

    .plan-badge {
      display: inline-block;
      font-size: 9px;
      font-weight: 800;
      text-transform: uppercase;
      padding: 2px 8px;
      border-radius: 10px;
      background: #FFD700;
      color: #0A1128;
      margin-bottom: 8px;
    }

    .plan-price {
      font-family: 'Outfit', sans-serif;
      font-size: 26px;
      font-weight: 900;
      margin: 8px 0;
    }

    .plan-card.featured .plan-price {
      color: #FFD700;
    }

    .plan-features {
      list-style: none;
      font-size: 11px;
      margin-top: 10px;
    }

    .plan-features li {
      margin-bottom: 6px;
      padding-left: 16px;
      position: relative;
    }

    .plan-features li::before {
      content: "✓";
      position: absolute;
      left: 0;
      color: #10B981;
      font-weight: bold;
    }

    .plan-card.featured .plan-features li::before {
      color: #FFD700;
    }

    /* Services Table */
    .services-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 12px;
      margin-bottom: 25px;
    }

    .service-item {
      border: 1px solid #E2E8F0;
      border-radius: 8px;
      padding: 12px;
      background: #FDFCFB;
    }

    .service-name {
      font-weight: 800;
      font-size: 13px;
      text-transform: uppercase;
      color: #0A1128;
      margin-bottom: 4px;
    }

    .service-desc {
      font-size: 11px;
      color: #4A5568;
      line-height: 1.4;
    }

    /* Team Members */
    .team-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 12px;
      margin-bottom: 25px;
    }

    .team-card {
      border: 1px solid #E2E8F0;
      border-radius: 10px;
      padding: 12px;
      text-align: center;
      background: #FAFAFA;
    }

    .team-name {
      font-family: 'Outfit', sans-serif;
      font-weight: 800;
      font-size: 14px;
      text-transform: uppercase;
      color: #0A1128;
    }

    .team-role {
      font-size: 10px;
      font-weight: 700;
      color: #B45309;
      text-transform: uppercase;
      margin-bottom: 4px;
    }

    .team-desc {
      font-size: 10px;
      color: #4A5568;
    }

    /* Safety & Promises */
    .promises-list {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
      font-size: 11px;
      margin-bottom: 25px;
    }

    .promise-box {
      background: #F8FAFC;
      border: 1px solid #E2E8F0;
      border-radius: 8px;
      padding: 10px 14px;
    }

    .promise-title {
      font-weight: 800;
      color: #0A1128;
      text-transform: uppercase;
      margin-bottom: 2px;
    }

    /* Footer */
    .footer {
      border-top: 2px solid #0A1128;
      padding-top: 15px;
      margin-top: 30px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 11px;
      color: #4A5568;
    }

    /* Print Styles */
    @media print {
      body {
        padding: 10px;
        background: #FFFFFF;
      }
      .no-print {
        display: none;
      }
      .plan-card.featured {
        background: #0A1128 !important;
        color: #FFFFFF !important;
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    
    <!-- Top Header -->
    <header class="header">
      <div class="logo-box">
        <div class="star-badge">★</div>
        <div>
          <div class="brand-title">DOG STAR</div>
          <div class="brand-subtitle">Happy Dogs. Happy Owners.</div>
        </div>
      </div>
      <div class="contact-box">
        <div class="phone-highlight">📞 ${BUSINESS_PHONE_FORMATTED}</div>
        <div class="meta-text">${BUSINESS_EMAIL} | Daily 6:00 AM – 9:00 PM</div>
      </div>
    </header>

    <!-- Pricing Plans Section -->
    <h2 class="section-title">Official Pricing & Riding Plans</h2>
    <div class="pricing-grid">
      ${PRICING_PLANS.map(plan => `
        <div class="plan-card ${plan.isBestValue ? 'featured' : ''}">
          <div>
            ${plan.badge ? `<span class="plan-badge">${plan.badge}</span>` : ''}
            <div class="plan-title">${plan.name}</div>
            <div class="plan-price">₹${plan.price.toLocaleString('en-IN')}<span style="font-size: 11px; font-weight: normal;"> / ${plan.period || 'session'}</span></div>
            <p style="font-size: 10px; opacity: 0.9; margin-bottom: 8px;">${plan.description}</p>
          </div>
          <ul class="plan-features">
            ${plan.features.slice(0, 4).map(f => `<li>${f}</li>`).join('')}
          </ul>
        </div>
      `).join('')}
    </div>

    <!-- Core Services -->
    <h2 class="section-title">Comprehensive Pet Care Services</h2>
    <div class="services-grid">
      ${ADDITIONAL_SERVICES.map(srv => `
        <div class="service-item">
          <div class="service-name">${srv.title}</div>
          <div class="service-desc">${srv.shortDescription}</div>
        </div>
      `).join('')}
    </div>

    <!-- Certified Team -->
    <h2 class="section-title">Meet Our Dedicated Specialists</h2>
    <div class="team-grid">
      ${TEAM_MEMBERS.slice(0, 3).map(tm => `
        <div class="team-card">
          <div class="team-name">${tm.name}</div>
          <div class="team-role">${tm.role}</div>
          <div class="team-desc">${tm.description}</div>
        </div>
      `).join('')}
    </div>

    <!-- Our 5 Safety Pillars & Guarantees -->
    <h2 class="section-title">Our Safety & Quality Guarantees</h2>
    <div class="promises-list">
      ${SAFETY_PILLARS.slice(0, 4).map(p => `
        <div class="promise-box">
          <div class="promise-title">🛡️ ${p.title}</div>
          <div>${p.summary}</div>
        </div>
      `).join('')}
    </div>

    <!-- Footer & Booking Notice -->
    <footer class="footer">
      <div>
        <strong>DOG STAR Pet Care Services</strong><br>
        100% Background-Verified Staff • Real-Time WhatsApp Photo Updates • Insured Pacing
      </div>
      <div>
        <strong>Book Direct:</strong> ${BUSINESS_PHONE_FORMATTED}
      </div>
    </footer>

  </div>
</body>
</html>`;
}

