import { resendClient, sender } from "../lib/resend.js";
import { createWelcomeEmailTemplate } from "../emails/emailTemplates.js";

export const sendWelcomeEmail = async (email, name, clientURL) => {
  try {
    const resp = await resendClient.emails.send({
      from: `${sender.name} <${sender.email}>`,
      to: email,
      subject: "Welcome to Chatify!",
      html: createWelcomeEmailTemplate(name, clientURL),
    });

    // Resend SDK returns the sent message data; log full response for debugging
    console.log("Welcome Email sent successfully", resp);
    return resp;
  } catch (err) {
    // Log full error for debugging network/timeouts
    console.error("Error sending welcome email:", err && err.stack ? err.stack : err);
    throw err;
  }
};
