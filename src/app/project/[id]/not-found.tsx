import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-bold text-gray-900 dark:text-white">
          404
        </h1>
        <h2 className="mb-4 text-2xl font-semibold text-gray-700 dark:text-gray-300">
          프로젝트를 찾을 수 없습니다
        </h2>
        <p className="mb-8 text-gray-600 dark:text-gray-400">
          요청하신 프로젝트가 존재하지 않거나 삭제되었습니다.
        </p>
        <Link
          href="/"
          className="btn-primary inline-block"
        >
          프로젝트 목록으로 돌아가기
        </Link>
      </div>
    </div>
  );
}
