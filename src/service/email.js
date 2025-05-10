import ejs from 'ejs';
import nodemailer from 'nodemailer';
import path from 'path';
import { getEnv } from '../config/safe-env.js';

export class EmailService {
  /** @type {EmailService} */
  static instance;
  transporter;
  emailFrom;
  emailActive;

  constructor() {
    const emailUser = getEnv('EMAIL_USER');
    const emailPassword = getEnv('EMAIL_PASSWORD');
    const emailPortParsed = getEnv('EMAIL_PORT');
    const emailHost = getEnv('EMAIL_HOST');
    const emailFrom = getEnv('EMAIL_FROM');
    const emailActive = true;
    const secure = emailPortParsed === '465';
    this.emailFrom = emailFrom;
    this.emailActive = emailActive;
    this.transporter = nodemailer.createTransport({
      host: emailHost,
      port: Number(emailPortParsed),
      secure: secure,
      auth: {
        user: emailUser,
        pass: emailPassword,
      },
    });
  }

  static getInstance() {
    if (!EmailService.instance) {
      EmailService.instance = new EmailService();
    }
    return EmailService.instance;
  }

  /**
   * @param {Object} param0
   * @param {string} param0.to
   * @param {string} param0.subject
   * @param {string} [param0.text]
   * @param {string} param0.html
   * @returns {Promise<{success: boolean}>}
   * */
  async sendEmail({ to, subject, text, html }) {
    try {
      if (!this.emailActive) {
        return { success: true };
      }
      await this.transporter.sendMail({
        from: this.emailFrom,
        to,
        subject,
        text,
        html,
      });
      return { success: true };
    } catch (error) {
      console.error('Error sending email:', error);
      return { success: false };
    }
  }

  /**
   * @param {Object} param0
   * @param {string} param0.name
   * @param {string} param0.email
   * @param {string} param0.otp
   * @param {string} param0.userId
   * @returns {Promise<{success: boolean}>}
   * */
  async sendOtpEmail({ name, email, otp, userId }) {
    console.log('OTP', otp);
    const templatePath = path.join(process.cwd(), 'email-templates', 'otp.ejs');
    const html = await ejs.renderFile(templatePath, {
      name,
      otp,
      verificationUrl: `${getEnv('CLIENT_URL')}/auth/otp-verification?user-id=${userId}`,
    });
    return this.sendEmail({
      to: email,
      subject: 'You requested an OTP',
      text: `Hello ${name}, your OTP is ${otp}.`, // Adding a default text value
      html: html,
    });
  }

  /**
   * @param {Object} param0
   * @param {string} param0.name
   * @param {string} param0.email
   * @param {string} param0.token
   * @param {string} param0.userId
   * @returns {Promise<{success: boolean}>}
   * */
  async sendResetPasswordEmail({ name, email, token, userId }) {
    const templatePath = path.join(process.cwd(), 'email-templates', 'reset-password.ejs');
    const html = await ejs.renderFile(templatePath, {
      name,
      resetUrl: `${getEnv('CLIENT_URL')}/auth/reset-password?token=${token}&user-id=${userId}`,
    });
    return this.sendEmail({
      to: email,
      subject: 'You requested a password reset',
      text: `Hello ${name}, you requested a password reset.`, // Adding a default text value
      html: html,
    });
  }
}
