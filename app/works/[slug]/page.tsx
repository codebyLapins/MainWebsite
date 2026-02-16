import { notFound } from 'next/navigation';
import { getProjectBySlug, projects } from "@/data/projects";
import ClientProjectPage from './ClientProjectPage';

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return <ClientProjectPage project={project} />;
}
