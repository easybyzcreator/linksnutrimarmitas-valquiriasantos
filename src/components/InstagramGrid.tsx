import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS, CONTACT_LINKS, BRAND_COLORS, ASSETS } from '../data/content';
import { Instagram, Heart, ExternalLink, Bookmark } from 'lucide-react';

interface InstagramGridProps {
  lang: Language;
}

export const InstagramGrid: React.FC<InstagramGridProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  const instaPosts = [
    {
      id: 'post-1',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80',
      url: CONTACT_LINKS.instagramUrl,
      likes: '489',
      tag: '#NutriFit',
    },
    {
      id: 'post-2',
      image: ASSETS.valquiria,
      url: CONTACT_LINKS.instagramUrl,
      likes: '834',
      tag: '#ValquiriaSantos',
    },
    {
      id: 'post-3',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80',
      url: CONTACT_LINKS.instagramUrl,
      likes: '612',
      tag: '#NutriMarmitas',
    },
  ];

  return (
    <section id="instagram-showcase-section" className="w-full mb-6">
      {/* Header */}
      <div className="flex items-center justify-between px-1 mb-2.5">
        <div className="flex items-center gap-1.5">
          <Instagram className="w-4 h-4" style={{ color: BRAND_COLORS.primary }} />
          <h2 className="text-xs sm:text-[13px] font-bold tracking-wider uppercase text-[#475b4f]">
            {t.socialLabels.instagramHandle.toUpperCase()}
          </h2>
        </div>
        <a
          href={CONTACT_LINKS.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[11.5px] font-bold hover:underline flex items-center gap-0.5"
          style={{ color: BRAND_COLORS.primary }}
        >
          <span>Instagram</span>
          <ExternalLink className="w-2.5 h-2.5 text-[#D96B14]" />
        </a>
      </div>

      {/* 3 Photos Row */}
      <div className="grid grid-cols-3 gap-2 mb-3">
        {instaPosts.map((post) => (
          <a
            key={post.id}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative aspect-[3/4] rounded-xl overflow-hidden bg-[#f4f7f2] border border-[#d2dfce] block shadow-2xs"
          >
            <img
              src={post.image}
              onError={(e) => {
                e.currentTarget.src = post.id === 'post-2' ? ASSETS.valquiriaLocal : ASSETS.marmitaFitness;
              }}
              alt="NutriMarmitas Instagram Post"
              className={`w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 ${post.id === 'post-2' ? 'object-[center_10%]' : 'object-center'}`}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex flex-col justify-end p-1.5 text-white">
              <div className="flex items-center justify-between text-[10px] text-white/95">
                <span className="flex items-center gap-0.5 font-medium">
                  <Heart className="w-2.5 h-2.5 text-[#D96B14] fill-[#D96B14]" />
                  <span>{post.likes}</span>
                </span>
                <Bookmark className="w-2.5 h-2.5 opacity-90" />
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Follow Button */}
      <a
        id="btn-follow-instagram"
        href={CONTACT_LINKS.instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full py-2.5 px-4 rounded-xl text-white text-xs font-bold flex items-center justify-center gap-2 shadow-xs transition-all hover:opacity-95"
        style={{ backgroundColor: BRAND_COLORS.primary }}
      >
        <Instagram className="w-4 h-4 text-[#D96B14]" />
        <span>{t.followButton}</span>
      </a>
    </section>
  );
};
