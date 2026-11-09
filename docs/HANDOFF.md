# Guia de transição — manutenção do site do GRIS

Este é o **ponto de partida para a pessoa que assumir o site** do GRIS Espaço Solidário — Casa Maria de Lourdes. O objetivo é conseguir fazer alterações rotineiras sem depender de quem o desenvolveu originalmente.

**Estado conferido no repositório em 09/11/2026:** o site **já usa React 18, JavaScript/JSX, Vite 6 e CSS**. Não é apenas HTML/CSS e **não usa TypeScript**. É uma única página institucional, sem banco de dados, CMS ou painel de edição. Não é necessário migrar para TypeScript para manter o site.

> Este guia descreve o código existente. Não substitui a aprovação do GRIS para informações institucionais, fotos, campanhas e publicação. Para detalhes, consulte [README](../README.md), [Conteúdo](CONTENT.md) e [Publicação](DEPLOYMENT.md).

## 1. Começar do zero

É suficiente ter conhecimentos básicos de arquivos, HTML/CSS, JavaScript e Git. Para mudanças simples de texto, não é preciso dominar React, mas é importante preservar os caracteres de JSX.

1. Solicite acesso ao repositório [neoonzy/gris](https://github.com/neoonzy/gris) e saiba **quem aprova conteúdo** e **quem autoriza publicação**.
2. Instale Git, **Node.js 22** e npm.
3. Execute em um terminal:

   ```bash
   git clone https://github.com/neoonzy/gris.git
   cd gris
   npm install
   npm run dev
   ```

4. Abra a URL local indicada pelo Vite (geralmente `http://localhost:5173`).
5. Mantenha o navegador aberto enquanto edita. O Vite recarrega a interface após salvar arquivos.
6. Para validar a versão de produção, execute:

   ```bash
   npm run build
   npm run preview
   ```

O build gera o diretório `dist/`. **Não edite `dist/` diretamente:** ele é reconstruído a partir dos arquivos-fonte.

### Mapa rápido do projeto

| Preciso mudar... | Onde procurar |
| --- | --- |
| E-mail, Instagram, endereço e mapa | `src/App.jsx` → objeto `CONTACT` |
| Links de parceiros/reportagens | `src/App.jsx` → objeto `SOURCES` |
| URLs das fotos | `src/App.jsx` → objeto `IMAGES` |
| Itens do menu | `src/App.jsx` → lista `NAV` |
| Frentes de atuação | `src/App.jsx` → lista `FRENTES` |
| Reportagens exibidas | `src/App.jsx` → lista `REGISTROS` |
| Textos e indicadores da página | `src/App.jsx` → componentes `Hero`, `About`, `Territory`, `Impact`, `Donate`, etc. |
| Cores, espaços e aparência | `src/style.css` e **`src/visual-direction.css`** |
| Logo | `public/gris-logo.svg` |
| Título e descrição da aba | `index.html` |
| Testes | `tests/accessibility.spec.js` |
| Verificação no GitHub | `.github/workflows/build.yml` |

A aplicação é montada em `src/main.jsx`. A ordem dos componentes e seções está no final de `src/App.jsx`, dentro de `App()`. Veja o mapa completo em [Arquitetura](ARCHITECTURE.md).

## 2. Fazer mudanças comuns

### Alterar o contato ou a rede social

1. Abra `src/App.jsx` e encontre `const CONTACT = {`.
2. Altere somente a propriedade necessária: `email`, `instagram`, `address` ou `maps`.
3. Confirme os dados com a organização; confira botões e rodapé no navegador.
4. Teste os links. O formulário de voluntariado **abre um rascunho no aplicativo de e-mail do visitante**; o site não recebe nem confirma envios.

Evite escrever o mesmo e-mail manualmente em novas seções. Reutilize `CONTACT.email` quando possível.

### Atualizar uma atividade

1. Encontre `const FRENTES = [` em `src/App.jsx`.
2. Em cada objeto, edite `title`, `label` e `description` com texto aprovado.
3. Preserve chaves, vírgulas, aspas e colchetes. Cada item aparece no acordeão da seção “O que fazemos”.
4. Verifique a seção no celular e pelo teclado. Os títulos são usados como chaves React; evite títulos repetidos.

### Adicionar uma reportagem

1. Encontre `const REGISTROS = [`.
2. Adicione um objeto seguindo o formato já existente: `date`, `type`, `title`, `summary`, `url` e `origin`.
3. Confira data, veículo, link e resumo com a fonte. O item abre uma página **externa**; não há página de reportagem interna.

O guia [Conteúdo e edição](CONTENT.md) mostra exemplos de objetos e critérios editoriais.

### Mudar texto ou número institucional

Procure pelo texto em `src/App.jsx` e identifique o componente que o contém. **Números de impacto não são automáticos:** precisam de fonte, data de apuração e autorização. Não substitua números por estimativas sem validação.

### Alterar cores, espaçamento ou layout

Os estilos vêm de `src/style.css` e, **depois**, de `src/visual-direction.css`. Este último pode sobrescrever regras do primeiro. Antes de alterar uma regra, use as ferramentas do navegador para identificar qual declaração está efetivamente aplicada.

Consulte [Design system](DESIGN_SYSTEM.md), que registra os tokens atuais. Revise visualmente celular e desktop; preserve contraste, foco do teclado e movimento reduzido. Evite empilhar mais regras de correção quando for viável ajustar a origem sem regressões.

### Atualizar fotografias e logo

As fotos atuais usam **URLs externas**. Crédito não equivale à autorização para republicar; peça permissão e registro de licença antes de hospedar ou substituir arquivos. Ao trocar uma foto, atualize sua URL em `IMAGES`, o `alt`, a legenda/crédito aplicáveis e teste o fallback.

A logo está em `public/gris-logo.svg`, que contém imagens raster embutidas. Solicite o arquivo mestre aprovado antes de tentar redesenhá-la. Consulte [Privacidade e direitos](PRIVACY_AND_ASSETS.md).

## 3. Salvar e publicar uma mudança com segurança

Faça a alteração em uma branch, não diretamente na `main`:

```bash
git checkout main
git pull
git checkout -b docs-ou-fix/minha-alteracao
# Edite os arquivos...
npm run build
npx playwright install chromium
npm run test:a11y
git add .
git commit -m "docs: descreve a alteração"
git push -u origin docs-ou-fix/minha-alteracao
```

Depois abra um **Pull Request** para `main`. Descreva o que mudou, quem aprovou o conteúdo e o que foi testado; inclua capturas de celular e desktop quando houver alteração visual. Não é preciso usar o nome de branch do exemplo literalmente.

**Atenção aos testes:** o build e os testes de acessibilidade são etapas distintas. A última execução descrita em [Testes](TESTING.md), de 04/11/2026, tinha falhas conhecidas; verifique a execução **atual** no GitHub Actions, não presuma que aquele resultado ainda vale. Não desative testes para conseguir aprovação.

**Deploy:** o repositório inspecionado não comprova hospedagem, domínio de produção nem publicação automática. O GitHub Actions **testa, mas não publica**. É necessário que a equipe registre o provedor real, as pessoas autorizadas e o procedimento de deploy no guia [Publicação](DEPLOYMENT.md) antes que outra pessoa possa assumir essa parte com autonomia.

## 4. Checklist de passagem de responsabilidade

Preencher com a equipe do GRIS **fora de um documento público** quando houver dados pessoais, credenciais ou informações reservadas. O repositório deve conter apenas orientações e referências não sensíveis.

- [ ] A nova pessoa tem acesso ao GitHub e consegue executar `npm run dev` e `npm run build`.
- [ ] Conhece a pessoa responsável por aprovar textos, contatos, dados de impacto e campanhas.
- [ ] Sabe onde estão os arquivos originais da marca, as licenças e as autorizações de uso das fotos.
- [ ] Conhece a URL oficial do site, o provedor de hospedagem, o domínio e a pessoa responsável por DNS; **registrar o procedimento, nunca senhas ou tokens**.
- [ ] Consegue explicar como um Pull Request é revisado e como verificar o GitHub Actions.
- [ ] Acompanhou pelo menos uma alteração de texto e uma publicação/preview de ponta a ponta.
- [ ] Conhece o procedimento para desfazer um deploy e quem contatar em caso de erro.
- [ ] Leu as pendências em [Problemas conhecidos](KNOWN_ISSUES.md) e sabe quais são bloqueantes.
- [ ] Sabe que o formulário de voluntariado não salva respostas e depende do e-mail da pessoa visitante.
- [ ] Atualizou este guia caso a organização tenha mudado ferramentas ou responsabilidades.

### Registro operacional a completar pela equipe

| Item | Estado atual deste guia | Ação para a transição |
| --- | --- | --- |
| Endereço público / domínio | Não comprovado pelo repositório | Registrar URL oficial e responsável |
| Provedor / acesso para deploy | Não comprovado pelo repositório | Registrar provedor e processo seguro de acesso |
| Responsável por aprovar conteúdo | Não informado no código | Definir função e canal institucional |
| Responsável técnico seguinte | A definir | Fazer revisão conjunta e dar acesso |
| Biblioteca de fotos e permissões | Há fotos externas com direitos pendentes | Centralizar originais e comprovantes |
| Estado de testes | Histórico de falhas documentado em 04/11/2026 | Consultar execução atual e atualizar pendências |

## 5. Quando o projeto crescer

**Não é preciso reescrever o site agora.** React com JavaScript já existe e é suficiente para a landing page atual. Se as alterações editoriais ficarem frequentes, a primeira melhoria pode ser extrair dados de `App.jsx` para arquivos simples ou adotar um CMS **após** validar quem fará as edições e como serão aprovadas. TypeScript pode ser reavaliado caso a complexidade e a equipe justifiquem, mas não é pré-requisito para continuidade.

Há duas dívidas técnicas que merecem atenção numa futura refatoração: `App.jsx` concentra conteúdo e componentes; o CSS está distribuído em camadas com sobrescritas. Reorganize de forma incremental e com verificação visual, não apenas para trocar a tecnologia.

**Leituras seguintes:** [Colaboração](../CONTRIBUTING.md) · [Arquitetura](ARCHITECTURE.md) · [Conteúdo](CONTENT.md) · [Testes](TESTING.md) · [Solução de problemas](TROUBLESHOOTING.md) · [Operação](OPERATIONS.md).
