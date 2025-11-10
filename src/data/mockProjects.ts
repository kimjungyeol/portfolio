import { Project, Author } from '@/types';

const author: Author = {
  id: '1',
  name: 'Portfolio Owner',
  avatar: 'https://via.placeholder.com/150',
  bio: '풀스택 개발자',
  email: 'hatssarjy@gmail.com',
};

export const mockProjects: Project[] = [
  {
    id: '1',
    title: 'E-커머스 플랫폼 개발',
    description:
      '대규모 온라인 쇼핑몰 플랫폼을 Next.js와 TypeScript로 개발했습니다. 상품 관리, 주문 처리, 결제 시스템을 구현했습니다.',
    content: `
      <h2>프로젝트 개요</h2>
      <p>대규모 E-커머스 플랫폼을 처음부터 끝까지 설계하고 개발한 프로젝트입니다.
      사용자 경험을 최우선으로 하여 빠르고 안정적인 쇼핑 경험을 제공합니다.</p>

      <h3>주요 기능</h3>
      <ul>
        <li>상품 검색 및 필터링</li>
        <li>장바구니 및 위시리스트</li>
        <li>실시간 재고 관리</li>
        <li>다양한 결제 수단 지원</li>
        <li>주문 추적 시스템</li>
        <li>관리자 대시보드</li>
      </ul>

      <h3>기술적 도전</h3>
      <p>높은 트래픽을 처리하기 위해 서버 사이드 렌더링과 캐싱 전략을 적용했습니다.
      또한 결제 시스템의 보안을 강화하기 위해 PCI DSS 규정을 준수했습니다.</p>

      <h3>성과</h3>
      <ul>
        <li>월간 활성 사용자 50,000명 달성</li>
        <li>페이지 로딩 속도 40% 개선</li>
        <li>결제 전환율 25% 증가</li>
      </ul>
    `,
    category: '웹 개발',
    tags: ['풀스택', '커머스', '결제시스템'],
    languages: ['TypeScript', 'Next.js', 'Node.js', 'PostgreSQL'],
    imageUrl: 'https://images.unsplash.com/photo-1557821552-17105176677c',
    startDate: '2024-01-01',
    endDate: '2024-06-30',
    status: 'completed',
    url: 'https://example-ecommerce.com',
    githubUrl: 'https://github.com/example/ecommerce',
    author,
    views: 1250,
    likes: 89,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-06-30T00:00:00Z',
  },
  {
    id: '2',
    title: 'AI 기반 챗봇 서비스',
    description:
      'OpenAI GPT를 활용한 고객 지원 챗봇을 개발했습니다. 자연어 처리를 통해 고객 문의에 자동으로 응답합니다.',
    content: `
      <h2>프로젝트 개요</h2>
      <p>최신 AI 기술을 활용하여 24/7 고객 지원이 가능한 지능형 챗봇을 개발했습니다.</p>

      <h3>핵심 기술</h3>
      <ul>
        <li>OpenAI GPT-4 API 통합</li>
        <li>자연어 처리 (NLP)</li>
        <li>실시간 웹소켓 통신</li>
        <li>대화 히스토리 관리</li>
      </ul>

      <h3>기능</h3>
      <ul>
        <li>다국어 지원 (한국어, 영어, 일본어)</li>
        <li>문맥 인식 대화</li>
        <li>FAQ 자동 학습</li>
        <li>관리자 대시보드</li>
        <li>대화 분석 및 리포팅</li>
      </ul>

      <h3>성과</h3>
      <ul>
        <li>고객 문의 응답 시간 80% 단축</li>
        <li>고객 만족도 95% 달성</li>
        <li>운영 비용 60% 절감</li>
      </ul>
    `,
    category: 'AI/ML',
    tags: ['AI', 'ChatBot', 'NLP'],
    languages: ['Python', 'React', 'FastAPI', 'WebSocket'],
    imageUrl: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a',
    startDate: '2024-03-15',
    endDate: '2024-08-31',
    status: 'completed',
    url: 'https://example-chatbot.com',
    author,
    views: 890,
    likes: 67,
    createdAt: '2024-03-15T00:00:00Z',
    updatedAt: '2024-08-31T00:00:00Z',
  },
  {
    id: '3',
    title: '실시간 협업 도구',
    description:
      'WebRTC와 WebSocket을 활용한 실시간 협업 플랫폼입니다. 화상 회의, 화면 공유, 공동 편집 기능을 제공합니다.',
    content: `
      <h2>프로젝트 개요</h2>
      <p>원격 근무 환경에 최적화된 실시간 협업 도구를 개발했습니다.</p>

      <h3>주요 기능</h3>
      <ul>
        <li>HD 화상 회의 (최대 50명)</li>
        <li>화면 공유 및 녹화</li>
        <li>실시간 문서 공동 편집</li>
        <li>화이트보드</li>
        <li>채팅 및 파일 공유</li>
      </ul>

      <h3>기술 스택</h3>
      <ul>
        <li>WebRTC for P2P 통신</li>
        <li>WebSocket for 실시간 데이터 동기화</li>
        <li>CRDT 알고리즘 for 충돌 방지</li>
        <li>Redis for 세션 관리</li>
      </ul>

      <h3>성과</h3>
      <ul>
        <li>일일 활성 사용자 5,000명</li>
        <li>평균 회의 시간 45분</li>
        <li>네트워크 지연 시간 50ms 이하</li>
      </ul>
    `,
    category: '웹 개발',
    tags: ['실시간', '협업', 'WebRTC'],
    languages: ['TypeScript', 'React', 'Node.js', 'WebSocket'],
    imageUrl: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf',
    startDate: '2023-09-01',
    endDate: '2024-02-29',
    status: 'completed',
    url: 'https://example-collab.com',
    githubUrl: 'https://github.com/example/collab-tool',
    author,
    views: 1456,
    likes: 112,
    createdAt: '2023-09-01T00:00:00Z',
    updatedAt: '2024-02-29T00:00:00Z',
  },
  {
    id: '4',
    title: '모바일 헬스케어 앱',
    description:
      'React Native로 개발한 건강 관리 모바일 애플리케이션입니다. 운동 추적, 식단 관리, 건강 데이터 분석 기능을 제공합니다.',
    content: `
      <h2>프로젝트 개요</h2>
      <p>사용자의 건강한 라이프스타일을 돕는 올인원 헬스케어 앱을 개발했습니다.</p>

      <h3>주요 기능</h3>
      <ul>
        <li>운동 자동 추적 (GPS 연동)</li>
        <li>칼로리 계산기</li>
        <li>식단 일지</li>
        <li>건강 데이터 시각화</li>
        <li>개인 맞춤 운동 추천</li>
        <li>건강 목표 설정 및 달성 알림</li>
      </ul>

      <h3>기술적 특징</h3>
      <ul>
        <li>오프라인 모드 지원</li>
        <li>웨어러블 디바이스 연동</li>
        <li>ML 기반 건강 데이터 분석</li>
        <li>푸시 알림</li>
      </ul>

      <h3>성과</h3>
      <ul>
        <li>앱스토어 4.8점 평점</li>
        <li>다운로드 100,000+</li>
        <li>일일 활성 사용자 유지율 75%</li>
      </ul>
    `,
    category: '모바일',
    tags: ['헬스케어', '피트니스', 'ML'],
    languages: ['React Native', 'TypeScript', 'Python', 'TensorFlow'],
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d',
    startDate: '2023-06-01',
    endDate: '2023-12-31',
    status: 'completed',
    author,
    views: 2340,
    likes: 178,
    createdAt: '2023-06-01T00:00:00Z',
    updatedAt: '2023-12-31T00:00:00Z',
  },
  {
    id: '5',
    title: '블록체인 기반 NFT 마켓플레이스',
    description:
      'Ethereum 블록체인을 활용한 NFT 거래 플랫폼입니다. 스마트 컨트랙트를 통해 안전한 거래를 보장합니다.',
    content: `
      <h2>프로젝트 개요</h2>
      <p>디지털 아트와 수집품을 거래할 수 있는 탈중앙화 마켓플레이스를 구축했습니다.</p>

      <h3>주요 기능</h3>
      <ul>
        <li>NFT 발행 (Minting)</li>
        <li>경매 및 즉시 구매</li>
        <li>로열티 자동 분배</li>
        <li>메타마스크 연동</li>
        <li>거래 히스토리 추적</li>
      </ul>

      <h3>기술 스택</h3>
      <ul>
        <li>Solidity (Smart Contract)</li>
        <li>Ethereum Blockchain</li>
        <li>IPFS for 분산 저장</li>
        <li>Web3.js</li>
        <li>Hardhat for 테스트</li>
      </ul>

      <h3>성과</h3>
      <ul>
        <li>총 거래액 1,000 ETH 달성</li>
        <li>등록된 NFT 5,000개 이상</li>
        <li>스마트 컨트랙트 감사 통과</li>
      </ul>
    `,
    category: '블록체인',
    tags: ['NFT', 'Ethereum', 'Web3'],
    languages: ['Solidity', 'TypeScript', 'React', 'Node.js'],
    imageUrl: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0',
    startDate: '2023-03-01',
    endDate: '2023-08-31',
    status: 'completed',
    url: 'https://example-nft.com',
    githubUrl: 'https://github.com/example/nft-marketplace',
    author,
    views: 3210,
    likes: 256,
    createdAt: '2023-03-01T00:00:00Z',
    updatedAt: '2023-08-31T00:00:00Z',
  },
  {
    id: '6',
    title: '데이터 분석 대시보드',
    description:
      '비즈니스 인사이트를 제공하는 실시간 데이터 분석 대시보드입니다. 다양한 차트와 리포트를 제공합니다.',
    content: `
      <h2>프로젝트 개요</h2>
      <p>기업의 의사결정을 돕는 종합 데이터 분석 플랫폼을 개발했습니다.</p>

      <h3>주요 기능</h3>
      <ul>
        <li>실시간 데이터 시각화</li>
        <li>커스텀 리포트 생성</li>
        <li>데이터 필터링 및 드릴다운</li>
        <li>자동화된 알림</li>
        <li>PDF/Excel 내보내기</li>
        <li>권한 관리 시스템</li>
      </ul>

      <h3>기술 스택</h3>
      <ul>
        <li>D3.js for 데이터 시각화</li>
        <li>Apache Kafka for 실시간 스트리밍</li>
        <li>ClickHouse for 빠른 쿼리</li>
        <li>Redis for 캐싱</li>
      </ul>

      <h3>성과</h3>
      <ul>
        <li>쿼리 속도 10배 향상</li>
        <li>데이터 처리량 100만 건/초</li>
        <li>사용자 만족도 90%</li>
      </ul>
    `,
    category: '데이터',
    tags: ['데이터분석', '대시보드', 'BI'],
    languages: ['Python', 'React', 'Apache Kafka', 'ClickHouse'],
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
    startDate: '2024-07-01',
    status: 'ongoing',
    author,
    views: 780,
    likes: 45,
    createdAt: '2024-07-01T00:00:00Z',
    updatedAt: '2024-11-10T00:00:00Z',
  },
  {
    id: '7',
    title: '클라우드 인프라 자동화',
    description:
      'Terraform과 Kubernetes를 활용한 클라우드 인프라 자동화 프로젝트입니다. CI/CD 파이프라인을 구축했습니다.',
    content: `
      <h2>프로젝트 개요</h2>
      <p>마이크로서비스 아키텍처를 위한 완전 자동화된 클라우드 인프라를 구축했습니다.</p>

      <h3>주요 작업</h3>
      <ul>
        <li>Infrastructure as Code (IaC)</li>
        <li>Kubernetes 클러스터 구성</li>
        <li>CI/CD 파이프라인 구축</li>
        <li>모니터링 및 로깅 시스템</li>
        <li>오토스케일링 설정</li>
        <li>보안 강화 (RBAC, Network Policy)</li>
      </ul>

      <h3>기술 스택</h3>
      <ul>
        <li>Terraform</li>
        <li>Kubernetes (EKS)</li>
        <li>Docker</li>
        <li>GitHub Actions</li>
        <li>Prometheus & Grafana</li>
        <li>ELK Stack</li>
      </ul>

      <h3>성과</h3>
      <ul>
        <li>배포 시간 90% 단축</li>
        <li>시스템 가용성 99.9%</li>
        <li>인프라 비용 40% 절감</li>
      </ul>
    `,
    category: 'DevOps',
    tags: ['DevOps', 'Kubernetes', 'AWS'],
    languages: ['Terraform', 'Python', 'Bash', 'YAML'],
    imageUrl: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9',
    startDate: '2024-09-01',
    status: 'ongoing',
    githubUrl: 'https://github.com/example/infra-automation',
    author,
    views: 520,
    likes: 34,
    createdAt: '2024-09-01T00:00:00Z',
    updatedAt: '2024-11-10T00:00:00Z',
  },
  {
    id: '8',
    title: '소셜 미디어 분석 도구',
    description:
      '트위터, 인스타그램 등 소셜 미디어 데이터를 수집하고 분석하는 도구입니다. 감성 분석과 트렌드 예측 기능을 제공합니다.',
    content: `
      <h2>프로젝트 개요</h2>
      <p>브랜드와 마케터를 위한 소셜 미디어 인사이트 플랫폼을 개발했습니다.</p>

      <h3>주요 기능</h3>
      <ul>
        <li>다중 플랫폼 데이터 수집</li>
        <li>감성 분석 (긍정/부정/중립)</li>
        <li>인플루언서 발굴</li>
        <li>해시태그 트렌드 분석</li>
        <li>경쟁사 모니터링</li>
        <li>자동 리포트 생성</li>
      </ul>

      <h3>기술 스택</h3>
      <ul>
        <li>Python (Scrapy, BeautifulSoup)</li>
        <li>NLP (BERT, Transformers)</li>
        <li>Apache Airflow for 스케줄링</li>
        <li>MongoDB for 데이터 저장</li>
        <li>Elasticsearch for 검색</li>
      </ul>

      <h3>성과</h3>
      <ul>
        <li>일일 처리 데이터 1백만 건</li>
        <li>감성 분석 정확도 92%</li>
        <li>사용 기업 50+ 개</li>
      </ul>
    `,
    category: '데이터',
    tags: ['소셜미디어', 'NLP', '빅데이터'],
    languages: ['Python', 'MongoDB', 'React', 'Elasticsearch'],
    imageUrl: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113',
    startDate: '2023-01-15',
    endDate: '2023-07-31',
    status: 'completed',
    author,
    views: 1890,
    likes: 134,
    createdAt: '2023-01-15T00:00:00Z',
    updatedAt: '2023-07-31T00:00:00Z',
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
