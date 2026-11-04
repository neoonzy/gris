# Testes, qualidade e integração contínua

## Ferramentas

- Vite: npm run build gera dist/.
- Playwright Test: end-to-end/smoke tests em tests/accessibility.spec.js.
- @axe-core/playwright: avaliação automatizada de regras WCAG selecionadas.
- Chromium em dois perfis: emulação de iPhone 13 em Chromium e desktop Chromium com viewport 1440×900.
- GitHub Actions em .github/workflows/build.yml.

**A emulação de iPhone em Chromium não substitui Safari/iOS real.**

## Executar localmente

~~~bash
npm install
npm run build
npx playwright install chromium
npm run test:a11y
~~~

O Playwright inicia automaticamente o servidor de desenvolvimento em http://127.0.0.1:5173, conforme playwright.config.js. Em Linux CI, usa-se npx playwright install --with-deps chromium para instalar dependências do navegador.

Para rodar apenas um projeto:

~~~bash
npx playwright test --project=desktop-chromium
npx playwright test --project=mobile-chromium
~~~

Para investigar falhas:

~~~bash
npx playwright test --headed
npx playwright show-report
~~~

Os comandos com --headed dependem de ambiente gráfico local. No CI, relatórios HTML e arquivos de teste são enviados como artifact quando produzidos.

## Matriz da suíte atual

O arquivo tem **11 testes** executados em dois perfis (22 resultados por execução quando ambos rodam). Eles cobrem:

1. axe/WCAG e presença de um único H1;
2. ausência de overflow horizontal em larguras representativas;
3. abertura/fechamento do menu por teclado e uso de inert;
4. accordion por teclado e labels dos campos;
5. links de Registros e ausência de grafismos;
6. fallback quando as fotografias externas falham;
7. prefers-reduced-motion;
8. navegação/estrutura do footer;
9. cores de doação, seções e footer, com expectativas **codificadas no teste**;
10. espaçamento, áreas clicáveis e organização em 320, 375, 600, 768, 1024, 1100 e 1440 px;
11. rolagem de menu em viewport curto de 375×510 px.

Esses testes ajudam a detectar regressões, mas **não** constituem cobertura completa de usabilidade, cross-browser nem conformidade WCAG.

## Estado verificado do GitHub Actions

Na execução [Build and accessibility #41903199125](https://github.com/neoonzy/gris/actions/runs/41903199125), de 04/11/2026, no commit 8d60625:

| Etapa | Resultado |
| --- | --- |
| npm install | Passou |
| npm run build | **Passou** |
| Instalação Chromium | Passou |
| npm run test:a11y | **Falhou** |
| Upload dos artefatos | Passou |

Resumo observado: **16 testes passaram, 6 falharam** nos dois perfis. Três tipos de falha se repetiram:

- **axe — label-content-name-mismatch:** aria-label dos links .record-item não incluía todo o texto visível.
- **Menu — seletor Playwright ambíguo:** getByRole("link", { name: "O GRIS" }) encontrou múltiplos links. Restringir a busca ao menu mobile e usar correspondência exata.
- **Cores — expectativa desatualizada:** o teste esperava rgb(236, 236, 234) para .donate, mas recebeu rgb(195, 78, 27). O CSS atual define --gris-orange como #C34E1B. A expectativa precisa acompanhar a decisão de design, **sem afrouxar as verificações de contraste**.

O build passou, portanto o status geral vermelho **não** significa falha de compilação. Também não significa que as falhas sejam todas falsos positivos: a violação do nome acessível deve ser corrigida.

## Pipeline

O workflow é disparado em push para main, Pull Request contra main e manualmente (workflow_dispatch). Usa runner Ubuntu, Node.js 22, npm install, Vite build, instalação do Chromium e teste Playwright. Envia dist/, playwright-report/ e test-results/ como artefatos se existirem.

**Não há deploy automatizado** no workflow atual.

## Revisão manual recomendada

- Teclado completo e VoiceOver/NVDA.
- Safari iOS real, Chrome Android, Firefox desktop e Chrome desktop.
- Zoom 200%/400%, tela estreita e tela baixa.
- Contraste, links, disponibilidade da imagem, fallback e uso de mailto.
- Alterações de CSS devem ser revisadas em mobile e desktop com capturas.
- Performance e acessibilidade podem ser complementadas por Lighthouse, mas não há configuração de Lighthouse no repositório.

## Manutenção dos testes

- Não alterar o CSS apenas para satisfazer um teste de cor desatualizado; primeiro confirmar o design aprovado.
- Corrigir selectors ambíguos com escopo e nomes exatos.
- No axe, corrigir o markup acessível; não remover a regra do teste.
- Reproduzir localmente, atualizar o teste, executar e registrar evidência no PR.
- Analisar logs e traces; não presumir que um teste falhou pelo mesmo motivo da execução anterior.

Veja [Problemas conhecidos](KNOWN_ISSUES.md) e [Acessibilidade](../ACCESSIBILITY.md).
