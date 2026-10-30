import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS, ASSETS, CONTACT_LINKS, BRAND_COLORS } from '../data/content';
import { Heart, Globe, ExternalLink } from 'lucide-react';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];
  const year = new Date().getFullYear();

  return (
    <footer id="app-footer" className="w-full pt-8 pb-10 flex flex-col items-center text-center">
      {/* Brand Note & Site Link */}
      <div className="flex flex-col items-center justify-center gap-2 mb-6">
        <div className="flex items-center justify-center gap-1.5 text-xs text-[#526658]">
          <span>{lang === 'pt' ? 'Feito com' : 'Made with'}</span>
          <Heart className="w-3.5 h-3.5 text-[#D96B14] fill-[#D96B14]" />
          <span>{lang === 'pt' ? 'por' : 'by'}</span>
          <strong className="font-serif-display font-bold text-[#2E4E18]">NutriMarmitas</strong>
        </div>

        {/* Link do Site NutriMarmitas - sem URL por extenso */}
        <a
          id="link-site-nutrimarmitas"
          href={CONTACT_LINKS.valSiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold text-[#2E4E18] bg-white hover:bg-[#2E4E18] hover:text-white border border-[#2E4E18]/25 transition-all duration-200 shadow-2xs hover:shadow-xs group cursor-pointer"
          title="Acessar o Site Oficial de Valquiria Santos"
        >
          <Globe className="w-3.5 h-3.5 text-[#D96B14] group-hover:text-white transition-colors" />
          <span>{lang === 'pt' ? 'Visitar Site Oficial' : 'Visit Official Website'}</span>
          <ExternalLink className="w-3 h-3 opacity-70 group-hover:opacity-100" />
        </a>
      </div>

      {/* Developed By Section */}
      <div id="developed-by-container" className="flex flex-col items-center">
        <span className="text-[10.5px] font-bold tracking-[0.25em] text-[#718578] uppercase mb-2">
          {t.devBy}
        </span>

        <a
          id="link-easybyzcreator"
          href={CONTACT_LINKS.ebcUrl}
          target="_blank"
          rel="noopener noreferrer"
          title="Easy Byz Creator"
          className="group flex flex-col items-center p-2 rounded-2xl transition-all duration-300 hover:scale-105 cursor-pointer"
        >
          <img
            id="ebc-logo-img"
            src={ASSETS.ebcLogo}
            alt="Easy Byz Creator"
            className="w-28 sm:w-32 h-auto object-contain mx-auto transition-opacity group-hover:opacity-90 drop-shadow-xs"
          />
        </a>
      </div>

      {/* Copyright */}
      <p className="text-[10.5px] text-[#7b9082] mt-3 font-normal">
        © {year} NutriMarmitas by Valquiria Santos. Todos os direitos reservados.
      </p>
    </footer>
  );
};
