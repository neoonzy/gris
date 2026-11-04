# Arquitetura técnica

## Visão geral

O GRIS é uma aplicação **client-side** com React 18 e Vite 6. Uma única página HTML carrega o bundle, que monta componentes React no elemento #root. Navegação interna utiliza âncoras de seção; não há roteador, API, persistência, CMS, contas de usuário ou processamento de formulário no servidor.

~~~mermaid
flowchart TD
    A[index.html] --> B[src/main.jsx]
    B --> C[React App]
    B --> D[src/style.css]
    B --> E[src/visual-direction.css]
    C --> F[Seções institucionais]
    C --> G[Menu responsivo]
    C --> H[Formulário mailto]
    C --> I[Imagens externas]
    I --> J[Fallback se falharem]
    F --> K[Links e reportagens externas]
~~~

## Arquivos de entrada

| Caminho | Responsabilidade |
| --- | --- |
| index.html | Idioma, título, viewport, meta description e root da aplicação |
| src/main.jsx | Cria o React root, monta App em StrictMode e importa os dois CSS |
| src/App.jsx | Dados locais, componentes, interação, navegação e conteúdo |
| src/style.css | Estilos básicos, layout, componentes, tipografia e breakpoints históricos |
| src/visual-direction.css | Tokens visuais atuais, correções e refinamentos responsivos posteriores |
| public/gris-logo.svg | Marca incorporada como SVG com imagens raster embutidas |
| tests/accessibility.spec.js | Testes de interface, teclado, responsividade, cores e axe |
| playwright.config.js | Chromium mobile/desktop, servidor local e relatórios |
| .github/workflows/build.yml | Build e testes no GitHub Actions; não faz deploy |

## Componentes em src/App.jsx

### Elementos reutilizados

- **Brand:** link para #inicio com o arquivo gris-logo.svg; aparece no header e no footer.
- **External:** link externo com target="_blank", rel="noopener noreferrer" e aviso visualmente oculto de nova aba.
- **Photo:** imagem com loading/decoding e onError; na falha mostra um bloco descritivo. A imagem inicial usa carregamento antecipado.
- **Label:** rótulo numerado da seção.
- **ArrowLink:** link de ação interno ou externo, com seta e estilos compartilhados.

### Seções

| Componente | Âncora, quando presente | Conteúdo |
| --- | --- | --- |
| Header | — | Marca, navegação desktop/mobile e link de doação |
| Hero | #inicio | Manifesto, dois CTAs e introdução |
| Documentary (dentro do Hero) | — | Fotografia e faixa editorial |
| About | #quem-somos | História e atuação institucional |
| Territory | #territorio | Território, endereço de referência e fotografia |
| Activities | #atividades | Cinco frentes de atuação com details/summary |
| Impact | #impacto | Três marcos/indicadores, contexto e reportagem |
| Gera | — | Articulação com Rede GERA |
| Records | #registros | Duas reportagens externas em lista editorial |
| Donate | #doar | Convite de doação com link mailto e Instagram |
| Volunteer | #envolva | Formulário para compor um e-mail |
| Footer | — | Marca, manifesto, navegação, visita, contato e redes |

A ordem no DOM segue a narrativa da página, de Hero a Footer.

## Dados: onde ficam

Em src/App.jsx há estruturas declaradas diretamente no código:

- CONTACT: e-mail, Instagram, endereço textual e URL para mapas.
- SOURCES: URLs de reportagens e da Rede GERA.
- IMAGES: URLs de fotografias externas.
- NAV: links do menu.
- FRENTES: título, categoria e descrição das frentes de atuação.
- REGISTROS: data, tipo, título, resumo, URL e veículo de origem.
- Indicadores da seção Impact e textos de parágrafos estão no próprio JSX, **não** em uma API.

Todas essas informações exigem revisão editorial quando forem atualizadas. Consulte [Conteúdo](CONTENT.md).

## Estado e eventos

O projeto utiliza pouco estado React:

1. **Header:** useState(open), useRef(buttonRef/menuRef), useEffect para foco, Escape, Tab, resize, body.menu-open e inert no conteúdo atrás do menu.
2. **Photo:** useState(failed); ao receber evento onError troca a imagem por fallback textual.
3. **Volunteer:** useState(prepared); o submit lê FormData e altera window.location.href para uma URL mailto: com assunto/corpo URL-encoded. prepared indica apenas que a mensagem foi preparada, **não que foi enviada**.
4. **Footer:** ano corrente calculado com new Date().getFullYear().

Não há contextos React, state manager, armazenamento local nem chamadas fetch realizadas pelo aplicativo.

## Fluxo de formulário

~~~mermaid
flowchart TD
    A[Visitante preenche campos] --> B[Validação nativa HTML]
    B --> C[handleSubmit]
    C --> D[FormData e encodeURIComponent]
    D --> E[window.location.href = mailto]
    E --> F[Aplicativo de e-mail, se configurado]
    F --> G[Visitante revisa e envia manualmente]
~~~

Nenhuma confirmação de entrega pode ser inferida do estado prepared. O site não armazena essas respostas.

## Camadas de CSS e dívida técnica

Os estilos são importados nesta ordem: style.css, depois visual-direction.css. O segundo arquivo sobrescreve regras do primeiro; existem regras históricas repetidas para seções e media queries. **Não** alterar uma cor/margem no primeiro arquivo presumindo que ela prevalecerá. Verifique a cascata calculada no navegador. Recomenda-se consolidar os estilos em uma próxima refatoração, com testes visuais antes e depois.

## Restrições e oportunidades

- Uma única página, sem rotas de detalhes, CMS ou persistência.
- Dependência de Google Fonts e imagens remotas; falhas de rede afetam fontes/fotos.
- Sem backend de doações ou voluntariado.
- Sem lockfile no repositório documentado.
- Sem testes unitários isolados de componentes; a suíte é de navegador.
- Sem analytics/telemetria implementados no código inspecionado.

Ver [Decisões](DECISIONS.md), [Problemas conhecidos](KNOWN_ISSUES.md) e [Publicação](DEPLOYMENT.md).
