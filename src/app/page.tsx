'use client';

import { useState, useMemo } from 'react';
import ProjectList from '@/components/project/ProjectList';
import ProjectFilter from '@/components/project/ProjectFilter';
import SearchBar from '@/components/common/SearchBar';
import { mockProjects, getOngoingProjects } from '@/data/mockProjects';
import { filterProjects, sortProjects } from '@/lib/utils';
import { ProjectFilterOptions } from '@/types';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [selectedStatus, setSelectedStatus] = useState<
    'all' | 'ongoing' | 'completed'
  >('all');
  const [sortBy, setSortBy] = useState<'latest' | 'oldest'>(
    'latest',
  );
  // const [sortBy, setSortBy] = useState<'latest' | 'oldest' | 'likes' | 'views'>(
  //   'latest',
  // );

  const ongoingProjects = getOngoingProjects();

  // 필터링 및 정렬 로직
  const filteredAndSortedProjects = useMemo(() => {
    const filters: ProjectFilterOptions = {
      search: searchQuery,
      year: selectedYear,
      tags: selectedTags,
      languages: selectedLanguages,
      status: selectedStatus,
    };

    const filtered = filterProjects(mockProjects, filters);
    return sortProjects(filtered, sortBy);
  }, [
    searchQuery,
    selectedYear,
    selectedTags,
    selectedLanguages,
    selectedStatus,
    sortBy,
  ]);

  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="border-b border-gray-200 bg-gradient-to-br from-blue-50 to-indigo-100 py-16 dark:border-gray-700 dark:from-gray-800 dark:to-gray-900">
        <div className="container-custom">
          <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
            프로젝트
          </h1>
          <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
            다양한 프로젝트와 기술 스택을 활용한 주요 개발 경험을 소개합니다.
          </p>

          {/* 현재 진행중인 프로젝트 */}
          {ongoingProjects.length > 0 && (
            <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800">
              <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
                현재 진행중인 프로젝트
              </h2>
              <div className="space-y-2">
                {ongoingProjects.map((project) => (
                  <div
                    key={project.id}
                    className="flex items-center justify-between"
                  >
                    <a
                      href={`/project/${project.id}`}
                      className="text-blue-600 hover:text-blue-700 dark:text-blue-400"
                    >
                      {project.title}
                    </a>
                    <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-semibold text-green-800 dark:bg-green-900 dark:text-green-200">
                      진행중
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container-custom">
          {/* 검색 및 정렬 */}
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex-1 md:max-w-md">
              <SearchBar
                value={searchQuery}
                onChange={setSearchQuery}
                placeholder="프로젝트 검색..."
              />
            </div>
            <div className="flex items-center gap-2">
              <label
                htmlFor="sort"
                className="text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                정렬:
              </label>
              <select
                id="sort"
                value={sortBy}
                onChange={(e) =>
                  setSortBy(
                    e.target.value as 'latest' | 'oldest',
                    // e.target.value as 'latest' | 'oldest' | 'likes' | 'views',
                  )
                }
                className="rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
              >
                <option value="latest">최신순</option>
                <option value="oldest">오래된순</option>
                {/* <option value="likes">인기순</option>
                <option value="views">조회순</option> */}
              </select>
            </div>
          </div>

          {/* 필터 및 프로젝트 목록 */}
          <div className="grid gap-8 lg:grid-cols-4">
            {/* 필터 사이드바 */}
            <aside className="lg:col-span-1">
              <ProjectFilter
                projects={mockProjects}
                selectedYear={selectedYear}
                selectedTags={selectedTags}
                selectedLanguages={selectedLanguages}
                selectedStatus={selectedStatus}
                onYearChange={setSelectedYear}
                onTagsChange={setSelectedTags}
                onLanguagesChange={setSelectedLanguages}
                onStatusChange={setSelectedStatus}
              />
            </aside>

            {/* 프로젝트 목록 */}
            <div className="lg:col-span-3">
              <div className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                총 {filteredAndSortedProjects.length}개의 프로젝트
              </div>
              <ProjectList projects={filteredAndSortedProjects} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
