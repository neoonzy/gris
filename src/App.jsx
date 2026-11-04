import React, { useEffect, useRef, useState } from "react";
import ContourMark from "./ContourMark.jsx";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  Heart,
  Instagram,
  Mail,
  MapPin,
  Menu,
  X,
} from "lucide-react";

const CONTACT = {
  email: "grisespacosolidario@gmail.com",
  instagram: "https://www.instagram.com/gris.solidario/",
  address: "Rua Diogo Barbosa Machado, 15 — Várzea, Recife / PE",
  maps: "https://www.google.com/maps/search/?api=1&query=Rua+Diogo+Barbosa+Machado+15+Varzea+Recife",
};

const SOURCES = {
  diario: "https://www.diariodepernambuco.com.br/vida-urbana/2026/05/11714059-associacao-na-varzea-vira-ponto-de-apoio-e-recomeco-para-familias-impactadas-pelas-chuvas-no-recife.html",
  brasilDeFato: "https://www.brasildefato.com.br/2023/06/13/com-estoques-zerados-ongs-do-recife-pedem-ajuda-para-auxiliar-vitimas-em-periodo-de-chuvas",
  redeGera: "https://www.redegera.org.br/",
};

const IMAGES = {
  oficina: "https://www.diariodepernambuco.com.br/_midias/jpg/2026/05/13/design___2026_05_13t102819_708-889477.jpg",
  comunidade: "https://www.diariodepernambuco.com.br/_midias/jpg/2026/05/13/600x400/1_whatsapp_image_2026_05_12_at_20_41_41-889458.jpeg",
};

const NAV = [
  ["O GRIS", "#quem-somos"],
  ["Território", "#territorio"],
  ["O que fazemos", "#atividades"],
  ["Registros", "#registros"],
  ["Participe", "#envolva"],
];

const FRENTES = [
  {
    title: "Monitoramento e gestão de risco climático",
    label: "Território e prevenção",
    description: "Mapeamento comunitário, troca de conhecimentos e organização de respostas aos riscos que atingem a Vila Arraes, especialmente durante períodos de chuva intensa.",
  },
  {
    title: "Enfrentamento ao racismo ambiental",
    label: "Justiça socioambiental",
    description: "Articulação com organizações e moradores para que as pessoas mais afetadas pela desigualdade ambiental sejam ouvidas e participem das decisões sobre seu território.",
  },
  {
    title: "Apoio em saúde mental",
    label: "Acolhimento",
    description: "Escuta, orientação e atividades que reconhecem as necessidades emocionais das famílias e ajudam a fortalecer vínculos comunitários.",
  },
  {
    title: "Educação inclusiva e reforço escolar",
    label: "Infâncias e formação",
    description: "Acompanhamento e experiências educativas que valorizam as crianças, seus ritmos de aprendizagem e os saberes construídos em comunidade.",
  },
  {
    title: "Oficinas de pertencimento territorial",
    label: "Memória e autonomia",
    description: "Encontros, práticas criativas e atividades que estimulam a expressão, o reconhecimento do lugar onde se vive e a construção coletiva de possibilidades.",
  },
];

function Brand() {
  return (
    <a className="brand" href="#inicio" aria-label="Voltar ao início">
      <img src="/gris-logo.svg" width="146" height="68" alt="GRIS Espaço Solidário" />
    </a>
  );
}

function External({ href, children, className = "" }) {
  return (
    <a href={href} className={className} target="_blank" rel="noopener noreferrer">
      {children}
      <span className="sr-only"> (abre em uma nova aba)</span>
      <ArrowUpRight aria-hidden="true" size={17} />
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    if (open) menuRef.current?.querySelector("a")?.focus();

    const onKeyDown = (event) => {
      if (!open) return;
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
      if (event.key === "Tab") {
        const focusable = [buttonRef.current, ...menuRef.current.querySelectorAll("a[href]")].filter(Boolean);
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    const onResize = () => {
      if (window.matchMedia("(min-width: 1100px)").matches) setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.classList.remove("menu-open");
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Brand />
        <nav className="desktop-nav" aria-label="Navegação principal">
          {NAV.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
          <a className="nav-donate" href="#doar">Quero doar <ArrowUpRight size={16} aria-hidden="true" /></a>
        </nav>
        <button
          ref={buttonRef}
          className="menu-toggle"
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(value => !value)}
        >
          {open ? <X size={25} aria-hidden="true" /> : <Menu size={25} aria-hidden="true" />}
        </button>
      </div>
      <nav
        ref={menuRef}
        id="mobile-menu"
        className={"mobile-nav" + (open ? " is-open" : "")}
        aria-label="Navegação no celular"
        hidden={!open}
      >
        {NAV.map(([label, href], i) => (
          <a key={href} href={href} onClick={closeMenu}>
            <span className="mobile-index" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
            {label}<ArrowUpRight size={19} aria-hidden="true" />
          </a>
        ))}
        <a className="mobile-donate" href="#doar" onClick={closeMenu}>Quero doar <Heart size={19} aria-hidden="true" /></a>
      </nav>
    </header>
  );
}

function Label({ children, light = false }) {
  return <span className={"section-label" + (light ? " section-label-light" : "")}>{children}</span>;
}

function ArrowLink({ href, children, external = false, className = "" }) {
  return external ? <External href={href} className={"arrow-link " + className}>{children}</External> :
    <a className={"arrow-link " + className} href={href}>{children}<ArrowUpRight size={18} aria-hidden="true" /></a>;
}

function Hero() {
  return (
    <>
      <section id="inicio" className="hero">
        <ContourMark variant="hero" />
        <div className="container">
          <div className="hero-topline"><Label>GRIS / Espaço Solidário — Casa Maria de Lourdes</Label><span>Várzea, Recife • Desde 2018</span></div>
          <h1>O cuidado transforma <span>territórios.</span></h1>
          <div className="hero-bottom">
            <p>Uma organização comunitária feita de encontros, solidariedade e luta por uma cidade onde todas as pessoas possam viver com dignidade.</p>
            <div className="hero-actions">
              <a className="button button-orange" href="#quem-somos">Conheça o GRIS <ArrowUpRight size={19} aria-hidden="true" /></a>
              <a className="button button-outline" href="#envolva">Faça parte <ArrowRight size={19} aria-hidden="true" /></a>
            </div>
          </div>
        </div>
      </section>

      <section className="documentary" aria-label="Registro fotográfico do GRIS">
        <div className="documentary-inner">
          <figure className="documentary-photo">
            <img src={IMAGES.oficina} alt="Mulheres reunidas em uma oficina comunitária de artesanato do GRIS na Várzea" fetchPriority="high" />
            <figcaption>Oficina comunitária • Foto: Divulgação / Associação GRIS, via Diario de Pernambuco</figcaption>
          </figure>
          <div className="documentary-panel">
            <ContourMark variant="documentary" />
            <Label light>O território é o ponto de partida</Label>
            <p>Uma casa.<br />Muitas histórias.<br /><span>Uma comunidade inteira.</span></p>
            <span className="documentary-location">08°S / RECIFE — PERNAMBUCO</span>
          </div>
        </div>
      </section>
    </>
  );
}

function About() {
  return (
    <section id="quem-somos" className="about section-pad">
      <div className="container">
        <Label light>01 / Quem somos</Label>
        <div className="about-grid">
          <h2>O GRIS nasceu do encontro entre <span>cuidado, comunidade e resistência.</span></h2>
          <div className="about-copy">
            <p className="about-lead">Desde 2018, a Casa Maria de Lourdes é um lugar de acolhimento e construção coletiva na Vila Arraes, bairro da Várzea, em Recife.</p>
            <p>Liderada por mulheres negras, a associação começou com ações voltadas às crianças e passou a acompanhar também as famílias, reconhecendo que educação, bem-estar e direito ao território caminham juntos.</p>
            <p>Trabalhamos com apoio em saúde mental, educação inclusiva, oficinas e iniciativas de prevenção de riscos climáticos — sempre a partir dos saberes de quem vive essa realidade.</p>
            <ArrowLink href="#atividades" className="light-link">Conheça nossas frentes</ArrowLink>
          </div>
        </div>
        <div className="about-signature"><span>G R I S</span><span>Vila Arraes / Várzea</span><span>Recife, Pernambuco</span></div>
      </div>
    </section>
  );
}

function Territory() {
  return (
    <section id="territorio" className="territory section-pad">
      <div className="container">
        <Label>02 / Onde estamos</Label>
        <div className="territory-heading"><h2>Nosso lugar<br />é a <span>Várzea.</span></h2><p>A cidade é feita por quem a ocupa. Nosso trabalho começa na Vila Arraes e se constrói com as pessoas, as memórias e os desafios que fazem parte desse território.</p></div>
        <div className="territory-grid">
          <div className="territory-info">
            <ContourMark variant="territory" />
            <span className="location-mark">RECIFE / PE</span>
            <div className="territory-big">VÁRZEA<span>↗</span></div>
            <p>Não falamos de um território à distância. Estamos aqui — nas oficinas, nas conversas, nas urgências e nas pequenas transformações do cotidiano.</p>
            <External href={CONTACT.maps} className="arrow-link">Como chegar ao GRIS</External>
          </div>
          <figure className="territory-photo">
            <img src={IMAGES.comunidade} alt="Registro fotográfico de atividades da Associação GRIS na Vila Arraes" loading="lazy" />
            <figcaption>Associação GRIS / Vila Arraes • Foto: @ignusph / Associação GRIS, via Diario de Pernambuco</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

function Activities() {
  return (
    <section id="atividades" className="activities section-pad">
      <div className="container">
        <div className="activities-intro">
          <div><Label>03 / O que fazemos</Label><h2>Cuidar do território é cuidar de <span>quem vive nele.</span></h2></div>
          <p>Nosso trabalho acontece em diferentes frentes, mas tem o mesmo ponto de partida: a vida das pessoas e o conhecimento compartilhado.</p>
        </div>
        <div className="activity-list">
          {FRENTES.map((frente, i) => (
            <details key={frente.title} className="activity-row">
              <summary>
                <span className="activity-num">{String(i + 1).padStart(2, "0")}</span>
                <span className="activity-title">{frente.title}<small>{frente.label}</small></span>
                <span className="activity-toggle" aria-hidden="true"><ChevronDown size={22} /></span>
              </summary>
              <div className="activity-detail"><p>{frente.description}</p></div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Impact() {
  return (
    <section id="impacto" className="impact section-pad">
      <div className="container">
        <Label>04 / Nossa caminhada</Label>
        <div className="impact-heading"><h2>O que se constrói junto deixa <span>marcas reais.</span></h2><p>O GRIS acompanha famílias de forma continuada e se organiza com a comunidade em situações de emergência. Esses são alguns marcos dessa trajetória.</p></div>
        <div className="impact-numbers">
          <div><strong>2018</strong><span>Início da caminhada do GRIS na Vila Arraes</span></div>
          <div><strong>59</strong><span>Famílias acompanhadas regularmente, segundo reportagem de maio de 2026</span></div>
          <div><strong>1.100+</strong><span>Residências apoiadas após as chuvas de maio de 2026, segundo reportagem</span></div>
        </div>
        <div className="impact-note">
          <div><span className="impact-year">2024 / RECONHECIMENTO</span><h3>Plano de Contingência Comunitário</h3><p>Iniciativa de mapeamento de riscos e preparação local para eventos climáticos extremos, reconhecida pelo Ministério das Cidades.</p></div>
          <External href={SOURCES.diario} className="arrow-link">Ler reportagem sobre o GRIS</External>
        </div>
      </div>
    </section>
  );
}

function Gera() {
  return (
    <section className="network section-pad">
      <div className="container network-grid">
        <div><Label>05 / Conexões</Label><h2>Nenhuma transformação acontece <span>sozinha.</span></h2></div>
        <div className="network-copy">
          <p>O GRIS também constrói caminhos em rede. Integramos a liderança da Rede GERA — Governança para Enfrentamento ao Racismo Ambiental —, conectando o trabalho de base às articulações por justiça climática.</p>
          <div className="network-brand">REDE GERA <ArrowUpRight size={27} aria-hidden="true" /></div>
          <External href={SOURCES.redeGera} className="arrow-link">Conheça a Rede GERA</External>
        </div>
      </div>
    </section>
  );
}

const REGISTROS = [
  {
    date: "13 MAI 2026",
    type: "REPORTAGEM / COMUNIDADE",
    title: "Um lugar de apoio e recomeço diante das chuvas",
    summary: "O trabalho do GRIS ao lado das famílias afetadas pelos alagamentos na Várzea.",
    url: SOURCES.diario,
    origin: "Diario de Pernambuco",
  },
  {
    date: "13 JUN 2023",
    type: "REPORTAGEM / SOLIDARIEDADE",
    title: "Solidariedade para enfrentar a temporada de chuvas",
    summary: "A mobilização de organizações comunitárias para apoiar quem mais precisa.",
    url: SOURCES.brasilDeFato,
    origin: "Brasil de Fato",
  },
];

function Records() {
  return (
    <section id="registros" className="records section-pad">
      <div className="container">
        <div className="records-top"><div><Label>06 / Em circulação</Label><h2>Histórias que merecem <span>ser contadas.</span></h2></div><p>Acompanhe notícias e registros públicos que ajudam a contar um pouco dessa caminhada.</p></div>
        <div className="records-list">
          {REGISTROS.map((registro, i) => (
            <a key={registro.url} className="record-item" href={registro.url} target="_blank" rel="noopener noreferrer" aria-label={`${registro.title} — ${registro.origin} (abre em nova aba)`}>
              <div className="record-meta"><span>{registro.date}</span><span>{registro.type}</span></div>
              <span className="record-number" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span><div className="record-copy"><h3>{registro.title}</h3><p>{registro.summary}</p></div><span className="record-source">{registro.origin}<ArrowUpRight size={19} aria-hidden="true" /></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Donate() {
  return (
    <section id="doar" className="donate section-pad">
      <div className="container donate-grid">
        <div><Label>07 / Fortaleça essa rede</Label><h2>Solidariedade também é <span>ação.</span></h2></div>
        <div className="donate-copy"><p>Doar é ajudar o GRIS a continuar de portas abertas, acolhendo famílias, promovendo atividades e respondendo às necessidades da comunidade.</p><p>Para contribuir com recursos, alimentos ou materiais, converse diretamente com nossa equipe sobre as necessidades do momento.</p><a className="button button-green" href={"mailto:" + CONTACT.email + "?subject=" + encodeURIComponent("Quero apoiar o GRIS")}>Quero contribuir <ArrowUpRight size={18} aria-hidden="true" /></a><External href={CONTACT.instagram} className="arrow-link">Acompanhe nossas campanhas</External></div>
      </div>
    </section>
  );
}

function Volunteer() {
  const [prepared, setPrepared] = useState(false);
  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = [
      "Olá, equipe GRIS! Gostaria de participar como voluntário(a).",
      "",
      "Nome: " + data.get("nome"),
      "E-mail: " + data.get("email"),
      "Telefone: " + data.get("telefone"),
      "",
      "Como gostaria de contribuir:",
      data.get("mensagem"),
    ].join("\n");
    const link = "mailto:" + CONTACT.email + "?subject=" + encodeURIComponent("Voluntariado no GRIS") + "&body=" + encodeURIComponent(message);
    window.location.href = link;
    setPrepared(true);
  }

  return (
    <section id="envolva" className="volunteer section-pad">
      <div className="container volunteer-grid">
        <div><Label>08 / Faça parte</Label><h2>Há muitas maneiras de <span>estar junto.</span></h2><p>Seu tempo, suas ideias e seus conhecimentos podem fortalecer o trabalho do GRIS. Conte um pouco sobre você.</p><div className="volunteer-aside"><Heart size={26} aria-hidden="true" /><span>O formulário abre seu aplicativo de e-mail para você revisar e enviar a mensagem. Não armazena dados neste site.</span></div></div>
        <form className="volunteer-form" onSubmit={handleSubmit}>
          <label htmlFor="nome">Seu nome<input id="nome" name="nome" type="text" required autoComplete="name" placeholder="Como podemos chamar você?" /></label>
          <div className="form-pair">
            <label htmlFor="email">E-mail<input id="email" name="email" type="email" required autoComplete="email" placeholder="voce@exemplo.com" /></label>
            <label htmlFor="telefone">Telefone<input id="telefone" name="telefone" type="tel" required autoComplete="tel" placeholder="(81) 99999-9999" /></label>
          </div>
          <label htmlFor="mensagem">Como gostaria de contribuir?<textarea id="mensagem" name="mensagem" rows="5" required placeholder="Conte sobre suas habilidades, experiências ou disponibilidade." /></label>
          <button type="submit" className="button button-green">Preparar mensagem <ArrowUpRight size={19} aria-hidden="true" /></button>
          {prepared && <p role="status" className="form-feedback"><CheckCircle2 size={18} aria-hidden="true" /> Revise e envie a mensagem no seu aplicativo de e-mail. Se ele não abriu, escreva diretamente para {CONTACT.email}.</p>}
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top"><Brand /><p>Do território, com o território.<br />GRIS Espaço Solidário — Casa Maria de Lourdes.</p></div>
        <div className="footer-grid">
          <div><span className="footer-label">Encontre o GRIS</span><External href={CONTACT.maps} className="footer-link"><MapPin size={17} aria-hidden="true" />{CONTACT.address}</External></div>
          <div><span className="footer-label">Fale com a gente</span><a className="footer-link" href={"mailto:" + CONTACT.email}><Mail size={17} aria-hidden="true" />{CONTACT.email}</a></div>
          <div><span className="footer-label">Nos acompanhe</span><External href={CONTACT.instagram} className="footer-link"><Instagram size={17} aria-hidden="true" />Instagram</External></div>
        </div>
        <div className="footer-end"><span>© {new Date().getFullYear()} GRIS Espaço Solidário</span><span>Várzea / Recife — PE</span><a href="#inicio">Voltar ao início ↑</a></div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#conteudo">Ir para o conteúdo</a>
      <Header />
      <main id="conteudo">
        <Hero />
        <About />
        <Territory />
        <Activities />
        <Impact />
        <Gera />
        <Records />
        <Donate />
        <Volunteer />
      </main>
      <Footer />
    </>
  );
}
