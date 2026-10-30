import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS, CONTACT_LINKS, BRAND_COLORS } from '../data/content';
import { MessageCircle, ArrowRight, ExternalLink, HelpCircle } from 'lucide-react';

interface WhatsAppCardsProps {
  lang: Language;
}

export const WhatsAppCards: React.FC<WhatsAppCardsProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  return (
    <section id="whatsapp-concierge-section" className="w-full mb-6">
      {/* Header */}
      <div className="flex items-center justify-between px-1 mb-2.5">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: BRAND_COLORS.primary }} />
          <h2 className="text-xs sm:text-[13px] font-bold tracking-wider uppercase text-[#475b4f]">
            {t.whatsappSectionTitle}
          </h2>
        </div>
      </div>

      <div className="space-y-3">
        {t.whatsappOptions.map((opt) => {
          const waUrl = `https://wa.me/${CONTACT_LINKS.whatsappNumber}?text=${encodeURIComponent(
            opt.message
          )}`;

          return (
            <div
              key={opt.id}
              id={`wa-card-${opt.id}`}
              className="rounded-2xl bg-gradient-to-br from-white via-[#f6faf5] to-[#edf6ed] border border-[#cfe2ce] p-4 sm:p-4.5 shadow-2xs relative overflow-hidden transition-all duration-300 hover:border-[#2E4E18] hover:shadow-md"
            >
              {/* Background WhatsApp Watermark */}
              <div className="absolute -right-4 -bottom-4 w-24 h-24 rounded-full pointer-events-none flex items-center justify-center opacity-10">
                <MessageCircle className="w-16 h-16 text-[#2E4E18]" />
              </div>

              {/* Top Row */}
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white shadow-2xs"
                    style={{ backgroundColor: BRAND_COLORS.primary }}
                  >
                    <MessageCircle className="w-4.5 h-4.5 text-[#D96B14]" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#24352b] block leading-tight">
                      WhatsApp Oficial
                    </span>
                    <span className="text-[10.5px] text-[#4d6355] font-mono">
                      {CONTACT_LINKS.whatsappDisplay}
                    </span>
                  </div>
                </div>

                <span
                  className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[#D96B14]/15 text-[#a84d07] border border-[#D96B14]/30"
                >
                  {opt.badge}
                </span>
              </div>

              {/* Title & Subtitle */}
              <div className="my-2">
                <h3 className="text-xs sm:text-[13.5px] font-bold text-[#1f2f25] uppercase tracking-wide">
                  {opt.title}
                </h3>
                <p className="text-[12px] leading-relaxed text-[#405447] mt-1 font-normal">
                  {opt.subtitle}
                </p>
              </div>

              {/* Clickable note about orders placed on Digital Menu */}
              <a
                id={`btn-menu-notice-${opt.id}`}
                href={CONTACT_LINKS.menuUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Abrir Cardápio Digital"
                className="group/notice my-2.5 px-3 py-2 rounded-xl bg-white/95 hover:bg-[#eef5ee] border border-[#c4dcbf] hover:border-[#2E4E18] text-[11.5px] text-[#24352b] flex items-center justify-between gap-2 transition-all shadow-2xs"
              >
                <div className="flex items-center gap-1.5 text-left">
                  <span className="text-xs shrink-0">💡</span>
                  <span className="font-semibold underline decoration-dotted decoration-[#2E4E18]/50 group-hover/notice:text-[#2E4E18]">
                    {lang === 'pt'
                      ? 'Pedidos são realizados exclusivamente pelo Cardápio Digital.'
                      : 'Orders are placed directly via our Online Digital Menu.'}
                  </span>
                </div>
                <ExternalLink className="w-3 h-3 text-[#D96B14] shrink-0 opacity-80 group-hover/notice:opacity-100 transition-opacity" />
              </a>

              {/* Action Button */}
              <a
                id={`btn-chat-${opt.id}`}
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full mt-2 py-2.5 px-3 rounded-xl text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-xs transition-all group active:scale-98"
                style={{ backgroundColor: BRAND_COLORS.primary }}
              >
                <MessageCircle className="w-4 h-4 text-[#D96B14]" />
                <span>{lang === 'pt' ? 'Falar com a Valquiria no WhatsApp' : 'Chat with Valquiria on WhatsApp'}</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};
