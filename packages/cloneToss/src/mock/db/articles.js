import { Faker, ko } from '@faker-js/faker';
import thumbnail_1 from '../../assets/image/thumbnail/thumbnail_1.png';
import thumbnail_2 from '../../assets/image/thumbnail/thumbnail_2.png';
import thumbnail_3 from '../../assets/image/thumbnail/thumbnail_3.png';
import thumbnail_4 from '../../assets/image/thumbnail/thumbnail_4.png';
import thumbnail_5 from '../../assets/image/thumbnail/thumbnail_5.png';
import thumbnail_6 from '../../assets/image/thumbnail/thumbnail_6.png';
import thumbnail_7 from '../../assets/image/thumbnail/thumbnail_7.png';
import thumbnail_8 from '../../assets/image/thumbnail/thumbnail_8.png';
import thumbnail_9 from '../../assets/image/thumbnail/thumbnail_9.png';
import thumbnail_10 from '../../assets/image/thumbnail/thumbnail_10.png';
import thumbnail_11 from '../../assets/image/thumbnail/thumbnail_11.png';
import thumbnail_12 from '../../assets/image/thumbnail/thumbnail_12.png';
import thumbnail_13 from '../../assets/image/thumbnail/thumbnail_13.png';
import thumbnail_14 from '../../assets/image/thumbnail/thumbnail_14.png';
import thumbnail_15 from '../../assets/image/thumbnail/thumbnail_15.png';
import thumbnail_16 from '../../assets/image/thumbnail/thumbnail_16.png';
import thumbnail_17 from '../../assets/image/thumbnail/thumbnail_17.png';
import thumbnail_18 from '../../assets/image/thumbnail/thumbnail_18.png';
import thumbnail_19 from '../../assets/image/thumbnail/thumbnail_19.png';
import thumbnail_20 from '../../assets/image/thumbnail/thumbnail_20.png';

const faker = new Faker({
  locale: [ko],
});

export const techArticles = [
  {
    id: faker.string.uuid(),
    title: '환경 고민없이 개발하기',
    thumbnail: thumbnail_1.src,
    content: '서버 사이드 랜더링 작동 방식과 Isomorphic에 대해 소개드려요.',
    createDate: '2023.9.1',
    detail: {
      content: faker.lorem.paragraphs(15),
    },
  },
  {
    id: faker.string.uuid(),
    title: '은행 최초 코어뱅킹 MSA 전환기 (feat. 지금 이자 받기)',
    thumbnail: thumbnail_2.src,
    content: `
    수십 년간 정체되어 있던 전통적인 은행 시스템의 모놀리식 소프트웨어 아키텍처를 MSA로 전환할 수 있을까요? 
토스뱅크의 ‘코어뱅킹 MSA 전환’ 사례를 통해 향후 은행 시스템이 나아가야 할 방향을 소개합니다.
    `,
    createDate: '2023.8.31',
    detail: {
      content: faker.lorem.paragraphs(5),
    },
  },
  {
    id: faker.string.uuid(),
    title: '레고처럼 조립하는 토스 앱',
    thumbnail: thumbnail_3.src,
    content: `
    수많은 서비스를 담고 있는 대규모 iOS 앱에 어울리는 아키텍처는 무엇일까요?
프로젝트 간의 의존성과 모듈 간의 결합도를 낮춰, 더 효율적인 서비스 개발, 관리를 이뤄낸 과정을 소개합니다. `,
    createDate: '2023.05.04',
    detail: {
      content: faker.lorem.paragraphs(5),
    },
  },
  {
    id: faker.string.uuid(),
    title: '놀러오세요! 프론트엔드 다이빙 클럽',
    thumbnail: thumbnail_4.src,
    content: `프론트엔드에 관한 깊은 이야기를 나눌 수 있는 오프라인 커뮤니티, 프론트엔드 다이빙 클럽을 소개합니다.`,
    createDate: '2023.05.04',
    detail: {
      content: faker.lorem.paragraphs(5),
    },
  },
  {
    id: faker.string.uuid(),
    title: 'Node.js url.parse() 취약점 컨트리뷰션',
    thumbnail: thumbnail_5.src,
    content: `토스 보안기술팀은 안전한 금융 서비스를 제공하기 위한 연구를 수행하고 있어요.
    많은 서비스에서 사용되고 있는 Node.js의 취약점을 분석하고 안전하게 패치될 수 있도록 기여했던 과정을 소개드려요.`,
    createDate: '2023.05.04',
    detail: {
      content: faker.lorem.paragraphs(5),
    },
  },
  {
    id: faker.string.uuid(),
    title: 'Spring Boot Actuator의 헬스체크 살펴보기',
    thumbnail: thumbnail_6.src,
    content: `서버의 상태를 알려주는 헬스 체크에 대해 알고 계시나요? 단순히 200 OK만 내려주겠거니 하고 별로 신경을 안 쓰고 계셨나요? 해당 포스트에서는 Spring Boot Actuaor가 제공해주는 헬스 체크는 어떤 식으로 서버의 상태를 점검하는지, 어떤 부분을 주의하며 사용해야하는지 알아봅니다.`,
    createDate: '2023.05.04',
    detail: {
      content: faker.lorem.paragraphs(5),
    },
  },
  {
    id: faker.string.uuid(),
    title: 'ESLint와 AST로 코드 퀄리티 높이기',
    thumbnail: thumbnail_7.src,
    content:
      'ESLint와 AST로 토스에서 코드 퀄리티를 높인 방법에 대해 소개드려요.',
    createDate: '2023.05.04',
    detail: {
      content: faker.lorem.paragraphs(5),
    },
  },
  {
    id: faker.string.uuid(),
    title: 'tosspayments-restdocs: 선언형 문서 작성 라이브러리',
    thumbnail: thumbnail_8.src,
    content:
      'REST Docs 를 최소한의 코드로 작성하면서 변화에도 더 유연하게 대처할 수 있는 tosspayments-restdocs 라이브러리와, 라이브러리에 녹인 기술들을 소개합니다.',
    createDate: '2023.05.04',
    detail: {
      content: faker.lorem.paragraphs(5),
    },
  },
  {
    id: faker.string.uuid(),
    title: '선언적인 코드 작성하기',
    thumbnail: thumbnail_9.src,
    content:
      '선언적인 코드, 토스 프론트엔드 챕터는 어떻게 생각을 하고 있을까요?',
    createDate: '2023.05.04',
    detail: {
      content: faker.lorem.paragraphs(5),
    },
  },
  {
    id: faker.string.uuid(),
    title: '똑똑하게 브라우저 Polyfill 관리하기',
    thumbnail: thumbnail_10.src,
    content:
      '현대적인 JavaScript를 쓰면서도 넓은 범위의 기기를 지원하기 위한 Polyfill을 어떻게 똑똑하게 설정할 수 있는지 소개합니다.',
    createDate: '2023.05.04',
    detail: {
      content: faker.lorem.paragraphs(5),
    },
  },
];

export const designArticles = [
  {
    id: faker.string.uuid(),
    title: '완성 없는 이야기, 가입 과정 개선',
    thumbnail: thumbnail_11.src,
    content: '가입 완료율을 높이기 위해 고민하고 시도했던 것들을 이야기 해요.',
    createDate: '2023.9.1',
    detail: {
      content: faker.lorem.paragraphs(15),
    },
  },
  {
    id: faker.string.uuid(),
    title: '인터랙션, 꼭 넣어야 해요?',
    thumbnail: thumbnail_12.src,
    content: `빠른 속도를 중요시하는 토스에서 어떻게 팀원들을 인터랙션에 공감하게 하고 슬릭한 제품을 만들어나갈 수 있었는지 소개할게요.`,
    createDate: '2023.8.31',
    detail: {
      content: faker.lorem.paragraphs(5),
    },
  },
  {
    id: faker.string.uuid(),
    title: '크고 복잡한 제품, 과감하게 갈아엎기',
    thumbnail: thumbnail_13.src,
    content: `디자이너들도 어떻게 하면 빠른 속도를 내며 전체적인 경험을 맞출 수 있을지 매 순간 고민하고 있어요. `,
    createDate: '2023.05.04',
    detail: {
      content: faker.lorem.paragraphs(5),
    },
  },
  {
    id: faker.string.uuid(),
    title: '30대 디자이너가 10대 전용 카드를 만든다면?',
    thumbnail: thumbnail_14.src,
    content: `'요즘 10대는 어떤 카드를 좋아할까?', '30대인 내가 10대 친구들이 좋아하는 디자인을 할 수 있을까?' 청소년 전용 카드를 만들며 맞닥뜨렸던 혹독한 진실과, 그 과정에서 얻은 인사이트를 공유하고 싶어요.`,
    createDate: '2023.05.04',
    detail: {
      content: faker.lorem.paragraphs(5),
    },
  },
  {
    id: faker.string.uuid(),
    title: '슬랙봇 디자인 101',
    thumbnail: thumbnail_15.src,
    content: `슬랙봇 디자인을 잘 하려면 무엇을 알아야하는지 알려드릴게요.`,
    createDate: '2023.05.04',
    detail: {
      content: faker.lorem.paragraphs(5),
    },
  },
  {
    id: faker.string.uuid(),
    title: '프로덕트 브랜딩, 어떻게 시작해야할까?',
    thumbnail: thumbnail_16.src,
    content: `처음 프로덕트 브랜딩 팀이 만들어졌을 때, 어떻게 팀의 정체성을 찾아나갔는지 공유할게요.`,
    createDate: '2023.05.04',
    detail: {
      content: faker.lorem.paragraphs(5),
    },
  },
  {
    id: faker.string.uuid(),
    title: '토스의 이모지 폰트, 토스페이스 제작기',
    thumbnail: thumbnail_17.src,
    content:
      '세계적인 IT 기업에서나 만드는 이모지 폰트를 어떻게 한국 금융 플랫폼 토스에서 만들게 됐을까? 토스의 이모지 폰트, 토스페이스 제작의 모든 것을 공개합니다.',
    createDate: '2023.05.04',
    detail: {
      content: faker.lorem.paragraphs(5),
    },
  },
  {
    id: faker.string.uuid(),
    title: '토스 최초의 Product Designer(Tools)의 일하는 방식',
    thumbnail: thumbnail_18.src,
    content:
      '토스팀에서 첫 Product Designer (Tools) 직무로 일하기 시작하면서 어떤 걸 배웠는지 알려드릴게요.',
    createDate: '2023.05.04',
    detail: {
      content: faker.lorem.paragraphs(5),
    },
  },
  {
    id: faker.string.uuid(),
    title: '첫 인터랙션 디자이너가 문제를 해결하는 법',
    thumbnail: thumbnail_19.src,
    content:
      '처음 입사했을 때 인터랙션 디자이너의 역할에 대해 막연하게 느꼈을 때가 있었어요. 하지만 제품의 문제를 하나씩 해결하면서 저의 역할을 정의해나갈 수 있었어요. 어떤 시행착오가 있었는지 공유해 드릴게요.',
    createDate: '2023.05.04',
    detail: {
      content: faker.lorem.paragraphs(5),
    },
  },
  {
    id: faker.string.uuid(),
    title: '리서치를 하고 싶어하는 사람을 리서치하세요',
    thumbnail: thumbnail_20.src,
    content:
      '입사하자마자 사용자가 아닌 동료들부터 인터뷰했던 이유. 토스의 첫 UX 리서처로 자리잡아 갔던 과정을 소개할게요.',
    createDate: '2023.05.04',
    detail: {
      content: faker.lorem.paragraphs(5),
    },
  },
];
