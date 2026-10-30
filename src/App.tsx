import React, { useState, useEffect } from 'react';
import { Language, ProductItem } from './types';
import { TRANSLATIONS, CONTACT_LINKS, BRAND_COLORS } from './data/content';
import { Header } from './components/Header';
import { ProfileSection } from './components/ProfileSection';
import { SocialPills } from './components/SocialPills';
import { HeroActionCard } from './components/HeroActionCard';
import { ProductSection } from './components/ProductSection';
import { StoryCard } from './components/StoryCard';
import { WhatsAppCards } from './components/WhatsAppCards';
import { InstagramGrid } from './components/InstagramGrid';
import { BioModal } from './components/BioModal';
import { ProductDetailModal } from './components/ProductDetailModal';
import { QrCodeModal } from './components/QrCodeModal';
import { Footer } from './components/Footer';
import { Check } from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState<Language>('pt');
  const [isBioOpen, setIsBioOpen] = useState<boolean>(false);
  const [isQrOpen, setIsQrOpen] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Load language preference from browser or default to pt
  useEffect(() => {
    try {
      const savedLang = localStorage.getItem('nutrimarmitas_lang') as Language;
      if (savedLang === 'pt' || savedLang === 'en') {
        setLang(savedLang);
      }
    } catch {
      // ignore
    }
  }, []);

  const handleSelectLang = (newLang: Language) => {
    setLang(newLang);
    try {
      localStorage.setItem('nutrimarmitas_lang', newLang);
    } catch {
      // ignore
    }
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const handleShare = async () => {
    const shareData = {
      title: "NutriMarmitas by Valquiria Santos",
      text:
        lang === 'pt'
          ? "Conheça as marmitas saudáveis, práticas e nutritivas da NutriMarmitas por Valquiria Santos!"
          : "Discover wholesome, high-protein healthy meal prep by Valquiria Santos!",
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        if ((err as Error).name !== 'AbortError') {
          copyToClipboard();
        }
      }
    } else {
      copyToClipboard();
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      showToast(TRANSLATIONS[lang].copiedToast);
    } catch {
      showToast(window.location.href);
    }
  };

  return (
    <div
      id="app-root-container"
      className="min-h-screen w-full bg-[#f5f7f3] text-[#1c2620] flex justify-center items-start sm:py-6 selection:bg-[#2E4E18] selection:text-white relative overflow-x-hidden"
    >
      {/* Background Ambience / Botanical Soft Organic Lighting */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Deep Forest Green top glow */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[750px] h-[550px] bg-gradient-to-b from-[#2E4E18]/12 via-[#2E4E18]/4 to-transparent blur-3xl" />
        {/* Amber Orange center ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#D96B14]/6 blur-3xl rounded-full" />
        {/* Soft Olive Forest bottom glow */}
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[650px] h-[450px] bg-[#2E4E18]/8 blur-3xl" />
      </div>

      {/* Centered Mobile Device Frame with Distinct Green Contour and Clean Light Background */}
      <main
        id="main-mobile-wrapper"
        className="w-full max-w-[440px] min-h-screen sm:min-h-0 bg-white relative z-10 px-4 sm:px-5 py-5 flex flex-col items-center rounded-none sm:rounded-[42px] border-y sm:border-[2.5px] border-[#2E4E18] shadow-none sm:shadow-[0_15px_50px_rgba(46,78,24,0.12),0_4px_12px_rgba(0,0,0,0.04)] sm:ring-4 sm:ring-[#2E4E18]/15 transition-all"
      >
        {/* Top Header with 2 Language Switcher Buttons & Order Tag */}
        <Header
          lang={lang}
          onSelectLang={handleSelectLang}
          onOpenQr={() => setIsQrOpen(true)}
          onShare={handleShare}
        />

        {/* Profile / Avatar (Valquiria Santos) / Brand Logo / Typography / Tagline */}
        <ProfileSection
          lang={lang}
          onOpenBioModal={() => setIsBioOpen(true)}
        />

        {/* Social Icons Bar (Instagram, WhatsApp, Facebook, Menu) */}
        <SocialPills lang={lang} />

        {/* Highlight Hero Action Card: Cardápio Digital & Faça seu Pedido */}
        <HeroActionCard lang={lang} />

        {/* Product Specialties Carousel / Grid */}
        <ProductSection
          lang={lang}
          onSelectProduct={(prod) => setSelectedProduct(prod)}
        />

        {/* Story / NutriMarmitas Concept & 4 Pillars Card */}
        <StoryCard
          lang={lang}
          onOpenBioModal={() => setIsBioOpen(true)}
        />

        {/* Direct WhatsApp Concierge Cards */}
        <WhatsAppCards lang={lang} />

        {/* Instagram Grid Showcase (@nutrimarmitas) */}
        <InstagramGrid lang={lang} />

        {/* Footer with Easy Byz Creator Logo */}
        <Footer lang={lang} />
      </main>

      {/* Full Bio / Story Modal */}
      <BioModal
        isOpen={isBioOpen}
        lang={lang}
        onClose={() => setIsBioOpen(false)}
      />

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        lang={lang}
        onClose={() => setSelectedProduct(null)}
      />

      {/* QR Code Modal */}
      <QrCodeModal
        isOpen={isQrOpen}
        lang={lang}
        onClose={() => setIsQrOpen(false)}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div
          id="toast-notification"
          className="fixed bottom-6 z-50 px-4 py-2.5 rounded-full text-white border border-[#2E4E18] shadow-2xl flex items-center gap-2 text-xs font-semibold animate-in slide-in-from-bottom-4 duration-200"
          style={{ backgroundColor: BRAND_COLORS.primary }}
        >
          <Check className="w-4 h-4 text-[#D96B14]" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
