# Problemas conhecidos e prioridades

Estado observado em **04/11/2026**, baseado na árvore atual e em logs do GitHub Actions. Este documento distingue problemas confirmados em execução de riscos ou pendências institucionais.

## P0 — Bloqueios para afirmar qualidade validada

### 1. CI vermelho apesar do build passar

[GitHub Actions #41903199125](https://github.com/neoonzy/gris/actions/runs/41903199125), commit 8d60625: npm install, build e instalação Chromium passaram, mas houve **6 falhas em 22 verificações** (três testes em dois projetos).

- Axe detectou inconsistência entre nome acessível e texto visível nos links de reportagens.
- Teste do menu usa locator global com nome "O GRIS" e falha por ambiguidade.
- Teste de fundo de doações espera cinza antigo, enquanto o código atual usa laranja #C34E1B.

**Ação:** corrigir o markup acessível, ajustar o escopo do teste do menu e atualizar expectativas cromáticas após avaliação real de contraste; reexecutar tudo. Evitar simplesmente desativar regras.

### 2. Licenciamento de fotografias pendente

As duas fotos ainda são carregadas de domínio de jornal. O fallback protege a interface, mas não resolve direitos autorais nem disponibilidade. **Ação:** obter arquivos autorizados e hospedar localmente com crédito e alt.

### 3. Informações institucionais não validadas

Contatos, endereço, relacionamento com parceiros e indicadores no código devem ser confirmados com a equipe antes de apresentação pública definitiva.

## P1 — Qualidade e manutenção

- **Ausência de lockfile:** dependências instaladas com npm install podem variar dentro dos intervalos declarados.
- **CSS acumulado:** style.css e visual-direction.css contêm overrides e media queries sobrepostas; é fácil mudar um valor que perde precedência.
- **Aplicação monolítica:** conteúdo e quase todos os componentes estão em src/App.jsx.
- **Teste insuficiente entre navegadores:** só há Playwright Chromium; não cobre Safari real/iOS, Firefox e leitores de tela.
- **Formulário mailto:** não oferece entrega garantida nem confirmação real de envio.
- **Marca raster em SVG:** difícil editar cores com fidelidade; verificar vetor original.

## P2 — Melhorias futuras dependentes de decisão

- CMS ou dados editoriais desacoplados do JSX, se houver volume de publicação.
- Processo institucional de doação e voluntariado, com privacidade apropriada.
- Política de privacidade e licença de código/mídias aprovadas.
- Metadados sociais, favicon institucional e política de indexação/SEO, conforme necessidade.
- Registro claro do ambiente/domínio de produção e responsável pela publicação.
- Testes de desempenho, integração de verificações de links e monitoramento de disponibilidade.

## Ordem sugerida

1. Corrigir barreiras reais de acessibilidade e alinhar testes à paleta aprovada.
2. Obter mídia autorizada e validar contatos/conteúdo.
3. Fazer revisão manual em celulares e desktop; registrar resultados de testes.
4. Definir deploy e manter um lockfile.
5. Consolidar CSS e modularizar conteúdo, com screenshots e regressão visual.
6. Evoluir funcionalidades somente após avaliação de necessidade.

As prioridades são técnicas, não um cronograma aprovado. Atualize o status quando cada item for resolvido. Veja [Testes](TESTING.md) e [Operação](OPERATIONS.md).
