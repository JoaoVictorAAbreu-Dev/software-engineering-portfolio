# Validação da revisão

Executada em 7 de setembro de 2026, em Windows, com Chromium via Playwright CLI.

## Verificações aprovadas

- `npm ci --no-audit --no-fund`.
- `npm run build`: TypeScript e bundle de produção.
- `npm run lint`.
- `git diff --check`.
- Navegação pelos quatro itens de menu em 375, 768 e 1440 pixels.
- Ausência de rolagem horizontal nas três larguras.
- Um único h1, idioma pt-BR, âncoras internas existentes, imagem carregada com texto alternativo e dimensões.
- Links externos com `target="_blank"` e `rel="noopener noreferrer"`.
- Skip link acessível por Tab e transferência de foco ao conteúdo principal.
- Menu móvel aberto por teclado; Escape fecha e devolve foco ao botão.
- Download do currículo e resposta HTTP válida com assinatura `%PDF`.
- E-mail e telefone conferidos como `mailto:` e `tel:`; não foram enviados e-mails nem realizadas chamadas.
- Currículo renderizado e revisado visualmente em uma página, com dados do CV fornecido.
- Inspeção visual em mobile, tablet e desktop.
- Repositórios públicos conferidos pela API do GitHub; LinkedIn confirmado pelo autor.

## Reproduzir

Execute `npm ci`, `npm run lint`, `npm run build` e `npm run dev`. Abra o endereço local em 375, 768 e 1440 pixels. Use Tab e Enter desde o início da página, abra o menu, pressione Escape, percorra os quatro destinos e baixe o PDF. Confira os dois repositórios e os contatos. Bloqueie os arquivos `images/profile.*` no navegador para inspecionar as iniciais de fallback.

## Limites

Não foram adicionados testes automatizados à suíte do repositório; os fluxos acima foram exercitados por um script temporário do Playwright CLI. Não há certificação formal de acessibilidade. Os testes dos projetos AtlasOps e AetherOS não foram executados. O projeto solar não possui repositório e suas informações são sustentadas pelo CV. Não há demonstrações externas anunciadas.
