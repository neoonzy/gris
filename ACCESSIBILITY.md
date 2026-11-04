# Acessibilidade — GRIS Espaço Solidário

O objetivo é oferecer acesso utilizável ao conteúdo do GRIS em diferentes telas, por teclado e com tecnologias assistivas. Esta é uma **declaração de compromisso**, não uma alegação de conformidade certificada com WCAG.

## Implementado no código

- Estrutura semântica com regiões de navegação, conteúdo principal e rodapé, headings organizados, rótulos de campos e texto alternativo em imagens.
- Menu móvel com controle de expansão, fechamento via Escape, foco de teclado, bloqueio da interação com conteúdo encoberto e comportamento consistente até o breakpoint de 1100 px.
- Cores de texto selecionadas para contraste WCAG 2.2 AA. O laranja original permanece na marca e em pequenos acentos. A seção de doações voltou ao pêssego claro (#F4DCC7) com textos verde-escuros (#203D2B), contraste de aproximadamente 9,02:1. O footer utiliza verde-escuro, e o azul foi removido das seções visíveis. A fotografia documental usa quase-preto (#171B18) com texto claro.
- Foco visível, links externos identificados, controles de tamanho confortável e áreas de conteúdo expansível acionáveis por teclado.
- Preferência por movimento reduzido, ausência de grafismos decorativos, e mensagem visível quando imagens externas falham.
- Testes de Chromium com Playwright e axe-core em `tests/accessibility.spec.js`, executados no GitHub Actions junto ao build.

O rodapé foi reorganizado para incluir navegação, endereço, e-mail e Instagram com links operáveis por teclado. A marca aparece clara no rodapé verde-escuro, preservando o original laranja no cabeçalho.

## Questões ainda abertas

- **Auditoria manual pendente:** testar com NVDA, VoiceOver, Safari, Firefox, zoom de 200–400%, diferentes tamanhos e dispositivos reais. Testes automatizados não cobrem todas as WCAG.
- **Fotos:** as URLs externas e direitos de publicação ainda dependem de verificação com os autores/titulares. O site possui fallback, mas isso não substitui mídias estáveis e autorizadas.
- **Voluntariado:** o formulário abre um aplicativo de e-mail (mailto) e **não** salva nem envia dados para um servidor. Pessoas sem aplicativo de e-mail configurado devem usar o endereço de contato informado no rodapé.
- **Dados institucionais:** confirmar endereço e contatos com o GRIS.

## Como testar

```bash
npm install
npx playwright install chromium
npm run test:a11y
```

Consultar também os relatórios do workflow **Build and accessibility** em GitHub Actions. Para relatar uma barreira de acesso, abrir uma issue no repositório descrevendo dispositivo, navegador, tecnologia assistiva, localização do problema e comportamento esperado. Não incluir informações pessoais sensíveis.
