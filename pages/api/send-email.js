import nodemailer from 'nodemailer';
import smtpConfig from '../../smtpConfig';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport(smtpConfig);

    const mailOptions = {
      from: email,
      to: 'tatiana.stahli@gmail.com',
      subject: 'Nouveau message de contact',
      text: `Nom: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).end('E-mail envoyé avec succès.');
    } catch (error) {
      console.error(error);
      res.status(500).end('Erreur lors de l\'envoi de l\'e-mail.');
    }
  } else {
    res.status(405).end(); // Méthode non autorisée
  }
}
