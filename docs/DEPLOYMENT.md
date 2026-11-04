# Publicação e deploy

O repositório produz um **site estático Vite**. Este documento descreve um processo de publicação recomendado, mas **não comprova a existência de um ambiente de produção ativo**. Não foram encontrados arquivos de configuração de hospedagem ou domínio na árvore inspecionada. O workflow GitHub Actions atual valida build e testes, porém não publica o site.

## Pré-requisitos

- Node.js 22 e npm.
- Acesso ao repositório e a uma plataforma de hospedagem estática.
- Permissão de uso do logotipo, das fotografias e dos textos.
- Informações institucionais aprovadas.
- Verificação de acessibilidade, links e formulários.
- Domínio e configurações DNS autorizados, se houver.

## Build

~~~bash
npm install
npm run build
npm run preview
~~~

O diretório **dist/** contém o resultado do build. A opção típica de hospedagem é publicar esse diretório como raiz do site. Como a aplicação atualmente usa uma única página com âncoras (não há router client-side), não são necessárias regras específicas para múltiplas URLs da aplicação, salvo alterações futuras.

**Atenção:** sem package-lock.json, npm install pode resolver novas versões dentro dos intervalos do package.json. Recomenda-se versionar um lockfile e considerar npm ci depois disso.

## Exemplo: plataforma de hospedagem estática

Em um provedor como Vercel, Netlify ou equivalente:

| Parâmetro | Valor para este repositório |
| --- | --- |
| Diretório raiz | raiz do repositório |
| Framework | Vite / Other static |
| Comando de instalação | npm install |
| Build command | npm run build |
| Output directory | dist |
| Node | 22, onde configurável |
| Environment variables | nenhuma exigida pela aplicação inspecionada |

Esses são **valores de configuração sugeridos**, não prova de que o GRIS esteja conectado a qualquer provedor. Antes de vincular domínio, faça um deploy de pré-visualização e peça revisão institucional.

## Checklist de publicação

### Conteúdo

- [ ] Contatos, endereço, descrição institucional e parceiro confirmados.
- [ ] Números acompanhados de data e fonte; reportagens verificadas.
- [ ] Autorização de todas as imagens, com crédito adequado.
- [ ] Logo final aprovado e cores verificadas contra o arquivo mestre.
- [ ] Texto de doação e voluntariado compatível com o processo real da equipe.

### Qualidade

- [ ] Build de produção passou.
- [ ] Testes automatizados executados; falhas tratadas ou registradas com justificativa explícita.
- [ ] Revisão manual de teclado e leitor de tela.
- [ ] Testes em celular, tablet e desktop; sem overflow nem textos ilegíveis.
- [ ] Links externos e e-mail foram testados.
- [ ] Fontes e fotos carregam em conexões lentas; fallback funciona.
- [ ] Título, meta description e idioma estão corretos.

### Operação

- [ ] Responsável pela publicação identificado.
- [ ] Acesso ao domínio/DNS e provedor registrado em local seguro, sem segredos no repositório.
- [ ] URL publicada registrada e comunicada à equipe.
- [ ] Plano de reversão conhecido.
- [ ] Testes de smoke na URL pública, não apenas no ambiente local.

## Publicar uma atualização

1. Revisar conteúdo/código em branch e PR.
2. Executar npm run build e npm run test:a11y.
3. Analisar o CI e a documentação de pendências; não interpretar build verde como suíte totalmente aprovada.
4. Gerar deploy de pré-visualização e validar em telas reais.
5. Publicar após aprovação da equipe.
6. Confirmar home, imagens, links, menu, accordion, formulário mailto e footer na URL pública.
7. Registrar versão/commit e pessoa que aprovou a mudança.

## Reverter uma publicação

Manter referência ao último commit/deploy conhecido como estável. Em falha relevante: suspender divulgação, voltar ao deploy anterior pelo provedor ou restaurar a versão anterior via Git, confirmar conteúdo e testar novamente. **Não** forçar push para main sem avaliação do histórico.

## Observações importantes

- Não existe backend, banco, autenticação, Pix ou serviço de e-mails para configurar neste projeto.
- Links mailto dependem de aplicativo de e-mail do visitante; a hospedagem não entrega mensagens.
- URLs externas de fotos/Google Fonts dependem de serviços terceiros; considerar hospedar imagens autorizadas.
- Um novo serviço, domínio ou API exige atualizar este guia, [Arquitetura](ARCHITECTURE.md) e [Privacidade](PRIVACY_AND_ASSETS.md).
