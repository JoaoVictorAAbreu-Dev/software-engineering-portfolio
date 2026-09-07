# João Victor Alves de Abreu | Portfólio

Portfólio para candidaturas a estágio em desenvolvimento de software, com foco em backend, Java, Spring Boot, APIs REST e bancos relacionais.

## Tecnologias

React 18, TypeScript, Vite, Tailwind CSS e React Icons. Site estático, sem API própria ou banco de dados.

## Conteúdo e estrutura

A página reúne apresentação, três projetos selecionados, stack por tipo de evidência, formação e contato. O currículo está disponível em PDF.

- `src/data/portfolio.ts`: projetos, competências, contatos e metadados.
- `src/pages/`: página inicial, detalhes técnicos e página de erro.
- `src/components/`: navegação, foto com fallback e componentes compartilhados.
- `src/index.css`: identidade visual escura e layout responsivo.
- `public/`: currículo, foto, favicon e arquivos de SEO.
- `scripts/generate-seo-assets.mjs`: geração do sitemap e robots.txt.
- `docs/content-verification.md`: fontes, decisões de conteúdo e limitações.

## Executar

Requer Node.js 20 ou superior e npm.

```bash
npm ci
npm run dev
```

## Validar

```bash
npm run lint
npm run build
npm run preview
```

O build executa TypeScript, gera SEO e produz `dist/`. A validação funcional está descrita em `docs/validation.md`. Não há suíte de testes automatizados versionada nesta revisão. A presença de testes nos projetos apresentados não significa que esses testes foram executados neste repositório.

## Configuração

As variáveis opcionais estão em `.env.example`: `VITE_SITE_URL` para a URL canônica e `VITE_BASE_PATH` para o caminho base. Não coloque segredos em variáveis `VITE_*`, pois são públicas no navegador.

## Publicação

Na Vercel: preset Vite, instalação `npm ci`, build `npm run build`, diretório `dist`. Revise as fontes em `docs/content-verification.md` antes de publicar. O sitemap inclui somente as rotas atuais. Rotas antigas de projetos removidos apresentam uma mensagem de projeto não encontrado.

## Roadmap

- Atualizar formação e currículo quando os dados mudarem.
- Adicionar demonstrações ou estudos de caso apenas quando houver material verificável.
- Adicionar automação de acessibilidade e navegação em CI conforme o site evoluir.
