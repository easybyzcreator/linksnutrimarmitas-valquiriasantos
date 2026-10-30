import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS, CONTACT_LINKS, BRAND_COLORS } from '../data/content';
import { UtensilsCrossed, ArrowRight, Sparkles, ExternalLink, Flame } from 'lucide-react';

interface HeroActionCardProps {
  lang: Language;
}

export const HeroActionCard: React.FC<HeroActionCardProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  return (
    <div id="hero-menu-card" className="w-full mb-5">
      <a
        id="link-cardapio-digital"
        href={CONTACT_LINKS.menuUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block w-full rounded-2xl bg-gradient-to-br from-white via-[#f6f9f5] to-[#edf4ec] p-4 sm:p-5 border-2 border-[#cfe0cb] shadow-sm overflow-hidden transition-all duration-300 hover:border-[#2E4E18] hover:shadow-md hover:-translate-y-0.5"
      >
        {/* Shimmer Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

        {/* Top Tag & Status */}
        <div className="flex items-center justify-between mb-2.5">
          <span
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase text-white shadow-2xs"
            style={{ backgroundColor: BRAND_COLORS.primary }}
          >
            <Sparkles className="w-3.5 h-3.5 text-[#D96B14]" />
            <span>{t.mainCta.tag}</span>
          </span>

          <span className="flex items-center gap-1.5 text-[11.5px] font-semibold text-[#2E4E18]">
            <span className="w-2 h-2 rounded-full bg-[#2E4E18] animate-pulse"></span>
            <span>{lang === 'pt' ? 'Pronta Entrega' : 'Available Now'}</span>
          </span>
        </div>

        {/* Content Row */}
        <div className="flex items-start sm:items-center gap-3.5 mt-1">
          {/* Icon Circle */}
          <div
            className="w-12 h-12 sm:w-13 sm:h-13 rounded-2xl flex-shrink-0 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform duration-300"
            style={{ backgroundColor: BRAND_COLORS.primary }}
          >
            <UtensilsCrossed className="w-6 h-6 text-[#D96B14]" />
          </div>

          {/* Text Info */}
          <div className="flex-1 min-w-0 pr-1">
            <h3 className="text-[15.5px] sm:text-[17px] font-bold text-[#233129] leading-snug group-hover:text-[#2E4E18] transition-colors">
              {t.mainCta.title}
            </h3>
            <p className="text-[12.5px] leading-relaxed text-[#4b5d51] mt-1 font-normal">
              {t.mainCta.description}
            </p>
          </div>

          {/* Arrow Circle */}
          <div
            className="w-9 h-9 rounded-full bg-white flex-shrink-0 flex items-center justify-center group-hover:bg-[#2E4E18] group-hover:text-white group-hover:translate-x-1 transition-all duration-300 shadow-2xs border border-[#d2dfce] self-center"
            style={{ color: BRAND_COLORS.primary }}
          >
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>

        {/* Prominent Button Bar */}
        <div className="mt-3.5 pt-3 border-t border-[#d8e5d5] flex items-center justify-between text-xs">
          <span className="font-mono font-medium text-[#5c6e61]">{t.socialLabels.menuHandle}</span>
          <div
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-bold text-white shadow-xs group-hover:shadow transition-all"
            style={{ backgroundColor: BRAND_COLORS.primary }}
          >
            <span>{t.mainCta.buttonText}</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#D96B14]" />
          </div>
        </div>
      </a>
    </div>
  );
};
