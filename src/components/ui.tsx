import type { ReactNode } from "react";

export type ButtonVariant = "primary" | "secondary" | "ghost";

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className ?? ""}`}
    >
      {children}
    </div>
  );
}

export function Button({
  href,
  children,
  variant = "primary",
  target,
  rel,
}: {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  target?: string;
  rel?: string;
}) {
  const base =
    "inline-flex h-11 items-center justify-center rounded-full px-5 text-sm font-semibold tracking-tight transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300/70";

  const styles: Record<ButtonVariant, string> = {
    primary:
      "bg-amber-300 text-zinc-950 hover:bg-amber-200 active:bg-amber-300/90",
    secondary:
      "bg-white/10 text-white hover:bg-white/15 active:bg-white/10 border border-white/15",
    ghost: "text-white/80 hover:text-white",
  };

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={`${base} ${styles[variant]}`}
    >
      {children}
    </a>
  );
}

export function Card({
  title,
  description,
  highlight,
}: {
  title: string;
  description: string;
  highlight?: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-base font-semibold text-white">{title}</h3>
        {highlight ? (
          <span className="rounded-full bg-amber-300/15 px-3 py-1 text-xs font-semibold text-amber-200">
            {highlight}
          </span>
        ) : null}
      </div>
      <p className="mt-3 text-sm leading-6 text-white/70">{description}</p>
    </div>
  );
}

export function Input({
  label,
  placeholder,
  type = "text",
  name,
}: {
  label: string;
  placeholder: string;
  type?: string;
  name: string;
}) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-medium text-white/80">{label}</span>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="h-11 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-amber-300/70"
      />
    </label>
  );
}

export function Textarea({
  label,
  placeholder,
  name,
}: {
  label: string;
  placeholder: string;
  name: string;
}) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-medium text-white/80">{label}</span>
      <textarea
        name={name}
        placeholder={placeholder}
        rows={4}
        className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-amber-300/70"
      />
    </label>
  );
}
