import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* 회사 정보 */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
              Portfolio
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              개발자 포트폴리오 웹사이트입니다.
              <br />
              다양한 프로젝트와 경험을 공유합니다.
            </p>
          </div>

          {/* 링크 */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
              링크
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                  프로젝트
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                  프로필
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                  연락하기
                </Link>
              </li>
            </ul>
          </div>

          {/* 연락처 */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
              연락처
            </h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>이메일: hatssarjy@gmail.com</li>
              <li>
                <a
                  href="https://github.com/kimjungyeol"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-gray-900 dark:hover:text-white"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-8 text-center dark:border-gray-700">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            &copy; {currentYear} KimJungYeol. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
