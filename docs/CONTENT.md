# Guia editorial e atualização de conteúdo

Público-alvo: pessoas que atualizam informações institucionais, projetos, atividades, reportagens e campanhas do GRIS. **Não há CMS**: alterações editoriais atualmente exigem modificar src/App.jsx, revisar e publicar uma nova versão.

## O que precisa de validação institucional

Antes de atualizar o site, confirmar com a equipe do GRIS: nome institucional, história, endereço, telefone ou e-mail, redes oficiais, atividades vigentes, relação com parceiros, indicadores e campanhas. Não tratar textos no repositório como fonte oficial de verdade só por estarem publicados em código.

## Onde encontrar cada conteúdo

| Conteúdo | Local no código |
| --- | --- |
| E-mail, Instagram, endereço e link do Maps | Objeto CONTACT em src/App.jsx |
| Links de reportagens e parceiro | Objeto SOURCES |
| URLs das duas fotografias | Objeto IMAGES |
| Links e rótulos do menu | Lista NAV e JSX do Footer |
| Frentes de atuação | Lista FRENTES |
| Datas, títulos e resumos das reportagens | Lista REGISTROS |
| Texto de Hero, About, Territory, Gera, Donate e Footer | JSX de cada componente |
| Indicadores 2018, 59 e 1.100+ | JSX do componente Impact |
| Nome e descrição no navegador | index.html |
| Identidade gráfica | public/gris-logo.svg |

## Atualizar uma frente de atuação

Cada item de FRENTES contém title, label e description. Exemplo de estrutura, sem dados inventados:

~~~jsx
{
  title: "Título aprovado pela equipe",
  label: "Categoria curta",
  description: "Descrição precisa da atividade e do público."
}
~~~

Não mudar o título sem verificar impacto no key do React, que atualmente usa frente.title. Mantenha linguagem simples, sem jargão institucional desnecessário e sem promessas não sustentadas.

## Adicionar uma reportagem em Registros

O array REGISTROS usa estes campos: date (texto de data), type (categoria), title, summary, url e origin. A lista não possui página de detalhe; o clique abre uma URL externa em nova aba.

~~~jsx
{
  date: "DD MÊS AAAA",
  type: "REPORTAGEM / TEMA",
  title: "Título curto",
  summary: "Resumo original e factual.",
  url: "https://...",
  origin: "Nome do veículo"
}
~~~

**Conferir:** destino ativo, data correta, consentimento para reproduzir o título quando aplicável, resumo original, links sem redirecionamento suspeito, descrição acessível. Não duplicar conteúdo integral de reportagem.

## Indicadores e reconhecimento

Os números exibidos na página são atualmente 2018, 59 famílias acompanhadas e 1.100+ residências apoiadas; o contexto do site os associa a reportagem datada de **maio de 2026**. Eles **não** representam contagem em tempo real. O texto também menciona reconhecimento de plano comunitário em 2024. Antes de editar, guardar fonte, data de apuração, contexto, método e aprovação institucional.

Se um dado não tiver fonte confiável, omita-o em vez de estimar. Mantenha legenda de data próxima ao número, não apenas numa nota escondida.

## Fotografias e ilustrações

O componente Photo recebe src, alt e eager opcional. As duas URLs atuais apontam para o Diario de Pernambuco; são hotlinks de terceiros. **Crédito não equivale a licença** para republicação. A equipe deve obter permissão expressa, arquivo com resolução adequada e o crédito exigido pelo titular antes de substituí-las por cópias locais.

Padrão recomendado de catalogação, mesmo sem CMS:

| Campo | Por quê |
| --- | --- |
| Nome do arquivo | Facilitar substituição |
| Autor e titular dos direitos | Identificar quem autoriza |
| Data e local | Contextualizar |
| Consentimentos, quando necessários | Proteção de pessoas retratadas |
| Licença/autorização e alcance de uso | Segurança jurídica/editorial |
| Texto alternativo | Acessibilidade |
| Legenda e crédito | Contextualização pública |
| Responsável pela revisão | Prestação de contas |

Textos alternativos devem descrever o que a imagem comunica, sem adivinhar a identidade ou atributos sensíveis de pessoas. Fotografias de crianças e famílias exigem cuidado especial.

## Atualizar contatos e campanhas

- CONTATO: revise e-mail, Instagram, endereço e URL de mapa em conjunto, garantindo consistência entre CTA, formulário e rodapé.
- Doações: o botão atual inicia um e-mail com assunto "Quero apoiar o GRIS". Não há checkout, Pix nem confirmação automática.
- Voluntariado: o formulário compõe uma mensagem mailto; não coleta dados em um serviço remoto do projeto.
- Nunca colocar dados bancários, chave Pix ou campanhas sem validação da organização.

## Checklist editorial antes do merge

1. Informação verificada por responsável do GRIS; fonte e data registradas.
2. Linguagem inclusiva, simples, respeitosa e adequada ao contexto comunitário.
3. Números com contexto temporal; nenhuma informação potencialmente enganosa.
4. Links funcionando; mídias autorizadas; crédito e alt revisados.
5. Versão mobile e desktop conferidas; links e headings acessíveis.
6. README/docs atualizados quando houver mudança de comportamento.
7. Build e testes executados; falhas descritas no Pull Request.

Veja [Privacidade e direitos](PRIVACY_AND_ASSETS.md), [Design system](DESIGN_SYSTEM.md) e [Publicação](DEPLOYMENT.md).
