import nodemailer from "nodemailer";
import * as handlebars from "handlebars";
import { signupTemplate } from "./templates/signuptemplate";
import { welcomeTemplate } from "./templates/welcome";

export async function sendMail({
  to,
  name,
  subject,
  body,
}) {
  const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
    },
  });
  try {
    const testResult = await transport.verify();
    console.log(testResult);
  } catch (error) {
    console.error({ error });
    return;
  }

  try {
    const sendResult = await transport.sendMail({
      from: SMTP_EMAIL,
      to,
      subject,
      html: body,
    });
    console.log(sendResult);
  } catch (error) {
    console.log(error);
  }
}

export function compileWelcomeTemplate(name, url) {
  const template = handlebars.compile(signupTemplate);
  const htmlBody = template({
    name: name,
    url: url,
  });
  return htmlBody;
}

export function compileContactTemplate(name, url) {
  const template = handlebars.compile(welcomeTemplate);
  const htmlBody = template({
    name: name,
    url: url,
  });
  return htmlBody;
}
