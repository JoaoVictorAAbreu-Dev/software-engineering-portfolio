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

export function HomePage() {
  const resumeUrl = `${import.meta.env.BASE_URL}curriculo-joao-victor.pdf`;
  usePageMeta(seo);

  return (
    <MainLayout>
      <section
        aria-labelledby="hero-title"
        className="section-shell hero-section"
      >
        <div>
          <p className="eyebrow">João Victor Alves de Abreu</p>
          <h1
            id="hero-title"
            className="mt-5 text-3xl font-semibold leading-tight sm:text-4xl"
          >
            Estudante de Ciência da Computação e desenvolvedor backend em
            formação.
          </h1>
          <p className="mt-5 max-w-2xl leading-7 text-[var(--text-muted)]">
            Foco em Java, Spring Boot, APIs REST e bancos de dados. Busco
            estágio em desenvolvimento de software para aprender com um time
            experiente e contribuir com soluções bem estruturadas.
          </p>
          <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-[var(--text-muted)]">
            <li>Suzano, SP</li>
            <li>Disponível para estágio</li>
            <li>FIAP — Ciência da Computação</li>
          </ul>
          <div className="mt-7 flex flex-wrap gap-3">
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
        </div>
        <div className="hero-aside">
          <ProfilePhoto />
          <div
            className="hero-proof"
            aria-label="Resumo de disponibilidade e foco"
          >
            <strong>Disponível para estágio</strong>
            <span>Java · Spring Boot · APIs REST</span>
            <span>Suzano, SP</span>
          </div>
        </div>
      </section>

      <section
        id="projetos"
        aria-labelledby="projetos-heading"
        className="section-shell scroll-mt-28"
      >
        <SectionHeading
          id="projetos-heading"
          eyebrow="Projetos"
          title="Projetos selecionados"
        />
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.slug}
              className={`project-card ${index === 0 ? "project-card-featured" : ""}`}
            >
              <p className="eyebrow">{project.type}</p>
              <h3 className="mt-4 text-xl font-semibold">{project.title}</h3>
              <p className="mt-2 text-sm text-[var(--text-muted)]">
                {project.status}
              </p>
              <p className="mt-5 text-sm leading-7 text-[var(--text-muted)]">
                {project.description}
              </p>
              <p className="project-result mt-4">
                <strong>Resultado verificável:</strong> {project.result}
              </p>
              <h4 className="mt-5 text-sm font-semibold">Minha contribuição</h4>
              <p className="mt-2 text-sm leading-7 text-[var(--text-muted)]">
                {project.contribution}
              </p>
              <ul
                aria-label="Tecnologias utilizadas"
                className="mt-5 flex flex-wrap gap-2"
              >
                {project.technologies.map((tech) => (
                  <li key={tech} className="tech-chip">
                    {tech}
                  </li>
                ))}
              </ul>
              <h4 className="mt-5 text-sm font-semibold">O que implementei</h4>
              <ul className="mt-2 list-disc space-y-2 pl-5 text-sm leading-6 text-[var(--text-muted)] marker:text-[var(--accent)]">
                {project.evidence.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              {project.githubUrl && (
                <div className="mt-auto flex flex-wrap gap-3 pt-6">
                  <a href={`/projetos/${project.slug}`} className="btn-primary">
                    Ver evidências
                  </a>
                  <ExternalLink
                    href={project.githubUrl}
                    className="btn-secondary"
                    showNewTabText
                  >
                    Repositório do {project.title}
                  </ExternalLink>
                </div>
              )}
              {!project.githubUrl && (
                <a
                  href={`/projetos/${project.slug}`}
                  className="btn-primary mt-auto pt-3"
                >
                  Ver evidências
                </a>
              )}
            </article>
          ))}
        </div>
      </section>

      <section
        id="stack"
        aria-labelledby="stack-heading"
        className="section-shell scroll-mt-28"
      >
        <SectionHeading
          id="stack-heading"
          eyebrow="Conhecimentos"
          title="Stack e fundamentos"
        />
        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <div
              key={category.category}
              className="border-t border-[var(--border-soft)] pt-5"
            >
              <h3 className="text-lg font-semibold">{category.category}</h3>
              <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">
                {category.description}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <li key={item} className="tech-chip">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-7 text-sm leading-7 text-[var(--text-muted)]">
          Fundamentos em estudo: estruturas de dados, algoritmos e testes
          automatizados.
        </p>
      </section>

      <section
        id="sobre"
        aria-labelledby="sobre-heading"
        className="section-shell scroll-mt-28"
      >
        <SectionHeading
          id="sobre-heading"
          eyebrow="Sobre"
          title="Aprendizado e formação"
        />
        <div className="mt-7 grid gap-8 md:grid-cols-2">
          <div className="space-y-4 leading-7 text-[var(--text-muted)]">
            <p>
              Sou estudante de Ciência da Computação na FIAP, com formação
              prática em desenvolvimento backend, APIs REST, bancos de dados e
              programação orientada a objetos.
            </p>
            <p>
              Possuo projetos em Java, Spring Boot, Python e Django. Busco
              estágio para aplicar conhecimentos, aprender com um time
              experiente e contribuir com soluções bem estruturadas.
            </p>
            <p className="text-sm">
              Inglês básico/intermediário, em desenvolvimento.
            </p>
          </div>
          <div className="border-l-2 border-[var(--accent)] pl-6">
            <h3 className="text-lg font-semibold">
              FIAP — Centro Universitário
            </h3>
            <p className="mt-3">Bacharelado em Ciência da Computação</p>
            <p className="mt-3 text-[var(--text-muted)]">4º semestre</p>
            <p className="mt-2 text-[var(--text-muted)]">
              Conclusão prevista: dezembro de 2028
            </p>
          </div>
        </div>
      </section>

      <section
        id="contato"
        aria-labelledby="contato-heading"
        className="section-shell scroll-mt-28"
      >
        <SectionHeading
          id="contato-heading"
          eyebrow="Contato"
          title="Vamos conversar"
          description="Disponível para oportunidades de estágio em desenvolvimento de software."
        />
        <div className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
          {contactLinks.map(({ label, value, href }) => {
            const content = (
              <>
                <span className="block text-xs text-[var(--text-muted)]">
                  {label}
                </span>
                <span className="block break-words text-sm">{value}</span>
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
        <a href={resumeUrl} download className="btn-secondary mt-6">
          Baixar currículo
        </a>
      </section>
    </MainLayout>
  );
}
