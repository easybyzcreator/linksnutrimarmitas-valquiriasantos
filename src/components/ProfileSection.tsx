import React from 'react';
import { Language } from '../types';
import { ASSETS, TRANSLATIONS, BRAND_COLORS, CONTACT_LINKS } from '../data/content';
import { ChevronRight, MapPin, Sparkles, Timer, Calendar, ExternalLink, Globe } from 'lucide-react';

interface ProfileSectionProps {
  lang: Language;
  onOpenBioModal: () => void;
}

export const ProfileSection: React.FC<ProfileSectionProps> = ({
  lang,
  onOpenBioModal,
}) => {
  const t = TRANSLATIONS[lang];

  return (
    <section id="profile-section" className="w-full flex flex-col items-center text-center pt-2 sm:pt-3 pb-3">
      {/* Valquiria Santos Photo with Dual Color Ring (Deep Forest Green & Warm Amber Orange) */}
      <div
        id="avatar-container"
        className="relative mb-5 sm:mb-6 group cursor-pointer"
        onClick={onOpenBioModal}
        title="Conheça a história da Valquiria Santos"
      >
        <div className="w-[202px] h-[202px] sm:w-[224px] sm:h-[224px] rounded-full p-1.5 bg-gradient-to-tr from-[#2E4E18] via-[#D96B14] to-[#2E4E18] shadow-lg relative overflow-hidden transition-transform duration-300 group-hover:scale-105">
          <div className="w-full h-full rounded-full overflow-hidden bg-white flex items-center justify-center border-2 border-white shadow-inner">
            <img
              id="chef-avatar-img"
              src={ASSETS.valquiria}
              onError={(e) => {
                e.currentTarget.src = ASSETS.valquiriaLocal;
              }}
              alt="Valquiria Santos"
              className="w-full h-full object-cover object-[center_8%]"
              loading="eager"
            />
          </div>
        </div>
      </div>

      {/* Brand Identity: New Unified Logo Image & Concept Subtitle */}
      <div id="brand-logo-container" className="flex flex-col items-center mb-2.5">
        <div className="w-56 sm:w-64 max-w-[240px] flex items-center justify-center mb-1 transition-transform hover:scale-[1.02]">
          <img
            id="brand-logo-img"
            src={ASSETS.logo}
            onError={(e) => {
              e.currentTarget.src = ASSETS.logoFallback;
            }}
            alt="NutriMarmitas by Valquiria Santos"
            className="w-full h-auto object-contain drop-shadow-xs"
          />
        </div>

        {/* Concept subtitle (SABOR • SAÚDE • PRATICIDADE) */}
        <div className="flex items-center gap-2 mt-0.5">
          <span className="h-[1px] w-5 bg-[#2E4E18]/30" />
          <span
            className="text-[10px] sm:text-[11px] font-bold tracking-[0.25em] uppercase"
            style={{ color: BRAND_COLORS.extra }}
          >
            {t.brandConcept}
          </span>
          <span className="h-[1px] w-5 bg-[#2E4E18]/30" />
        </div>
      </div>

      {/* Badges: Valquiria Santos, Marmitas & Delivery */}
      <div className="flex flex-wrap items-center justify-center gap-1.5 mb-3 px-2">
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-white text-[#2a3830] border border-[#d8dfd5] shadow-2xs">
          <Sparkles className="w-3 h-3 text-[#D96B14]" />
          <span>{t.chefBadge}</span>
        </span>
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-white text-[#45574c] border border-[#d8dfd5] shadow-2xs">
          <MapPin className="w-3 h-3 text-[#2E4E18]" />
          <span>{t.locationBadge}</span>
        </span>
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-[#D96B14]/10 text-[#a84d07] border border-[#D96B14]/25 shadow-2xs">
          <Timer className="w-3 h-3 text-[#D96B14]" />
          <span>{t.deliveryBadge}</span>
        </span>
      </div>

      {/* Brief Inspirational Quote (from user image 2) */}
      <div id="top-bio-brief" className="w-full max-w-sm px-3 mb-2">
        <p className="text-[13.5px] leading-relaxed text-[#35433b] font-serif-display italic font-medium">
          &ldquo;{t.bioIntro}&rdquo;
        </p>
      </div>

      {/* Interactive Actions: Learn About Valquiria & Visit Official Website */}
      <div className="flex flex-wrap items-center justify-center gap-2 mt-1 px-2">
        <button
          id="btn-learn-more-bio"
          type="button"
          onClick={onOpenBioModal}
          className="inline-flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-full border transition-all duration-200 group shadow-2xs hover:shadow-xs active:scale-98 cursor-pointer bg-white text-[#2E4E18] border-[#d0dacb]"
        >
          <span>{t.readMore}</span>
          <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 text-[#D96B14]" />
        </button>

        <a
          id="btn-val-site-profile"
          href={CONTACT_LINKS.valSiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-full border transition-all duration-200 group shadow-2xs hover:shadow-xs active:scale-98 cursor-pointer bg-white text-[#2E4E18] border-[#2E4E18]/30 hover:bg-[#2E4E18] hover:text-white"
          title="Acessar o Site Oficial de Valquiria Santos"
        >
          <Globe className="w-3.5 h-3.5 text-[#D96B14] group-hover:text-white transition-colors" />
          <span>{lang === 'pt' ? 'Visitar Site da Val' : 'Visit Val’s Website'}</span>
          <ExternalLink className="w-3 h-3 opacity-70 group-hover:opacity-100" />
        </a>
      </div>

      {/* New Button: Agendar Consulta com a Nutri */}
      <a
        id="btn-agendar-consulta-nutri"
        href={CONTACT_LINKS.consultationUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 text-xs sm:text-[12.5px] font-bold px-5 py-2.5 rounded-full text-white shadow-xs hover:shadow-md transition-all duration-200 hover:scale-[1.02] active:scale-98 cursor-pointer mt-2"
        style={{ backgroundColor: BRAND_COLORS.primary }}
      >
        <Calendar className="w-4 h-4 text-[#D96B14]" />
        <span>Agendar Consulta com a Nutri</span>
        <ExternalLink className="w-3 h-3 opacity-80" />
      </a>
    </section>
  );
};
