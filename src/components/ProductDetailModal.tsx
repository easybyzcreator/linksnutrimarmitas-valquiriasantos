import React from 'react';
import { Language, ProductItem } from '../types';
import { TRANSLATIONS, CONTACT_LINKS, BRAND_COLORS } from '../data/content';
import { X, MessageCircle, ExternalLink, Sparkles } from 'lucide-react';

interface ProductDetailModalProps {
  product: ProductItem | null;
  lang: Language;
  onClose: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  lang,
  onClose,
}) => {
  if (!product) return null;

  const t = TRANSLATIONS[lang];
  const waUrl = `https://wa.me/${CONTACT_LINKS.whatsappNumber}?text=${encodeURIComponent(
    product.whatsappMessage || (lang === 'pt'
      ? 'Olá Valquiria, estava navegando no seu link da NutriMarmitas e gostaria de saber mais sobre este prato!'
      : 'Hello Valquiria, I was browsing your NutriMarmitas link and would like to ask a question about this meal!')
  )}`;

  return (
    <div
      id="product-detail-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="product-detail-modal-content"
        className="relative w-full max-w-sm overflow-hidden bg-white border border-[#d2dfce] rounded-3xl shadow-2xl text-[#435649]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="btn-close-product-modal"
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-sm border border-white/20 transition-colors"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Cover Image */}
        <div className="relative w-full h-48 bg-[#f4f7f2] overflow-hidden">
          <img
            src={product.image}
            onError={(e) => {
              e.currentTarget.src = '/images/marmita_fit.png';
            }}
            alt={product.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

          {product.badge && (
            <div className="absolute bottom-3 left-3">
              <span
                className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[11px] font-bold text-white shadow-2xs"
                style={{ backgroundColor: BRAND_COLORS.primary }}
              >
                <Sparkles className="w-3 h-3 text-[#D96B14]" />
                {product.badge}
              </span>
            </div>
          )}
        </div>

        {/* Details Content */}
        <div className="p-5">
          <span
            className="text-[10px] font-bold uppercase tracking-wider block mb-1"
            style={{ color: BRAND_COLORS.extra }}
          >
            {product.category}
          </span>
          <h3 className="text-lg font-bold text-[#1f2f25] mb-1.5">
            {product.title}
          </h3>
          <p className="text-xs sm:text-[13px] leading-relaxed text-[#4b5e52] mb-3.5">
            {product.description}
          </p>

          {product.tagline && (
            <div className="p-2.5 rounded-xl bg-[#f4f8f3] border border-[#dce7da] mb-4">
              <span className="text-xs text-[#2e4034] italic block text-center font-medium">
                &ldquo;{product.tagline}&rdquo;
              </span>
            </div>
          )}

          {/* Action CTAs */}
          <div className="space-y-2">
            <a
              id="btn-order-online-modal"
              href={CONTACT_LINKS.menuUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-xl text-white text-xs font-bold flex items-center justify-center gap-2 shadow-xs transition-all hover:opacity-95"
              style={{ backgroundColor: BRAND_COLORS.primary }}
            >
              <span>{t.orderOnMenu}</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#D96B14]" />
            </a>

            <a
              id="btn-inquiry-wa-modal"
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2 px-4 rounded-xl bg-[#eef7ee] hover:bg-[#2E4E18] text-[#2E4E18] hover:text-white border border-[#c6dfc3] text-xs font-bold flex items-center justify-center gap-2 transition-all"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#D96B14]" />
              <span>{lang === 'pt' ? 'Tirar Dúvidas com a Valquiria' : 'Inquire with Valquiria on WhatsApp'}</span>
            </a>

            <button
              id="btn-close-product-modal-bottom"
              type="button"
              onClick={onClose}
              className="w-full py-2 px-4 rounded-xl bg-[#f5f8f3] hover:bg-[#e7eee5] text-[#55695c] hover:text-[#1f2f25] text-xs font-bold flex items-center justify-center gap-1.5 border border-[#d2dfce] transition-all cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
              <span>{lang === 'pt' ? 'Fechar' : 'Close'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
