import { ExternalLink } from "../components/ExternalLink";
import { ProfilePhoto } from "../components/ProfilePhoto";
import { SectionHeading } from "../components/SectionHeading";
import {
  contactLinks,
  projects,
  seo,
  skillCategories,
} from "../data/portfolio";
import { MainLayout } from "../layouts/MainLayout";
import { usePageMeta } from "../utils/meta";

const summaryItems = [
  {
    title: "Java & Spring Boot",
    description: "APIs REST com boas práticas de arquitetura em camadas.",
  },
  {
    title: "APIs REST & segurança",
    description:
      "Autenticação, autorização e tratamento centralizado de erros.",
  },
  {
    title: "PostgreSQL & arquitetura",
    description: "Modelagem relacional e persistência com JPA/Hibernate.",
  },
];

const workSteps = [
  {
    number: "01",
    title: "Entendo o problema",
    description: "Transformo requisitos em uma estrutura clara e organizada.",
  },
  {
    number: "02",
    title: "Construo a solução",
    description:
      "Desenvolvo APIs, regras de negócio e persistência com foco em manutenção.",
  },
  {
    number: "03",
    title: "Valido e documento",
    description:
      "Testo comportamentos, trato erros e registro as decisões técnicas.",
  },
];

export function HomePage() {
  const resumeUrl = `${import.meta.env.BASE_URL}curriculo-joao-victor.pdf`;
  usePageMeta(seo);

  return (
    <MainLayout>
      <section
        aria-labelledby="hero-title"
        className="section-shell hero-section"
      >
        <div className="hero-copy">
          <p className="eyebrow">João Victor / desenvolvimento backend</p>
          <h1 id="hero-title" className="hero-title">
            Backend com Java.
            <br />
            Clareza em cada camada.
          </h1>
          <p className="hero-description">
            Sou João Victor, estudante de Ciência da Computação na FIAP.
            Desenvolvo APIs com Java e Spring Boot e busco meu primeiro estágio
            em backend.
          </p>
          <ul className="hero-indicators" aria-label="Informações principais">
            <li>Suzano, SP</li>
            <li className="is-success">Disponível para estágio</li>
            <li>FIAP — Ciência da Computação</li>
          </ul>
          <div className="hero-actions">
            <a href="#projetos" className="btn-primary">
              Ver projetos
            </a>
            <a href="#contato" className="btn-secondary">
              Falar comigo
            </a>
            <a href={resumeUrl} download className="btn-tertiary">
              Baixar currículo
            </a>
          </div>
          <div className="hero-socials" aria-label="Redes profissionais">
            <a href="https://github.com/JoaoVictorAAbreu-Dev">GitHub ↗</a>
            <a href="https://www.linkedin.com/in/jo%C3%A3ovictoraabreu">
              LinkedIn ↗
            </a>
          </div>
        </div>
        <div className="hero-aside">
          <div className="profile-frame">
            <ProfilePhoto />
          </div>
          <div className="hero-caption">
            <strong>João Victor Alves de Abreu</strong>
            <span>FIAP · Suzano, SP · Disponível para estágio</span>
          </div>
        </div>
      </section>

      <section className="tech-summary" aria-label="Resumo técnico">
        <div className="tech-summary-inner">
          {summaryItems.map((item) => (
            <div key={item.title} className="summary-item">
              <span className="summary-dot" aria-hidden="true" />
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="projetos"
        aria-labelledby="projetos-heading"
        className="section-shell scroll-mt-28 projects-section"
      >
        <SectionHeading
          id="projetos-heading"
          eyebrow="Projetos"
          title="Projetos que colocam a teoria em prática."
          description="Java, integração de dados e sistemas: três caminhos para aprofundar o desenvolvimento backend."
        />
        <div className="projects-grid">
          {projects.map((project, index) => (
            <article
              key={project.slug}
              className={`project-card ${index === 0 ? "project-card-featured" : ""}`}
            >
              <div
                className={`project-visual ${index === 0 ? "" : "project-visual-compact"}`}
                aria-hidden="true"
              >
                <strong>
                  {index === 0
                    ? "API REST"
                    : index === 1
                      ? "DADOS & INTEGRAÇÃO"
                      : "EXPLORAÇÃO DE SISTEMAS"}
                </strong>
                <span>
                  {index === 0
                    ? "Controller → Service"
                    : index === 1
                      ? "Energia → API → Recomendações"
                      : "UEFI → Limine → Kernel Rust"}
                </span>
                {index === 0 ? <span>Repository → PostgreSQL</span> : null}
              </div>
              <div className="project-content">
                <p className="project-meta">
                  {project.type} · {project.status}
                </p>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <p className="project-contribution">{project.contribution}</p>
                <ul aria-label="Tecnologias utilizadas" className="tech-list">
                  {project.technologies.map((tech) => (
                    <li key={tech} className="tech-chip">
                      {tech}
                    </li>
                  ))}
                </ul>
                <div className="project-actions">
                  <a
                    href={`/projetos/${project.slug}`}
                    className="btn-secondary"
                  >
                    Ver evidências
                  </a>
                  {project.githubUrl ? (
                    <ExternalLink
                      href={project.githubUrl}
                      className="project-link"
                      showNewTabText
                    >
                      GitHub ↗
                    </ExternalLink>
                  ) : (
                    <a
                      href="mailto:joaovictoralvesabreu1@gmail.com?subject=Projeto%20Inversor%20Solar"
                      className="project-link"
                    >
                      Conversar sobre o projeto ↗
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        aria-labelledby="processo-heading"
        className="section-shell process-section"
      >
        <SectionHeading
          id="processo-heading"
          eyebrow="Processo"
          title="Como trabalho"
          description="Uma forma simples de transformar requisitos em software compreensível."
        />
        <div className="steps-grid">
          {workSteps.map((step) => (
            <article key={step.number} className="step-card">
              <span className="step-number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="stack"
        aria-labelledby="stack-heading"
        className="section-shell scroll-mt-28 stack-section"
      >
        <SectionHeading
          id="stack-heading"
          eyebrow="Conhecimentos"
          title="Stack e fundamentos"
        />
        <div className="skill-grid">
          {skillCategories.map((category) => (
            <div key={category.category} className="skill-group">
              <h3>{category.category}</h3>
              <p>{category.description}</p>
              <ul className="tech-list">
                {category.items.map((item) => (
                  <li key={item} className="tech-chip">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="stack-note">
          Fundamentos em estudo: estruturas de dados, algoritmos e testes
          automatizados.
        </p>
      </section>

      <section
        id="sobre"
        aria-labelledby="sobre-heading"
        className="section-shell scroll-mt-28 about-section"
      >
        <SectionHeading
          id="sobre-heading"
          eyebrow="Sobre"
          title="Aprendizado e formação"
        />
        <div className="about-grid">
          <div className="about-copy">
            <p>
              Sou estudante de Ciência da Computação na FIAP, com formação
              prática em desenvolvimento backend, APIs REST, bancos de dados e
              programação orientada a objetos.
            </p>
            <p>
              Possuo projetos em Java, Spring Boot, Python e Django. Busco
              estágio para aplicar meus conhecimentos, aprender com um time
              experiente e contribuir com soluções bem estruturadas.
            </p>
            <p className="about-note">
              Inglês básico/intermediário, em desenvolvimento.
            </p>
          </div>
          <div className="education-card">
            <p className="eyebrow">Formação acadêmica</p>
            <h3>FIAP — Centro Universitário</h3>
            <p>Bacharelado em Ciência da Computação</p>
            <span>4º semestre · conclusão prevista: dezembro de 2028</span>
          </div>
        </div>
      </section>

      <section
        id="contato"
        aria-labelledby="contato-heading"
        className="section-shell scroll-mt-28 contact-section"
      >
        <SectionHeading
          id="contato-heading"
          eyebrow="Contato"
          title="Vamos conversar?"
          description="Estou disponível para oportunidades de estágio em desenvolvimento de software."
        />
        <div className="contact-grid">
          {contactLinks.map(({ label, value, href }) => {
            const content = (
              <>
                <span className="contact-label">{label}</span>
                <span className="contact-value">{value}</span>
              </>
            );
            return href.startsWith("https:") ? (
              <ExternalLink
                key={label}
                href={href}
                className="contact-link"
                showNewTabText
              >
                {content}
              </ExternalLink>
            ) : (
              <a key={label} href={href} className="contact-link">
                {content}
              </a>
            );
          })}
        </div>
        <a href={resumeUrl} download className="btn-primary contact-cta">
          Baixar currículo
        </a>
      </section>
    </MainLayout>
  );
}
