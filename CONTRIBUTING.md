# Contribuindo para o GRIS

Contribuições devem proteger a legibilidade, o caráter comunitário e a precisão institucional do site. Mudanças visuais e editoriais são tão importantes quanto o código.

## Preparação

1. Leia o [README](README.md), [Arquitetura](docs/ARCHITECTURE.md) e [Design system](docs/DESIGN_SYSTEM.md).
2. Use Node.js 22 e instale dependências com npm install.
3. Rode npm run dev para revisar no navegador.
4. Antes de enviar uma alteração, rode npm run build e npm run test:a11y; anexe no PR os resultados, inclusive falhas.
5. Não inclua dados pessoais de voluntários, crianças, famílias ou usuários em issues, commits ou screenshots.

## Fluxo de contribuição

- Crie uma branch para sua mudança, por exemplo feat/novo-registro, docs/revisao-conteudo ou fix/menu-teclado.
- Faça alterações pequenas, com mensagem de commit descritiva.
- Abra um Pull Request contra main explicando objetivo, mudanças, impacto em mobile/desktop e testes realizados.
- Para UI, forneça capturas em pelo menos 375 e 1440 px, se possível; para alterações de texto, informe a fonte e a pessoa que aprovou o conteúdo.
- Antes do merge, confirme que links, acessibilidade, responsividade e documentação continuam consistentes.
- Não contorne nem silencie testes para produzir um status verde.

## Critérios de revisão

**Conteúdo:** informação confirmada; números acompanhados de data/fonte; autorização e crédito de fotos; endereço/e-mail revisados; linguagem acessível.

**Código:** preservar semântica, uso do teclado, foco, estados de movimento reduzido e contraste; evitar dependências desnecessárias e CSS duplicado.

**Design:** respeitar as escolhas editoriais atuais; não reintroduzir grafismos sobrepostos, cartões arbitrários ou mudanças de cor que prejudiquem legibilidade.

**Testes:** rodar build e verificações; anotar ambientes e resultados. O CI já apresenta falhas conhecidas, detalhadas em [Problemas conhecidos](docs/KNOWN_ISSUES.md).

## Convenções atuais

- A aplicação usa JavaScript/JSX, não TypeScript.
- As seções e conteúdos estão no src/App.jsx; uma futura modularização deve ser planejada e não presumida nesta documentação.
- CSS de base: src/style.css; customizações visuais: src/visual-direction.css, importado depois.
- Utilizar nomes de componentes e props claros, conteúdo em pt-BR e links com texto significativo.
- Evitar adicionar informações privadas, credenciais, tracking ou recursos de terceiros sem aprovação.

## Documentação obrigatória por mudança

- Novas seções ou interações: atualizar [Arquitetura](docs/ARCHITECTURE.md) e [Testes](docs/TESTING.md).
- Cores, fontes, breakpoints, componentes: atualizar [Design system](docs/DESIGN_SYSTEM.md).
- Textos, números, fotos, campanhas: atualizar [Conteúdo](docs/CONTENT.md).
- Deploy, env vars, serviços: atualizar [Publicação](docs/DEPLOYMENT.md) e [Privacidade](docs/PRIVACY_AND_ASSETS.md), conforme o caso.

**Licenciamento:** não existe LICENSE no estado inspecionado. Não assumir licença open source ou autorizações para a marca/fotos.
