import { Button, Card, Container, Input, Textarea } from "@/components/ui";
import ProfessionalsCarousel, {
  type Profissional,
} from "@/components/profissionais/ProfessionalsCarousel";
import ScrollHeader from "@/components/ScrollHeader";
import profissionais from "@/data/profissionais.json";
import Image from "next/image";

import corte1 from "@/images/cortes/corte1.jpg";
import corte2 from "@/images/cortes/corte2.jpg";
import corte3 from "@/images/cortes/corte3.jpg";

const contact = {
  address:
    "Av. Mal. Floriano Peixoto, 815 - Centro, Curitiba - PR, 80010-130",
  mapsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Av.%20Mal.%20Floriano%20Peixoto%2C%20815%20-%20Centro%2C%20Curitiba%20-%20PR%2C%2080010-130",
  mapsEmbedUrl:
    "https://www.google.com/maps?q=Av.%20Mal.%20Floriano%20Peixoto%2C%20815%20-%20Centro%2C%20Curitiba%20-%20PR%2C%2080010-130&output=embed",
  whatsappUrl: "https://wa.me/5541998150120",
  phoneTelUrl: "tel:+5541998150120",
  phoneLabel: "(41) 99815-0120",
  instagramUrl: "https://www.instagram.com/capitaldocorte",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">

      {/* ========================== Header ========================== */}
      <ScrollHeader
        contact={{
          whatsappUrl: contact.whatsappUrl,
          instagramUrl: contact.instagramUrl,
        }}
      />

      {/* ========================== Main ========================== */}
      <main className="pt-24">

        {/* ========================== Hero ========================== */}
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-amber-300/10 blur-3xl" />
            <div className="absolute -bottom-40 right-0 h-[560px] w-[560px] rounded-full bg-white/5 blur-3xl" />
          </div>
          <Container className="relative py-16 sm:py-20 lg:py-28">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div>
                <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white/80">
                  <span className="h-1 w-1 rounded-full bg-amber-300" />
                  Av. Mal. Floriano Peixoto, 815 • Centro • Curitiba-PR
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
                  <a href="#precos" className="text-sm font-semibold text-white/70 hover:text-white">
                    Ver preços
                  </a>
                </div>

                <dl className="mt-10 grid max-w-xl grid-cols-3 gap-4">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <dt className="text-xs font-semibold text-white/60">Avaliações</dt>
                    <dd className="mt-1 text-lg font-semibold">4,9/5 ★</dd>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <dt className="text-xs font-semibold text-white/60">Profissionais</dt>
                    <dd className="mt-1 text-lg font-semibold">4</dd>
                  </div>
                </dl>
              </div>
            </div>
          </Container>
        </section>

        {/* ========================== Sobre ========================== */}
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
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* ======================== Portifólio ======================== */}
        <section id="portfolio" className="border-t border-white/10">
          <Container className="py-16 sm:py-20">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  Portifólio
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-white/70">
                  Confira nossos trabalhos e veja como fazemos a diferença.
                </p>
              </div>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="relative aspect-square w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5">
                <Image
                  src={corte1}
                  alt="Trabalho de corte 1"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  placeholder="blur"
                />
              </div>
              <div className="relative aspect-square w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5">
                <Image
                  src={corte2}
                  alt="Trabalho de corte 2"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  placeholder="blur"
                />
              </div>
              <div className="relative aspect-square w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5">
                <Image
                  src={corte3}
                  alt="Trabalho de corte 3"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  placeholder="blur"
                />
              </div>
            </div>
          </Container>
        </section>

        {/* ========================== Preços ========================== */}
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
              </div>

              <div className="rounded-3xl border border-amber-300/30 bg-amber-300/10 p-6">
                <p className="text-sm font-semibold text-white">Corte + Barba</p>
                <p className="mt-3 text-3xl font-semibold tracking-tight">
                  R$ 70
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm font-semibold text-white">Barba</p>
                <p className="mt-3 text-3xl font-semibold tracking-tight">
                  R$ 35
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* ========================== Profissionais ========================== */}
        <section id="profissionais" className="border-t border-white/10">
          <Container className="py-16 sm:py-20">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  Profissionais
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-white/70">
                  Escolha seu barbeiro e agende com quem combina com seu estilo.
                </p>
              </div>
              <Button href="#contato" variant="secondary">
                Agendar
              </Button>
            </div>

            <div className="mt-10">
              <ProfessionalsCarousel
                profissionais={profissionais as unknown as Profissional[]}
              />
            </div>
          </Container>
        </section>

        {/* ========================== Avaliações ========================== */}
        <section id="avaliacoes" className="border-t border-white/10">
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

        {/* ========================== Contato ========================== */}
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
                  <Button href={contact.whatsappUrl} variant="secondary">
                    WhatsApp
                  </Button>
                  <Button href={contact.instagramUrl} variant="secondary">
                    Instagram
                  </Button>
                  <Button href={contact.phoneTelUrl} variant="secondary">
                    Ligar
                  </Button>
                </div>

                <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6">
                  <p className="text-sm font-semibold">Contato</p>
                  <div className="mt-3 grid gap-4 text-sm text-white/70">
                    <div>
                      <p className="text-xs font-semibold text-white/60">
                        Telefone / WhatsApp
                      </p>
                      <a
                        href={contact.phoneTelUrl}
                        className="mt-1 inline-flex font-semibold text-white/80 hover:text-white"
                      >
                        {contact.phoneLabel}
                      </a>
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-white/60">
                        Instagram
                      </p>
                      <a
                        href={contact.instagramUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-1 inline-flex font-semibold text-white/80 hover:text-white"
                      >
                        @capitaldocorte
                      </a>
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-white/60">
                        Endereço
                      </p>
                      <p className="mt-1">{contact.address}</p>
                      <a
                        href={contact.mapsUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-2 inline-flex text-sm font-semibold text-amber-200 hover:text-amber-100"
                      >
                        Ver rota no Google Maps
                      </a>
                    </div>
                  </div>

                  <div className="mt-6 aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/10">
                    <iframe
                      title="Mapa - Capital do Corte"
                      src={contact.mapsEmbedUrl}
                      className="h-full w-full"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      allowFullScreen
                    />
                  </div>
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
                    placeholder="(41) 99815-0120"
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

      {/* ========================== Footer ========================== */}
      <footer className="border-t border-white/10">
        <Container className="py-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-white/60">
              © {new Date().getFullYear()} Capital do Corte. Todos os direitos
              reservados.
            </p>
            <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
              <a className="hover:text-white" href="#sobre">
                Sobre
              </a>
              <a className="hover:text-white" href="#portfolio">
                Portifólio
              </a>
              <a className="hover:text-white" href="#precos">
                Preços
              </a>
              <a className="hover:text-white" href="#profissionais">
                Profissionais
              </a>
              <a className="hover:text-white" href="#avaliacoes">
                Avaliações
              </a>
              <a className="hover:text-white" href="#contato">
                Contato
              </a>
            </nav>
          </div>
        </Container>
      </footer>
    </div>
  );
}
