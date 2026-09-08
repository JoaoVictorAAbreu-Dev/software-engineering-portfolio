export type ProjectItem = {
  slug: string;
  title: string;
  type: string;
  status: string;
  description: string;
  result: string;
  contribution: string;
  technologies: string[];
  evidence: string[];
  githubUrl: string | null;
};
