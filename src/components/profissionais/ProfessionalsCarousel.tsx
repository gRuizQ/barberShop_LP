"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

export type Profissional = {
  id: string;
  nome: string;
  idade: number;
  avaliacao: number;
  experiencias: string[];
  imagem: string;
};

function formatAvaliacao(value: number) {
  return value.toFixed(1).replace(".", ",");
}

function Stars({ value }: { value: number }) {
  const full = Math.round(value);
  const stars = Array.from({ length: 5 }, (_, i) => i < full);
  return (
    <div className="flex items-center gap-1 text-amber-200">
      {stars.map((on, i) => (
        <span key={i} aria-hidden="true">
          {on ? "★" : "☆"}
        </span>
      ))}
      <span className="ml-2 text-xs font-semibold text-white/70">
        {formatAvaliacao(value)}
      </span>
    </div>
  );
}

function ProfissionalCard({
  profissional,
  emphasis,
}: {
  profissional: Profissional;
  emphasis: "center" | "side";
}) {
  const imageHeight =
    emphasis === "center" ? "h-48 sm:h-80" : "h-24 sm:h-56";

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-4 sm:p-5">
      <div className="flex flex-col gap-4">
        <div
          className={`relative w-full overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/40 ${imageHeight}`}
        >
          <Image
            src={profissional.imagem}
            alt={profissional.nome}
            fill
            sizes="(max-width: 768px) 100vw, 600px"
            className="object-cover"
            loader={({ src }) => src}
            unoptimized
          />
        </div>

        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-white">{profissional.nome}</p>
            <p className="mt-1 text-xs text-white/60">
              {profissional.idade} anos
            </p>
          </div>
          <Stars value={profissional.avaliacao} />
        </div>

        {emphasis === "center" ? (
          <div className="grid gap-2">
            <p className="text-xs font-semibold text-white/60">Experiências</p>
            <div className="flex flex-wrap gap-2">
              {profissional.experiencias.map((exp) => (
                <span
                  key={exp}
                  className="rounded-full border border-white/10 bg-zinc-950/40 px-3 py-1 text-xs font-semibold text-white/70"
                >
                  {exp}
                </span>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  const isLeft = direction === "left";
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={isLeft ? "M15 18l-6-6 6-6" : "M9 6l6 6-6 6"} />
    </svg>
  );
}

export default function ProfessionalsCarousel({
  profissionais,
}: {
  profissionais: Profissional[];
}) {
  const safe = useMemo(
    () => (profissionais?.length ? profissionais : []),
    [profissionais]
  );
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [pendingIndex, setPendingIndex] = useState(0);
  const [direction, setDirection] = useState<"prev" | "next">("next");
  const [phase, setPhase] = useState<0 | 1>(0);

  const transitionMs = 360;

  useEffect(() => {
    if (!isAnimating) return;
    const raf = window.requestAnimationFrame(() => {
      setPhase(1);
    });
    const id = window.setTimeout(() => {
      setIndex(pendingIndex);
      setIsAnimating(false);
      setPhase(0);
    }, transitionMs);
    return () => {
      window.cancelAnimationFrame(raf);
      window.clearTimeout(id);
    };
  }, [isAnimating, pendingIndex]);

  if (safe.length === 0) {
    return (
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-white/70">
        Nenhum profissional cadastrado.
      </div>
    );
  }

  const current = ((index % safe.length) + safe.length) % safe.length;
  const canNavigate = safe.length > 1;
  const step = direction === "next" ? -phase : phase;

  const getWrapped = (idx: number) =>
    ((idx % safe.length) + safe.length) % safe.length;

  const slots = (() => {
    if (!canNavigate) {
      return [{ pos: 0, item: safe[current] }];
    }

    if (!isAnimating) {
      return [
        { pos: -1, item: safe[getWrapped(index - 1)] },
        { pos: 0, item: safe[getWrapped(index)] },
        { pos: 1, item: safe[getWrapped(index + 1)] },
      ];
    }

    if (direction === "next") {
      return [
        { pos: -1, item: safe[getWrapped(index - 1)] },
        { pos: 0, item: safe[getWrapped(index)] },
        { pos: 1, item: safe[getWrapped(index + 1)] },
        { pos: 2, item: safe[getWrapped(index + 2)] },
      ];
    }

    return [
      { pos: -2, item: safe[getWrapped(index - 2)] },
      { pos: -1, item: safe[getWrapped(index - 1)] },
      { pos: 0, item: safe[getWrapped(index)] },
      { pos: 1, item: safe[getWrapped(index + 1)] },
    ];
  })();

  const layoutForPos = (pos: number) => {
    const x = pos * 76;
    const abs = Math.abs(pos);

    if (abs === 0) return { x, scale: 1, opacity: 1, zIndex: 30 };
    if (abs === 1) return { x, scale: 0.92, opacity: 0.58, zIndex: 20 };
    return { x, scale: 0.86, opacity: 0.18, zIndex: 10 };
  };

  return (
    <div className="relative">
      <div className="relative mx-auto w-full max-w-5xl overflow-hidden">
        <div className="mx-auto w-full md:w-[42%] opacity-0 pointer-events-none">
          <ProfissionalCard profissional={safe[current]} emphasis="center" />
        </div>

        <div className="absolute inset-0">
          {slots.map(({ pos, item }) => {
            const effectivePos = pos + step;
            const layout = layoutForPos(effectivePos);
            const emphasis = effectivePos === 0 ? "center" : "side";

            return (
              <div
                key={`${item.id}-${pos}`}
                className="absolute left-1/2 top-0 w-full md:w-[42%]"
                style={{
                  transform: `translateX(-50%) translateX(${layout.x}%) scale(${layout.scale})`,
                  opacity: layout.opacity,
                  zIndex: layout.zIndex as number,
                  transitionProperty: "transform, opacity",
                  transitionDuration: `${transitionMs}ms`,
                  transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
                }}
              >
                <ProfissionalCard profissional={item} emphasis={emphasis} />
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => {
            if (!canNavigate || isAnimating) return;
            setPhase(0);
            setDirection("prev");
            setPendingIndex(index - 1);
            setIsAnimating(true);
          }}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300/70"
          aria-label="Anterior"
        >
          <ArrowIcon direction="left" />
        </button>

        <div className="text-xs font-semibold text-white/60">
          {current + 1} / {safe.length}
        </div>

        <button
          type="button"
          onClick={() => {
            if (!canNavigate || isAnimating) return;
            setPhase(0);
            setDirection("next");
            setPendingIndex(index + 1);
            setIsAnimating(true);
          }}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300/70"
          aria-label="Próximo"
        >
          <ArrowIcon direction="right" />
        </button>
      </div>
    </div>
  );
}
