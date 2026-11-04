# Operação, manutenção e continuidade

Guia para quem assume a manutenção do site ou ajuda o GRIS a manter as informações atualizadas. **Responsáveis e prazos operacionais ainda precisam ser definidos pela organização.**

## Rotina sugerida

| Frequência indicativa | Atividade |
| --- | --- |
| A cada publicação | Conferir build, testes, conteúdo, links e experiência mobile/desktop |
| Mensal | Revisar contatos, campanhas, links externos, imagens e datas |
| Trimestral | Avaliar métricas datadas, dependências, SEO e auditoria de acessibilidade |
| Quando houver evento/campanha | Confirmar fonte, aprovação institucional e consentimentos |
| Após incidente | Registrar causa, correção, teste e prevenção |

As frequências são recomendações técnicas, não acordos de serviço existentes.

## Papéis a definir

- **Responsável editorial:** aprova história, contatos, atividades, números, campanhas e parcerias.
- **Responsável por mídias:** guarda licenças e autorização de publicação de fotografias e marca.
- **Responsável técnico:** mantém dependências, código, testes, domínio e hospedagem.
- **Responsável por publicação:** faz revisão final e acompanha incidentes.

Não inventar nomes ou atribuir cargos sem confirmação.

## Procedimento para atualização

1. Receber a solicitação com conteúdo e fonte.
2. Identificar o local do arquivo seguindo [Conteúdo](CONTENT.md).
3. Atualizar branch de trabalho; nunca escrever conteúdo sensível em logs.
4. Verificar o layout em tela pequena e larga, além de acessibilidade.
5. Rodar build e testes; abrir PR com evidências.
6. Publicar apenas após aprovação.
7. Conferir URL pública e registrar commit, mudança e data.

## Monitorar problemas

- GitHub Actions: separar falha de instalação, build, navegador ou teste.
- Disponibilidade: conferir HTTP, carregamento do HTML, do CSS e dos assets.
- Conteúdo: revisar indicadores e links para reportagens externas.
- Formulário: verificar se instruções mailto estão visíveis e se o e-mail de contato ainda é válido.
- Acessibilidade: receber relatos de barreiras e priorizar correções reais.
- SEO: checar se título/descrição e indexação correspondem à política institucional; não há configuração explícita de sitemap no código inspecionado.

## Incidentes comuns

**Foto quebrada:** confirmar URL e direitos; exibir fallback; solicitar mídia autorizada local. Não usar URL retirada de outro site sem permissão.

**Menu inacessível:** verificar foco, estados open/inert, CSS, altura da navegação e breakpoints. Reproduzir com teclado.

**Falha de CI:** examinar etapas e logs; o build pode passar mesmo quando testes falham. Não ocultar o problema.

**E-mail não abre:** verificar endereço, URL mailto e aplicativo do usuário. Oferecer instruções para escrever diretamente ao contato.

**Contraste ruim após redesign:** revisar valores reais do CSS e controles associados; atualizar teste visual e documentação.

Consulte [Solução de problemas](TROUBLESHOOTING.md).

## Segurança e dados

Não publicar tokens, senhas, dados de famílias/voluntários, documentos pessoais ou arquivos com permissões incertas. O código não fornece infraestrutura de coleta ou armazenamento de dados; um serviço futuro exigirá avaliação de privacidade e controles próprios.

## Escalabilidade e dívida técnica

A aplicação concentra conteúdo e componentes em src/App.jsx e utiliza dois CSS com overrides acumulados. Isso é administrável para uma página pequena, mas aumenta risco de divergências em futuras mudanças. A modularização e consolidação do CSS são recomendações, **não recursos já disponíveis**.

Ver [Problemas conhecidos](KNOWN_ISSUES.md) e [Decisões](DECISIONS.md).
