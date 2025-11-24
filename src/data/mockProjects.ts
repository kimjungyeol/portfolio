import { Project, Author } from '@/types';

const author: Author = {
  id: '1',
  name: '김정열',
  avatar: '/icon.png',
  bio: 'Fullstack 개발자',
  email: 'hatssarjy@gmail.com',
};

export const mockProjects: Project[] = [
  {
    id: '1',
    title: '현대자동차 복경시설공사 관리 시스템 - 공장시설, 자재 관리',
    description: '현대자동차 복경 공장시설 및 자재 관리 시스템 개발.',
    content: `
      <h2><프로젝트 개요></h2>
      <p>현대자동차 복경 공장의 시설 공사 관리 및 자재 관리를 위한 통합 시스템 개발 프로젝트입니다.
      공장 시설 관리와 자재 관리 기능을 구현하여 효율적인 공사 관리를 지원하였습니다.</p>

      <br>
      <h3><주요 역할></h3>
      <ul>
        <li>시설 공사 관리 시스템 개발</li>
        <li>자재 관리 기능 구현</li>
        <li>데이터베이스 설계 및 최적화</li>
      </ul>

      <br>
      <h3><기술적 도전></h3>
      <p>AIX환경에서 안정적인 시스템을 구축하였으며,
      IBM DB2 데이터베이스를 활용한 효율적인 데이터 관리를 수행하였습니다.</p>

      <br>
      <h3><성과></h3>
      <ul>
        <li>공장 시설 관리 효율성 향상</li>
        <li>자재 관리 프로세스 개선</li>
      </ul>
    `,
    category: 'SI - 개발',
    tags: ['개발', 'Fullstack', 'Java', '현대자동차'],
    languages: ['Java', 'JSP', 'JavaScript', 'SQL', 'IBM DB2'],
    imageUrl: '/project2.png',
    startDate: '2006-06-01',
    endDate: '2007-02-28',
    status: 'completed',
    url: '',
    githubUrl: '',
    author,
    views: 0,
    likes: 0,
    createdAt: '2025-12-31T00:00:00Z',
    updatedAt: '2025-12-31T00:00:00Z'
  },
  {
    id: '2',
    title: '글로벌 부품소재통합 관리시스템',
    description: '현대자동차 글로벌 부품 및 소재 통합 관리 시스템 개발.',
    content: `
      <h2><프로젝트 개요></h2>
      <p>현대자동차의 부품 및 소재를 통합 관리하기 위한 글로벌 부품소재통합 관리시스템 개발 프로젝트입니다.
      부품 및 소재의 효율적인 관리와 추적 기능을 제공하였습니다.</p>

      <br>
      <h3><주요 역할></h3>
      <ul>
        <li>부품소재 통합 관리 시스템 개발</li>
        <li>재고 관리 및 추적 기능 구현</li>
        <li>시스템 최적화</li>
      </ul>

      <br>
      <h3><기술적 도전></h3>
      <p>AIX환경에서 대용량 부품 데이터를 처리할 수 있는
      안정적인 시스템을 구축하였습니다.</p>

      <br>
      <h3><성과></h3>
      <ul>
        <li>부품소재 통합 관리 효율성 향상</li>
        <li>재고 추적 시스템 안정화</li>
      </ul>
    `,
    category: 'SI - 개발',
    tags: ['개발', 'Fullstack', 'Java', '현대자동차'],
    languages: ['Java', 'JSP', 'JavaScript', 'SQL', 'IBM DB2'],
    imageUrl: '/project2.png',
    startDate: '2007-02-01',
    endDate: '2007-04-30',
    status: 'completed',
    url: '',
    githubUrl: '',
    author,
    views: 0,
    likes: 0,
    createdAt: '2025-12-31T00:00:00Z',
    updatedAt: '2025-12-31T00:00:00Z'
  },
  {
    id: '3',
    title: '현대기아자동차 품질관리시스템',
    description: '현대기아자동차 품질 관리 시스템 개발 및 구축.',
    content: `
      <h2><프로젝트 개요></h2>
      <p>현대기아자동차의 품질 관리를 위한 통합 시스템 개발 프로젝트입니다.
      품질 검사, 불량 관리, 품질 분석 등 전반적인 품질 관리 기능을 구현하였습니다.</p>

      <br>
      <h3><주요 역할></h3>
      <ul>
        <li>품질 관리 시스템 설계 및 개발</li>
        <li>품질 검사 프로세스 자동화</li>
        <li>불량 관리 및 분석 기능 구현</li>
      </ul>

      <br>
      <h3><기술적 도전></h3>
      <p>AIX환경에서 대규모 품질 데이터를 처리하고 분석할 수 있는
      시스템을 구축하였습니다.</p>

      <br>
      <h3><성과></h3>
      <ul>
        <li>품질 관리 프로세스 자동화 및 효율성 향상</li>
        <li>불량률 감소 및 품질 개선</li>
      </ul>
    `,
    category: 'SI - 개발',
    tags: ['개발', 'Fullstack', 'Java', '현대기아자동차'],
    languages: ['Java', 'JSP', 'JavaScript', 'SQL', 'IBM DB2'],
    imageUrl: '/project2.png',
    startDate: '2007-04-01',
    endDate: '2008-11-30',
    status: 'completed',
    url: '',
    githubUrl: '',
    author,
    views: 0,
    likes: 0,
    createdAt: '2025-12-31T00:00:00Z',
    updatedAt: '2025-12-31T00:00:00Z'
  },
  {
    id: '4',
    title: 'nProtect SecuLogMaster',
    description: '금융권 보안 로그 통합 관리 솔루션 개발 - 국민은행, 산업은행, 부산은행, 대구은행, 금융결제원, 삼성화재.',
    content: `
      <h2><프로젝트 개요></h2>
      <p>금융권을 위한 보안 로그 통합 관리 솔루션 nProtect SecuLogMaster 개발 프로젝트입니다.
      국민은행, 산업은행, 부산은행, 대구은행, 금융결제원, 삼성화재 등 주요 금융기관에
      보안 로그 수집, 분석, 관리 기능을 제공하였습니다.</p>

      <br>
      <h3><주요 역할></h3>
      <ul>
        <li>보안 로그 수집 및 분석 시스템 개발</li>
        <li>실시간 모니터링 기능 구현</li>
        <li>금융권 보안 규정 준수 기능 개발</li>
        <li>다중 금융기관 커스터마이징</li>
      </ul>

      <br>
      <h3><기술적 도전></h3>
      <p>Unix 환경에서 대용량 보안 로그를 실시간으로 수집하고 분석하는
      고성능 시스템을 구축하였습니다. Oracle 데이터베이스를 활용한
      효율적인 로그 저장 및 검색 기능을 구현하였습니다.</p>

      <br>
      <h3><성과></h3>
      <ul>
        <li>주요 금융기관 보안 로그 통합 관리 구축</li>
        <li>실시간 보안 위협 탐지 및 대응 체계 확립</li>
        <li>금융권 보안 규정 준수 달성</li>
      </ul>
    `,
    category: 'SI - 운영 - 개발',
    tags: ['개발', '운영', 'Fullstack', 'Security', 'Java', '금융', '잉카인터넷'],
    languages: ['Java', 'JSP', 'JavaScript', 'SQL', 'Oracle'],
    imageUrl: '/project1.png',
    startDate: '2008-12-01',
    endDate: '2010-05-31',
    status: 'completed',
    url: '',
    githubUrl: '',
    author,
    views: 0,
    likes: 0,
    createdAt: '2025-12-31T00:00:00Z',
    updatedAt: '2025-12-31T00:00:00Z'
  },
  {
    id: '5',
    title: '현대기아자동차 통합인사관리시스템 추가 개발 - 인사/고과평가',
    description: '현대기아자동차 통합인사관리시스템 인사 및 고과평가 기능 추가 개발.',
    content: `
      <h2><프로젝트 개요></h2>
      <p>현대기아자동차의 통합인사관리시스템에 인사 관리 및 고과평가 기능을 추가 개발한 프로젝트입니다.
      인사 정보 관리와 성과 평가 프로세스를 자동화하였습니다.</p>

      <br>
      <h3><주요 역할></h3>
      <ul>
        <li>인사 관리 기능 개발</li>
        <li>고과평가 시스템 구현</li>
        <li>평가 프로세스 자동화</li>
      </ul>

      <br>
      <h3><기술적 도전></h3>
      <p>복잡한 인사 및 평가 프로세스를 시스템화하고,
      AIX 환경에서 안정적으로 운영될 수 있도록 구현하였습니다.</p>

      <br>
      <h3><성과></h3>
      <ul>
        <li>인사 관리 프로세스 효율성 향상</li>
        <li>고과평가 시스템 자동화 달성</li>
      </ul>
    `,
    category: 'SI - 개발',
    tags: ['개발', 'Fullstack', 'Java', '현대기아자동차'],
    languages: ['Java', 'JSP', 'JavaScript', 'SQL', 'Oracle'],
    imageUrl: '/project2.png',
    startDate: '2010-06-01',
    endDate: '2011-09-30',
    status: 'completed',
    url: '',
    githubUrl: '',
    author,
    views: 0,
    likes: 0,
    createdAt: '2025-12-31T00:00:00Z',
    updatedAt: '2025-12-31T00:00:00Z'
  },
  {
    id: '6',
    title: '현대기아자동차 통합인사관리시스템 - 정원/인사 평가',
    description: '현대기아자동차 통합인사관리시스템 정원 관리 및 인사 평가 기능 개발.',
    content: `
      <h2><프로젝트 개요></h2>
      <p>현대기아자동차의 통합인사관리시스템에 정원 관리 및 인사 평가 기능을 개발한 프로젝트입니다.
      조직 정원 계획 수립과 인사 평가 체계를 시스템화하였습니다.</p>

      <br>
      <h3><주요 역할></h3>
      <ul>
        <li>정원 관리 시스템 설계 및 개발</li>
        <li>인사 평가 프로세스 구현</li>
        <li>조직도 관리 기능 개발</li>
      </ul>

      <br>
      <h3><기술적 도전></h3>
      <p>복잡한 조직 구조와 정원 계획을 효율적으로 관리할 수 있는
      시스템을 설계하고 구현하였습니다.</p>

      <br>
      <h3><성과></h3>
      <ul>
        <li>정원 관리 효율성 향상</li>
        <li>인사 평가 체계 시스템화</li>
      </ul>
    `,
    category: 'SI - 개발',
    tags: ['개발', 'Fullstack', 'Java', '현대기아자동차'],
    languages: ['Java', 'JSP', 'JavaScript', 'SQL', 'Oracle'],
    imageUrl: '/project2.png',
    startDate: '2010-06-01',
    endDate: '2011-09-30',
    status: 'completed',
    url: '',
    githubUrl: '',
    author,
    views: 0,
    likes: 0,
    createdAt: '2025-12-31T00:00:00Z',
    updatedAt: '2025-12-31T00:00:00Z'
  },
  {
    id: '7',
    title: '현대기아자동차 채용 시스템',
    description: '현대기아자동차 채용 관리 시스템 개발.',
    content: `
      <h2><프로젝트 개요></h2>
      <p>현대기아자동차의 채용 프로세스를 관리하는 시스템 개발 프로젝트입니다.
      지원자 관리, 전형 관리, 합격자 선발 등 채용 전반의 프로세스를 자동화하였습니다.</p>

      <br>
      <h3><주요 역할></h3>
      <ul>
        <li>채용 관리 시스템 설계 및 개발</li>
        <li>지원자 정보 관리 기능 구현</li>
        <li>전형 관리 및 평가 시스템 개발</li>
      </ul>

      <br>
      <h3><기술적 도전></h3>
      <p>대량의 지원자 데이터를 효율적으로 처리하고,
      복잡한 채용 전형 프로세스를 시스템화하였습니다.</p>

      <br>
      <h3><성과></h3>
      <ul>
        <li>채용 프로세스 효율성 향상</li>
        <li>지원자 관리 체계 개선</li>
      </ul>
    `,
    category: 'SI - 개발',
    tags: ['개발', 'Fullstack', 'Java', '현대기아자동차'],
    languages: ['Java', 'JSP', 'JavaScript', 'SQL', 'Oracle'],
    imageUrl: '/project2.png',
    startDate: '2010-06-01',
    endDate: '2011-09-30',
    status: 'completed',
    url: '',
    githubUrl: '',
    author,
    views: 0,
    likes: 0,
    createdAt: '2025-12-31T00:00:00Z',
    updatedAt: '2025-12-31T00:00:00Z'
  },
  {
    id: '8',
    title: '현대기아자동차 품질관리시스템 구축',
    description: '현대기아자동차 품질관리시스템 추가 구축 및 기능 고도화.',
    content: `
      <h2><프로젝트 개요></h2>
      <p>현대기아자동차의 품질관리시스템을 추가로 구축하고 기능을 고도화한 프로젝트입니다.
      기존 시스템의 확장과 새로운 품질 관리 기능을 추가하였습니다.</p>

      <br>
      <h3><주요 역할></h3>
      <ul>
        <li>품질관리 시스템 추가 개발</li>
        <li>품질 분석 기능 고도화</li>
        <li>시스템 통합 및 최적화</li>
      </ul>

      <br>
      <h3><기술적 도전></h3>
      <p>기존 시스템과의 통합을 고려하여 안정적인 확장을 수행하였으며,
      새로운 품질 관리 기능을 효율적으로 구현하였습니다.</p>

      <br>
      <h3><성과></h3>
      <ul>
        <li>품질관리 시스템 기능 확장</li>
        <li>품질 분석 정확도 향상</li>
      </ul>
    `,
    category: 'SI - 개발',
    tags: ['개발', 'Fullstack', 'Java', '현대기아자동차'],
    languages: ['Java', 'JSP', 'JavaScript', 'SQL', 'Oracle'],
    imageUrl: '/project2.png',
    startDate: '2011-10-01',
    endDate: '2012-02-29',
    status: 'completed',
    url: '',
    githubUrl: '',
    author,
    views: 0,
    likes: 0,
    createdAt: '2025-12-31T00:00:00Z',
    updatedAt: '2025-12-31T00:00:00Z'
  },
  {
    id: '9',
    title: '현대기아자동차 품질관리시스템 운영 지원',
    description: '현대기아자동차 품질관리시스템 운영 지원 및 유지보수.',
    content: `
      <h2><프로젝트 개요></h2>
      <p>현대기아자동차의 품질관리시스템 운영을 지원하고 유지보수를 수행한 프로젝트입니다.
      안정적인 시스템 운영과 사용자 지원을 담당하였습니다.</p>

      <br>
      <h3><주요 역할></h3>
      <ul>
        <li>시스템 운영 지원</li>
        <li>장애 대응 및 유지보수</li>
        <li>사용자 교육 및 지원</li>
      </ul>

      <br>
      <h3><기술적 도전></h3>
      <p>실시간 운영 중인 시스템의 안정성을 유지하면서
      지속적인 개선과 사용자 지원을 수행하였습니다.</p>

      <br>
      <h3><성과></h3>
      <ul>
        <li>안정적인 시스템 운영 달성</li>
        <li>사용자 만족도 향상</li>
      </ul>
    `,
    category: 'SM - 운영 - 개발',
    tags: ['운영', '개발', 'Fullstack', 'Java', '현대기아자동차'],
    languages: ['Java', 'JSP', 'JavaScript', 'SQL', 'Oracle'],
    imageUrl: '/project1.png',
    startDate: '2012-02-01',
    endDate: '2012-06-30',
    status: 'completed',
    url: '',
    githubUrl: '',
    author,
    views: 0,
    likes: 0,
    createdAt: '2025-12-31T00:00:00Z',
    updatedAt: '2025-12-31T00:00:00Z'
  },
  {
    id: '10',
    title: '현대기아자동차 Global Learning System',
    description: '현대/기아자동차 글로벌 학습 시스템 구축.',
    content: `
      <h2><프로젝트 개요></h2>
      <p>현대/기아자동차의 글로벌 학습 관리 시스템을 구축한 프로젝트입니다.
      설계 및 개발 업무를 담당하여 학습 플랫폼의 핵심 기능을 구현하였습니다.</p>

      <br>
      <h3><주요 역할></h3>
      <ul>
        <li>시스템 설계 및 개발</li>
        <li>학습 관리 기능 구현</li>
        <li>데이터베이스 설계 및 최적화</li>
      </ul>

      <br>
      <h3><기술적 도전></h3>
      <p>AIX 환경에서 안정적인 학습 시스템을 구축하였으며,
      Oracle 데이터베이스를 활용한 효율적인 학습 데이터 관리를 수행하였습니다.</p>

      <br>
      <h3><성과></h3>
      <ul>
        <li>글로벌 학습 시스템 성공적 구축</li>
        <li>안정적인 학습 플랫폼 운영 환경 확보</li>
      </ul>
    `,
    category: 'SI - 개발',
    tags: ['개발', 'Fullstack', 'LMS', 'Java', '현대기아자동차'],
    languages: ['Java', 'JSP', 'JavaScript', 'SQL', 'Oracle'],
    imageUrl: '/project2.png',
    startDate: '2012-07-01',
    endDate: '2012-11-30',
    status: 'completed',
    url: '',
    githubUrl: '',
    author,
    views: 0,
    likes: 0,
    createdAt: '2025-12-31T00:00:00Z',
    updatedAt: '2025-12-31T00:00:00Z'
  },
  {
    id: '11',
    title: 'KT Smart Learning Platform 개발',
    description: 'KT 스마트 러닝 플랫폼 설계 및 개발.',
    content: `
      <h2><프로젝트 개요></h2>
      <p>KT의 스마트 러닝 플랫폼을 설계하고 개발한 프로젝트입니다.
      PL 역할을 수행하며 플랫폼 전반의 설계 및 개발을 주도하였습니다.</p>

      <br>
      <h3><주요 역할></h3>
      <ul>
        <li>PL 역할 수행 및 프로젝트 관리</li>
        <li>시스템 설계 및 아키텍처 구축</li>
        <li>핵심 기능 개발 및 최적화</li>
      </ul>

      <br>
      <h3><기술적 도전></h3>
      <p>Linux 환경에서 확장 가능한 스마트 러닝 플랫폼을 설계하였으며,
      MySQL을 활용한 효율적인 데이터 관리 시스템을 구현하였습니다.</p>

      <br>
      <h3><성과></h3>
      <ul>
        <li>스마트 러닝 플랫폼 성공적 구축</li>
        <li>효율적인 프로젝트 관리 및 팀 협업 달성</li>
      </ul>
    `,
    category: 'SI - 개발',
    tags: ['개발', 'Fullstack', 'LMS', 'Java', 'KT'],
    languages: ['Java', 'JSP', 'JavaScript', 'SQL', 'MySQL'],
    imageUrl: '/project2.png',
    startDate: '2012-12-01',
    endDate: '2013-11-30',
    status: 'completed',
    url: '',
    githubUrl: '',
    author,
    views: 0,
    likes: 0,
    createdAt: '2025-12-31T00:00:00Z',
    updatedAt: '2025-12-31T00:00:00Z'
  },
  {
    id: '12',
    title: '삼성전자 모바일 교육시스템 구축',
    description: '삼성전자 모바일 교육 시스템 설계 및 구축.',
    content: `
      <h2><프로젝트 개요></h2>
      <p>삼성전자의 모바일 교육 시스템을 설계하고 구축한 프로젝트입니다.
      PL 역할을 수행하며 모바일 환경에 최적화된 교육 시스템을 개발하였습니다.</p>

      <br>
      <h3><주요 역할></h3>
      <ul>
        <li>모바일 교육 시스템 설계 및 개발</li>
        <li>시스템 최적화 및 성능 개선</li>
      </ul>

      <br>
      <h3><기술적 도전></h3>
      <p>모바일 환경에 최적화된 교육 시스템을 구축하였으며,
      Tuxedo 미들웨어를 활용한 안정적인 트랜잭션 처리를 구현하였습니다.</p>

      <br>
      <h3><성과></h3>
      <ul>
        <li>모바일 교육 시스템 성공적 구축</li>
        <li>안정적인 시스템 운영 환경 확보</li>
      </ul>
    `,
    category: 'SI - 개발',
    tags: ['개발', 'Fullstack', 'Mobile', 'Java', '삼성전자'],
    languages: ['Java', 'JSP', 'JavaScript', 'SQL', 'Oracle'],
    imageUrl: '/project2.png',
    startDate: '2013-11-01',
    endDate: '2014-03-31',
    status: 'completed',
    url: '',
    githubUrl: '',
    author,
    views: 0,
    likes: 0,
    createdAt: '2025-12-31T00:00:00Z',
    updatedAt: '2025-12-31T00:00:00Z'
  },
  {
    id: '13',
    title: 'LG 전자 Windchill DRM 개선 프로젝트',
    description: 'LG 전자 Windchill DRM 시스템 개선 및 고도화.',
    content: `
      <h2><프로젝트 개요></h2>
      <p>LG 전자의 Windchill DRM(Digital Rights Management) 시스템을 개선하고 고도화한 프로젝트입니다.
      설계 및 개발 업무를 담당하여 시스템의 안정성과 성능을 향상시켰습니다.</p>

      <br>
      <h3><주요 역할></h3>
      <ul>
        <li>DRM 시스템 설계 및 개발</li>
        <li>Windchill Framework 기반 시스템 개선</li>
        <li>성능 최적화 및 안정화</li>
      </ul>

      <br>
      <h3><기술적 도전></h3>
      <p>iPlanet Rapidiant FTC와 Windchill Framework를 활용하여
      안정적이고 확장 가능한 DRM 시스템을 구축하였습니다.</p>

      <br>
      <h3><성과></h3>
      <ul>
        <li>DRM 시스템 성능 및 안정성 향상</li>
        <li>Windchill Framework 기반 시스템 최적화</li>
      </ul>
    `,
    category: 'SI - 개발',
    tags: ['개발', 'Fullstack', 'DRM', 'Windchill', 'Java', 'LG전자'],
    languages: ['Java', 'JSP', 'JavaScript', 'SQL', 'Oracle'],
    imageUrl: '/project2.png',
    startDate: '2014-05-01',
    endDate: '2014-09-30',
    status: 'completed',
    url: '',
    githubUrl: '',
    author,
    views: 0,
    likes: 0,
    createdAt: '2025-12-31T00:00:00Z',
    updatedAt: '2025-12-31T00:00:00Z'
  },
  {
    id: '14',
    title: 'LG 전자 CPC 시스템 운영',
    description: 'LG 전자 CPC 시스템 운영 및 유지보수.',
    content: `
      <h2><프로젝트 개요></h2>
      <p>LG 전자의 CPC 시스템 운영 및 유지보수를 담당한 프로젝트입니다.
      안정적인 시스템 운영과 지속적인 개선 업무를 수행하였습니다.</p>

      <br>
      <h3><주요 역할></h3>
      <ul>
        <li>CPC 시스템 운영 및 모니터링</li>
        <li>유지보수 및 개선 개발</li>
        <li>Windchill Framework 기반 시스템 관리</li>
      </ul>

      <br>
      <h3><기술적 도전></h3>
      <p>iPlanet Rapidiant와 Windchill Framework 기반의 복잡한 시스템을
      안정적으로 운영하고 지속적으로 개선하였습니다.</p>

      <br>
      <h3><성과></h3>
      <ul>
        <li>안정적인 시스템 운영 달성</li>
        <li>효율적인 유지보수 체계 확립</li>
      </ul>
    `,
    category: 'SM - 개발',
    tags: ['운영', '개발', 'Fullstack', 'CPC', 'Windchill', 'Java', 'LG전자'],
    languages: ['Java', 'JSP', 'JavaScript', 'SQL', 'Oracle'],
    imageUrl: '/project1.png',
    startDate: '2014-09-01',
    endDate: '2015-01-31',
    status: 'completed',
    url: '',
    githubUrl: '',
    author,
    views: 0,
    likes: 0,
    createdAt: '2025-12-31T00:00:00Z',
    updatedAt: '2025-12-31T00:00:00Z'
  },
  {
    id: '15',
    title: '해외 LTS - 현대자동차 해외 경비 표준 관리 시스템 2차 개발',
    description: '현대자동차 해외 경비 표준 관리 시스템 고도화.',
    content: `
      <h2><프로젝트 개요></h2>
      <p>현대자동차의 해외 경비 표준 관리 시스템(LTS) 2차 개발 프로젝트입니다.
      설계 및 개발 업무를 담당하여 시스템의 기능을 확장하고 개선하였습니다.</p>

      <br>
      <h3><주요 역할></h3>
      <ul>
        <li>시스템 설계 및 개발</li>
        <li>경비 관리 기능 고도화</li>
        <li>다중 플랫폼 지원 구현</li>
      </ul>

      <br>
      <h3><기술적 도전></h3>
      <p>AIX와 Windows 환경을 모두 지원하는 시스템을 구축하였으며,
      안정적인 경비 관리 기능을 제공하였습니다.</p>

      <br>
      <h3><성과></h3>
      <ul>
        <li>해외 경비 관리 시스템 성공적 고도화</li>
        <li>다중 플랫폼 지원으로 시스템 확장성 향상</li>
      </ul>
    `,
    category: 'SI - 개발',
    tags: ['개발', 'Fullstack', 'LTS', 'Java', '현대자동차'],
    languages: ['Java', 'JSP', 'JavaScript', 'SQL', 'Oracle'],
    imageUrl: '/project2.png',
    startDate: '2015-01-01',
    endDate: '2015-06-30',
    status: 'completed',
    url: '',
    githubUrl: '',
    author,
    views: 0,
    likes: 0,
    createdAt: '2025-12-31T00:00:00Z',
    updatedAt: '2025-12-31T00:00:00Z'
  },
  {
    id: '16',
    title: '기아 LTS 성능개선 / 기아 SST 개발',
    description: '기아자동차 LTS 성능 개선 및 SST 시스템 개발.',
    content: `
      <h2><프로젝트 개요></h2>
      <p>기아자동차의 LTS 성능 개선과
      SST 개발을 동시에 수행한 프로젝트입니다.
      PL 역할을 수행하며 두 시스템의 설계 및 개발을 주도하였습니다.</p>

      <br>
      <h3><주요 역할></h3>
      <ul>
        <li>LTS 시스템 성능 개선</li>
        <li>SST 시스템 설계 및 개발</li>
      </ul>

      <br>
      <h3><기술적 도전></h3>
      <p>기존 LTS 시스템의 성능 병목을 분석하고 개선하였으며,
      새로운 SST 시스템을 설계하여 독수공급 프로세스를 통합 관리할 수 있도록 구축하였습니다.</p>

      <br>
      <h3><성과></h3>
      <ul>
        <li>LTS 시스템 성능 대폭 향상</li>
        <li>SST 시스템 성공적 구축 및 운영</li>
        <li>통합 관리 프로세스 효율성 증대</li>
      </ul>
    `,
    category: 'SI - 개발',
    tags: ['개발', 'Fullstack', 'LTS', 'SST', 'Java', '기아자동차'],
    languages: ['Java', 'JSP', 'JavaScript', 'SQL', 'Oracle'],
    imageUrl: '/project2.png',
    startDate: '2015-08-01',
    endDate: '2015-12-31',
    status: 'completed',
    url: '',
    githubUrl: '',
    author,
    views: 0,
    likes: 0,
    createdAt: '2025-12-31T00:00:00Z',
    updatedAt: '2025-12-31T00:00:00Z'
  },
  {
    id: '17',
    title: '모비스 원가관리시스템 MICMS',
    description: '현대모비스 원가관리 시스템 개발.',
    content: `
      <h2><프로젝트 개요></h2>
      <p>현대모비스의 원가관리 시스템 개발 프로젝트입니다.
      원가 계산 및 관리 기능을 구현하여 효율적인 원가 관리를 지원하였습니다.</p>

      <br>
      <h3><주요 역할></h3>
      <ul>
        <li>원가관리 시스템 개발</li>
        <li>원가 계산 로직 구현</li>
        <li>IBM DB2 데이터베이스 연동</li>
      </ul>

      <br>
      <h3><기술적 도전></h3>
      <p>Unix 환경에서 IBM DB2 데이터베이스를 활용한
      복잡한 원가 계산 시스템을 구축하였습니다.</p>

      <br>
      <h3><성과></h3>
      <ul>
        <li>원가관리 시스템 성공적 개발</li>
        <li>정확한 원가 계산 기능 구현</li>
      </ul>
    `,
    category: 'SI - 개발',
    tags: ['개발', 'Fullstack', 'ERP', 'Java', '현대모비스'],
    languages: ['Java', 'JSP', 'JavaScript', 'SQL', 'IBM DB2'],
    imageUrl: '/project2.png',
    startDate: '2016-01-01',
    endDate: '2016-02-29',
    status: 'completed',
    url: '',
    githubUrl: '',
    author,
    views: 0,
    likes: 0,
    createdAt: '2025-12-31T00:00:00Z',
    updatedAt: '2025-12-31T00:00:00Z'
  },
  {
    id: '18',
    title: '현대 Workshop Automation 분석 관리 시스템',
    description: '현대자동차 Workshop 자동화 분석 관리 시스템 개발 및 운영.',
    content: `
      <h2><프로젝트 개요></h2>
      <p>현대자동차의 Workshop Automation 분석 관리 시스템 개발 및 운영 프로젝트입니다.
      개발과 운영 업무를 동시에 수행하여 안정적인 시스템 운영을 지원하였습니다.</p>

      <br>
      <h3><주요 역할></h3>
      <ul>
        <li>Workshop 자동화 시스템 개발</li>
        <li>분석 관리 기능 구현</li>
        <li>시스템 운영 및 유지보수</li>
      </ul>

      <br>
      <h3><기술적 도전></h3>
      <p>Tibero 데이터베이스를 활용한 분석 시스템을 구축하였으며,
      AIX와 Windows 환경을 모두 지원하는 시스템을 개발하였습니다.</p>

      <br>
      <h3><성과></h3>
      <ul>
        <li>Workshop 자동화 시스템 성공적 구축</li>
        <li>안정적인 운영 체계 확립</li>
        <li>분석 기능을 통한 업무 효율성 향상</li>
      </ul>
    `,
    category: 'SI - 운영 - 개발',
    tags: ['개발', '운영', 'Fullstack', 'Java', '현대자동차'],
    languages: ['Java', 'JSP', 'JavaScript', 'SQL', 'TiberoDB'],
    imageUrl: '/project1.png',
    startDate: '2016-03-01',
    endDate: '2016-08-31',
    status: 'completed',
    url: '',
    githubUrl: '',
    author,
    views: 0,
    likes: 0,
    createdAt: '2025-12-31T00:00:00Z',
    updatedAt: '2025-12-31T00:00:00Z'
  },
  {
    id: '19',
    title: '현대자동차 재무 시스템 운영 및 유지보수',
    description: '현대자동차 재무 시스템의 안정적 운영과 유지보수, 성능 개선 및 기능 고도화 수행.',
    content: `
      <h2><프로젝트 개요></h2>
      <p>현대자동차 재무 시스템의 운영 및 유지보수 업무를 담당하며,
      고객 요구사항 충족, 변경점 관리, 품질 관리 등 시스템 안정성을 확보하였습니다.
      기존 시스템은 Able Framework와 JSP를 기반으로 구성되어 있으며, 안정적인 서비스 제공을 위해 고도화를 수행하였습니다.</p>

      <br>
      <h3><주요 역할></h3>
      <ul>
        <li>프로젝트 환경 개선 및 인프라 유지 관리</li>
        <li>공통 서비스 및 기능 모듈 고도화 및 신규 개발</li>
        <li>시스템 구조 분석 및 성능 최적화</li>
        <li>운영 환경 배포 및 안정화 지원</li>
      </ul>

      <br>
      <h3><기술적 도전></h3>
      <p>Able Framework와 JSP 기반 시스템을 안정적이고 확장 가능하도록 설계·개선하였습니다.
      공통 기능이 필요한 영역에 대해 기존 소스를 분석하고, 재사용 가능한 공통 모듈을 신규 설계 및 구현하였습니다.</p>

      <br>
      <h3><성과></h3>
      <ul>
        <li>안정적인 운영 환경 구축 및 문제 없는 서비스 지원</li>
        <li>로직 최적화 및 코드 품질 개선으로 시스템 성능과 안정성 향상</li>
        <li>효율적인 운영 환경과 유지보수 체계 확보</li>
      </ul>
    `,
    category: '운영 - 개발',
    tags: ['운영', '개발', 'Fullstack', 'Spring', 'JSP', 'Able Framework', '재무 시스템', '인프라', 'Linux', '현대자동차'],
    languages: ['Java', 'Spring Framework', 'JavaScript', 'JSP', 'HTML', 'CSS', 'TiberoDB'],
    imageUrl: '/project1.png',
    startDate: '2016-08-01',
    endDate: '2018-03-30',
    status: 'completed',
    url: '',
    githubUrl: '',
    author,
    views: 0,
    likes: 0,
    createdAt: '2025-12-31T00:00:00Z',
    updatedAt: '2025-12-31T00:00:00Z'
  },
  {
    id: '20',
    title: 'SBMS 시스템 구축',
    description: '반도체 장비 제조 기업 PSK를 위한 Specification & BOM Management System 개발 및 고도화 수행.',
    content: `
      <h2><프로젝트 개요></h2>
      <p>PSK의 사양 및 부품 명세를 관리하기 위한 SBMS(Specification & BOM Management System) 구축 프로젝트입니다.
      본 시스템은 고객 요구사항 충족, 변경점 관리, 품질 관리 등 핵심 기능을 수행하며,
      SAP 및 PLM 등 다른 엔터프라이즈 시스템과 통합되어 사용됩니다.</p>

      <br>
      <h3><주요 역할></h3>
      <ul>
        <li>프로젝트 환경 설계 및 인프라 구축 관리</li>
        <li>공통 서비스 및 기능 모듈 개발</li>
        <li>시스템 구조 분석 및 성능 최적화</li>
        <li>운영 환경 적용 및 안정화 지원</li>
      </ul>

      <br>
      <h3><기술적 도전></h3>
      <p>Spring Framework와 JSP를 기반으로, 안정적이고 확장 가능한 아키텍처를 설계하고 구현하였습니다.
      기존 소스 분석을 통해 공통 기능이 필요한 영역을 식별하고, 재사용 가능한 공통 모듈을 신규 설계 및 구현하였습니다.</p>

      <br>
      <h3><성과></h3>
      <ul>
        <li>안정적인 환경 구성과 체계적인 테스트 수행으로 시스템 신뢰성 확보</li>
        <li>로직 최적화 및 코드 품질 개선을 통해 서비스 성능 향상 달성</li>
        <li>운영 환경 안정화 및 효율적인 유지보수 체계 구축</li>
      </ul>
    `,
    category: 'SI - 개발',
    tags: ['개발', 'Fullstack', 'Spring', 'JSP', 'BOM', 'PLM', 'SAP'],
    languages: ['Java', 'Spring Framework', 'JavaScript', 'JSP', 'HTML', 'CSS', 'Oracle'],
    imageUrl: '/project2.png',
    startDate: '2018-08-01',
    endDate: '2019-04-30',
    status: 'completed',
    url: '',
    githubUrl: '',
    author,
    views: 0,
    likes: 0,
    createdAt: '2025-12-31T00:00:00Z',
    updatedAt: '2025-12-31T00:00:00Z'
  },
  {
    id: '21',
    title: '자녀안심통학서비스(키즈케어) 시스템 구축',
    description: '자녀의 통학 안전을 위해 위치 정보 및 이동 경로를 실시간으로 확인할 수 있는 키즈케어 시스템 개발.',
    content: `
      <h2><프로젝트 개요></h2>
      <p>자녀의 통학 안전을 위해 차량 위치와 이동 경로를 보호자에게 실시간으로 제공하는
      알림 기반 키즈케어 시스템을 구축하였습니다.
      학부모는 모바일 앱을 통해 자녀의 통학 현황을 확인할 수 있으며,
      교통 및 위치 정보를 실시간으로 수신받을 수 있습니다.</p>

      <br>
      <h3><주요 역할></h3>
      <ul>
        <li>프로젝트 환경 설계 및 인프라 구축 관리</li>
        <li>Frontend 공통 UI 컴포넌트 개발</li>
        <li>Backend 공통 서비스 및 기능 모듈 개발</li>
        <li>시스템 구조 개선 및 성능 최적화</li>
      </ul>

      <br>
      <h3><기술적 도전></h3>
      <p>Frontend와 Backend를 완전히 분리한 구조로 설계하여 독립적인 서비스 운영이 가능하도록 구현하였습니다.
      Vue.js를 활용해 빠르고 안정적인 SPA(Single Page Application)을 개발하였으며,
      실시간 데이터 처리와 사용자 경험(UX)을 개선하였습니다.</p>
      <p>공통 기능이 필요한 영역에 대해 기존 소스를 분석하고, 재사용 가능한 공통 모듈을 신규로 설계 및 구현하였습니다.</p>

      <br>
      <h3><성과></h3>
      <ul>
        <li>Frontend와 Backend를 분리한 독립형 서비스 구조로 개발하여 유지보수 효율성 향상</li>
        <li>Vue 기반 SPA 구현을 통한 응답 속도 및 사용자 경험 개선</li>
        <li>로직 최적화와 코드 품질 개선으로 서비스 안정성 및 성능 향상 달성</li>
      </ul>
    `,
    category: 'SI - AA - 개발',
    tags: ['AA', '개발', 'Frontend', 'Backend', 'Spring', 'Vue', 'SPA', '키즈케어', '인프라', 'Linux'],
    languages: ['Java', 'Spring Framework', 'JavaScript', 'Vue.js', 'HTML', 'CSS', 'MariaDB'],
    imageUrl: '/project2.png',
    startDate: '2019-05-01',
    endDate: '2019-07-31',
    status: 'completed',
    url: '',
    githubUrl: '',
    author,
    views: 0,
    likes: 0,
    createdAt: '2025-12-31T00:00:00Z',
    updatedAt: '2025-12-31T00:00:00Z'
  },
  {
    id: '22',
    title: '현대커머셜 GoFunding 플랫폼 개발',
    description: '중소기업과 금융기관을 연결하는 현대커머셜 GoFunding 플랫폼 개발 및 서비스 고도화 수행.',
    content: `
      <h2><프로젝트 개요></h2>
      <p>현대커머셜의 GoFunding 플랫폼은 자금 조달을 원하는 중소기업과 금융기관을 연결하는 온라인 금융 플랫폼입니다.
      본 프로젝트에서는 중소기업의 신용등급 및 재무 건전성을 기반으로 한 필터링(검증) 기능을 포함하여,
      플랫폼 전반의 신규 기능 개발과 성능 개선을 수행하였습니다.</p>

      <br>
      <h3><주요 역할></h3>
      <ul>
        <li>신규 기능 설계 및 개발</li>
        <li>비효율적으로 구현된 소스의 리팩토링 및 구조 개선</li>
        <li>운영 환경 배포 자동화 및 서비스 안정화 지원</li>
      </ul>

      <br>
      <h3><기술적 도전></h3>
      <p>기획 의도와 상이하게 구현된 기능 및 화면 구성을 분석하고, 개선안을 제시하여 개발팀 및 기획팀과의 협업을 통해 반영하였습니다.</p>
      <p>공통 기능이 필요한 영역에 대해 기존 소스를 분석하고, 재사용 가능한 신규 공통 모듈을 설계 및 구현하였습니다.</p>

      <br>
      <h3><성과></h3>
      <ul>
        <li>기존 코드 구조를 개선하고 공통 기능을 신규 구현하여 개발 효율성 및 유지보수성 향상</li>
        <li>로직 최적화 및 품질 개선을 통해 서비스 안정성과 성능 향상 달성</li>
      </ul>
    `,
    category: 'SI - 개발',
    tags: ['개발', 'Frontend', 'Backend', 'Spring', '현대커머셜', '플랫폼'],
    languages: ['Java', 'Spring Framework', 'JSP', 'JavaScript', 'Oracle', 'HTML', 'CSS'],
    imageUrl: '/project2.png',
    startDate: '2019-08-01',
    endDate: '2020-01-31',
    status: 'completed',
    url: '',
    githubUrl: '',
    author,
    views: 0,
    likes: 0,
    createdAt: '2025-12-31T00:00:00Z',
    updatedAt: '2025-12-31T00:00:00Z'
  },
  {
    id: '23',
    title: '헬로네이쳐 E-Commerce 플랫폼(마켓플레이스) 개발 프로젝트',
    description: '헬로네이쳐 마켓플레이스 쇼핑몰 신규 개발 및 서비스 고도화 수행.',
    content: `
      <h2><프로젝트 개요></h2>
      <p>헬로네이쳐의 마켓플레이스 쇼핑몰 신규 개발 프로젝트를 수행하였습니다.
      주요 기능 구현과 더불어 기존 소스 구조를 개선하여 서비스 안정성과 유지보수 효율을 향상시켰습니다.</p>

      <br>
      <h3><주요 역할></h3>
      <ul>
        <li>쇼핑몰 핵심 기능(상품 관리, 주문, 결제 등) 개발</li>
        <li>비효율적으로 구현된 소스 리팩토링 및 구조 개선</li>
        <li>운영 환경 배포 및 서비스 안정화 지원</li>
      </ul>

      <br>
      <h3><기술적 도전></h3>
      <p>기획 의도와 맞지 않는 기능 및 화면 구성을 파악하여 개선안을 제시하고,
      기획자 및 개발팀과 협의하여 반영하였습니다.
      약 10여 명의 기획자와 20여 명의 개발자 간의 협업을 통해
      대규모 커뮤니케이션 환경에서도 효율적인 개발 프로세스를 유지하였습니다.</p>

      <br>
      <h3><성과></h3>
      <ul>
        <li>대규모 협업 환경에서의 원활한 커뮤니케이션 체계 확립</li>
        <li>로직 최적화 및 코드 품질 개선을 통한 서비스 성능 향상</li>
        <li>기획 의도 반영을 통한 사용자 경험(UX) 개선 및 완성도 향상</li>
      </ul>
    `,
    category: 'SI - 개발',
    tags: ['개발', 'Frontend', 'Backend', 'Spring', '헬로네이쳐', 'E-Commerce'],
    languages: ['Java', 'Spring Framework', 'JSP', 'JavaScript', 'Oracle', 'HTML', 'CSS'],
    imageUrl: '/project2.png',
    startDate: '2020-03-01',
    endDate: '2020-10-31',
    status: 'completed',
    url: 'https://hellonature.co.kr/',
    githubUrl: '',
    author,
    views: 0,
    likes: 0,
    createdAt: '2025-12-31T00:00:00Z',
    updatedAt: '2025-12-31T00:00:00Z'
  },
  {
    id: '24',
    title: 'KOTRA 시스템 JDK버전 업그레이드 및 환경 고도화',
    description: 'KOTRA 내 18개 시스템의 JDK 버전 업그레이드 및 환경 고도화 수행.',
    content: `
      <h2><프로젝트 개요></h2>
      <p>KOTRA의 다양한 내부 시스템을 대상으로 JDK 버전 업그레이드와 환경 고도화를 진행하였습니다.
      버전 변경에 따른 코드 수정 및 안정성 테스트를 수행하여 시스템의 호환성과 성능을 개선하였습니다.</p>

      <br>
      <h3><주요 역할></h3>
      <ul>
        <li>기존 시스템 구조 분석 및 개선 방안 도출</li>
        <li>프로젝트 환경 및 아키텍처 분석</li>
        <li>JDK 버전 업그레이드 및 호환성 테스트 수행</li>
        <li>운영 환경 적용 및 안정화 지원</li>
      </ul>

      <br>
      <h3><기술적 도전></h3>
      <p>낮은 버전의 JDK에서 상위 버전으로 전환하는 과정에서 발생하는 호환성 문제를 안정적으로 해결하였습니다.
      또한 테스트 및 운영 환경에서 발생하는 다양한 오류를 추적·분석하여 시스템 안정성을 확보하였습니다.</p>

      <br>
      <h3><성과></h3>
      <ul>
        <li>다양한 시스템 구조에 대한 개선 방안 도출 및 적용</li>
        <li>효율적인 로직 개선을 통한 서비스 성능 향상</li>
        <li>운영 환경의 문제점 진단 및 안정화 달성</li>
      </ul>
    `,
    category: 'Framework - AA - 개발',
    tags: ['AA', '개발', 'JDK', '프레임워크 전환', 'Spring', '전자정부프레임워크', 'KOTRA'],
    languages: ['Java', 'Spring Framework', 'JSP', 'JavaScript', 'Oracle', 'HTML'],
    imageUrl: '/project1.png',
    startDate: '2020-11-01',
    endDate: '2020-12-31',
    status: 'completed',
    url: '',
    githubUrl: '',
    author,
    views: 0,
    likes: 0,
    createdAt: '2025-12-31T00:00:00Z',
    updatedAt: '2025-12-31T00:00:00Z'
  },
  {
    id: '25',
    title: '파라과이 전자통관 시스템 개발',
    description: '화물관리, 위험관리 전자통관 관리 시스템.',
    content: `
      <h2><프로젝트 개요></h2>
      <p>파라과이의 전자통관 시스템을 처음부터 끝까지 설계하고 개발한 프로젝트입니다.
      화물관리와 위험관리 파트로 나뉘어진 전자통관 시스템 입니다.</p>

      <br>
      <h3><주요 역할></h3>
      <ul>
        <li>AA 역할 수행</li>
        <li>프로젝트 환경 설계 및 구축 관리<</li>
        <li>Frontend 공통 UI 컴포넌트 개발</li>
        <li>Backend 공통 서비스 및 기능 모듈 개발</li>
      </ul>

      <br>
      <h3><기술적 도전></h3>
      <p>Angular/cli@11.2.14 버전을 활용하여 새로운 기술을 적용하였습니다.
      또한 안정적이고 빠른 개발을 위해 다양한 공통 UI 컴포넌트를 개발하였습니다.</p>

      <br>
      <h3><성과></h3>
      <ul>
        <li>Frontend와 Backend를 분리한 독립형 아키텍처로 서비스 개발.</li>
        <li>다양한 요구사항에 신속하고 정확하게 대응하여 개발 효율 향상</li>
        <li>공통 모듈화 및 코드 표준화를 통해 작업 효율성 극대화</li>
        <li>협업 프로세스 개선으로 커뮤니케이션 및 업무 연계 효율 증대</li>
      </ul>
    `,
    category: 'SI - AA - 개발',
    tags: ['AA', '개발', 'Fullstack', '전자통관', 'Springboot', 'KTNET'],
    languages: ['TypeScript', 'Springboot', 'Angular', 'Oracle', 'HTML5'],
    imageUrl: '/project2.png',
    startDate: '2021-03-02',
    endDate: '2023-08-31',
    status: 'completed',
    url: 'https://mboe.aduana.gov.py/intcarga',
    githubUrl: '',
    author,
    views: 0,
    likes: 0,
    createdAt: '2025-12-31T00:00:00Z',
    updatedAt: '2025-12-31T00:00:00Z'
  },
  {
    id: '26',
    title: '필리핀 FTA 통합 플랫폼 개발',
    description: '원산지 관리 및 PER 관리 기능을 제공하는 플랫폼.',
    content: `
      <h2><프로젝트 개요></h2>
      <p>필리핀 FTA 통합 플랫폼을 처음부터 끝까지 설계하고 개발한 프로젝트입니다.
      사용자 경험을 최우선으로 하여 안정적인 경험을 제공합니다.</p>

      <br>
      <h3><주요 기능></h3>
      <ul>
        <li>원산지 관리</li>
        <li>PER 관리</li>
        <li>리포트 관리</li>
        <li>HSCODE 머신러닝 연계</li>
        <li>API 관리</li>
        <li>다국어 관리</li>
      </ul>

      <br>
      <h3><주요 역할></h3>
      <ul>
        <li>AA 역할 수행</li>
        <li>프로젝트 환경 설계 및 구축 관리<</li>
        <li>Frontend 공통 UI 컴포넌트 개발</li>
        <li>Backend 공통 서비스 및 기능 모듈 개발</li>
        <li>AI 머신러닝 모델과의 연동을 통한 서비스 고도화</li>
        <li>AWS 기반 서버 아키텍처 설계 및 운영 관리</li>
        <li>CI/CD 파이프라인 설계 및 자동화 구축</li>
      </ul>

      <br>
      <h3><기술적 도전></h3>
      <p>높은 트래픽 환경에서도 안정적인 성능을 유지하기 위해 효율적인 캐싱 전략을 적용하였습니다.
      또한 개발 생산성과 유지보수성을 향상시키기 위해 다양한 공통 컴포넌트를 설계 및 구현하였습니다.</p>
      <p>머신러닝 및 AI 모델 연동을 위한 환경 설정과 시스템 구성을 적용하여 지능형 서비스 확장을 시도하였습니다.</p>

      <br>
      <h3><성과></h3>
      <ul>
        <li>다양한 요구사항에 신속하고 정확하게 대응하여 개발 효율 향상</li>
        <li>공통 모듈화 및 코드 표준화를 통해 작업 효율성 극대화</li>
        <li>협업 프로세스 개선으로 커뮤니케이션 및 업무 연계 효율 증대</li>
      </ul>
    `,
    category: 'SI - AA - 개발',
    tags: ['AA', '개발', 'Fullstack', 'FTA', 'AI', 'Springboot', '인프라', 'Linux', 'KTNET'],
    languages: ['JavaScript', 'SpringbBoot', 'Thymeleaf', 'MariaDb', 'HTML5'],
    imageUrl: '/project2.png',
    startDate: '2024-01-02',
    endDate: '2025-12-31',
    status: 'ongoing',
    url: 'https://ftaorigin.dti.gov.ph/',
    githubUrl: '',
    author,
    views: 0,
    likes: 0,
    createdAt: '2025-12-31T00:00:00Z',
    updatedAt: '2025-12-31T00:00:00Z'
  },
  {
    id: '27',
    title: '토너먼트 관리 시스템 개발',
    description: '토너먼트를 생성하고 대회를 운영할 수 있는 시스템. (개인 프로젝트)',
    content: `
      <h2><프로젝트 개요></h2>
      <p>토너먼트 관리 시스템을 처음부터 끝까지 분석/설계하고 개발한 프로젝트입니다.
      사용자 경험을 최우선으로 하여 심플하고 쉽게 사용할 수 있도록 기능을 제공합니다.</p>

      <br>
      <h3><주요 기능></h3>
      <ul>
        <li>토너먼트 관리</li>
        <li>대회 신청</li>
        <li>선수 관리</li>
        <li>부문/체급/서포터 관리</li>
        <li>대회 결과 관리</li>
        <li>상장 관리</li>
        <li>AI 챗봇</li>
      </ul>

      <br>
      <h3><주요 역할></h3>
      <ul>
        <li>분석/설계/개발 수행</li>
        <li>프로젝트 환경 설계 및 구축 관리</li>
        <li>Frontend 공통 UI 컴포넌트 개발</li>
        <li>Backend 공통 서비스 및 기능 모듈 개발</li>
        <li>AI 챗봇 개발</li>
        <li>가상서버호스팅 기반 아키텍처 설계 및 운영 관리</li>
      </ul>

      <br>
      <h3><기술적 도전></h3>
      <p>토너먼트별 룰을 분석하고 운영 할 수 있도록 개발을 진행하였습니다.</p>
      <p>지속적인 대회 관리와 선수를 관리 할 수 있도록 안정적인 구조를 적용 했습니다.</p>
      <p>AI 챗봇을 적용하여 사용자가 궁금한 부분을 알 수 있도록 적용 하였습니다.</p>

      <br>
      <h3><성과></h3>
      <ul>
        <li>React와 SpringBoot를 활용하여 개발 효율 향상</li>
        <li>공통 모듈화 및 코드 표준화를 통해 작업 효율성 극대화</li>
        <li>AI 챗봇 적용으로 커뮤니케이션 및 사용 효율 증대</li>
      </ul>
    `,
    category: '분석 - 설계 - 개발 (개인)',
    tags: ['분석', '설계','개발', 'Fullstack', 'AI', 'Springboot', 'ReactJs', 'Linux', 'Nginx', 'Tomcat', '개인'],
    languages: ['JavaScript', 'SpringbBoot', 'ReactJs', 'MariaDb', 'HTML5'],
    imageUrl: '/project1.png',
    startDate: '2025-08-15',
    endDate: '2025-11-20',
    status: 'completed',
    url: 'http://tmnt.co.kr/',
    githubUrl: '',
    author,
    views: 0,
    likes: 0,
    createdAt: '2025-12-31T00:00:00Z',
    updatedAt: '2025-12-31T00:00:00Z'
  },
];

/**
 * ID로 프로젝트 찾기
 */
export function getProjectById(id: string): Project | undefined {
  return mockProjects.find((project) => project.id === id);
}

/**
 * 카테고리별 프로젝트 찾기
 */
export function getProjectsByCategory(category: string): Project[] {
  return mockProjects.filter((project) => project.category === category);
}

/**
 * 태그별 프로젝트 찾기
 */
export function getProjectsByTag(tag: string): Project[] {
  return mockProjects.filter((project) => project.tags.includes(tag));
}

/**
 * 언어별 프로젝트 찾기
 */
export function getProjectsByLanguage(language: string): Project[] {
  return mockProjects.filter((project) => project.languages.includes(language));
}

/**
 * 진행중인 프로젝트 가져오기
 */
export function getOngoingProjects(): Project[] {
  return mockProjects.filter((project) => project.status === 'ongoing');
}

/**
 * 완료된 프로젝트 가져오기
 */
export function getCompletedProjects(): Project[] {
  return mockProjects.filter((project) => project.status === 'completed');
}
