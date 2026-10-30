import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS, ASSETS, CONTACT_LINKS, BRAND_COLORS } from '../data/content';
import { X, Sparkles, ExternalLink, Leaf, Calendar, Heart, Globe } from 'lucide-react';

interface BioModalProps {
  isOpen: boolean;
  lang: Language;
  onClose: () => void;
}

export const BioModal: React.FC<BioModalProps> = ({
  isOpen,
  lang,
  onClose,
}) => {
  if (!isOpen) return null;

  const t = TRANSLATIONS[lang];
  const bio = t.bioModal;

  return (
    <div
      id="bio-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/65 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="bio-modal-content"
        className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-white border-2 border-[#2E4E18]/30 rounded-3xl p-5 sm:p-7 shadow-2xl text-[#36473d] no-scrollbar"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="btn-close-bio-modal"
          type="button"
          onClick={onClose}
          className="sticky top-0 float-right -mt-2 -mr-2 z-10 w-9 h-9 rounded-full bg-[#f4f7f2] hover:bg-[#2E4E18] text-[#2E4E18] hover:text-white flex items-center justify-center border border-[#d2dfce] transition-colors cursor-pointer shadow-xs"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Valquiria Image & Banner */}
        <div className="flex flex-col items-center text-center mb-6 pt-1">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 bg-gradient-to-tr from-[#2E4E18] via-[#D96B14] to-[#2E4E18] shadow-md mb-3">
            <div className="w-full h-full rounded-full overflow-hidden bg-white border-2 border-white">
              <img
                src={ASSETS.valquiria}
                onError={(e) => {
                  e.currentTarget.src = ASSETS.valquiriaLocal;
                }}
                alt="Valquiria Santos"
                className="w-full h-full object-cover object-[center_8%]"
              />
            </div>
          </div>

          <span
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-white shadow-2xs mb-2"
            style={{ backgroundColor: BRAND_COLORS.primary }}
          >
            <Leaf className="w-3.5 h-3.5 text-[#D96B14]" />
            <span>{t.brandName}</span>
          </span>

          <h2 className="text-xl sm:text-2xl font-serif-display font-bold text-[#1f2f25] tracking-tight">
            Valquiria Santos
          </h2>
          <p className="text-xs font-sans font-medium text-[#5a6b5f] mt-0.5">
            Nutricionista & Fundadora da NutriMarmitas
          </p>
        </div>

        {/* SECTION 1: Minha história com a Nutrição (from image 1) */}
        <div className="mb-6 pb-6 border-b border-[#e6eee4]">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-5 rounded-full bg-[#2E4E18]" />
            <h3 className="text-lg sm:text-xl font-bold text-[#1b2b20] tracking-tight">
              Minha história com a Nutrição
            </h3>
          </div>

          <p className="font-semibold text-sm text-[#233529] mb-3 leading-relaxed italic font-serif-display">
            Minha história com a Nutrição começou muito antes de eu me tornar nutricionista.
          </p>

          <div className="space-y-3 text-xs sm:text-[13px] leading-relaxed text-[#3a4d40]">
            <p>
              Tudo começou em <strong>2018</strong>, quando um exame de rotina mudou a forma como eu enxergava a alimentação.
            </p>
            <p>
              Todos os anos, eu costumava fazer meu acompanhamento com o médico clínico e realizar meus exames de check-up. Naquele ano, em fevereiro, os resultados mostraram <strong>pré-diabetes e alterações no colesterol</strong>.
            </p>
            <p>
              Meu médico optou por não iniciar medicamentos naquele momento. Disse que eu era muito jovem e me orientou a fazer mudanças no estilo de vida: <strong>melhorar minha alimentação e incluir exercícios físicos na minha rotina</strong>.
            </p>
            <p>
              Naquela época, eu estava cerca de <strong>12 kg acima do meu peso saudável</strong>.
            </p>
            <p className="italic font-medium text-[#1e2f23]">
              Foi então que decidi mudar.
            </p>
            <p>
              Comecei a transformar minha alimentação por conta própria, buscando informações e acompanhando uma nutricionista pela internet, colocando em prática as orientações e dicas que aprendia.
            </p>
            <p>
              E em apenas <strong>três meses</strong>, algo que me marcou profundamente aconteceu.
            </p>
            <p>
              Voltei ao médico, repeti meus exames e os resultados haviam <strong>melhorado de forma impressionante</strong>.
            </p>
            <p>
              Foi naquele momento que descobri, na prática, o poder que a alimentação tem sobre a nossa saúde.
            </p>
            <p className="p-3 rounded-2xl bg-[#f4f8f3] border-l-4 border-[#2E4E18] font-medium text-[#1f2f25]">
              Percebi que a alimentação não era apenas sobre peso, estética ou aparência. <strong>Ela tinha o poder de transformar a minha saúde e a minha vida.</strong>
            </p>
            <p>
              E foi aí que nasceu meu interesse pela Nutrição.
            </p>
            <p>
              Comecei a estudar sobre o assunto, cada vez mais encantada com tudo o que a alimentação poderia proporcionar. Até que, em <strong>fevereiro de 2020</strong>, tomei uma decisão que mudaria minha trajetória: entrei para a faculdade de Nutrição.
            </p>
            <p>
              Durante a graduação, fui me apaixonando cada vez mais pela profissão. E assim que me formei, tirei meu registro profissional e comecei a atender em consultório.
            </p>
            <p>
              Desde então, foram muitos pacientes, muitas histórias e muitas vidas transformadas através da Nutrição.
            </p>
            <p className="font-bold text-[#1f2f25] text-sm">
              Hoje posso dizer que a Nutrição é uma das minhas grandes paixões.
            </p>
            <p>
              Acredito que cuidar da alimentação é também cuidar da saúde, da autoestima, da rotina e da relação que cada pessoa constrói com a comida.
            </p>
          </div>
        </div>

        {/* SECTION 2: E então nasceu a NutriMarmitas (from image 2) */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-5 rounded-full bg-[#D96B14]" />
            <h3 className="text-lg sm:text-xl font-bold text-[#1b2b20] tracking-tight">
              E então nasceu a NutriMarmitas
            </h3>
          </div>

          <div className="space-y-3 text-xs sm:text-[13px] leading-relaxed text-[#3a4d40]">
            <p>
              Mas, ao longo dos meus atendimentos, comecei a perceber algo que se repetia na história de muitos dos meus pacientes.
            </p>
            <p className="font-medium text-[#25372c]">
              Eles queriam se alimentar melhor.
            </p>
            <p>
              Sabiam da importância de seguir o plano alimentar.
            </p>
            <p>
              Tinham vontade de mudar.
            </p>
            <p className="font-bold text-[#1f2f25]">
              Mas muitas vezes faltava tempo.
            </p>
            <p>
              A correria do dia a dia, o trabalho, a família e todas as responsabilidades tornavam difícil planejar as refeições, comprar os ingredientes, cozinhar e organizar tudo.
            </p>
            <p className="p-3 rounded-2xl bg-[#fff7f0] border-l-4 border-[#D96B14] text-[#2b3d31]">
              E percebi que, para muitas pessoas, <strong>o problema não era não saber o que comer. Era conseguir colocar aquilo em prática.</strong>
            </p>
            <p>
              Foi dessa percepção que nasceu a <strong>NutriMarmitas</strong>.
            </p>
            <p>
              Eu quis ir além dos atendimentos.
            </p>
            <p>
              Quis encontrar uma maneira de ajudar meus pacientes também na rotina, oferecendo uma alimentação <strong>saudável, prática, saborosa e planejada</strong>, sem que a falta de tempo fosse um obstáculo para cuidar da própria saúde.
            </p>
            <p>
              Foi assim que criei a NutriMarmitas: pensando no <strong>bem-estar, na praticidade e na realidade das pessoas</strong> que confiam no meu trabalho.
            </p>
            <p>
              Cada refeição é pensada e preparada com o mesmo cuidado que tenho ao elaborar um plano alimentar: buscando equilíbrio, qualidade e praticidade.
            </p>
          </div>

          {/* Manifesto Box */}
          <div className="mt-5 p-4 rounded-2xl bg-[#f5f8f3] border border-[#d6e4d4]">
            <h4 className="text-sm font-bold text-[#1f2f25] mb-2 flex items-center gap-1.5">
              <span>❤️ Porque, para mim, Nutrição é isso:</span>
            </h4>
            <p className="text-xs sm:text-[13px] text-[#2f4236] font-medium leading-relaxed mb-2">
              Não é apenas dizer o que uma pessoa deve comer.<br />
              É ajudá-la a encontrar maneiras possíveis de cuidar da alimentação dentro da vida que ela realmente tem.
            </p>
            <p className="text-xs sm:text-[13px] text-[#2f4236] leading-relaxed mb-3">
              E foi justamente por acreditar nisso que nasceu a <strong>NutriMarmitas</strong>.<br />
              <span className="font-bold text-[#1f2f25]">Uma extensão do meu propósito como nutricionista.</span>
            </p>
            <div className="pt-2 border-t border-[#dce8da] flex flex-col gap-1 text-xs font-bold text-[#2E4E18]">
              <span className="flex items-center gap-1.5">✦ Nutrição que transforma.</span>
              <span className="flex items-center gap-1.5">✦ Alimentação que cuida.</span>
              <span className="flex items-center gap-1.5">✦ Praticidade para tornar o saudável possível.</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 pt-4 border-t border-[#edf4ec] flex flex-col gap-2.5">
          <a
            id="btn-modal-val-site"
            href={CONTACT_LINKS.valSiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 px-4 rounded-xl text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-sm transition-all hover:scale-[1.01] active:scale-98 cursor-pointer"
            style={{ backgroundColor: BRAND_COLORS.primary }}
          >
            <Globe className="w-4 h-4 text-[#D96B14]" />
            <span>{lang === 'pt' ? 'Conheça o Site Oficial da Valquiria' : 'Visit Valquiria’s Official Website'}</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-80" />
          </a>

          <a
            id="btn-modal-agendar-consulta"
            href={CONTACT_LINKS.consultationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 px-4 rounded-xl bg-[#f4f7f2] hover:bg-[#e7eee5] text-[#2E4E18] text-xs font-bold flex items-center justify-center gap-2 border border-[#2E4E18]/30 transition-all hover:scale-[1.01] active:scale-98"
          >
            <Calendar className="w-4 h-4 text-[#D96B14]" />
            <span>Agendar Consulta com a Nutri</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-80" />
          </a>

          <a
            id="btn-modal-cardapio"
            href={CONTACT_LINKS.menuUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 px-4 rounded-xl bg-white hover:bg-[#f6f8f5] text-[#2E4E18] text-xs font-bold flex items-center justify-center gap-2 border border-[#2E4E18]/30 transition-all"
          >
            <span>{t.mainCta.buttonText}</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#D96B14]" />
          </a>

          <button
            id="btn-bottom-close-bio-modal"
            type="button"
            onClick={onClose}
            className="w-full py-2 px-4 rounded-xl bg-[#f5f8f3] hover:bg-[#e7eee5] text-[#55695c] hover:text-[#1f2f25] text-xs font-bold flex items-center justify-center gap-1.5 border border-[#d2dfce] transition-all cursor-pointer mt-1"
          >
            <X className="w-3.5 h-3.5" />
            <span>Fechar História</span>
          </button>
        </div>
      </div>
    </div>
  );
};

