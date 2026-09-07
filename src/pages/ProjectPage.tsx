import { Link, useParams } from "react-router-dom";
import { ExternalLink } from "../components/ExternalLink";
import { projects } from "../data/portfolio";
import { MainLayout } from "../layouts/MainLayout";
import { usePageMeta } from "../utils/meta";

export function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);
  usePageMeta({
    title: project
      ? `${project.title} | João Victor Alves de Abreu`
      : "Projeto não encontrado",
    description: project?.description ?? "Projeto não encontrado no portfólio.",
    path: project ? `/projetos/${project.slug}` : "/404",
  });
  return (
    <MainLayout>
      <div className="section-shell">
        <Link to="/#projetos" className="btn-secondary">
          Voltar aos projetos
        </Link>
        <h1 className="mt-8 text-3xl font-semibold">
          {project?.title ?? "Projeto não encontrado"}
        </h1>
        {project ? (
          <>
            <p className="mt-4 text-[var(--text-muted)]">
              {project.type} · {project.status}
            </p>
            <p className="mt-6 max-w-3xl leading-7">{project.description}</p>
            <h2 className="mt-8 text-xl font-semibold">Minha contribuição</h2>
            <p className="mt-3 max-w-3xl leading-7">{project.contribution}</p>
            <h2 className="mt-8 text-xl font-semibold">Evidências técnicas</h2>
            <ul className="mt-3 list-disc space-y-3 pl-5">
              {project.evidence.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            {project.githubUrl && (
              <ExternalLink
                href={project.githubUrl}
                className="btn-primary mt-8"
                showNewTabText
              >
                Repositório do {project.title}
              </ExternalLink>
            )}
          </>
        ) : (
          <p className="mt-5">
            Consulte a seleção atual de projetos na página inicial.
          </p>
        )}
      </div>
    </MainLayout>
  );
}
