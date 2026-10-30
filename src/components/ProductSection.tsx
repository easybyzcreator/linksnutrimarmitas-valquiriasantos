import React from 'react';
import { Language, ProductItem } from '../types';
import { TRANSLATIONS, BRAND_COLORS } from '../data/content';
import { Sparkles, Leaf } from 'lucide-react';

interface ProductSectionProps {
  lang: Language;
  onSelectProduct: (product: ProductItem) => void;
}

export const ProductSection: React.FC<ProductSectionProps> = ({
  lang,
  onSelectProduct,
}) => {
  const t = TRANSLATIONS[lang];

  return (
    <section id="products-section" className="w-full mb-6">
      {/* Section Header */}
      <div className="flex items-center justify-between px-1 mb-3">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: BRAND_COLORS.primary }} />
          <h2 className="text-xs sm:text-[13px] font-bold tracking-wider uppercase text-[#475b4f]">
            {t.productsTitle}
          </h2>
        </div>
        <span className="text-[11px] font-semibold text-[#667a6e] flex items-center gap-1">
          <Leaf className="w-3 h-3 text-[#2E4E18]" />
          <span>{lang === 'pt' ? '100% Natural' : '100% Wholesome'}</span>
        </span>
      </div>

      {/* Product Cards Grid */}
      <div
        id="products-carousel"
        className="grid grid-cols-2 gap-3"
      >
        {t.products.map((product) => {
          return (
            <div
              key={product.id}
              id={`product-card-${product.id}`}
              className="group relative flex flex-col justify-between rounded-2xl bg-white border border-[#d2dfce] overflow-hidden shadow-2xs transition-all duration-300 hover:border-[#2E4E18] hover:shadow-md hover:-translate-y-1"
            >
              {/* Product Image Cover */}
              <div
                className="relative w-full aspect-[4/3] overflow-hidden bg-[#f4f7f2] cursor-pointer"
                onClick={() => onSelectProduct(product)}
              >
                <img
                  src={product.image}
                  onError={(e) => {
                    e.currentTarget.src = '/images/marmita_fit.png';
                  }}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />

                {/* Badge */}
                {product.badge && (
                  <div className="absolute top-2 left-2">
                    <span
                      className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold text-white shadow-2xs"
                      style={{ backgroundColor: BRAND_COLORS.primary }}
                    >
                      <Sparkles className="w-2.5 h-2.5 text-[#D96B14]" />
                      {product.badge}
                    </span>
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-3 flex-1 flex flex-col justify-between">
                <div>
                  <span
                    className="text-[10px] font-bold uppercase tracking-wider block mb-1"
                    style={{ color: BRAND_COLORS.extra }}
                  >
                    {product.category}
                  </span>
                  <h3
                    onClick={() => onSelectProduct(product)}
                    className="text-xs sm:text-[13px] font-bold text-[#1f2f25] leading-tight mb-1 group-hover:text-[#2E4E18] transition-colors line-clamp-2 cursor-pointer"
                  >
                    {product.title}
                  </h3>
                  <p className="text-[11.5px] text-[#4b5e52] line-clamp-2 leading-relaxed mb-2.5">
                    {product.description}
                  </p>
                </div>

                {/* Action Button - 'Ver Detalhes' */}
                <div className="pt-2 border-t border-[#edf4ec]">
                  <button
                    id={`btn-details-${product.id}`}
                    type="button"
                    onClick={() => onSelectProduct(product)}
                    className="w-full py-2 px-2.5 rounded-xl bg-[#f4f8f3] hover:bg-[#2E4E18] text-[#2E4E18] hover:text-white border border-[#d2dfce] text-[11.5px] font-bold flex items-center justify-center gap-1.5 transition-all shadow-2xs active:scale-98 cursor-pointer"
                  >
                    <span>{t.viewDetails}</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
