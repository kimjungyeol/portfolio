import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900">
      <div className="container-custom">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-white">
            Portfolio
          </Link>

          <nav className="hidden md:flex md:gap-6">
            <Link
              href="/"
              className="text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              프로젝트
            </Link>
            <Link
              href="/about"
              className="text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              소개
            </Link>
            <Link
              href="/contact"
              className="text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              연락하기
            </Link>
          </nav>

          {/* 모바일 메뉴 */}
          <div className="flex gap-4 md:hidden">
            <Link
              href="/"
              className="text-sm text-gray-600 dark:text-gray-300"
            >
              프로젝트
            </Link>
            <Link
              href="/about"
              className="text-sm text-gray-600 dark:text-gray-300"
            >
              소개
            </Link>
            <Link
              href="/contact"
              className="text-sm text-gray-600 dark:text-gray-300"
            >
              연락
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
