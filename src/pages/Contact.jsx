import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Send, Mail, MessageCircle, Loader2, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { base44 } from '@/api/base44Client';

const CONTENT = {
  en: {
    title: 'Contact',
    subtitle: 'Questions, feedback, or server setup help — reach out',
    backToHome: 'Back to home',
    form: {
      name: 'Your name',
      namePlaceholder: 'Steve',
      email: 'Your email',
      emailPlaceholder: 'you@example.com',
      subject: 'Subject',
      subjectPlaceholder: 'How can we help?',
      message: 'Message',
      messagePlaceholder: 'Tell us about your server, your question, or your feedback...',
      submit: 'Send message',
      sending: 'Sending...',
      success: 'Message sent! We\'ll get back to you soon.',
      error: 'Something went wrong. Please try again or join our Discord.',
    },
    methods: {
      discordTitle: 'Discord',
      discordDesc: 'Fastest way to reach us — join the community.',
      emailTitle: 'Email',
      emailDesc: 'For longer inquiries and server setup help.',
    },
  },
  de: {
    title: 'Kontakt',
    subtitle: 'Fragen, Feedback oder Hilfe beim Server-Setup — schreib uns',
    backToHome: 'Zurück zur Startseite',
    form: {
      name: 'Dein Name',
      namePlaceholder: 'Steve',
      email: 'Deine E-Mail',
      emailPlaceholder: 'du@example.com',
      subject: 'Betreff',
      subjectPlaceholder: 'Wie können wir helfen?',
      message: 'Nachricht',
      messagePlaceholder: 'Erzähl uns von deinem Server, deiner Frage oder deinem Feedback...',
      submit: 'Nachricht senden',
      sending: 'Wird gesendet...',
      success: 'Nachricht gesendet! Wir melden uns bald.',
      error: 'Etwas ist schiefgelaufen. Versuche es erneut oder trat unserem Discord bei.',
    },
    methods: {
      discordTitle: 'Discord',
      discordDesc: 'Schnellster Weg — tritt der Community bei.',
      emailTitle: 'E-Mail',
      emailDesc: 'Für längere Anfragen und Server-Setup-Hilfe.',
    },
  },
};

export default function Contact() {
  const { lang } = useLanguage();
  const c = CONTENT[lang] || CONTENT.en;
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await base44.integrations.Core.SendEmail({
        to: '404discnotfound@gmail.com',
        subject: `[404Warp Contact] ${form.subject || 'No subject'}`,
        body: `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
      });
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setStatus('error');
    }
  };

  const inputCls = "w-full bg-black/40 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-muted-foreground/50 focus:border-cyan-500/50 focus:outline-none transition-colors";

  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-cyan-400 transition-colors mb-8">
        <ArrowLeft className="w-4 h-4" /> {c.backToHome}
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-2 text-white">{c.title}</h1>
        <p className="text-lg text-muted-foreground mb-12">{c.subtitle}</p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <a href="https://discord.gg/gsQEWZScuX" target="_blank" rel="noreferrer" className="glass-panel glass-panel-hover rounded-xl p-5 flex flex-col gap-2">
            <MessageCircle className="w-6 h-6 text-purple-400" />
            <h3 className="font-heading font-semibold text-white">{c.methods.discordTitle}</h3>
            <p className="text-sm text-muted-foreground">{c.methods.discordDesc}</p>
          </a>
          <a href="mailto:404discnotfound@gmail.com" className="glass-panel glass-panel-hover rounded-xl p-5 flex flex-col gap-2">
            <Mail className="w-6 h-6 text-cyan-400" />
            <h3 className="font-heading font-semibold text-white">{c.methods.emailTitle}</h3>
            <p className="text-sm text-muted-foreground">{c.methods.emailDesc}</p>
          </a>
        </div>

        <form onSubmit={handleSubmit} className="glass-panel chromatic-border rounded-2xl p-6 md:p-8 space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-muted-foreground mb-1.5">{c.form.name}</label>
              <input name="name" value={form.name} onChange={handleChange} required placeholder={c.form.namePlaceholder} className={inputCls} />
            </div>
            <div>
              <label className="block text-xs text-muted-foreground mb-1.5">{c.form.email}</label>
              <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder={c.form.emailPlaceholder} className={inputCls} />
            </div>
          </div>
          <div>
            <label className="block text-xs text-muted-foreground mb-1.5">{c.form.subject}</label>
            <input name="subject" value={form.subject} onChange={handleChange} required placeholder={c.form.subjectPlaceholder} className={inputCls} />
          </div>
          <div>
            <label className="block text-xs text-muted-foreground mb-1.5">{c.form.message}</label>
            <textarea name="message" value={form.message} onChange={handleChange} required rows={5} placeholder={c.form.messagePlaceholder} className={inputCls} />
          </div>

          {status === 'success' && (
            <div className="flex items-center gap-2 text-sm text-green-400">
              <CheckCircle2 className="w-4 h-4" /> {c.form.success}
            </div>
          )}
          {status === 'error' && (
            <div className="flex items-center gap-2 text-sm text-pink-400">
              <span>{c.form.error}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={status === 'sending'}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium bg-cyan-500/20 border border-cyan-500/40 text-cyan-400 hover:bg-cyan-500/30 transition-colors disabled:opacity-50"
          >
            {status === 'sending' ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
            {status === 'sending' ? c.form.sending : c.form.submit}
          </button>
        </form>
      </motion.div>
    </div>
  );
}