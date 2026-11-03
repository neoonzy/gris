# GRIS — Espaço Solidário

Website institucional em React + Vite, com abordagem **mobile-first** e linguagem editorial inspirada na Rede GERA, sem reproduzir sua identidade visual. Mantém a marca original do GRIS, Google Sans Flex e a paleta creme / verde / laranja.

## Rodar localmente

```bash
npm install
npm run dev
```

Para gerar os arquivos de produção:

```bash
npm run build
npm run preview
```

## Estrutura editorial

1. Manifesto e abertura tipográfica
2. Fotografia documental do trabalho comunitário
3. Quem somos — história e atuação
4. Território — Vila Arraes / Várzea
5. Frentes de atuação com detalhes expansíveis
6. Caminhada e impacto com indicadores **datados**
7. Conexão com a Rede GERA
8. Registros e cobertura jornalística
9. Doação e participação voluntária

O menu mobile permite fechar com Escape; o conteúdo usa landmarks HTML, links reais e navegação por teclado. Os programas usam `<details>`, sem dependência extra de JavaScript.

## Informações e créditos

- Dados de 59 famílias acompanhadas e mais de 1,1 mil residências apoiadas em maio de 2026: reportagem do [Diario de Pernambuco](https://www.diariodepernambuco.com.br/vida-urbana/2026/05/11714059-associacao-na-varzea-vira-ponto-de-apoio-e-recomeco-para-familias-impactadas-pelas-chuvas-no-recife.html), de 13/05/2026. São resultados históricos daquela data, **não um contador atualizado**.
- Outro registro público: [Brasil de Fato (2023)](https://www.brasildefato.com.br/2023/06/13/com-estoques-zerados-ongs-do-recife-pedem-ajuda-para-auxiliar-vitimas-em-periodo-de-chuvas/).
- Site parceiro: [Rede GERA](https://www.redegera.org.br/).
- Fotos: imagens de divulgação do GRIS publicadas pelo Diario de Pernambuco, com créditos visíveis nas legendas. **Obter autorização do titular dos direitos para reutilização permanente** e hospedar cópias autorizadas localmente antes de lançar em produção.
- Logo: `public/gris-logo.svg` reúne os assets fornecidos no Framer; é um SVG-contêiner com imagens incorporadas, não um vetor recriado.

## Pendências para produção

- O formulário **não envia para servidor**. Ele abre o programa de e-mail para o visitante revisar e enviar a mensagem.
- Verificar com a equipe endereço e contatos antes da publicação.
- Confirmar se querem publicar valores de Pix / dados para doações. O site não inventa chaves nem contas.
- Garantir direitos de uso e estabilidade das duas imagens externas.
- Testar o build de CI, a página em celulares reais e o comportamento de todas as interações.
- Adicionar testes automatizados, se desejado, e mensuração de acesso respeitando privacidade.

## Tecnologias

React 18, Vite 6, Lucide React e CSS puro.
