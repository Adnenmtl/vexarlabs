/*
  VexarLabs Footer - Creative & Bold Design with Newsletter
*/

import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import { Mail } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { trpc } from "@/lib/trpc";

export default function Footer() {
  const { t } = useLanguage();
  const { executeRecaptcha } = useGoogleReCaptcha();
  const verifyRecaptcha = trpc.recaptcha.verify.useMutation();
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate email
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error(t('newsletter.invalidEmail'));
      return;
    }

    setIsSubscribing(true);
    
    try {
      // Execute reCAPTCHA verification
      if (!executeRecaptcha) {
        toast.error('reCAPTCHA not loaded. Please refresh the page.');
        setIsSubscribing(false);
        return;
      }
      
      const recaptchaToken = await executeRecaptcha('newsletter_subscribe');
      console.log('reCAPTCHA token:', recaptchaToken);
      
      // Verify reCAPTCHA token with backend
      const verifyResult = await verifyRecaptcha.mutateAsync({
        token: recaptchaToken,
        action: 'newsletter_subscribe',
      });
      
      if (!verifyResult.success) {
        toast.error('reCAPTCHA verification failed. Please try again.');
        setIsSubscribing(false);
        return;
      }
      
      console.log('reCAPTCHA verified. Score:', verifyResult.score);
      
      // TODO: Send email to your newsletter service (Mailchimp, SendGrid, etc.)
      toast.success(t('newsletter.success'));
      setEmail("");
      setIsSubscribing(false);
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      toast.error(t('newsletter.error'));
      setIsSubscribing(false);
    }
  };

  return (
    <footer className="border-t-2 border-orange-100 mt-auto bg-gradient-to-br from-slate-50 to-white">
      {/* Newsletter Section */}
      <div className="border-b border-slate-200">
        <div className="container py-8 md:py-12">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full mb-4">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
              {t('newsletter.title')}
            </h3>
            <p className="text-sm md:text-base text-slate-600 mb-6">
              {t('newsletter.description')}
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('newsletter.placeholder')}
                className="flex-1 px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-orange-500 focus:outline-none text-sm"
                disabled={isSubscribing}
              />
              <button
                type="submit"
                disabled={isSubscribing}
                className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-lg transition-all shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed text-sm whitespace-nowrap"
              >
                {t('newsletter.button')}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="container py-8 md:py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
          <div className="flex flex-col items-center md:items-start gap-3 md:gap-4">
            <img 
              src="/images/logo-vexarlabs.png" 
              alt="VexarLabs" 
              className="h-6 md:h-8 w-auto object-contain"
            />
            <span className="text-xs md:text-sm text-slate-600 text-center md:text-left">
              © {new Date().getFullYear()} VexarLabs. {t('footer.tagline')}
            </span>
          </div>
          <nav className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 md:gap-6">
            <Link 
              href="/privacy" 
              className="text-xs md:text-sm font-medium text-slate-600 hover:text-orange-600 transition-colors"
            >
              {t('footer.privacy')}
            </Link>
            <Link 
              href="/terms" 
              className="text-xs md:text-sm font-medium text-slate-600 hover:text-orange-600 transition-colors"
            >
              {t('footer.terms')}
            </Link>
            <a 
              href="mailto:contact@vexarlabs.com" 
              className="text-xs md:text-sm font-semibold text-orange-600 hover:text-orange-700 transition-colors"
            >
              contact@vexarlabs.com
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
