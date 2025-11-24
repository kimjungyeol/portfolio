import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { getProjectById, mockProjects } from '@/data/mockProjects';
import { formatPeriod, formatNumber } from '@/lib/utils';

interface ProjectDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

// Generate static paths for all projects at build time
export async function generateStaticParams() {
  return mockProjects.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    return {
      title: '프로젝트를 찾을 수 없습니다',
    };
  }

  return {
    title: `${project.title} - Portfolio`,
    description: project.description,
    keywords: [...project.tags, ...project.languages],
  };
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    notFound();
  }

  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      {/* Back Button */}
      <div className="border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
        <div className="container-custom py-4">
          <Link
            href="/"
            className="inline-flex items-center text-sm text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          >
            <svg
              className="mr-2 h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            프로젝트 목록으로 돌아가기
          </Link>
        </div>
      </div>

      {/* Project Header */}
      <div className="border-b border-gray-200 bg-white py-8 dark:border-gray-700 dark:bg-gray-800">
        <div className="container-custom">
          {/* Category & Status */}
          <div className="mb-4 flex items-center gap-3">
            <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-800 dark:bg-blue-900 dark:text-blue-200">
              {project.category}
            </span>
            {project.status === 'ongoing' && (
              <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-800 dark:bg-green-900 dark:text-green-200">
                진행중
              </span>
            )}
          </div>

          {/* Title */}
          <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
            {project.title}
          </h1>

          {/* Period */}
          <p className="mb-6 text-gray-600 dark:text-gray-400">
            {formatPeriod(project.startDate, project.endDate)}
          </p>

          {/* Stats */}
          <div className="flex items-center gap-6 text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <svg
                className="h-5 w-5"
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
              <span>{formatNumber(project.views)} 조회</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="h-5 w-5"
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
              <span>{formatNumber(project.likes)} 좋아요</span>
            </div>
          </div>
        </div>
      </div>

      {/* Project Image */}
      <div className="bg-white dark:bg-gray-800">
        <div className="container-custom py-8">
          <div className="relative h-96 w-full overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-700">
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className="py-12">
        <div className="container-custom">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="card">
                <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                  프로젝트 설명
                </h2>
                <div
                  className="prose prose-gray max-w-none dark:prose-invert"
                  dangerouslySetInnerHTML={{ __html: project.content }}
                />
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Author */}
              <div className="card">
                <h3 className="mb-4 text-lg font-bold text-gray-900 dark:text-white">
                  작성자
                </h3>
                <div className="flex items-center gap-3">
                  <Image
                    src={project.author.avatar}
                    alt={project.author.name}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">
                      {project.author.name}
                    </div>
                    {project.author.bio && (
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {project.author.bio}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div className="card">
                <h3 className="mb-4 text-lg font-bold text-gray-900 dark:text-white">
                  태그
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="card">
                <h3 className="mb-4 text-lg font-bold text-gray-900 dark:text-white">
                  기술 스택
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.languages.map((lang) => (
                    <span
                      key={lang}
                      className="rounded-md bg-gray-100 px-3 py-1 text-sm text-gray-700 dark:bg-gray-700 dark:text-gray-300"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="card">
                <h3 className="mb-4 text-lg font-bold text-gray-900 dark:text-white">
                  링크
                </h3>
                <div className="space-y-2">
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-700 dark:text-blue-400"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                      웹사이트 방문
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-700 dark:text-blue-400"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                      GitHub 저장소
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
