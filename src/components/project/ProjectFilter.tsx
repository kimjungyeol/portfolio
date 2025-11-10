'use client';

import { Project } from '@/types';
import { getAllTags, getAllLanguages, getYears } from '@/lib/utils';

interface ProjectFilterProps {
  projects: Project[];
  selectedYear: string;
  selectedTags: string[];
  selectedLanguages: string[];
  selectedStatus: 'all' | 'ongoing' | 'completed';
  onYearChange: (year: string) => void;
  onTagsChange: (tags: string[]) => void;
  onLanguagesChange: (languages: string[]) => void;
  onStatusChange: (status: 'all' | 'ongoing' | 'completed') => void;
}

export default function ProjectFilter({
  projects,
  selectedYear,
  selectedTags,
  selectedLanguages,
  selectedStatus,
  onYearChange,
  onTagsChange,
  onLanguagesChange,
  onStatusChange,
}: ProjectFilterProps) {
  const years = getYears(projects);
  const tags = getAllTags(projects);
  const languages = getAllLanguages(projects);

  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      onTagsChange(selectedTags.filter((t) => t !== tag));
    } else {
      onTagsChange([...selectedTags, tag]);
    }
  };

  const toggleLanguage = (language: string) => {
    if (selectedLanguages.includes(language)) {
      onLanguagesChange(selectedLanguages.filter((l) => l !== language));
    } else {
      onLanguagesChange([...selectedLanguages, language]);
    }
  };

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
      <h2 className="mb-4 text-lg font-bold text-gray-900 dark:text-white">
        필터
      </h2>

      {/* 상태 필터 */}
      <div className="mb-6">
        <h3 className="mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
          상태
        </h3>
        <div className="flex gap-2">
          <button
            onClick={() => onStatusChange('all')}
            className={`rounded-md px-3 py-1 text-sm transition-colors ${
              selectedStatus === 'all'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            전체
          </button>
          <button
            onClick={() => onStatusChange('ongoing')}
            className={`rounded-md px-3 py-1 text-sm transition-colors ${
              selectedStatus === 'ongoing'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            진행중
          </button>
          <button
            onClick={() => onStatusChange('completed')}
            className={`rounded-md px-3 py-1 text-sm transition-colors ${
              selectedStatus === 'completed'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            완료
          </button>
        </div>
      </div>

      {/* 연도 필터 */}
      <div className="mb-6">
        <h3 className="mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
          연도
        </h3>
        <select
          value={selectedYear}
          onChange={(e) => onYearChange(e.target.value)}
          className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
        >
          <option value="">전체 연도</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}년
            </option>
          ))}
        </select>
      </div>

      {/* 태그 필터 */}
      <div className="mb-6">
        <h3 className="mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
          태그
        </h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              className={`rounded-full px-3 py-1 text-xs transition-colors ${
                selectedTags.includes(tag)
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* 언어 필터 */}
      <div>
        <h3 className="mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
          프로그래밍 언어
        </h3>
        <div className="flex flex-wrap gap-2">
          {languages.map((language) => (
            <button
              key={language}
              onClick={() => toggleLanguage(language)}
              className={`rounded-full px-3 py-1 text-xs transition-colors ${
                selectedLanguages.includes(language)
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {language}
            </button>
          ))}
        </div>
      </div>

      {/* 필터 초기화 */}
      {(selectedYear || selectedTags.length > 0 || selectedLanguages.length > 0 || selectedStatus !== 'all') && (
        <button
          onClick={() => {
            onYearChange('');
            onTagsChange([]);
            onLanguagesChange([]);
            onStatusChange('all');
          }}
          className="mt-6 w-full rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
        >
          필터 초기화
        </button>
      )}
    </div>
  );
}
