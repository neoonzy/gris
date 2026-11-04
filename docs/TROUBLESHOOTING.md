# Solução de problemas

## Vite ou PostCSS não inicia

**Sintoma:** erro [vite] Internal server error: [postcss] Unknown word, com indicação de linha em CSS.

**Causa comum:** seletor incompleto, vírgula solta, chave faltando ou regra mal formada. Houve um incidente anterior em um bloco @media (prefers-reduced-motion: reduce), depois corrigido.

Passos:

1. Localizar a linha e inspecionar as linhas anteriores (o problema pode começar antes do ponto indicado).
2. Verificar vírgulas finais de seletores, abertura de bloco e fechamento de chaves.
3. Lembrar que src/style.css é carregado antes de src/visual-direction.css.
4. Rodar npm run build depois da correção.
5. Se o erro persistir, copiar o trecho de log sem dados privados para uma issue.

## Mudei a cor mas nada aconteceu

Inspecione o elemento no navegador: a cascata pode estar recebendo regra posterior do visual-direction.css, uma media query ou declaração !important. Não empilhe mais overrides sem diagnosticar a origem.

## O build passou, mas o GitHub Actions ficou vermelho

O workflow faz build e depois roda Playwright. Em [41903199125](https://github.com/neoonzy/gris/actions/runs/41903199125), build passou e testes falharam. Abra a execução, entre no job build-and-a11y e procure a etapa de testes, error-context e trace. Consulte [Testes](TESTING.md).

## Os testes do menu falham ao procurar "O GRIS"

O nome aparece em vários links da página. Restrinja a busca ao elemento de navegação móvel e use correspondência exata; depois confirme se o foco realmente foi movido para o primeiro item.

## A cor esperada pelo teste não é a cor do site

Existem verificações que comparam strings rgb fixas. O tema atual mudou e testes anteriores podem ter ficado obsoletos. Confirme primeiro a cor aprovada e a legibilidade, depois ajuste o teste; não force o design a um valor antigo.

## Axe acusa nome de link inconsistente

Um aria-label pode esconder parte do texto visível. Inspecione o link completo e use preferencialmente o conteúdo visível como nome acessível, com indicador de nova aba acrescentado sem substituir o título.

## Uma foto não carrega

As imagens vêm de URLs externas; podem estar indisponíveis ou bloquear hotlink. O componente Photo mostra um fallback quando a requisição falha. Conferir URL, rede, direitos de uso e legenda; preferir versão local autorizada.

## O formulário não enviou nada

O botão de voluntariado **não envia ao servidor**. Ele usa mailto: para abrir um cliente de e-mail. Verifique se existe um aplicativo de e-mail configurado; em caso contrário, escreva ao endereço exibido no site. O estado de sucesso visual não é recibo de entrega.

## Menu cobre conteúdo / não alcanço o último link

Testar viewport de pouca altura; confirmar altura e rolagem da navegação, estado open, inert e resize em 1100 px. Evitar min-height maior que a viewport.

## Alterações não apareceram após git pull

Verifique branch atual, alterações locais, último commit, dependências e cache do Vite/navegador. Execute npm run build para distinguir problema de código de cache. Não apague arquivos de trabalho não versionados sem antes inspecioná-los.

## Erro em ambiente de produção

Confirmar provedor, build command, diretório dist/, URL, arquivos estáticos e logs do deploy. O repositório não registra provedor de hospedagem efetivamente ativo; consulte [Publicação](DEPLOYMENT.md).
