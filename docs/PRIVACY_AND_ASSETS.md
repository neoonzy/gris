# Privacidade, direitos e recursos de terceiros

Este documento descreve o comportamento encontrado no **código atual**, não constitui parecer jurídico nem substitui política de privacidade aprovada pelo GRIS.

## O que o site faz com informações de contato

O formulário de voluntariado solicita:

- Nome;
- E-mail;
- Telefone;
- Mensagem sobre como deseja contribuir.

No submit, o JavaScript cria uma URL mailto: e pede ao sistema operacional/navegador para abrir o programa de e-mail. **O código do site não envia os dados a um servidor próprio nem os salva em banco/localStorage.** Isso não significa que os dados deixam de circular: ao revisar e enviar a mensagem, o visitante transmite os dados por seu provedor de e-mail, sujeito às políticas do serviço utilizado. O estado visual prepared indica preparação, não envio ou entrega.

O botão de doação também inicia um e-mail; **não há processamento financeiro** no código.

## Recursos externos

| Recurso | Situação |
| --- | --- |
| Google Fonts | Carregamento de Google Sans Flex por CSS remoto |
| Fotografias | URLs em dominio do Diario de Pernambuco |
| Instagram | Link externo para conta configurada |
| Google Maps | Link externo para busca por endereço |
| Reportagens | Links externos para Diario de Pernambuco e Brasil de Fato |
| Rede GERA | Link externo para site parceiro |
| Ícones | Biblioteca lucide-react incorporada ao bundle |

Requisições a serviços de terceiros podem envolver o navegador e metadados de rede do visitante. Antes de publicar, avaliar necessidade, alternativas de hospedagem local e avisos institucionais.

## Direitos de imagem e logotipo

- **Crédito não é licença.** É necessário obter permissão do titular dos direitos para hospedar ou republicar as fotografias.
- Verificar autor, titular, limitações de uso, prazo, contexto da foto e necessidade de consentimento de pessoas retratadas, especialmente crianças e situações de vulnerabilidade.
- Registrar nomes e documentos de autorização em armazenamento institucional apropriado, **fora do repositório público**.
- A marca em public/gris-logo.svg contém imagens PNG incorporadas num arquivo SVG-contêiner. Não assumir que é uma marca vetorial editável nem que o repositório concede direitos de redistribuição.
- Não há arquivo LICENSE no repositório na revisão documentada; o direito de uso do código e das mídias deve ser definido pelos responsáveis.

## Se o formulário virar um serviço real

Antes de adicionar endpoint, banco, planilha, CRM ou sistema de e-mail:

1. Definir finalidade, necessidade e base legal aplicável de cada dado.
2. Reduzir campos ao mínimo necessário e informar o visitante sobre tratamento e canal de contato.
3. Definir quem acessa, prazo de retenção, exclusão e medidas de segurança.
4. Proteger o endpoint contra abuso, automação e vazamento de dados.
5. Não logar dados sensíveis no frontend, CI ou serviços de monitoramento.
6. Publicar política de privacidade aprovada e testar fluxo de confirmação/erro.
7. Atualizar este documento, arquitetura, testes, hospedagem e README.

## Contato institucional e correções

Os dados de endereço e e-mail em src/App.jsx **não foram certificados por esta documentação**. Confirmá-los com a organização antes de afirmar que são oficiais.

Veja [Conteúdo](CONTENT.md), [Arquitetura](ARCHITECTURE.md) e [Publicação](DEPLOYMENT.md).
