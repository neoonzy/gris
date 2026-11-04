# GRIS — Espaço Solidário

Site institucional em **React + Vite**, mobile-first, com narrativa editorial e identidade própria para o GRIS — Casa Maria de Lourdes, na Vila Arraes (Várzea, Recife). A Rede GERA foi referência de linguagem, não um template a ser copiado.

## Como rodar

```bash
npm install
npm run dev
```

Build de produção:

```bash
npm run build
npm run preview
```

Auditoria automatizada em Chromium (Playwright + axe-core):

```bash
npx playwright install chromium
npm run test:a11y
```

O GitHub Actions executa build, testes e salva `dist/`, relatórios e rastros em um artefato. **Os testes estão configurados, mas o resultado do pipeline deve ser conferido no GitHub Actions.** Não substituem testes reais com leitores de tela.

## Sistema visual — refinamento de novembro de 2026

**A marca permanece laranja**, no cabeçalho. A página reserva o laranja original à marca e à seção de doações.

A direção atual enfatiza tipografia Google Sans Flex, fotografia documental, áreas de leitura sem excesso de cores e divisórias discretas. Grafismos sobrepostos e cantos arredondados assimétricos foram removidos, inclusive o componente `ContourMark.jsx`.

Paleta de trabalho: verde-escuro `#203D2B`, papel `#F5F1E7`, azul mineral `#284E64`, areia `#ECE9DA` e pêssego `#F4DCC7`. O laranja `#E86E09` é usado na marca e em detalhes; o tom `#9C4708` é reservado a textos pequenos sobre superfícies claras.

**Áreas de chamada:** botões principais têm texto creme sobre verde-escuro, sem faixa laranja e sem troca para azul no hover. A seção de doação usa o laranja original `#E86E09`, com título grande em branco (contraste 3,15:1). Para assegurar a leitura dos parágrafos e da etiqueta em tamanho pequeno, eles recebem um fundo laranja profundo `#9C4708` (branco sobre esse fundo: 6,33:1). O footer e alguns títulos editoriais usam quase-preto `#171B18`.

**Registros:** apresentados como lista editorial, sem cantos arredondados. As fotografias documentais têm legendas fora da imagem. Imagens externas podem falhar: existe fallback descritivo.

**Rodapé:** estrutura editorial própria com marca em uma versão clara sobre quase-preto, mensagem institucional, acesso à participação, quatro áreas (Explore, Visite, Converse, Acompanhe) e faixa final com direitos, localização e retorno ao topo. A versão clara do logotipo é obtida por filtro CSS sobre o SVG original (que incorpora imagens PNG, não vetores puros).

A interface é organizada entre `src/style.css` (base responsiva) e `src/visual-direction.css` (ajustes de identidade e layout).

## Acessibilidade

Auditoria focada em critérios da **WCAG 2.2 AA**, incluindo:

- Cores de texto ajustadas para evitar laranja puro sobre claro. Contrastes estáticos: verde/creme **10,56:1**; laranja-escuro/creme **5,61:1**; pêssego/azul **5,89:1**; verde-escuro/laranja **5,39:1**.
- Links e botões com foco visível, controles com área de toque ampliada, informação textual além da cor.
- Menu móvel com `aria-expanded`, foco inicial, Tab, Shift+Tab, Escape e fechamento ao mudar para viewport desktop. A regra de fechamento foi alinhada ao breakpoint real de **1100 px**.
- Seções de atuação com `details/summary` nativos; headings e landmarks semânticos; links externos identificados para leitor de tela.
- Ornamentos SVG `aria-hidden`, sem captura de eventos ou foco.
- Imagens com texto alternativo, `figcaption` e fallback descritivo caso indisponíveis.
- Formulário com labels explícitos, validação nativa, instrução de privacidade e aviso de que **apenas prepara mensagem por e-mail**, sem envio pelo servidor.
- `prefers-reduced-motion` e suporte a `forced-colors` para ornamentos.

**Verificar manualmente** em Chrome, Firefox e Safari com zoom de 200% e 400%, teclado sem mouse, VoiceOver/NVDA, 320 / 375 / 768 / 1024 / 1440 px, e travessia da página com imagens indisponíveis. A configuração de axe não certifica o site.

## Fonte de conteúdo

- Resultados de maio de 2026 (59 famílias, mais de 1.100 residências): [Diario de Pernambuco, 13/05/2026](https://www.diariodepernambuco.com.br/vida-urbana/2026/05/11714059-associacao-na-varzea-vira-ponto-de-apoio-e-recomeco-para-familias-impactadas-pelas-chuvas-no-recife.html), **dados datados, não métricas em tempo real**.
- [Brasil de Fato, 13/06/2023](https://www.brasildefato.com.br/2023/06/13/com-estoques-zerados-ongs-do-recife-pedem-ajuda-para-auxiliar-vitimas-em-periodo-de-chuvas).
- [Rede GERA](https://www.redegera.org.br/).

## Antes de publicar

Conferir endereço, contatos e informações com a equipe do GRIS; obter licença para imagens; hospedar mídias autorizadas localmente; configurar o envio real de voluntariado, se desejado; confirmar dados de doações; revisar resultados dos testes e conduzir testes manuais de acessibilidade.
