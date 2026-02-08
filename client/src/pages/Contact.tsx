/*
  VexarLabs - Contact Page
  Professional contact form with VexarLabs creative style
*/

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { useLanguage } from "@/contexts/LanguageContext";
import { Mail, MapPin, Clock, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import emailjs from '@emailjs/browser';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

export default function Contact() {
  const { t } = useLanguage();
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Execute reCAPTCHA verification
      if (!executeRecaptcha) {
        toast.error('reCAPTCHA not loaded. Please refresh the page.');
        setIsSubmitting(false);
        return;
      }
      
      const recaptchaToken = await executeRecaptcha('contact_form');
      console.log('reCAPTCHA token:', recaptchaToken);
      // In production, send this token to your backend for verification

      // EmailJS configuration
      // Replace these with your actual EmailJS credentials from https://www.emailjs.com/
      const serviceId = 'YOUR_SERVICE_ID';
      const templateId = 'YOUR_TEMPLATE_ID';
      const publicKey = 'YOUR_PUBLIC_KEY';

      // Prepare template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company || 'N/A',
        subject: formData.subject,
        message: formData.message,
        to_email: 'contact@vexarlabs.com',
      };

      // Send email via EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      // Success
      setSubmitStatus('success');
      toast.success(t('contact.form.success'));
      setFormData({
        name: "",
        email: "",
        company: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      // Error
      console.error('EmailJS error:', error);
      setSubmitStatus('error');
      toast.error(t('contact.form.error'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead page="home" />
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-orange-50 via-white to-cyan-50 pt-24 md:pt-32 pb-12 md:pb-16 overflow-hidden">
          {/* Decorative shapes */}
          <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-40 h-40 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full opacity-20 blur-3xl"></div>
          
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold mb-4 md:mb-6">
                {t('contact.subtitle')}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
                {t('contact.title')}
              </h1>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                {t('contact.description')}
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                      {t('contact.form.name')}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-orange-500 focus:outline-none transition-colors"
                      placeholder={t('contact.form.name.placeholder')}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                      {t('contact.form.email')}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-orange-500 focus:outline-none transition-colors"
                      placeholder={t('contact.form.email.placeholder')}
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-slate-700 mb-2">
                      {t('contact.form.company')}
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-orange-500 focus:outline-none transition-colors"
                      placeholder={t('contact.form.company.placeholder')}
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-slate-700 mb-2">
                      {t('contact.form.subject')}
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-orange-500 focus:outline-none transition-colors"
                      placeholder={t('contact.form.subject.placeholder')}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                      {t('contact.form.message')}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-orange-500 focus:outline-none transition-colors resize-none"
                      placeholder={t('contact.form.message.placeholder')}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-bold hover:shadow-coral hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        {t('contact.form.sending')}
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        {t('contact.form.submit')}
                      </>
                    )}
                  </button>

                  {/* Success/Error Messages */}
                  {submitStatus === 'success' && (
                    <div className="flex items-start gap-3 p-4 bg-green-50 border-2 border-green-200 rounded-xl">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-green-700">{t('contact.form.success')}</p>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="flex items-start gap-3 p-4 bg-red-50 border-2 border-red-200 rounded-xl">
                      <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-red-700">{t('contact.form.error')}</p>
                    </div>
                  )}
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-white border-2 border-slate-100">
                  <h3 className="text-2xl font-bold mb-6">{t('contact.info.title')}</h3>
                  
                  <div className="space-y-6">
                    {/* Email */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center flex-shrink-0 shadow-coral">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-500 mb-1">{t('contact.info.email')}</p>
                        <a href="mailto:contact@vexarlabs.com" className="text-lg font-semibold text-slate-900 hover:text-orange-600 transition-colors">
                          contact@vexarlabs.com
                        </a>
                      </div>
                    </div>

                    {/* Location */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center flex-shrink-0 shadow-cyan">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-500 mb-1">{t('contact.info.location')}</p>
                        <p className="text-lg font-semibold text-slate-900">{t('contact.info.location.value')}</p>
                      </div>
                    </div>

                    {/* Response Time */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center flex-shrink-0 shadow-coral">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-500 mb-1">{t('contact.info.response')}</p>
                        <p className="text-lg font-semibold text-slate-900">{t('contact.info.response.value')}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
