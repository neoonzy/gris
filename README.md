# GRIS — Espaço Solidário

Site institucional do **GRIS Espaço Solidário — Casa Maria de Lourdes**, com atuação retratada na Vila Arraes, Várzea, Recife (PE). O projeto apresenta história, território, frentes de atuação, reportagens e formas de apoiar ou participar da organização.

**Vai assumir a manutenção do site?** Comece pelo [Guia de transição e primeiros passos](docs/HANDOFF.md), escrito para facilitar alterações simples, revisões e a passagem de responsabilidade.

**Este repositório contém a aplicação web, não uma plataforma de gestão.** Não há banco de dados, CMS, autenticação ou API de envio de formulários nesta versão. Informações de contato, métricas e imagens precisam ser validadas com a equipe responsável antes de divulgação pública definitiva.

## Estado do projeto

- Aplicação estática com **React 18 + Vite 6**, JavaScript/JSX, CSS e ícones Lucide.
- Página única com navegação por âncoras, abordagem mobile-first e conteúdo editorial.
- Formulário de voluntariado que **prepara uma mensagem no aplicativo de e-mail do visitante**; não faz envio por servidor.
- Fotografias referenciadas por URLs de veículos externos, com mecanismo de fallback. Permissão de reutilização e hospedagem definitiva **pendentes de confirmação**.
- Build de produção **passou** na execução de CI [41903199125](https://github.com/neoonzy/gris/actions/runs/41903199125) de 04/11/2026, mas a execução geral **falhou nos testes**. Consulte [Testes e CI](docs/TESTING.md) e [Problemas conhecidos](docs/KNOWN_ISSUES.md). Não interpretar isso como certificação de acessibilidade.
- Não há configuração de deploy automático neste repositório nem URL de produção comprovada pelo código inspecionado.

## Início rápido

Recomendado: **Node.js 22**, mesma versão usada pelo workflow de CI, e npm.

~~~bash
git clone https://github.com/neoonzy/gris.git
cd gris
npm install
npm run dev
~~~

Acesse o endereço local mostrado pelo Vite. Para gerar a versão estática e testá-la localmente:

~~~bash
npm run build
npm run preview
~~~

Testes automatizados:

~~~bash
npx playwright install chromium
npm run test:a11y
~~~

O repositório **não contém package-lock.json** na revisão documentada; por isso, o procedimento atual usa npm install, não npm ci. Antes de exigir instalações reproduzíveis em produção, gere e versione o lockfile.

## Estrutura

~~~text
gris/
├── index.html
├── package.json
├── playwright.config.js
├── public/
│   └── gris-logo.svg
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── style.css
│   └── visual-direction.css
├── tests/
│   └── accessibility.spec.js
├── .github/
│   └── workflows/build.yml
├── ACCESSIBILITY.md
├── CONTRIBUTING.md
└── docs/
    └── ... guias técnicos e editoriais
~~~

A descrição de cada arquivo, dos componentes e das dependências está em [Arquitetura](docs/ARCHITECTURE.md).

## Guias

| Documento | Para que serve |
| --- | --- |
| [Guia de transição](docs/HANDOFF.md) | Começar a editar, identificar arquivos, passar acessos e assumir manutenção |
| [Arquitetura](docs/ARCHITECTURE.md) | Entender módulos, estado, navegação e limites técnicos |
| [Design system](docs/DESIGN_SYSTEM.md) | Cores **atuais**, tipografia, CSS e responsividade |
| [Conteúdo e edição](docs/CONTENT.md) | Atualizar textos, links, atividades, números e fotografias |
| [Acessibilidade](ACCESSIBILITY.md) | Implementação, barreiras identificadas e avaliação manual |
| [Testes e CI](docs/TESTING.md) | Playwright, axe, build, comandos e interpretação de resultados |
| [Publicação](docs/DEPLOYMENT.md) | Build estático, hospedagem, checklist e reversão |
| [Operação e manutenção](docs/OPERATIONS.md) | Rotina de atualização, diagnóstico e responsabilidades |
| [Privacidade e direitos](docs/PRIVACY_AND_ASSETS.md) | Mailto, recursos externos e licenças de imagem |
| [Decisões de projeto](docs/DECISIONS.md) | Motivações para arquitetura e escolhas de interface |
| [Problemas conhecidos](docs/KNOWN_ISSUES.md) | Pendências verificadas, riscos e prioridades |
| [Solução de problemas](docs/TROUBLESHOOTING.md) | Erros comuns e roteiro de investigação |
| [Colaboração](CONTRIBUTING.md) | Como contribuir e revisar alterações |

## Onde mudar o quê

- **Textos, navegação, e-mail, endereço, registros e URLs de fotos:** src/App.jsx.
- **Estilos de base e componentes:** src/style.css.
- **Paleta vigente, refinamentos visuais e ritmo responsivo:** src/visual-direction.css, importado **depois** de style.css.
- **Logo:** public/gris-logo.svg.
- **Título e descrição HTML:** index.html.
- **Testes:** tests/accessibility.spec.js.
- **Pipeline:** .github/workflows/build.yml.

Veja [Conteúdo e edição](docs/CONTENT.md) antes de alterar indicadores, contatos ou fotografias.

## Antes de publicar

Confirmar informações institucionais, autorizações de fotografias, direitos sobre a marca, disponibilidade dos links, estado dos testes, funcionamento em dispositivos reais e fluxo de contato. Não inventar chave Pix ou endereço de doação. A lista detalhada está em [Publicação](docs/DEPLOYMENT.md).

## Referências e créditos

Os textos sobre a atuação do GRIS mencionam reportagens do [Diario de Pernambuco](https://www.diariodepernambuco.com.br/vida-urbana/2026/05/11714059-associacao-na-varzea-vira-ponto-de-apoio-e-recomeco-para-familias-impactadas-pelas-chuvas-no-recife.html) e do [Brasil de Fato](https://www.brasildefato.com.br/2023/06/13/com-estoques-zerados-ongs-do-recife-pedem-ajuda-para-auxiliar-vitimas-em-periodo-de-chuvas). O projeto dialoga visualmente com a [Rede GERA](https://www.redegera.org.br/), sem reproduzir seu layout ou identidade.

**Licença:** não foi encontrado um arquivo LICENSE nesta revisão. Não presumir permissão para redistribuir código, marca, textos e imagens; a definição de licença depende dos responsáveis.
