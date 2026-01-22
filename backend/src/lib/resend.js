import { Resend } from "resend";
import { ENV } from "./env.js";

let resendClientInstance;
if (!ENV.RESEND_API_KEY) {
  console.error("RESEND_API_KEY is not configured. Email sending will be disabled.");
  // create a dummy client that throws when used to provide a clearer runtime error
  resendClientInstance = {
    emails: {
      send: async () => {
        throw new Error("Resend API key is missing. Set RESEND_API_KEY in env to enable email sending.");
      },
    },
  };
} else {
  resendClientInstance = new Resend(ENV.RESEND_API_KEY);
}

export const resendClient = resendClientInstance;

export const sender = {
  email: ENV.EMAIL_FROM,
  name: ENV.EMAIL_FROM_NAME,
};
