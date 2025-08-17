import emailjs from '@emailjs/browser';

/**
 * Send email using EmailJS service.
 * Env vars (create .env file at project root):
 *  VITE_EMAILJS_SERVICE_ID=...
 *  VITE_EMAILJS_TEMPLATE_ID=...
 *  VITE_EMAILJS_PUBLIC_KEY=...
 * Template should expect: from_name, from_email, subject, message, reply_to.
 * @param {{ name:string; email:string; subject:string; message:string; }} data
 */
export async function sendEmail(data) {
  const serviceId =  'service_bmbpg3d';
  const templateId = 'template_hdrzjio';
  const publicKey = 'aKwTwsM2jmkeSX-oj';

  if (!serviceId || !templateId || !publicKey) {
    throw new Error('Email service not configured. Missing one of VITE_EMAILJS_SERVICE_ID / VITE_EMAILJS_TEMPLATE_ID / VITE_EMAILJS_PUBLIC_KEY.');
  }
  // Escape unsafe HTML
  const escape = (str = '') => str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

  // Build rich HTML version (bind to {{content}} in your EmailJS template)
  const htmlMessage = `
  <div style="font-family: system-ui, Arial, sans-serif; max-width:640px; margin:0 auto; padding:24px; background:#111827; color:#f3f4f6; border-radius:16px; line-height:1.55;">
    <h2 style="margin-top:0; font-size:20px; font-weight:600;">📩 New Message</h2>
    <div style="background:#1f2937; padding:18px 22px; border-radius:14px;">
      <p style="margin:0 0 14px; font-size:14px;">Hello <strong>${escape(data.name)}</strong>,</p>
      <p style="margin:0 0 16px; font-size:14px;">Thank you for reaching out. Here's a copy of your details:</p>
      <div style="margin:0 0 16px; font-size:14px;">
        <p style="margin:0 0 6px;">📧 <strong style="color:#8b5cf6;">Email:</strong> <a href="mailto:${escape(data.email)}" style="color:#60a5fa; text-decoration:none;">${escape(data.email)}</a></p>
        ${data.company ? `<p style=\"margin:0 0 6px;\">🏢 <strong style=\"color:#8b5cf6;\">Company:</strong> ${escape(data.company)}</p>` : ''}
        ${data.phone ? `<p style=\"margin:0 0 6px;\">📞 <strong style=\"color:#8b5cf6;\">Phone:</strong> ${escape(data.phone)}</p>` : ''}
        ${data.service ? `<p style=\"margin:0 0 6px;\">🛠️ <strong style=\"color:#8b5cf6;\">Service Needed:</strong> ${escape(data.service)}</p>` : ''}
        ${data.budget ? `<p style=\"margin:0 0 12px;\">💰 <strong style=\"color:#8b5cf6;\">Budget:</strong> ${escape(data.budget)}</p>` : ''}
        <p style="margin:0 0 6px;">📝 <strong style="color:#8b5cf6;">Subject:</strong> ${escape(data.subject)}</p>
      </div>
      <p style="margin:0 0 8px; font-size:14px;"><strong style="color:#8b5cf6;">Message:</strong></p>
      <blockquote style="margin:0; padding:14px 18px; background:#111827; border-left:4px solid #8b5cf6; border-radius:10px; font-style:italic; white-space:pre-wrap;">${escape(data.message)}</blockquote>
      <p style="margin:20px 0 0; font-size:14px;">I'll be in touch soon!<br/>— Portfolio Auto Reply</p>
    </div>
    <p style="margin:18px 0 0; font-size:12px; opacity:.7;">Email sent • ${new Date().toLocaleString()}</p>
  </div>`;

  // Provide both plain text & HTML; add duplicate subject field for flexibility in EmailJS template
  const templateParams = {
    from_name: data.name,
    from_email: data.email,
    reply_to: data.email,
    subject: data.subject,
    email_subject: data.subject,
    message: data.message,
    content: htmlMessage,
  simple_content: `You got a new message from ${escape(data.name)}:\n\n${data.message}\n\nEmail: ${data.email}\nSubject: ${data.subject}`,
    company: data.company || '',
    phone: data.phone || '',
    service: data.service || '',
    budget: data.budget || ''
  };

  try {
    const res = await emailjs.send(serviceId, templateId, templateParams, { publicKey });
    return res;
  } catch (err) {
    // Normalize common error shapes
    if (err?.text) {
      throw new Error(err.text);
    }
    if (err?.message) {
      throw new Error(err.message);
    }
    throw new Error('Unknown email sending error');
  }
}
