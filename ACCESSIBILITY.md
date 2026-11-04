# Acessibilidade — GRIS Espaço Solidário

**Estado em 04/11/2026:** compromisso de melhoria contínua. O projeto **não foi certificado como conforme à WCAG 2.2 AA**. Os testes automatizados mais recentes inspecionados apresentaram falhas, inclusive uma violação de nome acessível em links de reportagens. Este documento distingue o que está no código do que já foi efetivamente validado.

## Implementações presentes

- Documento em português brasileiro (lang="pt-BR"), viewport mobile e título descritivo.
- Estrutura com cabeçalho, navegação, conteúdo principal, seções e rodapé; link de pular diretamente ao conteúdo.
- Formulário com labels explícitos, tipos de entrada, autocomplete e validação HTML obrigatória.
- Interação nativa de details/summary para as frentes de atuação.
- Menu móvel controlado por botão com aria-expanded e aria-controls, abertura com foco dirigido à navegação, Escape, gerenciamento de Tab e ocultação temporária de main/rodapé com inert.
- Indicação textual de links externos em componente External e abertura com rel="noopener noreferrer".
- Imagens com alt e legendas, além de fallback descritivo quando a URL externa falha.
- Estados de foco, preferência prefers-reduced-motion e alguns estilos forced-colors.
- Testes automatizados com axe-core e Playwright em dois projetos Chromium.

Esses itens descrevem **a intenção e a implementação existente**, não garantem seu funcionamento perfeito em todos os navegadores.

## Problemas confirmados ou pendentes

1. **Axe / nome visível dos links:** no [workflow 41903199125](https://github.com/neoonzy/gris/actions/runs/41903199125), os links .record-item tiveram falha de nome acessível: o aria-label manual não continha todo o texto visível do link. Corrigir de modo que o nome acessível inclua o texto exibido, por exemplo usando o conteúdo nativo do link e uma indicação visualmente oculta de nova aba. Reexecutar axe antes de encerrar.
2. **Teste do menu:** o seletor por nome "O GRIS" era ambíguo e retornou múltiplos links; o teste deve limitar a busca ao menu móvel, sem concluir que a interação está quebrada apenas pelo seletor.
3. **Contraste:** o teste de cores de 04/11/2026 esperava fundo cinza, mas o CSS atual usa laranja #C34E1B na seção de doações. É necessário reavaliar o contraste do texto real renderizado, e atualizar os testes para a direção visual vigente. Não confiar em valores de documentação antiga.
4. **Telas e tecnologias assistivas:** continuam pendentes verificações manuais com VoiceOver, NVDA, Safari, Firefox, Chrome, ampliação de 200%/400%, teclado apenas e zoom de texto.
5. **Imagens externas:** verificar os textos alternativos com a equipe, se as descrições correspondem às fotos efetivamente exibidas e se o fallback não confunde leitores de tela.
6. **Fluxo mailto:** usuários sem aplicativo de e-mail configurado devem ter um endereço de contato alternativo claramente acessível.

## Checklist manual de revisão

### Teclado

- Tab deve percorrer marca, menu, links, accordion, formulário e footer em ordem lógica.
- Foco sempre visível e não coberto pelo header sticky.
- Menu abre com Enter/Espaço; Escape fecha e retorna o foco ao botão.
- Em tela pequena e baixa, último item do menu continua alcançável por rolagem e teclado.
- Accordion abre/fecha com Enter ou Espaço.
- Nenhum link externo ou botão cria armadilha de teclado.

### Leitura, reflow e visão

- Testar 320, 375, 600, 768, 900, 1024, 1100, 1440 e 1920 px; também 200%/400% de zoom.
- Não deve haver rolagem horizontal involuntária nem texto sobreposto.
- Texto normal deve ter contraste WCAG AA de pelo menos 4,5:1; texto grande, ao menos 3:1.
- Testar estados padrão, hover, foco, links, placeholder, mensagem de erro, botão e fundo de doações.
- Não usar apenas cor para transmitir informação.
- Fotografia com falha deve manter significado e legenda compreensível.

### Leitor de tela

- Conferir idioma, título da página, landmarks, nomes acessíveis, estrutura de headings e estado expandido das atividades.
- Verificar se o nome anunciado de cada link inclui as palavras visíveis.
- Conferir rótulo e propósito dos campos e aviso de que o formulário exige aplicativo de e-mail.
- Testar o menu aberto, navegação e retorno ao conteúdo.

## Como executar verificação automatizada

~~~bash
npm install
npx playwright install chromium
npm run test:a11y
~~~

O axe não detecta todos os problemas; uma suíte verde tampouco dispensa os testes manuais. O comando atual também verifica responsividade e interações, não só WCAG.

## Como reportar barreiras

Abra uma issue descrevendo página/seção, ação, navegador, sistema, dispositivo, tecnologia assistiva, resultado observado e resultado esperado. Evite incluir informações pessoais de visitantes ou famílias.

Consulte também [Testes](docs/TESTING.md), [Problemas conhecidos](docs/KNOWN_ISSUES.md) e [Design system](docs/DESIGN_SYSTEM.md).
