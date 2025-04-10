"use server";
import { NewContactEmail } from "@/emails/new-contact";
import { env } from "@/env";
import { type } from "arktype";
import { Resend } from "resend";

const resend = new Resend(env.RESEND_API_KEY);

const Contact = type({
  name: "string | undefined",
  email: "string | undefined",
  subject: "string | undefined",
  message: "string | undefined",
});

export type Contact = typeof Contact.infer;

export async function sendNewContactEmail(input: FormData) {
  const formObject = Object.fromEntries(input.entries());
  const validated = Contact(formObject);

  if (validated instanceof type.errors) {
    return { success: false, error: validated.summary };
  }

  const { error } = await resend.emails.send({
    from: "cva@juampicarosi.com.ar",
    to: ["juampicarosi@gmail.com"],
    subject: validated.subject
      ? `[NUEVO CONTACTO] ${validated.subject}`
      : `[NUEVO CONTACTO]`,
    react: NewContactEmail(validated),
  });

  if (error) {
    return { success: false, error: error.message };
  }

  return { success: true };
}
