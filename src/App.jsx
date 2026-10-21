import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowUpRight,
  Sparkles,
  Activity,
  Compass,
  Layers,
  Check,
  ChevronRight,
  Terminal,
  Calendar,
  ShieldCheck,
  Play,
  Sliders,
  BarChart3,
  Globe,
  Film,
  X,
  Send,
  MessageSquare,
  Menu
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

/* ==========================================================================
   MAGNETIC BUTTON COMPONENT (Micro-Interaction System)
   ========================================================================== */
function MagneticButton({
  children,
  onClick,
  variant = 'accent',
  className = '',
  href,
  type = 'button'
}) {
  const baseStyles =
    'btn-magnetic group relative inline-flex items-center justify-center gap-3 rounded-full px-7 py-4 font-sans font-semibold text-sm tracking-tight select-none cursor-pointer';

  const variants = {
    accent:
      'bg-[#C9A84C] text-[#0D0D12] shadow-[0_10px_30px_rgba(201,168,76,0.28)] hover:shadow-[0_16px_40px_rgba(201,168,76,0.42)]',
    dark:
      'bg-[#0D0D12] text-[#FAF8F5] border border-[#FAF8F5]/15 hover:border-[#C9A84C]/60',
    outline:
      'bg-transparent text-[#FAF8F5] border border-[#FAF8F5]/25 hover:border-[#C9A84C]'
  };

  const slideStyles = {
    accent: 'bg-[#FAF8F5]',
    dark: 'bg-[#C9A84C]',
    outline: 'bg-[#C9A84C]'
  };

  const textHoverStyles = {
    accent: 'group-hover:text-[#0D0D12]',
    dark: 'group-hover:text-[#0D0D12]',
    outline: 'group-hover:text-[#0D0D12]'
  };

  const content = (
    <>
      <span
        className={`absolute inset-0 translate-y-full rounded-full transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:translate-y-0 ${slideStyles[variant]}`}
      />
      <span
        className={`relative z-10 flex items-center gap-2.5 transition-colors duration-300 ${textHoverStyles[variant]}`}
      >
        {children}
      </span>
    </>
  );

  if (href) {
    return (
      <a href={href} onClick={onClick} className={`${baseStyles} ${variants[variant]} ${className}`}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={`${baseStyles} ${variants[variant]} ${className}`}>
      {content}
    </button>
  );
}

/* ==========================================================================
   CARD 1: DIAGNOSTIC SHUFFLER (Posicionamento e Identidade de Marca)
   ========================================================================== */
function DiagnosticShufflerCard() {
  const [items, setItems] = useState([
    {
      id: 'dna-visual',
      code: 'MOD-01 // BRAND DNA',
      title: 'Arquitetura & Identidade Visual',
      metric: '+98.4% Valor Percebido',
      status: 'Calibrado',
      detail: 'Paleta proprietária, tipografia editorial e manual de autoridade visual.'
    },
    {
      id: 'social-direction',
      code: 'MOD-02 // KEY VISUALS',
      title: 'Direção de Arte & Social Media',
      metric: '4.8x Retenção Visual',
      status: 'Ativo',
      detail: 'Carrosséis magnéticos, estética intencional e narrativa de alto padrão.'
    },
    {
      id: 'web-flagship',
      code: 'MOD-03 // DIGITAL FLAGSHIP',
      title: 'Landing Pages Cinematográficas',
      metric: '1:1 Pixel Perfect',
      status: 'Otimizado',
      detail: 'Ecossistemas web desenhados como instrumentos digitais de conversão.'
    }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setItems((prev) => {
        const copy = [...prev];
        copy.unshift(copy.pop());
        return copy;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleManualCycle = () => {
    setItems((prev) => {
      const copy = [...prev];
      copy.unshift(copy.pop());
      return copy;
    });
  };

  return (
    <div className="group relative flex flex-col justify-between bg-[#FAF8F5] border border-[#0D0D12]/10 rounded-[2rem] p-7 md:p-8 shadow-[0_24px_60px_rgba(13,13,18,0.06)] hover:shadow-[0_30px_80px_rgba(13,13,18,0.11)] transition-all duration-500">
      {/* Top Status Bar */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <span className="font-mono text-[11px] uppercase tracking-widest text-[#2A2A35]/60 bg-[#0D0D12]/5 px-3 py-1 rounded-full">
            01 / BRANDING ENGINE
          </span>
          <button
            onClick={handleManualCycle}
            className="font-mono text-[11px] text-[#C9A84C] bg-[#0D0D12] px-3 py-1 rounded-full hover:scale-105 transition-transform cursor-pointer"
            title="Alternar diagnóstico"
          >
            SHUFFLE ↻
          </button>
        </div>

        {/* Interactive Shuffler Micro-UI */}
        <div
          onClick={handleManualCycle}
          className="relative h-56 w-full bg-[#0D0D12] rounded-[1.5rem] p-5 overflow-hidden cursor-pointer select-none border border-[#0D0D12]/10"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,168,76,0.16),transparent_65%)] pointer-events-none" />
          <div className="relative h-full w-full flex flex-col items-center justify-center">
            {items.map((item, index) => {
              const isFront = index === 0;
              const isMid = index === 1;
              const translateY = index === 0 ? 0 : index === 1 ? 18 : 34;
              const scale = index === 0 ? 1 : index === 1 ? 0.93 : 0.86;
              const opacity = index === 0 ? 1 : index === 1 ? 0.55 : 0.25;
              const zIndex = 30 - index * 10;

              return (
                <div
                  key={item.id}
                  style={{
                    transform: `translateY(${translateY}px) scale(${scale})`,
                    opacity,
                    zIndex
                  }}
                  className={`shuffler-card absolute inset-x-2 top-3 rounded-[1.25rem] p-4 border ${
                    isFront
                      ? 'bg-[#16161F] border-[#C9A84C]/50 shadow-[0_14px_35px_rgba(0,0,0,0.65)]'
                      : isMid
                      ? 'bg-[#12121A] border-white/10'
                      : 'bg-[#0E0E14] border-white/5'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[10px] tracking-wider text-[#C9A84C]">
                      {item.code}
                    </span>
                    <span className="inline-flex items-center gap-1.5 font-mono text-[10px] text-[#FAF8F5]/80 bg-white/5 px-2.5 py-0.5 rounded-full">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#C9A84C]" />
                      {item.status}
                    </span>
                  </div>
                  <h4 className="font-sans font-bold text-sm text-[#FAF8F5] tracking-tight mb-1">
                    {item.title}
                  </h4>
                  <p className="font-sans text-xs text-[#FAF8F5]/60 line-clamp-2 mb-3">
                    {item.detail}
                  </p>
                  <div className="flex items-center justify-between pt-2 border-t border-white/10">
                    <span className="font-mono text-[10px] text-[#FAF8F5]/50">
                      ÍNDICE DE AUTORIDADE
                    </span>
                    <span className="font-mono text-xs font-semibold text-[#C9A84C]">
                      {item.metric}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Card Description */}
      <div className="mt-7">
        <h3 className="font-sans font-bold text-xl text-[#0D0D12] tracking-tight mb-2">
          Posicionamento e Identidade de Marca
        </h3>
        <p className="font-sans text-sm text-[#2A2A35]/80 leading-relaxed">
          Construímos sistemas visuais e narrativas de alto valor que separam sua empresa da concorrência comum e criam desejo imediato.
        </p>
      </div>
    </div>
  );
}

/* ==========================================================================
   CARD 2: TELEMETRY TYPEWRITER (Inteligência de Dados e Conversão)
   ========================================================================== */
function TelemetryTypewriterCard() {
  const messages = [
    '> INICIANDO AUDITORIA DE FUNIL & META ADS...',
    '> OTIMIZANDO CRIATIVOS DE ALTA CONVERSÃO [CTR: 4.18%]',
    '> RASTREAMENTO GOOGLE ADS + PIXEL SERVER-SIDE ATIVO',
    '> CUSTO POR AQUISIÇÃO REDUZIDO EM -38.4% NESTE CICLO',
    '> ESCALANDO CAMPANHAS DE REMARKETING [ROAS: 6.7x]'
  ];

  const [msgIndex, setMsgIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [historyLogs, setHistoryLogs] = useState([
    '[OK] Arquitetura de Tráfego Pago calibrada',
    '[OK] Copywriting de resposta direta validado'
  ]);

  useEffect(() => {
    const currentMsg = messages[msgIndex];
    let timer;

    if (!isDeleting && displayedText.length < currentMsg.length) {
      timer = setTimeout(() => {
        setDisplayedText(currentMsg.slice(0, displayedText.length + 1));
      }, 36);
    } else if (!isDeleting && displayedText.length === currentMsg.length) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 1800);
    } else if (isDeleting && displayedText.length > 0) {
      timer = setTimeout(() => {
        setDisplayedText(currentMsg.slice(0, displayedText.length - 1));
      }, 15);
    } else if (isDeleting && displayedText.length === 0) {
      setIsDeleting(false);
      const completed = currentMsg.replace('> ', '[SYNC] ');
      setHistoryLogs((prev) => [completed, prev[0]]);
      setMsgIndex((prev) => (prev + 1) % messages.length);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, msgIndex]);

  return (
    <div className="group relative flex flex-col justify-between bg-[#FAF8F5] border border-[#0D0D12]/10 rounded-[2rem] p-7 md:p-8 shadow-[0_24px_60px_rgba(13,13,18,0.06)] hover:shadow-[0_30px_80px_rgba(13,13,18,0.11)] transition-all duration-500">
      <div>
        <div className="flex items-center justify-between mb-6">
          <span className="font-mono text-[11px] uppercase tracking-widest text-[#2A2A35]/60 bg-[#0D0D12]/5 px-3 py-1 rounded-full">
            02 / DATA TELEMETRY
          </span>
          <div className="inline-flex items-center gap-2 bg-[#0D0D12] text-[#FAF8F5] px-3 py-1 rounded-full">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C9A84C] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C9A84C]" />
            </span>
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#C9A84C]">
              Live Feed
            </span>
          </div>
        </div>

        {/* Telemetry Terminal Micro-UI */}
        <div className="relative h-56 w-full bg-[#0D0D12] rounded-[1.5rem] p-5 flex flex-col justify-between overflow-hidden border border-[#0D0D12]/10">
          <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#C9A84C]/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
            </div>
            <span className="font-mono text-[10px] text-[#FAF8F5]/40">
              poontoa://performance-core
            </span>
          </div>

          {/* Previous Logs + Active Typewriter Line */}
          <div className="my-auto space-y-2 font-mono text-xs">
            {historyLogs.map((log, idx) => (
              <div
                key={idx}
                className="text-[#FAF8F5]/35 truncate text-[11px]"
              >
                {log}
              </div>
            ))}
            <div className="text-[#FAF8F5] font-medium leading-relaxed min-h-[2.75rem]">
              <span>{displayedText}</span>
              <span className="inline-block w-2 h-4 ml-1 align-middle bg-[#C9A84C] animate-pulse" />
            </div>
          </div>

          {/* Telemetry Metrics Strip */}
          <div className="grid grid-cols-3 gap-2 pt-2.5 border-t border-white/10 font-mono">
            <div className="bg-white/5 rounded-xl px-2.5 py-1.5">
              <span className="block text-[9px] text-[#FAF8F5]/45">ROAS MÉDIO</span>
              <span className="text-xs font-semibold text-[#C9A84C]">6.4x</span>
            </div>
            <div className="bg-white/5 rounded-xl px-2.5 py-1.5">
              <span className="block text-[9px] text-[#FAF8F5]/45">CTR CRIATIVO</span>
              <span className="text-xs font-semibold text-[#FAF8F5]">4.18%</span>
            </div>
            <div className="bg-white/5 rounded-xl px-2.5 py-1.5">
              <span className="block text-[9px] text-[#FAF8F5]/45">CONVERSÃO</span>
              <span className="text-xs font-semibold text-emerald-400">+142%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Card Description */}
      <div className="mt-7">
        <h3 className="font-sans font-bold text-xl text-[#0D0D12] tracking-tight mb-2">
          Inteligência de Dados e Conversão
        </h3>
        <p className="font-sans text-sm text-[#2A2A35]/80 leading-relaxed">
          Gestão cirúrgica de Meta Ads, Google Ads e funis de conversão onde cada centavo investido é rastreado para multiplicar seu retorno.
        </p>
      </div>
    </div>
  );
}

/* ==========================================================================
   CARD 3: CURSOR PROTOCOL SCHEDULER (Produção Audiovisual e Sprints Criativos)
   ========================================================================== */
function CursorProtocolSchedulerCard() {
  const days = [
    { label: 'S', task: 'Roteiro' },
    { label: 'M', task: 'Captação' },
    { label: 'T', task: 'Motion' },
    { label: 'W', task: 'Reels 4K' },
    { label: 'T', task: 'Ads Cut' },
    { label: 'F', task: 'Deploy' },
    { label: 'S', task: 'Escala' }
  ];

  const [activeDays, setActiveDays] = useState([1, 3]);
  const [pressingDay, setPressingDay] = useState(null);
  const [pressingSave, setPressingSave] = useState(false);
  const [savedNotice, setSavedNotice] = useState(false);
  const [cursorState, setCursorState] = useState({
    x: 20,
    y: 140,
    opacity: 0,
    scale: 1
  });

  useEffect(() => {
    let isMounted = true;
    const targetSequence = [2, 4, 5];
    let stepIndex = 0;

    const runProtocolCycle = () => {
      if (!isMounted) return;
      const targetDay = targetSequence[stepIndex % targetSequence.length];
      stepIndex += 1;

      // Coordinates inside the 100% width scheduler box
      const dayX = 14 + targetDay * 36;
      const dayY = 66;

      // 1. Cursor enters
      setCursorState({ x: 24, y: 145, opacity: 1, scale: 1 });

      // 2. Move to target day cell
      const t1 = setTimeout(() => {
        if (!isMounted) return;
        setCursorState({ x: dayX, y: dayY, opacity: 1, scale: 1 });
      }, 450);

      // 3. Click press on day cell
      const t2 = setTimeout(() => {
        if (!isMounted) return;
        setCursorState({ x: dayX, y: dayY, opacity: 1, scale: 0.9 });
        setPressingDay(targetDay);
      }, 1150);

      // 4. Activate day & release click
      const t3 = setTimeout(() => {
        if (!isMounted) return;
        setPressingDay(null);
        setActiveDays((prev) =>
          prev.includes(targetDay)
            ? prev.filter((d) => d !== targetDay).concat(targetDay)
            : [...prev.slice(-2), targetDay]
        );
        setCursorState({ x: dayX, y: dayY, opacity: 1, scale: 1 });
      }, 1400);

      // 5. Move to Save button
      const t4 = setTimeout(() => {
        if (!isMounted) return;
        setCursorState({ x: 215, y: 142, opacity: 1, scale: 1 });
      }, 1900);

      // 6. Click Save button
      const t5 = setTimeout(() => {
        if (!isMounted) return;
        setPressingSave(true);
        setCursorState({ x: 215, y: 142, opacity: 1, scale: 0.92 });
      }, 2550);

      // 7. Release Save & fade out cursor
      const t6 = setTimeout(() => {
        if (!isMounted) return;
        setPressingSave(false);
        setSavedNotice(true);
        setCursorState({ x: 230, y: 155, opacity: 0, scale: 1 });
      }, 2850);

      const t7 = setTimeout(() => {
        if (!isMounted) return;
        setSavedNotice(false);
      }, 3700);

      return [t1, t2, t3, t4, t5, t6, t7];
    };

    let timers = runProtocolCycle();
    const loop = setInterval(() => {
      timers = runProtocolCycle();
    }, 4200);

    return () => {
      isMounted = false;
      clearInterval(loop);
      if (timers) timers.forEach(clearTimeout);
    };
  }, []);

  return (
    <div className="group relative flex flex-col justify-between bg-[#FAF8F5] border border-[#0D0D12]/10 rounded-[2rem] p-7 md:p-8 shadow-[0_24px_60px_rgba(13,13,18,0.06)] hover:shadow-[0_30px_80px_rgba(13,13,18,0.11)] transition-all duration-500">
      <div>
        <div className="flex items-center justify-between mb-6">
          <span className="font-mono text-[11px] uppercase tracking-widest text-[#2A2A35]/60 bg-[#0D0D12]/5 px-3 py-1 rounded-full">
            03 / SPRINT PROTOCOL
          </span>
          <span className="font-mono text-[11px] text-[#0D0D12] bg-[#C9A84C]/25 px-3 py-1 rounded-full font-medium">
            REELS & MOTION
          </span>
        </div>

        {/* Weekly Scheduler Micro-UI */}
        <div className="relative h-56 w-full bg-[#0D0D12] rounded-[1.5rem] p-5 flex flex-col justify-between overflow-hidden border border-[#0D0D12]/10 select-none">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#FAF8F5]/60">
              CRONOGRAMA DE SPRINT AUDIOVISUAL
            </span>
            <span className="font-mono text-[10px] text-[#C9A84C]">
              {savedNotice ? '✓ SPRINT PUBLICADO' : 'CADÊNCIA SEMANAL'}
            </span>
          </div>

          {/* 7-Day Grid (S M T W T F S) */}
          <div className="grid grid-cols-7 gap-1.5 my-auto">
            {days.map((d, idx) => {
              const isActive = activeDays.includes(idx);
              const isPressed = pressingDay === idx;
              return (
                <button
                  key={idx}
                  onClick={() =>
                    setActiveDays((prev) =>
                      prev.includes(idx) ? prev.filter((item) => item !== idx) : [...prev, idx]
                    )
                  }
                  style={{
                    transform: isPressed ? 'scale(0.95)' : 'scale(1)'
                  }}
                  className={`flex flex-col items-center justify-center rounded-xl py-2.5 px-1 border transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-[#C9A84C] text-[#0D0D12] border-[#C9A84C] shadow-[0_0_20px_rgba(201,168,76,0.4)]'
                      : 'bg-white/5 text-[#FAF8F5]/70 border-white/10 hover:border-white/25'
                  }`}
                >
                  <span className="font-mono text-xs font-bold">{d.label}</span>
                  <span
                    className={`font-mono text-[8px] mt-1 truncate max-w-full ${
                      isActive ? 'text-[#0D0D12] font-semibold' : 'text-[#FAF8F5]/40'
                    }`}
                  >
                    {d.task}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Bottom Action Row with Save Button */}
          <div className="flex items-center justify-between pt-2 border-t border-white/10">
            <div className="font-mono text-[10px] text-[#FAF8F5]/50">
              <span className="text-[#C9A84C] font-semibold">{activeDays.length} entregas</span> ativas na semana
            </div>
            <div
              style={{
                transform: pressingSave ? 'scale(0.95)' : 'scale(1)'
              }}
              className={`font-mono text-[10px] uppercase tracking-wider px-3.5 py-1.5 rounded-full transition-all duration-200 ${
                pressingSave || savedNotice
                  ? 'bg-[#C9A84C] text-[#0D0D12] font-semibold shadow-[0_0_16px_rgba(201,168,76,0.6)]'
                  : 'bg-white/10 text-[#FAF8F5] border border-white/15'
              }`}
            >
              Save Sprint
            </div>
          </div>

          {/* Animated SVG Cursor */}
          <div
            style={{
              transform: `translate3d(${cursorState.x}px, ${cursorState.y}px, 0) scale(${cursorState.scale})`,
              opacity: cursorState.opacity
            }}
            className="pointer-events-none absolute top-0 left-0 z-40 transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
          >
            <svg
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="drop-shadow-[0_6px_12px_rgba(0,0,0,0.65)]"
            >
              <path
                d="M4 3L11.5 20L14.2 13.8L20.5 11.2L4 3Z"
                fill="#C9A84C"
                stroke="#0D0D12"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Card Description */}
      <div className="mt-7">
        <h3 className="font-sans font-bold text-xl text-[#0D0D12] tracking-tight mb-2">
          Produção Audiovisual e Sprints Criativos
        </h3>
        <p className="font-sans text-sm text-[#2A2A35]/80 leading-relaxed">
          Reels cinematográficos, vídeos institucionais, motion graphics e baterias de criativos entregues em cadência previsível de alta velocidade.
        </p>
      </div>
    </div>
  );
}

/* ==========================================================================
   MAIN APPLICATION COMPONENT
   ========================================================================== */
export default function App() {
  const [navScrolled, setNavScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [proposalModalOpen, setProposalModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('Performance (R$ 1.800/mês)');
  const [activeCatalogTab, setActiveCatalogTab] = useState('combos');
  const [formState, setFormState] = useState({
    name: '',
    brand: '',
    whatsapp: '',
    goal: 'Escalar vendas, posicionamento e tráfego pago'
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const appRef = useRef(null);
  const heroSentinelRef = useRef(null);
  const philosophySectionRef = useRef(null);
  const protocolSectionRef = useRef(null);

  // Navbar morph observer via IntersectionObserver
  useEffect(() => {
    const sentinel = heroSentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setNavScrolled(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  // Master GSAP Lifecycle inside gsap.context()
  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Hero Staggered Entrance (y: 40 -> 0, opacity: 0 -> 1, stagger: 0.08, power3.out)
      gsap.fromTo(
        '.hero-reveal',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.15,
          stagger: 0.08,
          ease: 'power3.out',
          delay: 0.15
        }
      );

      // 2. Features Cards Staggered Entrance (stagger: 0.15)
      gsap.fromTo(
        '.feature-card-item',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '#artefatos',
            start: 'top 78%'
          }
        }
      );

      // 3. Philosophy Parallax & SplitText-style Word Reveal
      gsap.to('.philosophy-parallax-bg', {
        yPercent: 18,
        ease: 'none',
        scrollTrigger: {
          trigger: philosophySectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });

      gsap.fromTo(
        '.manifesto-word',
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.75,
          stagger: 0.04,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: philosophySectionRef.current,
            start: 'top 70%'
          }
        }
      );

      // 4. Protocol Sticky Stacking Cards (scale -> 0.9, blur -> 20px, opacity -> 0.5)
      const protocolCards = gsap.utils.toArray('.protocol-stack-card');
      protocolCards.forEach((card, index) => {
        if (index < protocolCards.length - 1) {
          const nextCard = protocolCards[index + 1];
          gsap.to(card, {
            scale: 0.9,
            opacity: 0.5,
            filter: 'blur(20px)',
            ease: 'power2.inOut',
            scrollTrigger: {
              trigger: nextCard,
              start: 'top 85%',
              end: 'top 15%',
              scrub: true
            }
          });
        }
      });

      // 5. Pricing Cards Reveal
      gsap.fromTo(
        '.pricing-card-item',
        { y: 45, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.95,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '#investimento',
            start: 'top 75%'
          }
        }
      );
    }, appRef);

    return () => ctx.revert();
  }, []);

  const openProposalWithPlan = (planName) => {
    setSelectedPlan(planName);
    setFormSubmitted(false);
    setProposalModalOpen(true);
  };

  const handleProposalSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const manifestoNeutralWords =
    'A maioria das agências de publicidade foca em: postagens genéricas, templates descartáveis e métricas de vaidade.'.split(
      ' '
    );
  const manifestoDramaWords =
    'Nós focamos em: lapidar autoridade inquestionável, desejo magnético e'.split(' ');

  // Real Service Catalog from Poontoa Commercial Table
  const catalogData = {
    combos: [
      {
        name: 'Combo Identidade + Instagram',
        price: 'R$ 650',
        tag: 'START RÁPIDO',
        items: ['Foto de perfil estratégica', 'Ajuste visual da marca', 'Paleta de cores & Tipografia', '6 artes para feed + 6 stories', '3 capas de destaque']
      },
      {
        name: 'Combo Lançamento',
        price: 'R$ 1.200',
        tag: 'ALTA PROCURA',
        items: ['Landing Page de alta conversão', '8 artes elaboradas', '4 sequências de stories', '2 Reels editados', '3 criativos para anúncio']
      },
      {
        name: 'Combo Empresa Profissional',
        price: 'R$ 2.400',
        tag: 'ESTRUTURA SÓLIDA',
        items: ['Site Institucional completo', '10 artes estratégicas', '5 stories + 3 Reels', '3 criativos para tráfego pago']
      },
      {
        name: 'Combo Presença Digital 360º',
        price: 'R$ 3.500',
        tag: 'FULL FLAGSHIP',
        items: ['Site Profissional sob medida', 'Identidade visual básica', '15 artes + 5 Reels', 'Configuração Meta Ads', '5 criativos de alta conversão']
      }
    ],
    audiovisual: [
      { name: 'Pacote 4 Reels Dinâmicos', price: 'R$ 400', tag: 'R$ 100/vídeo', items: ['Corte rítmico de retenção', 'Legendas dinâmicas', 'Sound design & Color grading'] },
      { name: 'Pacote 8 Reels Performance', price: 'R$ 720', tag: 'R$ 90/vídeo', items: ['Edição elaborada (até 60s)', 'Ganchos visuais nos 3 primeiros segundos', 'Otimizado para orgânico e Ads'] },
      { name: 'Pacote 12 Reels Autoridade', price: 'R$ 1.020', tag: 'R$ 85/vídeo', items: ['Motion graphics integrados', 'Direção de retenção contínua', 'Calendário mensal completo'] },
      { name: 'Vídeo Institucional / YouTube', price: 'R$ 350 – 1.500', tag: 'SOB MEDIDA', items: ['Vídeos institucionais de marca', 'Edição YouTube (10 a 20+ min)', 'Motion Design cinematográfico'] }
    ],
    sites_trafego: [
      { name: 'Landing Page Cinematográfica', price: 'R$ 1.200 – 1.800', tag: 'CONVERSÃO PURA', items: ['Design 1:1 personalizado', 'Animações fluidas e responsividade', 'Integração WhatsApp & SEO básico'] },
      { name: 'Site Profissional / Avançado', price: 'R$ 3.500 – 8.000+', tag: 'FLAGSHIP', items: ['Múltiplas seções estratégicas', 'Performance máxima e direção de arte', 'Arquitetura de marca digital'] },
      { name: 'Setup Tráfego (Meta + Google)', price: 'R$ 350 – 900', tag: 'ESTRUTURAÇÃO', items: ['Configuração Meta Ads & Google Ads', 'Auditoria de campanhas e pixel', 'Estruturação completa de público'] },
      { name: 'Gestão Mensal de Tráfego', price: 'R$ 600 – 1.800/mês', tag: 'ESCALA ROI', items: ['Planos Essencial, Performance e Estratégico', 'Otimização diária de criativos e lances', 'Relatórios transparentes de conversão'] }
    ]
  };

  return (
    <div ref={appRef} className="relative min-h-screen bg-[#FAF8F5] text-[#2A2A35] selection:bg-[#C9A84C] selection:text-[#0D0D12]">
      {/* ====================================================================
          GLOBAL INLINE SVG NOISE OVERLAY (0.05 Opacity — Fixed Design System)
          ==================================================================== */}
      <svg
        className="pointer-events-none fixed inset-0 z-[999] h-full w-full opacity-[0.05]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="poontoa-midnight-noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.82"
            numOctaves="4"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#poontoa-midnight-noise)" />
      </svg>

      {/* ====================================================================
          A. NAVBAR — "A Ilha Flutuante"
          ==================================================================== */}
      <header className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4">
        <nav
          aria-label="Navegação Principal"
          className={`w-full max-w-5xl rounded-full px-5 md:px-7 py-3.5 transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] flex items-center justify-between ${
            navScrolled
              ? 'bg-[#FAF8F5]/75 backdrop-blur-xl text-[#0D0D12] border border-[#0D0D12]/10 shadow-[0_20px_50px_rgba(13,13,18,0.12)]'
              : 'bg-[#0D0D12]/30 backdrop-blur-md text-[#FAF8F5] border border-white/10'
          }`}
        >
          {/* Brand Logo */}
          <a
            href="#"
            className="nav-link-lift flex items-center gap-3 group focus:outline-none"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#C9A84C] text-[#0D0D12] font-serif italic font-bold text-lg tracking-tighter shadow-sm">
              PA
            </span>
            <div className="flex flex-col">
              <span className="font-sans font-extrabold tracking-[-0.04em] text-lg leading-none">
                POONTOA
              </span>
              <span
                className={`font-mono text-[9px] tracking-[0.22em] uppercase mt-0.5 ${
                  navScrolled ? 'text-[#2A2A35]/70' : 'text-[#FAF8F5]/60'
                }`}
              >
                DESIGN • MÍDIA • RESULTADOS
              </span>
            </div>
          </a>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8 font-sans text-sm font-medium">
            <a
              href="#artefatos"
              className="nav-link-lift opacity-80 hover:opacity-100 hover:text-[#C9A84C]"
            >
              Valências
            </a>
            <a
              href="#manifesto"
              className="nav-link-lift opacity-80 hover:opacity-100 hover:text-[#C9A84C]"
            >
              Filosofia
            </a>
            <a
              href="#protocolo"
              className="nav-link-lift opacity-80 hover:opacity-100 hover:text-[#C9A84C]"
            >
              Protocolo
            </a>
            <a
              href="#investimento"
              className="nav-link-lift opacity-80 hover:opacity-100 hover:text-[#C9A84C]"
            >
              Planos & Combos
            </a>
          </div>

          {/* Primary CTA */}
          <div className="hidden sm:block">
            <MagneticButton
              variant="accent"
              onClick={() => openProposalWithPlan('Proposta Personalizada Poontoa')}
              className="!px-5 !py-2.5 !text-xs"
            >
              <span>Solicitar uma proposta comercial</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </MagneticButton>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full border border-current/15 hover:border-[#C9A84C] transition-colors"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>

        {/* Mobile Dropdown Pill */}
        {mobileMenuOpen && (
          <div className="fixed top-24 left-4 right-4 bg-[#0D0D12]/95 backdrop-blur-2xl text-[#FAF8F5] rounded-[2rem] p-6 border border-white/15 shadow-2xl md:hidden flex flex-col gap-4 z-50">
            <a
              href="#artefatos"
              onClick={() => setMobileMenuOpen(false)}
              className="font-sans text-base font-medium py-2 border-b border-white/10"
            >
              01. Propostas de Valor
            </a>
            <a
              href="#manifesto"
              onClick={() => setMobileMenuOpen(false)}
              className="font-sans text-base font-medium py-2 border-b border-white/10"
            >
              02. O Manifesto
            </a>
            <a
              href="#protocolo"
              onClick={() => setMobileMenuOpen(false)}
              className="font-sans text-base font-medium py-2 border-b border-white/10"
            >
              03. Protocolo de Execução
            </a>
            <a
              href="#investimento"
              onClick={() => setMobileMenuOpen(false)}
              className="font-sans text-base font-medium py-2 border-b border-white/10"
            >
              04. Planos & Tabela Comercial
            </a>
            <MagneticButton
              variant="accent"
              onClick={() => {
                setMobileMenuOpen(false);
                openProposalWithPlan('Proposta Personalizada Poontoa');
              }}
              className="w-full mt-2"
            >
              <span>Solicitar uma proposta comercial</span>
              <ArrowUpRight className="w-4 h-4" />
            </MagneticButton>
          </div>
        )}
      </header>

      {/* ====================================================================
          B. HERO SECTION — "A Cena de Abertura"
          ==================================================================== */}
      <section className="relative h-[100dvh] min-h-[680px] w-full overflow-hidden bg-[#0D0D12] flex items-end">
        {/* Sentinel for Navbar IntersectionObserver */}
        <div ref={heroSentinelRef} className="absolute top-0 left-0 right-0 h-20 pointer-events-none" />

        {/* Unsplash Background Image matching Preset B `imageMood` (dark marble, gold accents, architectural shadows, luxury interiors) */}
        <img
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2200&q=85"
          alt="Ateliê arquitetônico sombrio em mármore e luz dourada"
          className="absolute inset-0 h-full w-full object-cover object-center scale-105 opacity-55"
        />

        {/* Heavy Gradient Overlay from Primary (#0D0D12) to Black */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D12] via-[#0D0D12]/80 to-black/60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(201,168,76,0.14),transparent_55%)]" />

        {/* Hero Content pushed to the bottom-left third */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pb-14 md:pb-20 lg:pb-24">
          <div className="max-w-4xl">
            {/* Monospace Eyebrow */}
            <div className="hero-reveal inline-flex items-center gap-3 rounded-full bg-white/5 border border-white/15 backdrop-blur-md px-4 py-2 mb-6">
              <span className="h-2 w-2 rounded-full bg-[#C9A84C]" />
              <span className="font-mono text-[11px] md:text-xs uppercase tracking-[0.2em] text-[#FAF8F5]/90">
                POONTOA // AGÊNCIA DE PUBLICIDADE & PERFORMANCE CRIATIVA
              </span>
            </div>

            {/* Hero Pattern Preset B: "[Substantivo aspiracional] encontra a/o" (Bold Sans) / "[Palavra de precisão]." (Massive Serif Italic) */}
            <h1 className="text-[#FAF8F5] tracking-tight">
              <span className="hero-reveal block font-sans font-bold text-2xl sm:text-4xl md:text-5xl tracking-[-0.03em] text-[#FAF8F5]/90 mb-1 md:mb-2">
                Autoridade encontra a
              </span>
              <span className="hero-reveal block font-serif italic font-normal text-6xl sm:text-8xl md:text-[7.25rem] lg:text-[8.5rem] leading-[0.92] text-[#C9A84C] drop-shadow-[0_12px_40px_rgba(0,0,0,0.6)]">
                Precisão.
              </span>
            </h1>

            {/* Brand Purpose Subtitle */}
            <p className="hero-reveal mt-6 max-w-2xl font-sans text-base sm:text-lg md:text-xl text-[#FAF8F5]/75 font-light leading-relaxed">
              Transformamos marcas em referências de mercado unindo direção de arte magnética, produção audiovisual de alta retenção e engenharia de tráfego pago orientada por dados.
            </p>

            {/* Primary CTA & Quick Telemetry Pill */}
            <div className="hero-reveal mt-9 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
              <MagneticButton
                variant="accent"
                onClick={() => openProposalWithPlan('Diagnóstico & Proposta Comercial')}
                className="text-base px-8 py-4"
              >
                <span>Solicitar uma proposta comercial</span>
                <ArrowUpRight className="w-5 h-5" />
              </MagneticButton>

              <a
                href="#investimento"
                className="nav-link-lift inline-flex items-center justify-center gap-2.5 font-mono text-xs uppercase tracking-widest text-[#FAF8F5]/80 hover:text-[#C9A84C] py-3 px-4"
              >
                <span>Ver Planos & Combos 2026</span>
                <ChevronRight className="w-4 h-4 text-[#C9A84C]" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          C. FEATURES — "Artefatos Funcionais Interativos"
          ==================================================================== */}
      <section id="artefatos" className="relative py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.22em] text-[#C9A84C] bg-[#0D0D12] px-4 py-1.5 rounded-full inline-block mb-4">
              ENGENHARIA CRIATIVA // 03 PILARES
            </span>
            <h2 className="font-sans font-extrabold text-3xl sm:text-5xl text-[#0D0D12] tracking-[-0.03em] leading-[1.08]">
              Artefatos de crescimento{' '}
              <span className="font-serif italic font-normal text-[#C9A84C] bg-[#0D0D12] px-4 py-0.5 rounded-[1.5rem] inline-block">
                sob medida.
              </span>
            </h2>
          </div>
          <p className="font-sans text-sm md:text-base text-[#2A2A35]/75 max-w-md leading-relaxed">
            Cada entrega da Poontoa opera como uma engrenagem de relojoaria: estética que constrói percepção de valor e mídia que converte atenção em faturamento.
          </p>
        </div>

        {/* 3 Interactive Functional Artifact Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="feature-card-item">
            <DiagnosticShufflerCard />
          </div>
          <div className="feature-card-item">
            <TelemetryTypewriterCard />
          </div>
          <div className="feature-card-item">
            <CursorProtocolSchedulerCard />
          </div>
        </div>
      </section>

      {/* ====================================================================
          D. PHILOSOPHY — "O Manifesto"
          ==================================================================== */}
      <section
        id="manifesto"
        ref={philosophySectionRef}
        className="relative w-full overflow-hidden bg-[#0D0D12] text-[#FAF8F5] py-28 md:py-40 px-6 md:px-12 rounded-[2.5rem] md:rounded-[3rem] my-8"
      >
        {/* Parallax Texture Image behind text */}
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80"
          alt="Sombras arquitetônicas e textura de mármore escuro"
          className="philosophy-parallax-bg absolute -top-24 inset-x-0 h-[130%] w-full object-cover opacity-15 pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D12] via-transparent to-[#0D0D12]" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.24em] text-[#C9A84C] mb-10">
            <Sparkles className="w-4 h-4" />
            <span>MANIFESTO POONTOA // IDEIAS QUE VIRAM RESULTADOS</span>
          </div>

          {/* Statement 1: Neutral, smaller */}
          <p className="font-sans text-lg sm:text-2xl md:text-3xl text-[#FAF8F5]/55 font-normal max-w-3xl leading-relaxed mb-12">
            {manifestoNeutralWords.map((word, idx) => (
              <span key={idx} className="manifesto-word inline-block mr-2">
                {word}
              </span>
            ))}
          </p>

          {/* Statement 2: Massive Drama Serif Italic + Accent keyword */}
          <h2 className="font-serif italic font-normal text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] leading-[1.06] tracking-tight text-[#FAF8F5]">
            {manifestoDramaWords.map((word, idx) => (
              <span key={idx} className="manifesto-word inline-block mr-3">
                {word}
              </span>
            ))}
            <span className="manifesto-word inline-block text-[#C9A84C] underline decoration-[#C9A84C]/30 underline-offset-8">
              conversão de alta precisão.
            </span>
          </h2>

          {/* Manifesto Bottom Metrics */}
          <div className="mt-16 pt-12 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-8 font-mono">
            <div>
              <span className="block text-2xl md:text-4xl font-bold text-[#C9A84C]">360º</span>
              <span className="text-xs text-[#FAF8F5]/60 uppercase tracking-wider mt-1 block">
                Design, Vídeo, Web & Ads
              </span>
            </div>
            <div>
              <span className="block text-2xl md:text-4xl font-bold text-[#FAF8F5]">1:1</span>
              <span className="text-xs text-[#FAF8F5]/60 uppercase tracking-wider mt-1 block">
                Direção Criativa Exclusiva
              </span>
            </div>
            <div>
              <span className="block text-2xl md:text-4xl font-bold text-[#C9A84C]">ROI+</span>
              <span className="text-xs text-[#FAF8F5]/60 uppercase tracking-wider mt-1 block">
                Foco em Performance Real
              </span>
            </div>
            <div>
              <span className="block text-2xl md:text-4xl font-bold text-[#FAF8F5]">24/7</span>
              <span className="text-xs text-[#FAF8F5]/60 uppercase tracking-wider mt-1 block">
                Ativos Digitais Vendendo
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          E. PROTOCOL — "Arquivo Fixo de Empilhamento (Sticky Stacking)"
          ==================================================================== */}
      <section id="protocolo" ref={protocolSectionRef} className="relative py-24 md:py-32 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto">
        <div className="mb-16 max-w-3xl">
          <span className="font-mono text-xs uppercase tracking-[0.22em] text-[#C9A84C] bg-[#0D0D12] px-4 py-1.5 rounded-full inline-block mb-4">
            METODOLOGIA PROPRIETÁRIA
          </span>
          <h2 className="font-sans font-extrabold text-3xl sm:text-5xl text-[#0D0D12] tracking-[-0.03em]">
            O Protocolo de{' '}
            <span className="font-serif italic font-normal text-[#C9A84C] bg-[#0D0D12] px-4 py-0.5 rounded-[1.5rem] inline-block">
              Transformação.
            </span>
          </h2>
          <p className="font-sans text-base text-[#2A2A35]/75 mt-4">
            Role para inspecionar as três fases do nosso método operacional que transforma negócios locais e digitais em marcas líderes.
          </p>
        </div>

        {/* Sticky Stacking Container */}
        <div className="relative space-y-12 md:space-y-20">
          {/* PROTOCOL CARD 01: Concentric Geometric Watchmaker Gear SVG */}
          <div className="protocol-stack-card sticky top-24 min-h-[76vh] w-full rounded-[2.5rem] md:rounded-[3rem] bg-[#0D0D12] text-[#FAF8F5] border border-white/10 p-8 sm:p-12 md:p-16 shadow-[0_30px_90px_rgba(13,13,18,0.35)] flex flex-col lg:flex-row items-center justify-between gap-10 overflow-hidden">
            <div className="relative z-10 max-w-xl">
              <div className="inline-flex items-center gap-3 font-mono text-xs text-[#C9A84C] bg-white/5 border border-white/10 px-4 py-1.5 rounded-full mb-6">
                <span>PASSO 01 // DIAGNÓSTICO & IDENTIDADE</span>
              </div>
              <h3 className="font-sans font-bold text-3xl sm:text-5xl tracking-tight text-[#FAF8F5] mb-5">
                Engenharia de Posicionamento & DNA Visual
              </h3>
              <p className="font-sans text-base sm:text-lg text-[#FAF8F5]/70 leading-relaxed mb-8">
                Mapeamos o território competitivo da sua marca, refinamos sua paleta cromática, tipografia e criamos uma linha editorial inconfundível que comunica autoridade antes mesmo da primeira palavra ser lida.
              </p>
              <div className="flex flex-wrap gap-3 font-mono text-xs text-[#C9A84C]">
                <span className="bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full">
                  • Identidade Visual
                </span>
                <span className="bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full">
                  • Direção de Feed & Stories
                </span>
                <span className="bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full">
                  • Landing Page Premium
                </span>
              </div>
            </div>

            {/* Unique SVG Animation 1: Rotating Watchmaker Concentric Geometry */}
            <div className="relative flex items-center justify-center w-64 h-64 sm:w-80 sm:h-80 shrink-0 bg-[#15151E] rounded-[2rem] border border-white/10 p-6">
              <svg viewBox="0 0 240 240" className="w-full h-full">
                <g className="animate-slow-spin">
                  <circle
                    cx="120"
                    cy="120"
                    r="95"
                    fill="none"
                    stroke="#C9A84C"
                    strokeWidth="1.2"
                    strokeDasharray="8 6"
                    opacity="0.6"
                  />
                  <circle
                    cx="120"
                    cy="120"
                    r="72"
                    fill="none"
                    stroke="#FAF8F5"
                    strokeWidth="1"
                    strokeDasharray="2 8"
                    opacity="0.35"
                  />
                  {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
                    <line
                      key={deg}
                      x1="120"
                      y1="16"
                      x2="120"
                      y2="28"
                      stroke="#C9A84C"
                      strokeWidth="2"
                      transform={`rotate(${deg} 120 120)`}
                    />
                  ))}
                </g>
                <g className="animate-slow-spin-reverse">
                  <polygon
                    points="120,48 182,120 120,192 58,120"
                    fill="none"
                    stroke="#C9A84C"
                    strokeWidth="1.5"
                    opacity="0.75"
                  />
                  <rect
                    x="78"
                    y="78"
                    width="84"
                    height="84"
                    fill="none"
                    stroke="#FAF8F5"
                    strokeWidth="1"
                    opacity="0.25"
                  />
                </g>
                <circle cx="120" cy="120" r="10" fill="#C9A84C" />
                <circle cx="120" cy="120" r="4" fill="#0D0D12" />
              </svg>
              <span className="absolute bottom-3 right-4 font-mono text-[10px] text-[#C9A84C]/80">
                CALIBRAÇÃO // 01
              </span>
            </div>
          </div>

          {/* PROTOCOL CARD 02: Horizontal Laser Scanning over Matrix Grid */}
          <div className="protocol-stack-card sticky top-24 min-h-[76vh] w-full rounded-[2.5rem] md:rounded-[3rem] bg-[#14141D] text-[#FAF8F5] border border-[#C9A84C]/30 p-8 sm:p-12 md:p-16 shadow-[0_30px_90px_rgba(13,13,18,0.45)] flex flex-col lg:flex-row items-center justify-between gap-10 overflow-hidden">
            <div className="relative z-10 max-w-xl">
              <div className="inline-flex items-center gap-3 font-mono text-xs text-[#C9A84C] bg-white/5 border border-white/10 px-4 py-1.5 rounded-full mb-6">
                <span>PASSO 02 // PRODUÇÃO & ECOSSISTEMA</span>
              </div>
              <h3 className="font-sans font-bold text-3xl sm:text-5xl tracking-tight text-[#FAF8F5] mb-5">
                Sprints Criativos, Reels & Experiência Digital
              </h3>
              <p className="font-sans text-base sm:text-lg text-[#FAF8F5]/70 leading-relaxed mb-8">
                Entramos em produção intensiva: carrosséis magnéticos, edição de vídeo com retenção milimétrica, motion graphics e páginas de alta conversão prontas para receber tráfego qualificado.
              </p>
              <div className="flex flex-wrap gap-3 font-mono text-xs text-[#C9A84C]">
                <span className="bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full">
                  • Pacotes de Artes & Stories
                </span>
                <span className="bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full">
                  • Edição de Reels & YouTube
                </span>
                <span className="bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full">
                  • Copywriting Persuasivo
                </span>
              </div>
            </div>

            {/* Unique SVG Animation 2: Laser Scanning Line across Cell Grid */}
            <div className="relative flex items-center justify-center w-64 h-64 sm:w-80 sm:h-80 shrink-0 bg-[#0D0D12] rounded-[2rem] border border-white/10 p-6 overflow-hidden">
              <svg viewBox="0 0 220 220" className="w-full h-full">
                {/* Grid of nodes */}
                {Array.from({ length: 7 }).map((_, row) =>
                  Array.from({ length: 7 }).map((__, col) => {
                    const cx = 25 + col * 28;
                    const cy = 25 + row * 28;
                    const highlight = (row + col) % 3 === 0;
                    return (
                      <g key={`${row}-${col}`}>
                        <rect
                          x={cx - 8}
                          y={cy - 8}
                          width="16"
                          height="16"
                          rx="4"
                          fill={highlight ? 'rgba(201,168,76,0.18)' : 'rgba(250,248,245,0.04)'}
                          stroke={highlight ? '#C9A84C' : 'rgba(250,248,245,0.12)'}
                          strokeWidth="1"
                        />
                        <circle
                          cx={cx}
                          cy={cy}
                          r="2"
                          fill={highlight ? '#C9A84C' : 'rgba(250,248,245,0.3)'}
                        />
                      </g>
                    );
                  })
                )}
              </svg>
              {/* Horizontal Laser Bar */}
              <div className="animate-laser-scan absolute top-6 left-4 right-4 h-0.5 bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent shadow-[0_0_20px_4px_rgba(201,168,76,0.75)]" />
              <span className="absolute bottom-3 right-4 font-mono text-[10px] text-[#C9A84C]/80">
                SCANNER CRIATIVO // 02
              </span>
            </div>
          </div>

          {/* PROTOCOL CARD 03: Pulsing Waveform (EKG Conversion Path) */}
          <div className="protocol-stack-card sticky top-24 min-h-[76vh] w-full rounded-[2.5rem] md:rounded-[3rem] bg-[#0D0D12] text-[#FAF8F5] border border-white/15 p-8 sm:p-12 md:p-16 shadow-[0_30px_90px_rgba(13,13,18,0.5)] flex flex-col lg:flex-row items-center justify-between gap-10 overflow-hidden">
            <div className="relative z-10 max-w-xl">
              <div className="inline-flex items-center gap-3 font-mono text-xs text-[#C9A84C] bg-white/5 border border-white/10 px-4 py-1.5 rounded-full mb-6">
                <span>PASSO 03 // PERFORMANCE & ESCALA</span>
              </div>
              <h3 className="font-sans font-bold text-3xl sm:text-5xl tracking-tight text-[#FAF8F5] mb-5">
                Tráfego Pago & Otimização Contínua de Receita
              </h3>
              <p className="font-sans text-base sm:text-lg text-[#FAF8F5]/70 leading-relaxed mb-8">
                Ativamos campanhas de alta precisão no Meta Ads e Google Ads. Monitoramos métricas em tempo real, testamos variações criativas e escalamos os anúncios vencedores para gerar demanda previsível todos os dias.
              </p>
              <div className="flex flex-wrap gap-3 font-mono text-xs text-[#C9A84C]">
                <span className="bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full">
                  • Meta Ads & Google Ads
                </span>
                <span className="bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full">
                  • Auditoria & Remarketing
                </span>
                <span className="bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full">
                  • Relatórios de Conversão
                </span>
              </div>
            </div>

            {/* Unique SVG Animation 3: Pulsing EKG Waveform */}
            <div className="relative flex items-center justify-center w-64 h-64 sm:w-80 sm:h-80 shrink-0 bg-[#15151E] rounded-[2rem] border border-white/10 p-6">
              <svg viewBox="0 0 240 160" className="w-full h-full">
                <line x1="0" y1="40" x2="240" y2="40" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                <line x1="0" y1="80" x2="240" y2="80" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                <line x1="0" y1="120" x2="240" y2="120" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                {/* Base faint path */}
                <path
                  d="M 10 80 L 55 80 L 70 55 L 85 110 L 105 22 L 125 130 L 142 65 L 158 80 L 230 80"
                  fill="none"
                  stroke="rgba(201,168,76,0.2)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Animated pulsing stroke-dashoffset path */}
                <path
                  d="M 10 80 L 55 80 L 70 55 L 85 110 L 105 22 L 125 130 L 142 65 L 158 80 L 230 80"
                  fill="none"
                  stroke="#C9A84C"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="animate-ekg-wave"
                />
                <circle cx="105" cy="22" r="4.5" fill="#C9A84C" className="animate-ping" />
                <circle cx="105" cy="22" r="4" fill="#FAF8F5" />
              </svg>
              <span className="absolute bottom-3 right-4 font-mono text-[10px] text-[#C9A84C]/80">
                PULSO DE ROI // 03
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          F. MEMBERSHIP / PRICING (Assinatura Mensal + Catálogo Poontoa)
          ==================================================================== */}
      <section id="investimento" className="relative py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs uppercase tracking-[0.22em] text-[#C9A84C] bg-[#0D0D12] px-4 py-1.5 rounded-full inline-block mb-4">
            INVESTIMENTO TRANSPARENTE // PLANOS & PACOTES
          </span>
          <h2 className="font-sans font-extrabold text-3xl sm:text-5xl text-[#0D0D12] tracking-[-0.03em]">
            Planos Mensais de{' '}
            <span className="font-serif italic font-normal text-[#C9A84C] bg-[#0D0D12] px-4 py-0.5 rounded-[1.5rem] inline-block">
              Aceleração.
            </span>
          </h2>
          <p className="font-sans text-base text-[#2A2A35]/75 mt-4">
            Escolha a cadência mensal ideal para sua marca ou explore abaixo nossos combos de lançamento, sites e produção audiovisual avulsa.
          </p>
        </div>

        {/* 3 Tier Pricing Grid ("Essencial", "Performance" highlighted, "Enterprise") */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* Tier 1: Essencial (Start) */}
          <div className="pricing-card-item flex flex-col justify-between rounded-[2.25rem] bg-[#FAF8F5] border border-[#0D0D12]/12 p-8 md:p-10 shadow-[0_20px_50px_rgba(13,13,18,0.05)]">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs uppercase tracking-widest text-[#2A2A35]/70">
                  NÍVEL 01 // START
                </span>
                <span className="font-mono text-xs bg-[#0D0D12]/5 text-[#0D0D12] px-3 py-1 rounded-full">
                  Presença Constante
                </span>
              </div>
              <h3 className="font-sans font-bold text-2xl text-[#0D0D12] mb-2">Essencial</h3>
              <p className="font-sans text-sm text-[#2A2A35]/70 mb-6">
                Ideal para marcas que buscam profissionalizar o posicionamento digital com consistência visual.
              </p>
              <div className="flex items-baseline gap-1 mb-8 pb-6 border-b border-[#0D0D12]/10">
                <span className="font-sans font-extrabold text-4xl sm:text-5xl text-[#0D0D12] tracking-tight">
                  R$ 750
                </span>
                <span className="font-mono text-xs text-[#2A2A35]/60">/mês</span>
              </div>

              <ul className="space-y-3.5 font-sans text-sm text-[#2A2A35] mb-8">
                {[
                  '8 Artes estratégicas para feed',
                  '4 Sequências de stories magnéticos',
                  '2 Reels editados com retenção',
                  'Planejamento básico de conteúdo',
                  'Identidade visual mantida com rigor',
                  'Opcional: Gestão de Tráfego Essencial (+R$ 600)'
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0D0D12]/10 text-[#0D0D12]">
                      <Check className="w-3 h-3" />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <MagneticButton
              variant="dark"
              onClick={() => openProposalWithPlan('Plano Essencial (Start — R$ 750/mês)')}
              className="w-full"
            >
              <span>Solicitar uma proposta comercial</span>
              <ArrowUpRight className="w-4 h-4" />
            </MagneticButton>
          </div>

          {/* Tier 2: Performance (Highlighted Middle Card — Primary Obsidian BG + Champagne Accent CTA) */}
          <div className="pricing-card-item relative flex flex-col justify-between rounded-[2.25rem] bg-[#0D0D12] text-[#FAF8F5] ring-2 ring-[#C9A84C] p-8 md:p-10 shadow-[0_30px_90px_rgba(13,13,18,0.35)] lg:-translate-y-4">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#C9A84C] text-[#0D0D12] font-mono text-[11px] font-bold uppercase tracking-widest px-4 py-1 rounded-full shadow-md">
              MAIS ESCOLHIDO // ALTA ESCALA
            </div>

            <div>
              <div className="flex items-center justify-between mb-6 mt-2">
                <span className="font-mono text-xs uppercase tracking-widest text-[#C9A84C]">
                  NÍVEL 02 // PERFORMANCE
                </span>
                <span className="font-mono text-xs bg-white/10 text-[#FAF8F5] px-3 py-1 rounded-full">
                  Crescimento Acelerado
                </span>
              </div>
              <h3 className="font-sans font-bold text-2xl text-[#FAF8F5] mb-2">Performance</h3>
              <p className="font-sans text-sm text-[#FAF8F5]/70 mb-6">
                Operação completa de conteúdo, vídeo, copy e criativos de anúncios para dominar seu nicho.
              </p>
              <div className="flex items-baseline gap-1 mb-8 pb-6 border-b border-white/10">
                <span className="font-sans font-extrabold text-4xl sm:text-5xl text-[#C9A84C] tracking-tight">
                  R$ 1.800
                </span>
                <span className="font-mono text-xs text-[#FAF8F5]/60">/mês</span>
              </div>

              <ul className="space-y-3.5 font-sans text-sm text-[#FAF8F5]/90 mb-8">
                {[
                  '16 Artes elaboradas de alto impacto',
                  '12 Sequências estratégicas de stories',
                  '8 Reels dinâmicos com foco em retenção',
                  'Planejamento estratégico & Gestão de conteúdo',
                  'Copywriting persuasivo para todas as peças',
                  'Criativos dedicados para anúncios (Ads)',
                  'Análise mensal de métricas e conversão',
                  'Disponível também na versão Profissional (R$ 1.200/mês)'
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#C9A84C] text-[#0D0D12]">
                      <Check className="w-3 h-3" />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <MagneticButton
              variant="accent"
              onClick={() => openProposalWithPlan('Plano Performance (R$ 1.800/mês)')}
              className="w-full"
            >
              <span>Solicitar uma proposta comercial</span>
              <ArrowUpRight className="w-4 h-4" />
            </MagneticButton>
          </div>

          {/* Tier 3: Enterprise (Full-Service & Combos) */}
          <div className="pricing-card-item flex flex-col justify-between rounded-[2.25rem] bg-[#FAF8F5] border border-[#0D0D12]/12 p-8 md:p-10 shadow-[0_20px_50px_rgba(13,13,18,0.05)]">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs uppercase tracking-widest text-[#2A2A35]/70">
                  NÍVEL 03 // FULL-SERVICE
                </span>
                <span className="font-mono text-xs bg-[#C9A84C]/20 text-[#0D0D12] px-3 py-1 rounded-full font-medium">
                  Ecossistema 360º
                </span>
              </div>
              <h3 className="font-sans font-bold text-2xl text-[#0D0D12] mb-2">Enterprise</h3>
              <p className="font-sans text-sm text-[#2A2A35]/70 mb-6">
                Combinação de Tráfego Pago Estratégico, Site/Landing Page, Produção Audiovisual e Branding.
              </p>
              <div className="flex items-baseline gap-2 mb-8 pb-6 border-b border-[#0D0D12]/10">
                <span className="font-sans font-extrabold text-3xl sm:text-4xl text-[#0D0D12] tracking-tight">
                  R$ 3.500+
                </span>
                <span className="font-mono text-xs text-[#2A2A35]/60">/projeto ou mensal</span>
              </div>

              <ul className="space-y-3.5 font-sans text-sm text-[#2A2A35] mb-8">
                {[
                  'Site Profissional ou Landing Page Cinematográfica',
                  'Gestão Estratégica Meta Ads + Google Ads',
                  'Produção de Vídeos Institucionais & Motion Graphics',
                  'Identidade Visual Completa & Key Visuals',
                  '15+ Artes & 5+ Reels + 5 Criativos de Tráfego',
                  'Atendimento executivo online e presencial'
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0D0D12]/10 text-[#0D0D12]">
                      <Check className="w-3 h-3" />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <MagneticButton
              variant="dark"
              onClick={() => openProposalWithPlan('Plano Enterprise / Presença Digital 360º')}
              className="w-full"
            >
              <span>Solicitar uma proposta comercial</span>
              <ArrowUpRight className="w-4 h-4" />
            </MagneticButton>
          </div>
        </div>

        {/* Interactive Poontoa Service Catalog (Combos Especiais, Audiovisual, Sites & Tráfego) */}
        <div className="mt-20 rounded-[2.5rem] bg-[#0D0D12] text-[#FAF8F5] p-8 sm:p-12 border border-white/10 shadow-[0_24px_70px_rgba(13,13,18,0.2)]">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-white/10">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#C9A84C] block mb-2">
                TABELA MODULAR POONTOA // SOLUÇÕES ESPECÍFICAS
              </span>
              <h3 className="font-sans font-bold text-2xl sm:text-3xl text-[#FAF8F5]">
                Combos Especiais, Vídeo, Sites & Tráfego Pago
              </h3>
            </div>

            {/* Category Selector Pills */}
            <div className="flex flex-wrap gap-2 bg-white/5 p-1.5 rounded-full border border-white/10">
              {[
                { id: 'combos', label: 'Combos Especiais' },
                { id: 'audiovisual', label: 'Edição de Vídeo & Reels' },
                { id: 'sites_trafego', label: 'Sites & Tráfego Pago' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveCatalogTab(tab.id)}
                  className={`font-mono text-xs px-4 py-2 rounded-full transition-all cursor-pointer ${
                    activeCatalogTab === tab.id
                      ? 'bg-[#C9A84C] text-[#0D0D12] font-semibold shadow-sm'
                      : 'text-[#FAF8F5]/70 hover:text-[#FAF8F5]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
            {catalogData[activeCatalogTab].map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between rounded-[1.75rem] bg-white/[0.04] hover:bg-white/[0.07] border border-white/10 hover:border-[#C9A84C]/50 p-6 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#C9A84C] bg-[#C9A84C]/10 px-2.5 py-1 rounded-full">
                      {item.tag}
                    </span>
                  </div>
                  <h4 className="font-sans font-bold text-lg text-[#FAF8F5] mb-1">
                    {item.name}
                  </h4>
                  <div className="font-mono text-xl font-bold text-[#C9A84C] mb-4">
                    {item.price}
                  </div>
                  <ul className="space-y-2 font-sans text-xs text-[#FAF8F5]/70 mb-6">
                    {item.items.map((sub, sIdx) => (
                      <li key={sIdx} className="flex items-start gap-2">
                        <span className="text-[#C9A84C] mt-0.5">•</span>
                        <span>{sub}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  type="button"
                  onClick={() => openProposalWithPlan(`${item.name} (${item.price})`)}
                  className="w-full py-2.5 px-4 rounded-full bg-white/10 hover:bg-[#C9A84C] text-[#FAF8F5] hover:text-[#0D0D12] font-mono text-xs font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Selecionar pacote</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          G. FOOTER — Deep Obsidian with System Operational Status
          ==================================================================== */}
      <footer className="relative bg-[#0D0D12] text-[#FAF8F5] rounded-t-[4rem] pt-20 pb-12 px-6 md:px-12 mt-12 border-t border-white/10 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Top CTA Banner inside Footer */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-16 border-b border-white/10">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.22em] text-[#C9A84C] block mb-3">
                PRÓXIMO PASSO // VAMOS CONVERSAR?
              </span>
              <h2 className="font-sans font-bold text-3xl sm:text-5xl tracking-tight text-[#FAF8F5]">
                Sua marca com mais{' '}
                <span className="font-serif italic font-normal text-[#C9A84C]">
                  presença e resultado.
                </span>
              </h2>
            </div>
            <div className="shrink-0">
              <MagneticButton
                variant="accent"
                onClick={() => openProposalWithPlan('Reunião Estratégica & Proposta Poontoa')}
                className="text-base px-8 py-4"
              >
                <span>Solicitar uma proposta comercial</span>
                <ArrowUpRight className="w-5 h-5" />
              </MagneticButton>
            </div>
          </div>

          {/* Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 py-14 border-b border-white/10">
            {/* Col 1: Brand & Slogan */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C9A84C] text-[#0D0D12] font-serif italic font-bold text-xl">
                  PA
                </span>
                <div>
                  <span className="font-sans font-extrabold text-xl tracking-tight block">
                    POONTOA
                  </span>
                  <span className="font-mono text-[10px] tracking-[0.22em] text-[#C9A84C] uppercase">
                    IDEIAS QUE VIRAM RESULTADOS
                  </span>
                </div>
              </div>
              <p className="font-sans text-sm text-[#FAF8F5]/65 max-w-sm leading-relaxed">
                Agência de publicidade e performance criativa que transforma marcas em referências de mercado. Design Gráfico, Social Media, Edição de Vídeo, Sites e Tráfego Pago.
              </p>
              <div className="pt-2 flex items-center gap-4 font-mono text-xs text-[#FAF8F5]/80">
                <a
                  href="https://instagram.com/poontoa"
                  target="_blank"
                  rel="noreferrer"
                  className="nav-link-lift inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded-full"
                >
                  <svg
                    className="w-3.5 h-3.5 text-[#C9A84C]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                  <span>@poontoa</span>
                </a>
                <button
                  type="button"
                  onClick={() => openProposalWithPlan('Atendimento Direto Poontoa')}
                  className="nav-link-lift inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded-full cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#C9A84C]" />
                  <span>Online & Presencial</span>
                </button>
              </div>
            </div>

            {/* Col 2: Navegação */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="font-mono text-xs uppercase tracking-widest text-[#C9A84C]">
                Arquitetura
              </h4>
              <ul className="space-y-2.5 font-sans text-sm text-[#FAF8F5]/70">
                <li>
                  <a href="#artefatos" className="nav-link-lift inline-block hover:text-[#FAF8F5]">
                    Propostas de Valor
                  </a>
                </li>
                <li>
                  <a href="#manifesto" className="nav-link-lift inline-block hover:text-[#FAF8F5]">
                    O Manifesto Poontoa
                  </a>
                </li>
                <li>
                  <a href="#protocolo" className="nav-link-lift inline-block hover:text-[#FAF8F5]">
                    Protocolo em 3 Fases
                  </a>
                </li>
                <li>
                  <a href="#investimento" className="nav-link-lift inline-block hover:text-[#FAF8F5]">
                    Planos Mensais & Combos
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3: Especialidades */}
            <div className="lg:col-span-4 space-y-3">
              <h4 className="font-mono text-xs uppercase tracking-widest text-[#C9A84C]">
                Especialidades
              </h4>
              <ul className="space-y-2.5 font-sans text-sm text-[#FAF8F5]/70">
                <li>Posicionamento & Identidade Visual de Marca</li>
                <li>Gestão de Social Media & Direção Criativa</li>
                <li>Produção de Reels, YouTube & Motion Graphics</li>
                <li>Landing Pages Cinematográficas & Sites</li>
                <li>Gestão de Tráfego Pago (Meta Ads & Google Ads)</li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar: Copyright & "Sistema Operacional" Indicator */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="inline-flex items-center gap-3 bg-white/[0.04] border border-white/10 px-4 py-2 rounded-full">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="font-mono text-xs tracking-wider uppercase text-[#FAF8F5]/90">
                Sistema Operacional // Poontoa 2026
              </span>
            </div>

            <div className="flex items-center gap-6 font-mono text-xs text-[#FAF8F5]/45">
              <span>© {new Date().getFullYear()} POONTOA PUBLICIDADE.</span>
              <span>TODOS OS DIREITOS RESERVADOS.</span>
            </div>
          </div>
        </div>
      </footer>

      {/* ====================================================================
          INTERACTIVE PROPOSAL MODAL (CTA Destination)
          ==================================================================== */}
      {proposalModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-xl rounded-[2.5rem] bg-[#0D0D12] text-[#FAF8F5] border border-[#C9A84C]/40 p-7 sm:p-10 shadow-[0_30px_100px_rgba(0,0,0,0.85)]">
            <button
              type="button"
              onClick={() => setProposalModalOpen(false)}
              className="absolute top-6 right-6 h-10 w-10 rounded-full bg-white/5 hover:bg-white/15 flex items-center justify-center text-[#FAF8F5]/70 hover:text-[#FAF8F5] transition-colors cursor-pointer"
              aria-label="Fechar modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-[#C9A84C] bg-[#C9A84C]/10 px-3.5 py-1 rounded-full mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>BRIEFING EXECUTIVO POONTOA</span>
            </div>

            <h3 className="font-sans font-bold text-2xl sm:text-3xl text-[#FAF8F5] tracking-tight mb-2">
              Solicitar uma proposta comercial
            </h3>
            <p className="font-sans text-sm text-[#FAF8F5]/65 mb-6">
              Preencha os dados abaixo para gerarmos o escopo ideal para sua marca. Atendemos online e presencial.
            </p>

            {!formSubmitted ? (
              <form onSubmit={handleProposalSubmit} className="space-y-4">
                <div>
                  <label className="block font-mono text-[11px] uppercase tracking-wider text-[#FAF8F5]/60 mb-1.5">
                    Plano ou Escopo de Interesse
                  </label>
                  <input
                    type="text"
                    value={selectedPlan}
                    onChange={(e) => setSelectedPlan(e.target.value)}
                    className="w-full rounded-2xl bg-white/5 border border-white/15 px-4 py-3 font-mono text-xs text-[#C9A84C] focus:outline-none focus:border-[#C9A84C]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono text-[11px] uppercase tracking-wider text-[#FAF8F5]/60 mb-1.5">
                      Seu Nome
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Arthur"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full rounded-2xl bg-white/5 border border-white/15 px-4 py-3 font-sans text-sm text-[#FAF8F5] placeholder:text-white/30 focus:outline-none focus:border-[#C9A84C]"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-[11px] uppercase tracking-wider text-[#FAF8F5]/60 mb-1.5">
                      Nome da Empresa / Marca
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Sua Marca Ltda"
                      value={formState.brand}
                      onChange={(e) => setFormState({ ...formState, brand: e.target.value })}
                      className="w-full rounded-2xl bg-white/5 border border-white/15 px-4 py-3 font-sans text-sm text-[#FAF8F5] placeholder:text-white/30 focus:outline-none focus:border-[#C9A84C]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-[11px] uppercase tracking-wider text-[#FAF8F5]/60 mb-1.5">
                    WhatsApp ou E-mail Corporativo
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="(11) 99999-9999"
                    value={formState.whatsapp}
                    onChange={(e) => setFormState({ ...formState, whatsapp: e.target.value })}
                    className="w-full rounded-2xl bg-white/5 border border-white/15 px-4 py-3 font-sans text-sm text-[#FAF8F5] placeholder:text-white/30 focus:outline-none focus:border-[#C9A84C]"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[11px] uppercase tracking-wider text-[#FAF8F5]/60 mb-1.5">
                    Principal Objetivo nos Próximos 90 Dias
                  </label>
                  <textarea
                    rows={2}
                    value={formState.goal}
                    onChange={(e) => setFormState({ ...formState, goal: e.target.value })}
                    className="w-full rounded-2xl bg-white/5 border border-white/15 px-4 py-3 font-sans text-sm text-[#FAF8F5] focus:outline-none focus:border-[#C9A84C]"
                  />
                </div>

                <div className="pt-2">
                  <MagneticButton type="submit" variant="accent" className="w-full">
                    <span>Gerar Proposta & Iniciar Conversa</span>
                    <Send className="w-4 h-4" />
                  </MagneticButton>
                </div>
              </form>
            ) : (
              <div className="rounded-[2rem] bg-white/5 border border-[#C9A84C]/40 p-6 text-center space-y-4">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#C9A84C] text-[#0D0D12]">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="font-sans font-bold text-xl text-[#FAF8F5]">
                  Briefing Protocolado com Sucesso!
                </h4>
                <p className="font-sans text-sm text-[#FAF8F5]/75">
                  Recebemos os parâmetros de <strong>{formState.brand || 'sua marca'}</strong> para o escopo{' '}
                  <span className="text-[#C9A84C] font-mono">{selectedPlan}</span>.
                </p>
                <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href={`https://wa.me/?text=${encodeURIComponent(
                      `Olá equipe Poontoa! Meu nome é ${formState.name}, da marca ${formState.brand}. Gostaria de solicitar uma proposta comercial para: ${selectedPlan}. Nosso objetivo: ${formState.goal}`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-magnetic inline-flex items-center justify-center gap-2 rounded-full bg-[#C9A84C] text-[#0D0D12] font-sans font-semibold text-xs px-6 py-3.5"
                  >
                    <span>Enviar Briefing via WhatsApp</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                  <button
                    type="button"
                    onClick={() => setProposalModalOpen(false)}
                    className="rounded-full border border-white/20 px-6 py-3.5 font-mono text-xs text-[#FAF8F5]/80 hover:border-white"
                  >
                    Voltar ao Site
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
