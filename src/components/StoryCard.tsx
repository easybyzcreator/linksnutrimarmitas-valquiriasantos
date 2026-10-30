import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS, BRAND_COLORS, CONTACT_LINKS } from '../data/content';
import { Leaf, Timer, ShieldCheck, Truck, ChevronRight, CheckCircle2, Globe, ExternalLink } from 'lucide-react';

interface StoryCardProps {
  lang: Language;
  onOpenBioModal: () => void;
}

export const StoryCard: React.FC<StoryCardProps> = ({
  lang,
  onOpenBioModal,
}) => {
  const t = TRANSLATIONS[lang];

  const pillarIcons: Record<string, React.ReactNode> = {
    Leaf: <Leaf className="w-4 h-4 text-[#2E4E18]" />,
    Timer: <Timer className="w-4 h-4 text-[#D96B14]" />,
    ShieldCheck: <ShieldCheck className="w-4 h-4 text-[#2E4E18]" />,
    Truck: <Truck className="w-4 h-4 text-[#D96B14]" />,
  };

  return (
    <div id="story-highlight-card" className="w-full mb-6">
      <div className="rounded-2xl bg-gradient-to-br from-white via-[#f7faf5] to-[#edf4ec] border border-[#d2dfce] p-4 sm:p-5 shadow-xs relative overflow-hidden">
        {/* Decorative corner accent */}
        <div className="absolute top-0 right-0 w-36 h-36 bg-[#D96B14]/10 rounded-full blur-2xl pointer-events-none" />

        {/* Header Tag */}
        <div className="flex items-center gap-2 mb-3">
          <div
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-white shadow-2xs"
            style={{ backgroundColor: BRAND_COLORS.primary }}
          >
            <Leaf className="w-3.5 h-3.5 text-[#D96B14]" />
            <span className="text-[11px] font-bold uppercase tracking-wider">
              {t.storyQuote.headline}
            </span>
          </div>
        </div>

        {/* Text */}
        <p className="text-[13px] leading-relaxed text-[#415347] mb-3.5 font-normal">
          {t.storyQuote.text}
        </p>

        {/* Feature Highlights Box */}
        <div className="p-3 sm:p-3.5 rounded-xl bg-white/90 border border-[#d6e3d2] mb-4 space-y-2 text-[12px] text-[#2c3d32] shadow-2xs">
          <div className="flex items-start gap-2">
            <span className="text-[#D96B14] font-bold text-xs mt-0.5">✦</span>
            <span className="font-bold text-[#2E4E18]">
              {lang === 'pt' ? 'NUTRIMARMITAS BY VALQUIRIA SANTOS' : 'NUTRIMARMITAS BY VALQUIRIA SANTOS'}
            </span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-[#D96B14] font-bold text-xs mt-0.5">✦</span>
            <span>
              {lang === 'pt'
                ? 'Marmitas saudáveis e balanceadas, preparadas para unir sabor de casa, praticidade e saúde.'
                : 'Balanced wholesome meal prep combining authentic home cooking, everyday convenience and health.'}
            </span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-[#D96B14] font-bold text-xs mt-0.5">✦</span>
            <span>
              {lang === 'pt'
                ? 'Ingredientes selecionados • Zero conservantes artificiais e tempero natural'
                : 'Selected ingredients • Zero chemical preservatives and 100% natural herbs'}
            </span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-[#D96B14] font-bold text-xs mt-0.5">✦</span>
            <span className="font-semibold text-[#D96B14]">
              {lang === 'pt'
                ? 'Prontas em minutos direto do freezer'
                : 'Ready in minutes straight from the freezer'}
            </span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-[#D96B14] font-bold text-xs mt-0.5">✦</span>
            <span>
              {lang === 'pt'
                ? 'Kits semanais, combos econômicos e opções a pronta entrega'
                : 'Weekly kits, value bundles and ready-to-deliver options'}
            </span>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-2 gap-2 mb-3.5">
          {t.pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="p-2.5 rounded-xl bg-white/95 border border-[#dce7d9] flex flex-col justify-start shadow-2xs"
            >
              <div className="flex items-center gap-1.5 mb-1">
                {pillarIcons[pillar.icon] || <Leaf className="w-3.5 h-3.5 text-[#2E4E18]" />}
                <span className="text-[11.5px] font-bold text-[#233128] tracking-tight">
                  {pillar.title}
                </span>
              </div>
              <p className="text-[11px] leading-snug text-[#516457]">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Action Buttons: Read Full Story & Visit Val's Site */}
        <div className="flex flex-col sm:flex-row items-center gap-2">
          <button
            id="btn-story-full"
            type="button"
            onClick={onOpenBioModal}
            className="w-full sm:flex-1 py-2.5 px-3 rounded-xl bg-white hover:bg-[#2E4E18] text-[#2E4E18] hover:text-white border border-[#cde0cb] text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow-2xs group cursor-pointer"
          >
            <span>{t.readMore}</span>
            <ChevronRight className="w-3.5 h-3.5 text-[#D96B14] transition-transform group-hover:translate-x-1" />
          </button>

          <a
            id="btn-story-site"
            href={CONTACT_LINKS.valSiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:flex-1 py-2.5 px-3 rounded-xl bg-[#2E4E18] hover:bg-[#243e13] text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow-2xs group cursor-pointer"
            title="Conheça o site oficial da Valquiria Santos"
          >
            <Globe className="w-3.5 h-3.5 text-[#D96B14] group-hover:scale-110 transition-transform" />
            <span>{lang === 'pt' ? 'Visitar Site da Val' : 'Visit Val’s Website'}</span>
            <ExternalLink className="w-3 h-3 opacity-80" />
          </a>
        </div>
      </div>
    </div>
  );
};
