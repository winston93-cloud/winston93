import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, message: 'Method Not Allowed' })
  }

  const { parentName, studentName, email, message, phone } = req.body || {}

  if (!parentName || !studentName || !email || !phone) {
    return res.status(400).json({ ok: false, message: 'Campos requeridos faltantes' })
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: Boolean(process.env.SMTP_SECURE === 'true'),
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    const toEmail = process.env.CONTACT_TO || process.env.SMTP_USER || ''

    await transporter.sendMail({
      from: `Winston Contacto <${process.env.SMTP_USER}>`,
      to: toEmail,
      subject: 'Nuevo contacto desde el sitio web',
      replyTo: email,
      html: `
        <h2>Nuevo contacto</h2>
        <p><strong>Padre/Tutor:</strong> ${parentName}</p>
        <p><strong>Aspirante:</strong> ${studentName}</p>
        <p><strong>Correo:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${(message || '').replace(/\n/g, '<br/>')}</p>
      `,
    })

    return res.status(200).json({ ok: true })
  } catch (error: any) {
    console.error('Email error:', error)
    return res.status(500).json({ ok: false, message: 'No se pudo enviar el correo' })
  }
} 