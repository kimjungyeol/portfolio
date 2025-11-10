import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '소개 - Portfolio',
  description: '개발자 포트폴리오 소개 페이지입니다.',
};

export default function AboutPage() {
  return (
    <div className="bg-gray-50 py-12 dark:bg-gray-900">
      <div className="container-custom">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
              소개
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              안녕하세요. 개발자 포트폴리오입니다.
            </p>
          </div>

          {/* About Section */}
          <div className="card mb-8">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              개발자 소개
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                저는 풀스택 개발자로서 다양한 프로젝트 경험을 가지고 있습니다.
                사용자 중심의 서비스를 개발하는 것에 관심이 많으며,
                최신 기술 트렌드를 빠르게 습득하고 적용하는 것을 즐깁니다.
              </p>
              <p>
                주로 TypeScript, React, Next.js를 활용한 웹 애플리케이션 개발과
                Node.js, Python을 이용한 백엔드 개발을 진행하고 있습니다.
              </p>
              <p>
                또한 클라우드 인프라 구축 및 DevOps에도 관심이 많아
                AWS, Docker, Kubernetes 등의 기술을 활용하여
                안정적이고 확장 가능한 시스템을 구축하는 경험을 쌓아왔습니다.
              </p>
            </div>
          </div>

          {/* Skills Section */}
          <div className="card mb-8">
            <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
              기술 스택
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {/* Frontend */}
              <div>
                <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
                  Frontend
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'React Native'].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Backend */}
              <div>
                <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
                  Backend
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['Node.js', 'Python', 'FastAPI', 'PostgreSQL', 'MongoDB'].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-800 dark:bg-green-900 dark:text-green-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* DevOps */}
              <div>
                <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
                  DevOps
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['Docker', 'Kubernetes', 'AWS', 'Terraform', 'GitHub Actions'].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-purple-100 px-3 py-1 text-sm text-purple-800 dark:bg-purple-900 dark:text-purple-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Other */}
              <div>
                <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
                  Other
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['Git', 'Figma', 'Jira', 'Agile', 'TDD'].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <div className="card mb-8">
            <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
              경력
            </h2>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                  풀스택 개발자
                </h3>
                <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">
                  2023.01 - 현재
                </p>
                <ul className="list-inside list-disc space-y-1 text-gray-700 dark:text-gray-300">
                  <li>웹 애플리케이션 개발 및 유지보수</li>
                  <li>RESTful API 설계 및 구현</li>
                  <li>데이터베이스 설계 및 최적화</li>
                  <li>클라우드 인프라 구축 및 관리</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                  프론트엔드 개발자
                </h3>
                <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">
                  2021.06 - 2022.12
                </p>
                <ul className="list-inside list-disc space-y-1 text-gray-700 dark:text-gray-300">
                  <li>React 기반 SPA 개발</li>
                  <li>반응형 웹 디자인 구현</li>
                  <li>성능 최적화 및 SEO 개선</li>
                  <li>UI/UX 개선 작업</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="card">
            <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
              학력
            </h2>
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                컴퓨터공학 학사
              </h3>
              <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">
                2017.03 - 2021.02
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                소프트웨어 개발, 알고리즘, 데이터베이스, 네트워크 등을 학습
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
