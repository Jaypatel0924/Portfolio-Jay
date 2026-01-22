
import React, { useState } from "react";
import { motion } from "framer-motion";

import {
  Mail,
  Github,
  Linkedin,
  Instagram,
  Download,
  Send,
  User,
  MessageSquare,
} from "lucide-react";

import profileImg from "../assets/trophy.png"; // avatar image
import cvFile from "../assets/resume2.pdf"; // CV/resume file

// OPTIONAL: Add your web3forms access key
const WEB3FORMS_ACCESS_KEY = ""; 

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    hp: "", 
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  function openGmailCompose({ to, subject, body }) {
    const gmailUrl =
      "https://mail.google.com/mail/?view=cm&fs=1" +
      `&to=${encodeURIComponent(to)}` +
      `&su=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    const w = window.open(gmailUrl, "_blank", "noopener,noreferrer");
    if (!w) {
      window.location.href = `mailto:${encodeURIComponent(
        to
      )}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }
  }

  const handleDirectEmail = () => {
    const to = "jaypatel2324.job@gmail.com";
    const subject = "Hello Jay — quick chat";
    const body = [
      "Hi Jay,",
      "",
      "I found your portfolio and would like to talk about...",
      "",
      "Regards,",
      "[Your name]",
    ].join("\n");
    openGmailCompose({ to, subject, body });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: "error", text: "Please fill name, email and message." });
      window.setTimeout(() => setStatus(null), 4000);
      return;
    }
    if (formData.hp) return;

    setIsSubmitting(true);
    setStatus(null);

    const subject = formData.subject?.trim() || `Portfolio message from ${formData.name}`;
    const body = [
      `Hi Jay,`,
      ``,
      `You received a message via the portfolio contact form:`,
      ``,
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      ``,
      `Message:`,
      `${formData.message}`,
      ``,
      `---`,
      `This message was initiated from the portfolio (client-side).`,
    ].join("\n");

    if (WEB3FORMS_ACCESS_KEY) {
      try {
        const payload = {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          access_key: WEB3FORMS_ACCESS_KEY,
          subject,
          hp: formData.hp,
          source: "portfolio-contact",
        };

        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(payload),
        });

        const json = await res.json();
        if (json.success) {
          setStatus({ type: "success", text: "Message sent — thanks! I'll reply soon." });
          setFormData({ name: "", email: "", message: "", hp: "" });
        } else {
          setStatus({ type: "error", text: "Could not send (Web3Forms). Opening email client..." });
          openGmailCompose({ to: "jaypatel2324.job@gmail.com", subject, body });
        }
      } catch (err) {
        setStatus({ type: "error", text: "Network error. Opening email client..." });
        openGmailCompose({ to: "jaypatel2324.job@gmail.com", subject, body });
      } finally {
        setIsSubmitting(false);
        window.setTimeout(() => setStatus(null), 5000);
      }
    } else {
      openGmailCompose({ to: "jaypatel2324.job@gmail.com", subject, body });
      setIsSubmitting(false);
      setStatus({ type: "success", text: "Compose window opened. Press Send to deliver." });
      setFormData({ name: "", email: "", message: "", hp: "" });
      window.setTimeout(() => setStatus(null), 7000);
    }
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen py-24 px-6 md:px-12 lg:px-20 bg-[#020617] overflow-hidden"
    >
      {/* --------------------------------------------------
          HIDDEN SEO HIRING CONTEXT
          -------------------------------------------------- */}
      <div style={{
          position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px',
          overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', border: 0
      }}>
        <h2>Hire Jay Patel - Full Stack MERN Developer</h2>
        <p>
          Contact Jay Patel for freelance web development projects, full-time hiring, or 3D web consulting. 
          Based in <strong>Ahmedabad, Gujarat</strong> and available for remote work globally.
        </p>
        <p><strong>Services:</strong> Custom MERN Stack Application, 3D Portfolio Creation, E-commerce Development (React/Node), Enterprise Dashboard Design.</p>
        <p><strong>Contact Email:</strong> jaypatel2324.job@gmail.com</p>
        <p><strong>Connect:</strong> Reach out on LinkedIn or Instagram (@jayypatelll24) for collaborations.</p>
      </div>

      {/* Background ambience */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute bottom-0 right-0 h-[600px] w-[600px] rounded-full bg-emerald-500/6 blur-[120px]" />
        <div className="absolute top-14 left-[-120px] h-[420px] w-[420px] rounded-full bg-cyan-500/6 blur-[100px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40" />
      </div>

      <div className="mx-auto max-w-6xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Left: intro, avatar, socials */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
          >
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-emerald-400">
                07 · Contact
              </p>
              <h2 className="mt-3 text-4xl md:text-5xl font-bold text-white leading-tight">
                Let’s build something{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                  legendary.
                </span>
              </h2>
              <p className="mt-4 text-slate-400 text-lg max-w-md">
                If you have a project, an opportunity or a question — reach out.
                Email is fastest. You can also download my CV or connect on
                socials below.
              </p>
            </div>

            {/* --- FIX: Changed layout to Flex Column for mobile, Row for desktop --- */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 text-center md:text-left">
              {/* Avatar card */}
              <div className="relative group shrink-0">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-emerald-400/10 to-cyan-300/8 opacity-40 blur-sm transition-all group-hover:opacity-80" />
                <div className="relative overflow-hidden rounded-full w-28 h-28 md:w-32 md:h-32 border border-white/8 bg-slate-900">
                  <img
                    src={profileImg}
                    /* SEO: Optimized Alt Text for Hiring Intent */
                    alt="Jay Patel - Hire Full Stack Developer Ahmedabad"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    draggable={false}
                  />
                </div>
                <div className="absolute bottom-2 right-2 h-4 w-4 rounded-full bg-emerald-400 ring-2 ring-slate-900 animate-pulse" title="Available for Hire" />
              </div>

              <div>
                <p className="text-lg font-semibold text-slate-100">Jay Patel</p>
                <p className="text-sm text-slate-400">Full Stack Web Developer</p>

                {/* Buttons: Added flex-wrap and justify-center for mobile */}
                <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-3">
                  <button
                    onClick={handleDirectEmail}
                    className="inline-flex items-center gap-2 rounded-md border border-white/8 bg-black/50 px-3 py-2 text-sm text-slate-100 hover:bg-white/5 transition-all"
                  >
                    <Mail className="h-4 w-4 text-emerald-300" />
                    Email
                  </button>

                  <a
                    href={cvFile}
                    download="Jay_Patel_CV"
                    className="inline-flex items-center gap-2 rounded-md border border-white/8 bg-black/50 px-3 py-2 text-sm text-slate-100 hover:bg-white/5 transition-all"
                  >
                    <Download className="h-4 w-4 text-slate-200" />
                    Download CV
                  </a>
                </div>

                {/* Socials: Center on mobile, left on desktop */}
                <div className="mt-4 flex justify-center md:justify-start gap-3">
                  <SocialLink href="https://github.com/Jaypatel0924/" label="GitHub Profile - Jay Patel" icon={<Github className="h-5 w-5" />} />
                  <SocialLink href="https://www.linkedin.com/in/jay-patel-37a806262" label="LinkedIn Profile - Jay Patel" icon={<Linkedin className="h-5 w-5" />} />
                  <SocialLink href="https://www.instagram.com/jayypatelll24/#" label="Instagram Profile - Jay Patel" icon={<Instagram className="h-5 w-5" />} />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="rounded-3xl border border-white/8 bg-white/5 p-6 md:p-10 backdrop-blur-xl shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">Send a message</h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <label style={{ display: "none" }}>
                  Keep this empty
                  <input name="hp" value={formData.hp} onChange={handleChange} autoComplete="off" />
                </label>

                <div>
                  <label htmlFor="name" className="text-sm text-slate-300 block mb-1">Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-slate-500" />
                    <input
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full rounded-xl bg-black/40 border border-white/8 px-12 py-3 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-emerald-400"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="text-sm text-slate-300 block mb-1">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-500" />
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email"
                      className="w-full rounded-xl bg-black/40 border border-white/8 px-12 py-3 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-emerald-400"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="text-sm text-slate-300 block mb-1">Message</label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-slate-500" />
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project, job opportunity, or just say hi..."
                      className="w-full rounded-xl bg-black/40 border border-white/8 px-12 py-3 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-emerald-400 resize-none"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-black shadow hover:brightness-95 disabled:opacity-60"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    {!isSubmitting && <Send className="h-4 w-4 text-black" />}
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData({ name: "", email: "", message: "", hp: "" })}
                    className="rounded-lg border border-white/8 bg-black/30 px-4 py-2 text-sm text-slate-200 hover:bg-white/4"
                  >
                    Reset
                  </button>
                </div>

                {status && (
                  <div
                    className={`mt-2 p-3 rounded-md text-sm ${
                      status.type === "success" ? "bg-emerald-900/40 text-emerald-200" : "bg-rose-900/40 text-rose-200"
                    }`}
                  >
                    {status.text}
                  </div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const SocialLink = ({ href, icon, label }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center rounded-full border border-white/8 bg-black/30 p-2 text-slate-200 hover:bg-emerald-500/10 hover:text-emerald-300 transition"
      /* SEO: Added explicit aria-label for accessibility/crawlers */
      aria-label={label}
      title={label}
    >
      {icon}
    </a>
  );
};

export default Contact;