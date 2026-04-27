type ButtonVariant = "primary" | "secondary" | "ghost";

function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className ?? ""}`}
    >
      {children}
    </div>
  );
}

function Button({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
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
    <a href={href} className={`${base} ${styles[variant]}`}>
      {children}
    </a>
  );
}

function Card({
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

function Input({
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

function Textarea({
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

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <header className="sticky top-0 z-20 border-b border-white/10 bg-zinc-950/80 backdrop-blur">
        <Container className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-amber-300 text-zinc-950 font-black">
              C
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-semibold tracking-tight">
                Capital do Corte
              </span>
              <span className="block text-xs text-white/60">Barbearia</span>
            </span>
          </a>

          <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
            <a className="hover:text-white" href="#servicos">
              Serviços
            </a>
            <a className="hover:text-white" href="#sobre">
              Sobre
            </a>
            <a className="hover:text-white" href="#precos">
              Preços
            </a>
            <a className="hover:text-white" href="#contato">
              Contato
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <Button href="#contato" variant="secondary">
              Falar no WhatsApp
            </Button>
            <div className="hidden sm:block">
              <Button href="#contato">Agendar horário</Button>
            </div>
          </div>
        </Container>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-amber-300/10 blur-3xl" />
            <div className="absolute -bottom-40 right-0 h-[560px] w-[560px] rounded-full bg-white/5 blur-3xl" />
          </div>

          <Container className="relative py-16 sm:py-20 lg:py-28">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div>
                <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white/80">
                  Atendimento com hora marcada
                  <span className="h-1 w-1 rounded-full bg-amber-300" />
                  Centro • Bairro
                </p>
                <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
                  Corte, barba e estilo
                  <span className="text-amber-200"> do jeito certo</span>.
                </h1>
                <p className="mt-5 max-w-xl text-base leading-7 text-white/70">
                  Uma experiência completa de barbearia: atendimento premium,
                  ambiente confortável e profissionais que cuidam de cada detalhe.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Button href="#contato">Agendar agora</Button>
                  <Button href="#servicos" variant="secondary">
                    Ver serviços
                  </Button>
                  <a href="#precos" className="text-sm font-semibold text-white/70 hover:text-white">
                    Ver preços
                  </a>
                </div>

                <dl className="mt-10 grid max-w-xl grid-cols-3 gap-4">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <dt className="text-xs font-semibold text-white/60">Avaliações</dt>
                    <dd className="mt-1 text-lg font-semibold">4,9/5</dd>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <dt className="text-xs font-semibold text-white/60">Tempo médio</dt>
                    <dd className="mt-1 text-lg font-semibold">30min</dd>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <dt className="text-xs font-semibold text-white/60">Profissionais</dt>
                    <dd className="mt-1 text-lg font-semibold">Top</dd>
                  </div>
                </dl>
              </div>

              <div className="relative">
                <div className="aspect-[4/5] w-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5">
                  <div className="flex h-full flex-col justify-end p-6">
                    <div className="rounded-2xl border border-white/10 bg-zinc-950/60 p-5 backdrop-blur">
                      <p className="text-xs font-semibold text-white/60">
                        Destaque
                      </p>
                      <p className="mt-1 text-base font-semibold">
                        Pacote Corte + Barba
                      </p>
                      <p className="mt-2 text-sm text-white/70">
                        Finalização inclusa e toalha quente.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section id="servicos" className="border-t border-white/10 bg-zinc-950">
          <Container className="py-16 sm:py-20">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  Serviços
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-white/70">
                  Escolha o que combina com você. Trabalhamos com técnicas atuais
                  e acabamento preciso.
                </p>
              </div>
              <Button href="#contato" variant="secondary">
                Agendar
              </Button>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <Card
                title="Corte clássico"
                description="Degradê, social ou na tesoura — alinhamento e finalização."
              />
              <Card
                title="Barba completa"
                description="Desenho, alinhamento e hidratação para um visual impecável."
                highlight="Toalha quente"
              />
              <Card
                title="Corte + barba"
                description="O pacote mais pedido: praticidade e estilo no mesmo horário."
                highlight="Mais vendido"
              />
              <Card
                title="Sobrancelha"
                description="Modelagem discreta para valorizar o olhar sem exageros."
              />
              <Card
                title="Pezinho e acabamento"
                description="Retoque rápido para manter o visual em dia."
              />
              <Card
                title="Finalização"
                description="Pomada/óleo e orientação do que usar no seu tipo de cabelo."
              />
            </div>
          </Container>
        </section>

        <section id="sobre" className="border-t border-white/10">
          <Container className="py-16 sm:py-20">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  Sobre a Capital do Corte
                </h2>
                <p className="mt-4 text-sm leading-6 text-white/70">
                  A gente acredita que barbearia é mais do que um corte: é um
                  momento de cuidado. Nosso foco é entregar resultado consistente
                  e atendimento que você recomenda.
                </p>
                <ul className="mt-6 grid gap-3 text-sm text-white/70">
                  <li className="flex gap-3">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-amber-300" />
                    Ambiente confortável e climatizado.
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-amber-300" />
                    Agendamento simples e pontualidade.
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-amber-300" />
                    Profissionais experientes.
                  </li>
                </ul>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="aspect-[16/10] w-full rounded-2xl bg-gradient-to-br from-amber-300/15 to-white/5" />
                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-2xl border border-white/10 bg-zinc-950/40 p-4">
                    <p className="text-xs font-semibold text-white/60">Anos de casa</p>
                    <p className="mt-1 text-lg font-semibold">+5</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-zinc-950/40 p-4">
                    <p className="text-xs font-semibold text-white/60">Clientes</p>
                    <p className="mt-1 text-lg font-semibold">+1k</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-zinc-950/40 p-4">
                    <p className="text-xs font-semibold text-white/60">Retorno</p>
                    <p className="mt-1 text-lg font-semibold">Alto</p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section id="precos" className="border-t border-white/10 bg-zinc-950">
          <Container className="py-16 sm:py-20">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Preços
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-white/70">
              Valores sugeridos (ajuste conforme sua tabela real).
            </p>

            <div className="mt-10 grid gap-4 lg:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm font-semibold text-white">Corte</p>
                <p className="mt-3 text-3xl font-semibold tracking-tight">
                  R$ 40
                </p>
                <p className="mt-2 text-sm text-white/70">Corte + finalização.</p>
                <div className="mt-6">
                  <Button href="#contato">Agendar</Button>
                </div>
              </div>

              <div className="rounded-3xl border border-amber-300/30 bg-amber-300/10 p-6">
                <p className="text-sm font-semibold text-white">Corte + Barba</p>
                <p className="mt-3 text-3xl font-semibold tracking-tight">
                  R$ 70
                </p>
                <p className="mt-2 text-sm text-white/70">
                  Pacote completo com toalha quente.
                </p>
                <div className="mt-6">
                  <Button href="#contato">Agendar</Button>
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm font-semibold text-white">Barba</p>
                <p className="mt-3 text-3xl font-semibold tracking-tight">
                  R$ 35
                </p>
                <p className="mt-2 text-sm text-white/70">Desenho e hidratação.</p>
                <div className="mt-6">
                  <Button href="#contato">Agendar</Button>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="border-t border-white/10">
          <Container className="py-16 sm:py-20">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              O que falam da gente
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-white/70">
              Depoimentos (substitua pelos textos reais quando tiver).
            </p>

            <div className="mt-10 grid gap-4 lg:grid-cols-3">
              <Card
                title="Atendimento excelente"
                description="Pontual, ambiente top e o corte ficou perfeito."
              />
              <Card
                title="Barba impecável"
                description="Toalha quente e acabamento caprichado. Voltarei com certeza."
              />
              <Card
                title="Recomendo"
                description="Agendamento fácil e resultado sempre consistente."
              />
            </div>
          </Container>
        </section>

        <section id="contato" className="border-t border-white/10 bg-zinc-950">
          <Container className="py-16 sm:py-20">
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  Agende seu horário
                </h2>
                <p className="mt-2 max-w-xl text-sm leading-6 text-white/70">
                  Envie uma mensagem com o serviço e o melhor horário. Se você
                  preferir, fale direto no WhatsApp.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Button href="https://wa.me/5500000000000" variant="secondary">
                    WhatsApp
                  </Button>
                  <Button href="tel:+5500000000000" variant="ghost">
                    Ligar
                  </Button>
                </div>

                <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6">
                  <p className="text-sm font-semibold">Endereço</p>
                  <p className="mt-2 text-sm text-white/70">
                    Rua Exemplo, 123 • Centro
                    <br />
                    Seg a Sáb • 09:00–20:00
                  </p>
                  <div className="mt-6 aspect-[16/10] w-full rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5" />
                </div>
              </div>

              <form className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="grid gap-4">
                  <Input
                    name="nome"
                    label="Nome"
                    placeholder="Seu nome"
                  />
                  <Input
                    name="telefone"
                    label="Telefone"
                    placeholder="(11) 99999-9999"
                    type="tel"
                  />
                  <Input
                    name="servico"
                    label="Serviço"
                    placeholder="Corte + Barba"
                  />
                  <Textarea
                    name="mensagem"
                    label="Mensagem"
                    placeholder="Conte o horário que prefere e alguma observação"
                  />
                </div>

                <button
                  type="button"
                  className="mt-6 inline-flex h-11 w-full items-center justify-center rounded-full bg-amber-300 px-5 text-sm font-semibold tracking-tight text-zinc-950 transition-colors hover:bg-amber-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300/70"
                >
                  Enviar (mock)
                </button>
                <p className="mt-3 text-xs leading-5 text-white/50">
                  Este formulário está como mock. Posso integrar com e-mail,
                  WhatsApp ou uma API quando você quiser.
                </p>
              </form>
            </div>
          </Container>
        </section>
      </main>

      <footer className="border-t border-white/10">
        <Container className="py-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-white/60">
              © {new Date().getFullYear()} Capital do Corte. Todos os direitos
              reservados.
            </p>
            <div className="flex items-center gap-4 text-sm">
              <a className="text-white/60 hover:text-white" href="#servicos">
                Serviços
              </a>
              <a className="text-white/60 hover:text-white" href="#precos">
                Preços
              </a>
              <a className="text-white/60 hover:text-white" href="#contato">
                Contato
              </a>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
}
