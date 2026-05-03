'use client'

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

import { Button, Container } from "@/components/ui";
import logo from "@/images/capitalCorte_logoBG.png";

type ContactInfo = {
  whatsappUrl: string;
  instagramUrl: string;
};

type ScrollHeaderProps = {
  contact: ContactInfo;
};

function getScrollY(): number {
  // Cross-browser: usa as fontes de scroll mais comuns e faz clamp para evitar valores negativos (iOS bounce).
  const y =
    window.scrollY ??
    window.pageYOffset ??
    document.documentElement?.scrollTop ??
    document.body?.scrollTop ??
    0;
  return Math.max(0, y);
}

function supportsPassiveEvents(): boolean {
  // Alguns browsers antigos não suportam o objeto de opções do addEventListener.
  // Detectamos suporte a "passive" para reduzir custo de scroll e evitar warnings.
  let supported = false;
  try {
    const opts = Object.defineProperty({}, "passive", {
      get() {
        supported = true;
        return true;
      },
    });
    window.addEventListener("test-passive", () => {}, opts);
    window.removeEventListener("test-passive", () => {}, opts);
  } catch {
    supported = false;
  }
  return supported;
}

function rafThrottle<TArgs extends unknown[]>(fn: (...args: TArgs) => void) {
  // Em scroll contínuo, "debounce" tradicional só executa no final do gesto (quando o usuário para).
  // Aqui usamos um throttle por requestAnimationFrame: executa no máximo 1x por frame, reagindo
  // durante o scroll e ainda reduzindo custo de re-render (performance).
  let rafId: number | null = null;
  let lastArgs: TArgs | null = null;

  const throttled = (...args: TArgs) => {
    lastArgs = args;
    if (rafId !== null) return;

    rafId = window.requestAnimationFrame(() => {
      rafId = null;
      if (lastArgs) fn(...lastArgs);
    });
  };

  throttled.cancel = () => {
    if (rafId !== null) window.cancelAnimationFrame(rafId);
    rafId = null;
    lastArgs = null;
  };

  return throttled;
}

export default function ScrollHeader({ contact }: ScrollHeaderProps) {
  const [hidden, setHidden] = useState(false);

  // Refs para evitar "stale state" dentro do listener e evitar re-renders desnecessários.
  const prevScrollYRef = useRef<number>(0);
  const hiddenRef = useRef<boolean>(false);

  // Parâmetros do comportamento (ajustes finos sem mexer na lógica).
  const config = useMemo(
    () => ({
      directionThresholdPx: 6, // evita flicker quando o usuário "trepida" o scroll.
      hideAfterPx: 12, // não esconde imediatamente no topo.
      transitionMs: 220,
    }),
    []
  );

  useEffect(() => {
    prevScrollYRef.current = getScrollY();
    hiddenRef.current = false;

    const updateVisibility = () => {
      const currentY = getScrollY();
      const prevY = prevScrollYRef.current;
      const delta = currentY - prevY;

      // Atualiza o "anterior" já no começo para manter a detecção consistente.
      prevScrollYRef.current = currentY;

      // Ignora variações muito pequenas para reduzir instabilidade visual.
      if (Math.abs(delta) < config.directionThresholdPx) return;

      // Regras:
      // - Scroll para baixo: contrai e esconde.
      // - Scroll para cima: expande e mostra.
      // - No topo: sempre mostra.
      const shouldHide =
        delta > 0 && currentY > config.hideAfterPx ? true : false;
      const shouldShow = delta < 0 || currentY <= config.hideAfterPx;

      const nextHidden = shouldShow ? false : shouldHide ? true : hiddenRef.current;

      if (nextHidden !== hiddenRef.current) {
        hiddenRef.current = nextHidden;
        setHidden(nextHidden);
      }
    };

    const throttledUpdate = rafThrottle(updateVisibility);

    const onScroll = () => {
      throttledUpdate();
    };

    const passiveOk = supportsPassiveEvents();
    window.addEventListener(
      "scroll",
      onScroll,
      passiveOk ? ({ passive: true } as AddEventListenerOptions) : false
    );

    return () => {
      throttledUpdate.cancel();
      window.removeEventListener(
        "scroll",
        onScroll,
        passiveOk ? ({ passive: true } as AddEventListenerOptions) : false
      );
    };
  }, [config]);

  return (
    <header
      className="fixed inset-x-0 top-0 z-20 border-b border-white/10 bg-zinc-950/80 backdrop-blur"
      aria-hidden={hidden}
      style={{
        opacity: hidden ? 0 : 1,
        transform: hidden ? "translate3d(0, -110%, 0)" : "translate3d(0, 0, 0)",
        transition: `opacity ${config.transitionMs}ms ease, transform ${config.transitionMs}ms ease`,
        willChange: "opacity, transform",
        pointerEvents: hidden ? "none" : "auto",
      }}
    >
      <Container
        className="flex h-24 items-center justify-between"
        // Impede foco via teclado quando o header está oculto (não basta pointer-events para isso).
        aria-hidden={hidden}
      >
        <a
          href="#"
          className="flex items-center gap-3"
          tabIndex={hidden ? -1 : 0}
        >
          <span className="relative h-9 w-9 overflow-hidden rounded-xl bg-white/5">
            <Image
              src={logo}
              alt="Capital do Corte"
              fill
              sizes="36px"
              className="object-contain"
              priority
            />
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-semibold tracking-tight">
              Capital do Corte
            </span>
            <span className="block text-xs text-white/60">Barbearia</span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
          <a className="hover:text-white" href="#sobre" tabIndex={hidden ? -1 : 0}>
            Sobre
          </a>
          <a
            className="hover:text-white"
            href="#portfolio"
            tabIndex={hidden ? -1 : 0}
          >
            Portifólio
          </a>
          <a
            className="hover:text-white"
            href="#precos"
            tabIndex={hidden ? -1 : 0}
          >
            Preços
          </a>
          <a
            className="hover:text-white"
            href="#profissionais"
            tabIndex={hidden ? -1 : 0}
          >
            Profissionais
          </a>
          <a
            className="hover:text-white"
            href="#avaliacoes"
            tabIndex={hidden ? -1 : 0}
          >
            Avaliações
          </a>
          <a
            className="hover:text-white"
            href="#contato"
            tabIndex={hidden ? -1 : 0}
          >
            Contato
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <Button
            href={contact.whatsappUrl}
            variant="secondary"
            target="_blank"
            rel="noreferrer"
            tabIndex={hidden ? -1 : 0}
          >
            <>
              <span className="sr-only">WhatsApp</span>
              <FaWhatsapp aria-hidden className="text-lg" />
            </>
          </Button>
          <Button
            href={contact.instagramUrl}
            variant="secondary"
            target="_blank"
            rel="noreferrer"
            tabIndex={hidden ? -1 : 0}
          >
            <>
              <span className="sr-only">Instagram</span>
              <FaInstagram aria-hidden className="text-lg" />
            </>
          </Button>
          <div className="hidden sm:block">
            <Button href="#contato" tabIndex={hidden ? -1 : 0}>
              Agendar horário
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
}
