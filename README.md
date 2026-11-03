# GRIS — Espaço Solidário

Primeira versão do site em React + Vite, criada a partir do projeto do GRIS no Framer.

## Desenvolvimento

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Arquitetura

- `src/App.jsx`: estrutura da página, navegação e formulário de voluntariado.
- `src/style.css`: design mobile-first, CSS responsivo e acessibilidade.
- `index.html`: entrada e metadados.

## Pendências para produção

- O formulário prepara uma mensagem via `mailto:`; ainda não envia dados para backend. Integrar um endpoint seguro antes de publicar como formulário funcional.
- Confirmar endereço, endereço de e-mail, Instagram e URL oficial do Facebook com a equipe do GRIS. O Facebook atualmente aponta para a página genérica.
- Confirmar as formas de doação; não há chave Pix ou conta bancária inventada.
- As fotografias são carregadas do CDN do Framer e devem ter uso autorizado e disponibilidade verificada.
- Realizar testes de compilação, responsividade e fluxo no navegador; não são garantidos apenas pelo envio do código.

Referência: https://famous-anything-348438.framer.app/
