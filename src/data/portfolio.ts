import type { ProjectItem } from "../types/portfolio";

export const seo = {
  title: "João Victor Alves de Abreu | Desenvolvedor Backend",
  description:
    "Estudante de Ciência da Computação na FIAP e desenvolvedor backend em formação, com foco em Java, Spring Boot, APIs REST e bancos de dados",
  image: "/images/profile.webp",
};

export const navItems = [
  { label: "Projetos", href: "#projetos" },
  { label: "Stack", href: "#stack" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

export const projects: ProjectItem[] = [
  {
    slug: "atlasops-api",
    title: "AtlasOps API",
    type: "Projeto pessoal",
    status: "Repositório público",
    description:
      "API REST para monitoramento operacional, priorização de eventos e consolidação de indicadores de risco.",
    contribution:
      "Desenvolvi o backend em Java 21 e Spring Boot, com autenticação e persistência relacional.",
    technologies: [
      "Java 21",
      "Spring Boot",
      "PostgreSQL",
      "Spring Security",
      "JWT",
      "JPA/Hibernate",
      "H2",
    ],
    evidence: [
      "Autenticação com JWT e Spring Security.",
      "Persistência com JPA/Hibernate e PostgreSQL.",
      "DTOs para entrada e saída e tratamento centralizado de erros.",
      "Testes utilizando H2.",
    ],
    githubUrl: "https://github.com/JoaoVictorAAbreu-Dev/atlas-operations-api",
  },
  {
    slug: "inversor-solar",
    title: "Integração de Inversor Solar com Assistentes Virtuais e IA",
    type: "Projeto acadêmico · FIAP",
    status: "2026",
    description:
      "Solução de sustentabilidade e IoT para monitoramento de dados energéticos e recomendações de eficiência.",
    contribution:
      "Desenvolvi o backend em Django para monitoramento de dados energéticos e integração por APIs REST.",
    technologies: ["Python", "Django", "APIs REST"],
    evidence: [
      "Monitoramento de dados energéticos no backend.",
      "Integração por APIs REST.",
      "Processamento de dados para recomendações de eficiência.",
    ],
    githubUrl: null,
  },
  {
    slug: "aetheros",
    title: "AetherOS",
    type: "Projeto pessoal",
    status: "Kernel experimental",
    description:
      "Kernel experimental em Rust para explorar inicialização de sistemas e organização de memória.",
    contribution:
      "Desenvolvi a inicialização do kernel e documentei o fluxo de boot e a organização em workspace Cargo.",
    technologies: ["Rust", "UEFI", "Limine", "QEMU", "Cargo"],
    evidence: [
      "Inicialização via UEFI e bootloader Limine.",
      "Inicialização de memória e validação de boot em QEMU.",
      "Documentação técnica e organização em workspace Cargo.",
    ],
    githubUrl: "https://github.com/JoaoVictorAAbreu-Dev/aetheros-rust-project",
  },
];

export const skillCategories = [
  {
    category: "Foco principal",
    description: "Direção dos meus estudos e da busca por estágio.",
    items: [
      "Java",
      "Spring Boot",
      "APIs REST",
      "SQL",
      "PostgreSQL",
      "POO",
      "Arquitetura em camadas",
    ],
  },
  {
    category: "Aplicadas em projetos",
    description: "Tecnologias utilizadas nos projetos e neste portfólio.",
    items: [
      "Python",
      "Django",
      "React",
      "TypeScript",
      "Rust",
      "H2",
      "JPA/Hibernate",
      "JWT",
      "Docker",
    ],
  },
  {
    category: "Conhecimentos complementares",
    description: "Conhecimentos do currículo, em desenvolvimento contínuo.",
    items: [
      "C",
      "C++",
      "C#",
      "Kotlin",
      "JavaScript",
      "Dart",
      "Flutter",
      "HTML",
      "CSS",
      "MySQL",
      "SQLite",
      "Maven",
      "Gradle",
      "Linux",
      "Git",
      "GitHub",
    ],
  },
];

export const contactLinks = [
  {
    label: "E-mail",
    value: "joaovictoralvesabreu1@gmail.com",
    href: "mailto:joaovictoralvesabreu1@gmail.com",
  },
  { label: "Telefone", value: "(11) 96607-8748", href: "tel:+5511966078748" },
  {
    label: "LinkedIn",
    value: "João Victor Alves de Abreu",
    href: "https://www.linkedin.com/in/jo%C3%A3ovictoraabreu",
  },
  {
    label: "GitHub",
    value: "JoaoVictorAAbreu-Dev",
    href: "https://github.com/JoaoVictorAAbreu-Dev",
  },
];
