import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '프로필 - Portfolio',
  description: '개발 포트폴리오 프로필 페이지입니다.',
};

export default function AboutPage() {
  return (
    <div className="bg-gray-50 py-12 dark:bg-gray-900">
      <div className="container-custom">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
              프로필
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              안녕하세요. 언제나 최선을 다해 소통하고 개발을 진행합니다.
            </p>
          </div>

          {/* About Section */}
          <div className="card mb-8">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              Overview
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                저는 풀스택 개발로서 다양한 프로젝트 경험을 가지고 있습니다.
              </p>
              <p>
                사용자 중심의 서비스를 개발하는 것에 관심이 많으며,
                최신 기술 트렌드를 빠르게 습득하고 적용하는 것을 즐깁니다.
              </p>
              <p>
                엔터프라이즈 환경에서는 JavaScript, TypeScript, Angular, React, Vue를 활용한 Fontend 애플리케이션 개발과
                SpringBoot를 이용한 백엔드 개발을 진행하고,
                React, Next.js, Python을 활용한 개발도 진행하고 있습니다.
              </p>
              <p>
                또한 클라우드 인프라 구축 및 DevOps에도 관심이 많고, 안정적이고 확장 가능한 시스템을 구축하는 경험을 쌓아왔습니다.
                AWS, Cafe24 가상서버 호스팅 등의 서버 관리및 운영을 진행하였습니다.
              </p>
              <p>
                AI에도 관심이 많아 OpenAI 챗봇기술을 활용하여 개발을 진행하였습니다.
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
                  {['TypeScript', 'JavaScript', 'React', 'Angular', 'Vue'].map((skill) => (
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
                  {['Spring', 'SpringBoot', 'Oracle', 'MySql', 'PostgreSql'].map((skill) => (
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
                  {['AWS', 'Linux', 'Shell Script', 'GitHub', 'Jenkins'].map((skill) => (
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
                  {['Git', 'SVN', 'AI'].map((skill) => (
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
              경력 Summary
            </h2>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                  Fullstack 개발 / Application Architect (AA)
                </h3>
                <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">
                  KTNET · 2021.03 - 현재
                </p>
                <ul className="list-inside list-disc space-y-1 text-gray-700 dark:text-gray-300">
                  <li>파라과이 전자통관 시스템 및 필리핀 FTA 통합 플랫폼 설계 및 개발 (AA 역할)</li>
                  <li>Angular, SpringBoot, Thymeleaf 기반 Frontend/Backend 아키텍처 설계</li>
                  <li>공통 UI 컴포넌트 및 Backend 공통 서비스 모듈 개발</li>
                  <li>AI 머신러닝 모델 연동 및 AWS 기반 인프라 구축 및 운영</li>
                  <li>CI/CD 파이프라인 설계 및 자동화 구축</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                  Fullstack 개발 / Application Architect (AA)
                </h3>
                <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">
                  2018.08 - 2021.02
                </p>
                <ul className="list-inside list-disc space-y-1 text-gray-700 dark:text-gray-300">
                  <li>PSK SBMS 시스템, 키즈케어 시스템 설계 및 개발 (AA 역할)</li>
                  <li>현대커머셜 GoFunding, 헬로네이쳐 E-Commerce 플랫폼 개발</li>
                  <li>KOTRA JDK 버전 업그레이드 및 18개 시스템 환경 고도화</li>
                  <li>Spring Framework, Vue.js 기반 Frontend/Backend 분리 아키텍처 설계</li>
                  <li>공통 모듈 설계 및 구현을 통한 개발 효율성 향상</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                  Fullstack 개발 / 운영
                </h3>
                <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">
                  2016.08 - 2018.07
                </p>
                <ul className="list-inside list-disc space-y-1 text-gray-700 dark:text-gray-300">
                  <li>현대자동차 재무 시스템 운영 및 유지보수</li>
                  <li>Able Framework, Spring Framework 기반 시스템 개선 및 고도화</li>
                  <li>공통 서비스 모듈 설계 및 신규 개발</li>
                  <li>인프라 유지 관리 및 성능 최적화</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                  Fullstack 개발 / PL
                </h3>
                <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">
                  2012.07 - 2016.07
                </p>
                <ul className="list-inside list-disc space-y-1 text-gray-700 dark:text-gray-300">
                  <li>현대기아자동차 Global Learning System, KT Smart Learning Platform 설계 및 개발 (PL 역할)</li>
                  <li>삼성전자 모바일 교육시스템, LG전자 Windchill DRM 시스템 개발</li>
                  <li>기아 LTS 성능개선, SST 시스템 개발 및 현대모비스 MICMS 개발</li>
                  <li>현대자동차 Workshop Automation 시스템 개발 및 운영</li>
                  <li>Java, JSP 기반 엔터프라이즈 시스템 설계 및 구현</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                  Fullstack 개발 / 운영
                </h3>
                <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">
                  2006.06 - 2012.06
                </p>
                <ul className="list-inside list-disc space-y-1 text-gray-700 dark:text-gray-300">
                  <li>현대자동차 복경시설공사 관리 시스템, 글로벌 부품소재통합 관리시스템 개발</li>
                  <li>현대기아자동차 품질관리시스템, 통합인사관리시스템, 채용 시스템 개발</li>
                  <li>잉카인터넷 nProtect SecuLogMaster 보안 로그 통합 관리 솔루션 개발 (금융권)</li>
                  <li>Java, JSP, JavaScript 기반 SI 프로젝트 개발 및 운영</li>
                  <li>Oracle, IBM DB2, MySQL 등 다양한 데이터베이스 활용</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="card mb-8">
            <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
              자격사항
            </h2>
            <div className="border-l-4 border-blue-600 pl-4">
              <p className="text-gray-700 dark:text-gray-300">
                정보처리기사 (2011.09)
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                SCJP (2006.07)
              </p>
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
              {/* <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">
                2007
              </p> */}
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
