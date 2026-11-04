# Decisões de arquitetura e design

Registro retrospectivo das decisões **observáveis na implementação atual**. Não é uma ata de reunião da equipe; as justificativas abaixo organizam as escolhas técnicas e editoriais e devem ser ratificadas se necessário.

## ADR 001 — Página estática em React/Vite

**Contexto:** site institucional com poucas seções e sem necessidade atual de autenticação, dados dinâmicos ou backend.

**Escolha presente:** React 18 + Vite 6, conteúdo em JSX, deploy estático. **Consequência:** publicação simples, mas toda atualização de conteúdo exige editar código e produzir novo build.

**Revisitar quando:** a equipe precisar de CMS, atualizações frequentes por não programadores ou rotas de detalhes.

## ADR 002 — Narrativa editorial, não catálogo de cards

**Contexto:** comunicar história, comunidade e território com poucos conteúdos publicados.

**Escolha presente:** grandes seções narrativas, fotografias documentais e Registros como lista de reportagens. Sem cards decorativos ou cantos arredondados assimétricos. **Consequência:** leitura mais clara, mas futuras galerias precisam de justificativa editorial e mídias licenciadas.

## ADR 003 — Marca forte com superfícies controladas

**Escolha presente:** verde institucional, fundo claro, texto quase-preto, laranja de CTA e alguns fundos neutros. Os tokens atuais estão no [Design system](DESIGN_SYSTEM.md).

**Atenção:** a cor token laranja pode divergir da marca raster embutida. A definição final cabe ao GRIS; não presumir que valores de versões anteriores estejam vigentes.

## ADR 004 — Navegação mobile-first e interações nativas

**Escolha presente:** menu responsivo com foco/teclado e details/summary nativo para atividades; navegação por âncoras. **Consequência:** pouca dependência externa, mas é necessário testar estados de foco, tabulação e reflow.

## ADR 005 — Voluntariado por mailto como solução provisória

**Escolha presente:** preparar mensagem no aplicativo de e-mail, sem API própria. **Benefício:** evita armazenar dados de visitantes no servidor do site. **Limite:** requer cliente de e-mail, não confirma envio/entrega e pode ser frágil em dispositivos diversos.

**Revisitar quando:** a equipe tiver processo de recebimento e política de dados definidos.

## ADR 006 — Imagens documentais com créditos e fallback

**Escolha presente:** fotos em duas áreas narrativas, com legendas externas e fallback de indisponibilidade. **Risco:** as imagens ainda são URLs de terceiros e dependem de licenciamento/estabilidade.

**Revisitar quando:** existir acervo próprio autorizado, com alt e créditos revisados.

## ADR 007 — Dois arquivos CSS em camadas

**Escolha presente:** estilo de base mais visual-direction.css importado depois. **Benefício:** experimentação de linguagem visual sem reescrever tudo. **Dívida:** overrides acumulados dificultam previsão da aparência e manutenção. Consolidar com cuidado e testes de regressão.

## Processo para novas decisões

Para mudanças estruturais, acrescentar um novo ADR contendo: data, contexto, opções consideradas, decisão, alternativas rejeitadas, riscos e condições de revisão. Indicar responsável pela aprovação sem inventar autoria institucional.
