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

## Sistema visual — novembro de 2026

**Laranja `#E86E09` é a cor da marca.** As demais cores cumprem funções específicas, sem transformar cada seção num card de cor diferente:

| Papel | Cor |
| --- | --- |
| Marca e ação primária | laranja `#E86E09` |
| Institucional e textos | verde `#203D2B` |
| Documentação, água e articulação | azul mineral `#284E64` |
| Fundos de leitura | creme `#F5F1E7` e marfim `#FFF7E9` |
| Oficina e práticas comunitárias | areia suave `#EBE9D7` |
| Quadro territorial | amarelo-palha `#F4E6B7` |
| Destaques de texto sobre claro | laranja-escuro `#9C4708` |
| Destaques sobre azul | pêssego `#FFC79E` |

O arquivo `src/visual-direction.css` concentra a direção visual sobre a base responsiva de `src/style.css`. A tipografia é Google Sans Flex; o arquivo `public/gris-logo.svg` contém os elementos originais do Framer incorporados em um SVG, não vetores puros.

O novo `src/ContourMark.jsx` é um **grafismo autoral de curvas de nível e ponto de encontro**, inspirado em território e coletividade. Aparece discretamente em três pontos e é `aria-hidden`. Não reutiliza ilustrações da Rede GERA.

### Escolha de imagens e registros

As fotografias funcionam como **documentos** em duas passagens centrais: a faixa fotográfica inicial e a seção do território. Ficam maiores, sem texto por cima, com legenda e crédito fora da imagem. Os **Registros** são reportagens externas e foram convertidos de cards coloridos gigantes para uma lista editorial clicável, com data, título, contexto e origem. Isso evita fotos redundantes e evita sugerir um acervo de imagens que ainda não existe.

As imagens vêm de URLs do *Diario de Pernambuco* e **a disponibilidade dessas URLs não pôde ser garantida**. Há fallback acessível caso falhem. Para publicação final, obter autorização dos detentores dos direitos, guardar arquivos autorizados no projeto e verificar créditos e `alt` com o GRIS.

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
