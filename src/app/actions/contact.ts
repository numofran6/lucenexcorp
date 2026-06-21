'use server'

import nodemailer from 'nodemailer'

export type ContactState = {
  status: 'idle' | 'success' | 'error'
  message: string
}

const EMAIL_RE = /^[^\s@]{1,64}@[^\s@]+\.[^\s@]{2,}$/

function sanitize(value: unknown, maxLen: number): string {
  return String(value ?? '')
    .trim()
    .slice(0, maxLen)
    .replace(/[\x00-\x08\x0b\x0c\x0e-\x1f\x7f]/g, '')
}

export async function sendContactEmail(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const email   = sanitize(formData.get('email'),   254)
  const subject = sanitize(formData.get('subject'), 200)
  const message = sanitize(formData.get('message'), 5000)

  if (!email || !EMAIL_RE.test(email))
    return { status: 'error', message: 'Please provide a valid email address.' }
  if (!subject)
    return { status: 'error', message: 'Subject is required.' }
  if (message.length < 10)
    return { status: 'error', message: 'Message must be at least 10 characters.' }

  const { SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS } = process.env

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.error('[contact] SMTP env vars not configured')
    return { status: 'error', message: 'Mail service is not configured. Please try again later.' }
  }

  const transport = nodemailer.createTransport({
    host:   SMTP_HOST,
    port:   Number(SMTP_PORT ?? 587),
    secure: SMTP_SECURE === 'true',
    auth:   { user: SMTP_USER, pass: SMTP_PASS },
  })

  const htmlMessage = message
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\n/g, '<br>')

  try {
    await transport.sendMail({
      from:    `"Lucenex Website" <${SMTP_USER}>`,
      to:      'admin@lucenexcorp.com',
      replyTo: email,
      subject: `[Contact] ${subject}`,
      text:    `From: ${email}\n\n${message}`,
      html: `
        <p><strong>From:</strong> ${email}</p>
        <hr>
        <p>${htmlMessage}</p>
      `,
    })
    return { status: 'success', message: 'sent' }
  } catch (err) {
    console.error('[contact] send failed', err)
    return { status: 'error', message: 'Something went wrong. Please try again later.' }
  }
}
