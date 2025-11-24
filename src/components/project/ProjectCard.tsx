import Link from 'next/link';
import Image from 'next/image';
import { ProjectCardProps } from '@/types';
import { formatPeriod } from '@/lib/utils';

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/project/${project.id}`}
      className="group block overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
    >
      {/* 이미지 */}
      <div className="relative h-48 w-full overflow-hidden bg-gray-100 dark:bg-gray-700">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {/* 상태 배지 */}
        {project.status === 'ongoing' && (
          <div className="absolute right-2 top-2 rounded-full bg-green-500 px-3 py-1 text-xs font-semibold text-white">
            진행중
          </div>
        )}
      </div>

      {/* 내용 */}
      <div className="p-4">
        {/* 카테고리 */}
        <div className="mb-2 text-sm font-medium text-blue-600 dark:text-blue-400">
          {project.category}
        </div>

        {/* 제목 */}
        <h3 className="mb-2 line-clamp-2 text-lg font-bold text-gray-900 dark:text-white">
          {project.title}
        </h3>

        {/* 설명 */}
        <p className="mb-4 line-clamp-3 text-sm text-gray-600 dark:text-gray-400">
          {project.description}
        </p>

        {/* 기간 */}
        <div className="mb-3 text-xs text-gray-500 dark:text-gray-500">
          {formatPeriod(project.startDate, project.endDate)}
        </div>

        {/* 태그 */}
        <div className="mb-4 flex flex-wrap gap-2">
          {project.languages.slice(0, 3).map((lang) => (
            <span
              key={lang}
              className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-700 dark:bg-gray-700 dark:text-gray-300"
            >
              {lang}
            </span>
          ))}
          {project.languages.length > 3 && (
            <span className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-700 dark:bg-gray-700 dark:text-gray-300">
              +{project.languages.length - 3}
            </span>
          )}
        </div>

        {/* 통계 */}
        {/* <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-1">
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
            <span>{formatNumber(project.views)}</span>
          </div>
          <div className="flex items-center gap-1">
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            <span>{formatNumber(project.likes)}</span>
          </div>
        </div> */}
      </div>
    </Link>
  );
}
