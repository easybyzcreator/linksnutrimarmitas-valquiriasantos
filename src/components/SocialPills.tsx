import React from 'react';
import { Language } from '../types';
import { CONTACT_LINKS, TRANSLATIONS, BRAND_COLORS } from '../data/content';
import { Instagram, Facebook, MessageCircle, UtensilsCrossed } from 'lucide-react';

interface SocialPillsProps {
  lang: Language;
}

export const SocialPills: React.FC<SocialPillsProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  const waUrl = `https://wa.me/${CONTACT_LINKS.whatsappNumber}?text=${encodeURIComponent(
    lang === 'pt'
      ? 'Olá Valquiria, estava navegando no seu link da NutriMarmitas e gostaria de tirar uma dúvida com você!'
      : 'Hello Valquiria, I was browsing your NutriMarmitas link and would like to ask a question!'
  )}`;

  const socials = [
    {
      id: 'social-instagram',
      name: 'Instagram',
      handle: t.socialLabels.instagramHandle,
      url: CONTACT_LINKS.instagramUrl,
      icon: Instagram,
    },
    {
      id: 'social-whatsapp',
      name: 'WhatsApp',
      handle: CONTACT_LINKS.whatsappDisplay,
      url: waUrl,
      icon: MessageCircle,
    },
    {
      id: 'social-facebook',
      name: 'Facebook',
      handle: t.socialLabels.facebookHandle,
      url: CONTACT_LINKS.facebookUrl,
      icon: Facebook,
    },
    {
      id: 'social-menu',
      name: t.socialLabels.menu,
      handle: t.socialLabels.menuHandle,
      url: CONTACT_LINKS.menuUrl,
      icon: UtensilsCrossed,
    },
  ];

  return (
    <div id="social-icons-bar" className="w-full flex items-center justify-center gap-3.5 py-1 mb-7 sm:mb-8">
      {socials.map((item) => {
        const IconComponent = item.icon;
        return (
          <a
            key={item.id}
            id={item.id}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            title={`${item.name} - ${item.handle}`}
            className="w-11 h-11 rounded-full text-white flex items-center justify-center shadow-xs transition-all duration-300 hover:scale-110 hover:shadow-md cursor-pointer border border-white/40"
            style={{
              backgroundColor: BRAND_COLORS.primary,
            }}
          >
            <IconComponent className="w-5 h-5 text-[#D96B14] transition-colors hover:text-white" />
          </a>
        );
      })}
    </div>
  );
};
