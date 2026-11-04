# Design system e linguagem visual

Documentação da **implementação atual em 04/11/2026**, não de uma identidade oficial aprovada pela organização. O site tem caráter editorial e comunitário; tipografia, fotografia e hierarquia de informação têm prioridade sobre efeitos decorativos.

## Princípios

1. Dar protagonismo às pessoas, ao território e ao trabalho concreto do GRIS.
2. Usar poucas superfícies, separação por espaço e linhas e texto legível.
3. Preservar a marca, sem imitar elementos da Rede GERA.
4. Não reintroduzir desenhos sobrepostos, cards assimétricos ou hovers que troquem para azul sem uma decisão de design revisada.
5. Priorizar celular, teclado, foco, zoom e contraste, verificando desktop de forma independente.

## Paleta atual

Os valores abaixo foram extraídos de **src/visual-direction.css**, na revisão documentada. Cores históricas citadas em conversas ou commits anteriores podem divergir.

| Token CSS | Valor | Uso previsto |
| --- | --- | --- |
| --gris-paper | #FAF9F5 | Fundo principal de leitura |
| --gris-white | #FFFFFF | Superfícies e texto sobre fundos escuros |
| --gris-forest | #285740 | Verde institucional, footer e seções escuras |
| --gris-orange | #C34E1B | CTAs, acento e seção de doações na implementação atual |
| --gris-orange-text | #C34E1B | Destaques em texto sobre claro; contrastar caso a caso |
| --gris-sand / --gris-gray | #EFF0ED | Fundos neutros e campos |
| --gris-line / --gris-border | #D9DED8 | Divisórias |
| --gris-near-black | #202722 | Títulos e faixa documental |
| --gris-green-soft | #557A63 | Verde secundário |
| --gris-text-muted | #647068 | Texto de apoio |
| --gris-accent-on-dark | #FFD4BC | Destaque sobre fundo escuro |

**Atenção:** o arquivo da logo (public/gris-logo.svg) é um SVG-contêiner com PNGs incorporados. Não existe garantia de que o tom do PNG coincide com o token --gris-orange atual. Confirmar com o GRIS o arquivo mestre e a cor oficial antes de padronizar a identidade.

**Contraste não pode ser declarado apenas pela paleta.** Testar pares reais de fundo e texto, tamanhos de fonte, botões e estados interativos no navegador. A execução de CI inspecionada falhou no teste de cores por divergência de expectativa; consultar [Testes](TESTING.md).

## Tipografia

- Família: **Google Sans Flex** importada externamente em src/style.css, com fallback Helvetica Neue e Arial.
- Títulos editoriais em tamanhos fluidos via clamp(), com espaçamento negativo e peso variável.
- Corpo prioriza line-height aproximadamente 1,45–1,7, conforme a seção.
- Rótulos numerados pequenos e caixa alta são elementos de apoio; não substituir headings semânticos.
- Evitar texto corrido longo em caixa alta ou largura excessiva.

## Layout e espaçamento

- Container: máximo de aproximadamente 1320 px; gutters responsivos em CSS.
- Mobile-first com estilos específicos para telas pequenas, tablets, notebooks e desktop.
- A seção padrão usa preenchimento vertical próximo de 70 px em celulares, 82 px em tablets, 92 px em notebooks intermediários e 100–126 px no desktop, com exceções para Hero e partes documentais.
- Os dados exatos estão em style.css + visual-direction.css; **o resultado calculado depende da cascata**.
- Distâncias menores entre título e parágrafo relacionado; distâncias maiores entre capítulos.
- Áreas interativas orientadas a altura mínima de 44 px quando possível; accordion possui linhas maiores.

## Pontos de quebra relevantes

| Largura | Comportamento atual |
| --- | --- |
| até 599 px | Uma coluna, navegação móvel, hero e footer adaptados |
| 600–759 px | Uma coluna em formulários pareados e ajustes de tablet |
| 600–899 px | Território empilhado; indicadores com distribuição intermediária |
| 800 px ou mais | Registros passam a layout editorial em três áreas |
| 900–1099 px | Menu compacto, sem navegação desktop completa; doação/formulário empilhados |
| 1100 px ou mais | Composição editorial desktop e header completo |
| 1600 px ou mais | Conteúdo limitado a largura máxima, sem escala infinita |

Há pontos históricos de media query também em 950 px. Uma futura refatoração deve consolidá-los.

## Componentes e padrões de UI

**Botões:** versões de preenchimento e contorno, com setas Lucide. Hover tende a usar movimento sutil de posição e seta em vez de uma troca radical de cor; movimento reduzido deve ser respeitado.

**Links:** sublinhado ou borda inferior, rótulos compreensíveis, foco explícito. Links externos avisam abertura em nova aba.

**Accordion:** details/summary nativo com número, título, categoria e indicador de expansão.

**Fotografias:** grandes, documentais, com crédito/legenda **fora** da foto e fallback descritivo. Não criar cartões de foto sem material autorizado.

**Registros:** lista editorial de reportagens, não cards grandes. Datas, origem e títulos devem ser legíveis por teclado e leitor de tela.

**Formulário:** bordas retas, labels acima dos inputs, estados de foco visíveis; aviso explícito de uso de mailto.

**Footer:** verde institucional, logotipo claro por filtro CSS na versão atual, quatro grupos de links e mensagem de convite.

## Regras de implementação

- Tokens atuais: src/visual-direction.css. Base: src/style.css.
- Importação em src/main.jsx na ordem base → refinamentos.
- Não adicionar mais overrides sem verificar a cascata calculada em 320, 375, 768, 1024 e 1440 px.
- Quando mudar uma cor, rever contrastes em todos os contextos, não só no hero.
- Manter responsividade, prefers-reduced-motion, estados de foco e imagens sem sobreposição de texto.
- Atualizar o teste de aparência que depende de valores fixos de background quando alterar a identidade.

Veja [Acessibilidade](../ACCESSIBILITY.md), [Testes](TESTING.md) e [Decisões](DECISIONS.md).
