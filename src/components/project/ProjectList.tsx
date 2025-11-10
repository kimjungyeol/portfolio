import { ProjectListProps } from '@/types';
import ProjectCard from './ProjectCard';

export default function ProjectList({ projects }: ProjectListProps) {
  if (projects.length === 0) {
    return (
      <div className="py-12 text-center">
        <p className="text-gray-600 dark:text-gray-400">
          표시할 프로젝트가 없습니다.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
