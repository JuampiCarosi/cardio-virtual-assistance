"use client";

import { sendNewContactEmail } from "@/app/actions/emails";
import { useState } from "react";
import { toast } from "sonner";

export function ContactForm() {
  const [pending, setPending] = useState(false);

  const handleAction = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setPending(true);
    const input = new FormData(event.currentTarget);
    const result = await sendNewContactEmail(input);
    if (result.success) {
      toast.success("Email sent successfully");
    } else {
      toast.error(
        result.error ??
          "Something went wrong, please try contacting us via email",
      );
    }
    setPending(false);
    const form = document.getElementById("contact-form") as HTMLFormElement;
    if (form) {
      form.reset();
    }
  };

  return (
    <form
      id="contact-form"
      onSubmit={handleAction}
      className="flex flex-col gap-4"
    >
      <div>
        <label htmlFor="name" className="text-gray-900">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your name..."
          className="m w-full rounded-md border-0 bg-[#E5D5D5] px-4 py-2 text-gray-900 placeholder:text-gray-500"
        />
      </div>
      <div>
        <label htmlFor="email" className="text-gray-900">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Example@gmail.com"
          className="mt-1 w-full rounded-md border-0 bg-[#E5D5D5] px-4 py-2 text-gray-900 placeholder:text-gray-500"
        />
      </div>
      <div>
        <label htmlFor="subject" className="text-gray-900">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          placeholder="Title..."
          className="mt-1 w-full rounded-md border-0 bg-[#E5D5D5] px-4 py-2 text-gray-900 placeholder:text-gray-500"
        />
      </div>
      <div>
        <label htmlFor="message" className="text-gray-900">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Type here..."
          rows={6}
          className="mt-1 w-full rounded-md border-0 bg-[#E5D5D5] px-4 py-2 text-gray-900 placeholder:text-gray-500"
        />
      </div>
      <button
        disabled={pending}
        type="submit"
        className="mt-4 rounded-full bg-[#891C1C] px-8 py-3 text-lg font-medium text-white transition-colors hover:bg-[#6d1616] disabled:opacity-50"
      >
        {pending ? "Sending..." : "Send now"}
      </button>
    </form>
  );
}
