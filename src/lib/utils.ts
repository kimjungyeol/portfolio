import { Project, ProjectFilterOptions } from '@/types';

/**
 * 날짜를 상대적 시간으로 변환
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diff = now.getTime() - date.getTime();

  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (seconds < 60) return '방금 전';
  if (minutes < 60) return `${minutes}분 전`;
  if (hours < 24) return `${hours}시간 전`;
  if (days < 7) return `${days}일 전`;

  return new Intl.DateTimeFormat('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

/**
 * 날짜를 YYYY-MM-DD 형식으로 변환
 */
export function formatDateSimple(dateString: string): string {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('ko-KR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(date);
}

/**
 * 기간 포맷팅 (YYYY.MM - YYYY.MM)
 */
export function formatPeriod(startDate: string, endDate?: string): string {
  const start = new Date(startDate);
  const startFormatted = `${start.getFullYear()}.${String(start.getMonth() + 1).padStart(2, '0')}`;

  if (!endDate) {
    return `${startFormatted} - 현재`;
  }

  const end = new Date(endDate);
  const endFormatted = `${end.getFullYear()}.${String(end.getMonth() + 1).padStart(2, '0')}`;

  return `${startFormatted} - ${endFormatted}`;
}

/**
 * 숫자를 간략한 형태로 변환
 */
export function formatNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toString();
}

/**
 * 텍스트를 지정 길이로 자르기
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
}

/**
 * 조건부 클래스명 결합
 */
export function cn(...classes: (string | boolean | null | undefined)[]): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * 프로젝트 정렬
 */
export function sortProjects(
  projects: Project[],
  sortBy: 'latest' | 'oldest' | 'likes' | 'views' = 'latest',
): Project[] {
  const sorted = [...projects];

  switch (sortBy) {
    case 'latest':
      return sorted.sort(
        (a, b) =>
          new Date(b.startDate).getTime() - new Date(a.startDate).getTime(),
      );
    case 'oldest':
      return sorted.sort(
        (a, b) =>
          new Date(a.startDate).getTime() - new Date(b.startDate).getTime(),
      );
    case 'likes':
      return sorted.sort((a, b) => b.likes - a.likes);
    case 'views':
      return sorted.sort((a, b) => b.views - a.views);
    default:
      return sorted;
  }
}

/**
 * 프로젝트 필터링
 */
export function filterProjects(
  projects: Project[],
  filters: ProjectFilterOptions,
): Project[] {
  let filtered = [...projects];

  // 검색어 필터
  if (filters.search) {
    const searchLower = filters.search.toLowerCase();
    filtered = filtered.filter(
      (project) =>
        project.title.toLowerCase().includes(searchLower) ||
        project.description.toLowerCase().includes(searchLower),
    );
  }

  // 연도 필터
  if (filters.year) {
    filtered = filtered.filter((project) => {
      const year = new Date(project.startDate).getFullYear().toString();
      return year === filters.year;
    });
  }

  // 태그 필터
  if (filters.tags && filters.tags.length > 0) {
    filtered = filtered.filter((project) =>
      filters.tags!.some((tag) => project.tags.includes(tag)),
    );
  }

  // 프로그래밍 언어 필터
  if (filters.languages && filters.languages.length > 0) {
    filtered = filtered.filter((project) =>
      filters.languages!.some((lang) => project.languages.includes(lang)),
    );
  }

  // 상태 필터
  if (filters.status && filters.status !== 'all') {
    filtered = filtered.filter((project) => project.status === filters.status);
  }

  return filtered;
}

/**
 * 연도 목록 추출
 */
export function getYears(projects: Project[]): string[] {
  const years = projects.map((project) =>
    new Date(project.startDate).getFullYear().toString(),
  );
  return Array.from(new Set(years)).sort((a, b) => Number(b) - Number(a));
}

/**
 * 모든 태그 추출
 */
export function getAllTags(projects: Project[]): string[] {
  const tags = projects.flatMap((project) => project.tags);
  return Array.from(new Set(tags)).sort();
}

/**
 * 모든 프로그래밍 언어 추출
 */
export function getAllLanguages(projects: Project[]): string[] {
  const languages = projects.flatMap((project) => project.languages);
  return Array.from(new Set(languages)).sort();
}
