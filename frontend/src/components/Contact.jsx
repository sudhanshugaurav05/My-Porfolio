import React, { useState } from "react";
import { Send, Mail } from "lucide-react";
import {
  FaGithub as Github,
  FaLinkedin as Linkedin,
} from "react-icons/fa";
import contactImg from "../assets/contact.png";

const CONTACT_EMAIL = "sudhanshu29gaurav@gmail.com";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [draftUrl, setDraftUrl] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));

    setStatus("");
    setDraftUrl("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const name = form.name.trim();
    const email = form.email.trim();
    const subject = form.subject.trim();
    const message = form.message.trim();

    if (!name || !email || !subject || !message) {
      setStatus("Please complete all fields.");
      return;
    }

    const params = new URLSearchParams({
      view: "cm",
      fs: "1",
      to: CONTACT_EMAIL,
      su: subject,
      body:
        `Name: ${name}\n` +
        `Contact email: ${email}\n\n` +
        message,
    });

    const gmailUrl = `https://mail.google.com/mail/?${params.toString()}`;

    setDraftUrl(gmailUrl);

    window.open(gmailUrl, "_blank", "noopener,noreferrer");

    setStatus(
      "Complete your message by clicking Send in Gmail. If Gmail did not open, use the link below."
    );
  };

  const inputClass =
    "w-full rounded-xl border border-gray-200 bg-white/70 px-4 py-3 " +
    "text-gray-900 placeholder:text-gray-400 outline-none " +
    "transition-colors focus:border-red-500 focus:ring-2 focus:ring-red-500/20 " +
    "dark:border-gray-700 dark:bg-gray-950/50 dark:text-white";

  const labelClass =
    "mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300";

  const socialClass =
    "flex h-12 w-12 items-center justify-center rounded-full " +
    "border border-red-500/30 bg-red-500/10 text-red-600 " +
    "transition-colors hover:bg-red-600 hover:text-white " +
    "dark:text-red-400 dark:hover:text-white";

  return (
    <section
      id="contact"
      className="relative flex min-h-screen items-center overflow-hidden pt-20 pb-32"
    >
      <div className="container mx-auto px-4 sm:px-8 lg:px-14">
        <div className="mb-12 text-center" data-aos="fade-up">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-4 py-1.5">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-600" />

            <span className="text-sm font-medium text-red-600 dark:text-red-300">
              Let's Connect
            </span>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl dark:text-white">
            Get In{" "}
            <span className="text-red-600 dark:text-red-400">
              Touch
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-gray-700 dark:text-gray-300">
            Have a project in mind or an opportunity to share? I'd love to
            hear from you. Send me a message and let's start a conversation.
          </p>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <form
            onSubmit={handleSubmit}
            className="order-2 rounded-2xl border border-red-500/20 bg-white/50 p-6 shadow-xl backdrop-blur-sm sm:p-8 lg:order-1 dark:bg-gray-900/50"
            data-aos="fade-right"
          >
            <div className="mb-5">
              <label htmlFor="contact-name" className={labelClass}>
                Name
              </label>

              <input
                id="contact-name"
                type="text"
                name="name"
                autoComplete="name"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                required
                maxLength={100}
                className={inputClass}
              />
            </div>

            <div className="mb-5">
              <label htmlFor="contact-email" className={labelClass}>
                Email
              </label>

              <input
                id="contact-email"
                type="email"
                name="email"
                autoComplete="email"
                placeholder="you@gmail.com"
                value={form.email}
                onChange={handleChange}
                required
                maxLength={254}
                className={inputClass}
              />
            </div>

            <div className="mb-5">
              <label htmlFor="contact-subject" className={labelClass}>
                Subject
              </label>

              <input
                id="contact-subject"
                type="text"
                name="subject"
                placeholder="Project enquiry, collaboration, or opportunity"
                value={form.subject}
                onChange={handleChange}
                required
                maxLength={150}
                className={inputClass}
              />
            </div>

            <div className="mb-6">
              <label htmlFor="contact-message" className={labelClass}>
                Message
              </label>

              <textarea
                id="contact-message"
                name="message"
                placeholder="Tell me about your projects/ideas or opportunity..."
                value={form.message}
                onChange={handleChange}
                required
                rows={2}
                maxLength={2000}
                className={`${inputClass} resize-y`}
              />
            </div>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-linear-to-r from-red-600 to-red-800 px-8 py-3 font-semibold text-white transition-shadow duration-300 hover:shadow-[0_0_30px_rgba(220,38,38,0.4)]"
            >
              <Send size={18} />
              Send Message
            </button>

            <p
              role="status"
              aria-live="polite"
              className="mt-3 text-sm text-gray-700 dark:text-gray-300"
            >
              {status}
            </p>

            {draftUrl && (
              <a
                href={draftUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-sm font-medium text-red-600 underline dark:text-red-400"
              >
                Open Gmail draft
              </a>
            )}
          </form>

          <div
            className="order-1 flex flex-col items-center lg:order-2"
            data-aos="fade-left"
          >
            <div className="group relative w-64 sm:w-80 lg:w-96">
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-full bg-linear-to-r from-red-600 to-red-800 opacity-30 blur-2xl"
              />

              <img
                src={contactImg}
                alt="Developer illustration"
                className="relative z-10 h-auto w-full rounded-full object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="mt-8 flex items-center gap-4">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                aria-label="Email me"
                className={socialClass}
              >
                <Mail size={21} />
              </a>

              {[
                {
                  label: "GitHub",
                  href: "https://github.com/sudhanshugaurav05",
                  Icon: Github,
                },
                {
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/in/sudhanshugauravv/",
                  Icon: Linkedin,
                },
              ].map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={socialClass}
                >
                  <Icon size={21} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;