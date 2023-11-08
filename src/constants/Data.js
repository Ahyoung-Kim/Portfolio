const makeData = ({
  id,
  name, // 프로젝트 이름
  startDate,
  endDate,
  type, // 프로젝트 구분
  role, // 역할 []
  stacks, // 기술스택 { frontend: [], backend: [], database: []}
  images, // 프로젝트 이미지
  comment,
  introduction, // 소개
  description, // 프로젝트 설명
  background, // 프로젝트 개발 배경
  functions, // 주요 기능
  github, // 깃허브 링크
  link, // 배포 링크
  // 시연 영상 링크
  video,
  mobile = false,
}) => {
  return {
    id,
    name, // 프로젝트 이름
    startDate,
    endDate,
    type, // 프로젝트 구분
    role, // 역할 []
    stacks, // 기술스택 { frontend: [], backend: [], database: []}
    images, // 프로젝트 이미지
    comment,
    introduction, // 소개
    description, // 프로젝트 설명
    background, // 프로젝트 개발 배경
    functions, // 주요 기능
    github, // 깃허브 링크
    link, // 배포 링크
    // 시연 영상 링크
    video,
    mobile,
  };
};

export default {
  CodeTattoo: makeData({
    id: "CodeTattoo",
    name: "코드타투 Code Tattoo",
    startDate: "2022-06",
    endDate: "2022-11",
    type: "4인 팀 프로젝트",
    role: ["프론트엔드 개발", "Figma 디자인"],
    stacks: {
      frontend: ["React"],
      backend: ["node.js", "Spring Framework"],
      database: ["MongoDB"],
    },
    images: [
      // 이미지
    ],
    comment: "2022 공개 SW 개발자 대회 출품작(학생부문 우수작)",
    introduction:
      "블록체인을 이용하여 문신 시술 관련 정보를 관리하고, 문신 시술의 안전성과 투명성을 보장하기 위해 제작한 웹 사이트입니다.",
    description:
      "본 프로젝트는 타투 시술 데이터를 민감정보를 취급하여 블록체인에 안전하게 저장하고, 이를 부작용의 원인 추적, 추가 시술 등에서 활용할 수 있게 함으로써 안전하고 검증된 타투 시술을 목적으로 합니다. 회원가입 대상은 타투이스트와 고객으로 분류됩니다. 타투이스트는 본인의 타투 도안과 작업물을 게시물로 업로드하며, 고객은 이 게시물을 조회할 수 있습니다. 고객이 타투이스트에게 원하는 날짜와 시간에 예약 신청을 하게 되면, 타투이스트와 고객은 채팅을 통해 예약 일정을 조율하게 됩니다. 시술이 시작되면 타투이스트는 시술에 쓰인 잉크, 바늘 깊이 등의 정보를 입력합니다. 시술이 종료되면 블록체인에 해당 데이터가 안전하게 저장됩니다. 안전하게 기록된 시술 정보는 부작용 원인 파악 / 추가 시술 / 문신 제거에 활용할 수 있게 됩니다. ",
    background:
      "타투에 대한 대중들의 인식이 많이 개선되었습니다. MZ세대를 중심으로 타트는 하나의 패션 요소가 되었고, 우리는 TV나 길거리에서 타투한 사람을 쉽게 찾아볼 수 있습니다. 국내 타투 시장 규모는 약 1조 3000억으로 추정되며, 타투 온라인 플랫폼을 이용하여 타투에 대한 정보를 제공하는 매체가 등장하기 시작했습니다. 최근 일본은 2020년 타투 시술을 예술로 인정하며, 우리나라는 전세계에서 타투 시술을 의료행위로 규정하는 유일한 나라가 되었습니다. 따라서, 조만간 타투에 대한 논란은 사라지고 국내 타투 산업이 발전하게 될 것입니다. 타투 시술을 받는 사람들이 증가하고 있지만, 타투 시술을 받는 사람의 약 10%는 부작용을 경험하게 됩니다. 대표적인 부작용은 발적, 통증, 감염, 면역관련질환, 색소침착 등이 있습니다. 부작용의 원인은 염료(잉크) 오염, 바늘 재사용, 비위생적 환경 과 더불어 출처를 알 수 없는 잉크 사용, 바늘 주사 깊이, 타투이스트의 숙련도로 관찰되었습니다. 즉, 우리는 해당 정보를 관리하는 것이 중요하다고 판단했습니다. 본 프로젝트에서는 해당 시술 데이터를 민감정보로 취급하여 블록체인에 안전하게 저장합니다. 무결성과 확장성이 확보된 데이터는 부작용 원인 추적, 문신 제거 자료, 문신 실태 자료 목적으로 사용됩니다.",
    functions: [
      "타투이스트는 문신 도안과 작업물을 업로드합니다.",
      "고객은 타투이스트에게 채팅상담과 예약 신청을 합니다.",
      "시술이 시작되면 타투이스트는 해당 문신 시술에 대한 정보를 단계적으로 입력하여 고객과 공유합니다.",
    ],
    github: "https://github.com/Ahyoung-Kim/CodeTattoo",
    link: "",
    video: "https://www.youtube.com/watch?v=-PfPyhEekXo",
  }),
  devS: makeData({
    id: "devS",
    name: "뎁스 devS",
    startDate: "2022-07",
    endDate: "2022-12",
    type: "5인 팀 프로젝트",
    role: ["프론트엔드 개발", "Figma 디자인", "기획"],
    stacks: {
      frontend: ["React"],
      backend: ["Django"],
    },
    images: [
      // 이미지
      "devs/메인피드-short.png",
      "devs/프로필-short.png",
      "devs/검색결과.png",
      "devs/메인피드.png",
      "devs/프로필.png",
    ],
    comment: "멋쟁이사자처럼 서강대 10기 최종 프로젝트",
    introduction: "개발자들만의 SNS 를 위해 만들어진 웹 사이트입니다.",
    description:
      "'뎁스 devS(devleop Story)' 는 입문/중급/현직 개발자들의 SNS 입니다. 로그인한 사용자는 자신의 프로필에 학력, 경력, 기술 스택, 프로젝트, 공부 내용 등을 기재하여 자신의 개발 능력을 '인스타그램 피드'처럼 꾸미게 됩니다. 사용자들은 팔로우 기능을 통해 서로의 프로필을 참고하여 정보를 공유하며 동기부여를 얻습니다. 메인 피드에서 팔로우한 사용자의 업데이트 내용을 확인할 수 있습니다. 프로필에 해시태그를 설정하면 동일한 해시태그를 가진 사용자를 추천받습니다. ",
    background:
      "개발자를 꿈꾸는 대학생 또는 직장인에게 프로젝트 경험은 매우 중요한 자산입니다. 하지만 경험이 없거나 지인 없는 사람들에게 프로젝트를 함께할 팀원을 찾는 것은 쉽지 않은 일입니다. 이러한 배경을 바탕으로 3가지 문제점을 발견하였습니다. 첫번째, 프로젝트 모집 경로가 산발적이다. 두번째, 프로젝트 디벨롭의 절차/과정에 무지하다. 마지막으로 프로젝트 팀원에 대한 정보를 알 수 없다. 이러한 문제점들로 인해 많은 사람들이 프로젝트에 대한 두려움을 갖고 있을 수 있다고 판단하였습니다. [뎁스 devS] 는 헤매고 있는 개발자들에게 레퍼런스를 제공하며, 자신만의 독특한 개발 스토리를 공유할 수 있는 소통의 장을 목적으로 제작되었습니다. ",
    functions: [
      "프로필을 꾸며 자신의 개발 능력을 어필합니다.",
      "사용자는 서로 팔로우하여 메인 피드를 통해 서로의 개발 현황을 공유합니다.",
      "해시태그를 설정하여 동일한 해시태그를 가진 사용자를 추천합니다.",
    ],
    github: "https://github.com/DEMODAY-devStory",
  }),
  relief: makeData({
    id: "relief",
    name: "릴리프 relief",
    startDate: "2022-09",
    endDate: "2022-12",
    type: "4인 팀 프로젝트",
    role: ["프론트엔드 개발", "Figma 디자인", "기획"],
    stacks: {
      frontend: ["React Native"],
      backend: ["SpringBoot"],
      database: ["MySQL"],
    },
    images: [
      "relief/홈.png",
      "relief/홈사이드.png",
      "relief/보호자.png",
      "relief/보호자요청수락.png",
      "relief/피보호자.png",
      "relief/친구등록.png",
      "relief/친구관리.png",
      "relief/친구디테일.png",
      "relief/메시지.png",
      "relief/메시지관리.png",
      "relief/메시지내역.png",
    ],
    comment: "서강대학교 학부 수업 '캡스톤디자인I' 팀 프로젝트",
    introduction:
      "안전을 위해 사용자의 현재 위치를 보호자에게 알리는 위치 기반 치안 모바일 어플리케이션 입니다. ",
    description:
      "[근처 치안 시설 정보 제공] 사용자의 위치 정보를 받아와서 근처에 있는 CCTV 와 치안 시설(경찰서, 파출소 등)의 정보를 지도 위에 표시해주어 사용자가 편리하게 자신 근처에 있는 시설의 정보를 얻을 수 있도록 개발하였습니다. 더 나아가 장소 스크랩 기능을 추가하였고, 다른 안심 서비스들 안내 기능까지 추가하여 치안 관련 정보를 한 눈에 얻을 수 있도록 구성하였습니다. [보호자 위치 실시간 공유 서비스] 사용자가 보호자를 등록하면 보호자에게 푸시 알림이 가게 되고, 보호자가 수락하면 매칭이 되어 피보호자의 위치를 공유받을 수 있습니다. 더 나아가 위치 공유 시 도움이 필요할 경우 보호자에게 바로 도움 요청 메시지를 보낼 수 있고, 경찰 신고 기능까지 추가하여 도움을 얻을 수 있도록 하였습니다.",
    background:
      "최근 사건사고가 늘어 안전에 대한 우려가 늘어난 상황에서 국민들의 안전에 도움을 줄 서비스를 만들고자 '릴리프 relief'를 기획하게 되었습니다. 친구, 가족을 보호자로 등록한 후 필요 시 자신의 위치를 실시간으로 공유하는 기능과 긴급 신 고 기능을 통해 위험한 상황에 큰 도움이 될 수 있는 서비스를 개발하는 것을 목표로 하였습니다. 뿐만 아니라 주변 CCTV와 치안 시설 위치 확인 기능과 다른 안심 어플리케이션에 대한 정보까지 담아 하나의 앱만으로 안전을 지킬 수 있는 앱을 만들고자 합니다. ",
    functions: [
      "사용자는 다른 사용자에게 보호자 등록 요청을 보내 보호자와 피보호자 관계를 맺습니다.",
      "주변 CCTV, 치안센터 및 경찰서의 위치 정보를 지도상에서 확인합니다.",
      "피보호자는 자신의 위치를 보호자에게 공유할 수 있으며, 필요시 긴급 도움 메세지를 전송합니다.",
    ],
    mobile: true,
  }),
  SogangType: makeData({
    id: "SogangType",
    name: "서강유형 What's your sogang type",
    startDate: "2023-02",
    endDate: "2023-03",
    type: "3인 팀 프로젝트",
    role: ["프론트엔드 개발", "Figma 디자인", "기획"],
    stacks: {
      frontend: ["Next.js"],
      backend: ["Django"],
    },
    images: [
      "sogang-type/intro.jpeg",
      "sogang-type/choice.jpeg",
      "sogang-type/start.jpeg",
      "sogang-type/end.jpeg",
      "sogang-type/result.jpeg",
      "sogang-type/ranking.jpeg",
    ],
    comment: "멋쟁이사자처럼 홍보용 미니 프로젝트",
    introduction:
      "MBTI 테스트처럼 간단한 테스트를 통해 서강대 학생들의 학교 생활 유형을 알려주는 웹 사이트입니다. ",
    description:
      "자신의 학과를 선택 후 9여개의 질문에 응답하게 됩니다. 응답 결과에 따라 '서강 유형'과 그 설명을 확인할 수 있으며 학과별, 유형별 통계도 함께 확인할 수 있습니다. ",
    background:
      "멋쟁이사자처럼 11기 운영진으로서 동아리 리쿠르팅 홍보를 위해 제작하였습니다.  ",
    functions: [
      "9여개의 질문에 응답하며 테스트를 진행합니다.",
      "테스트가 완료되면 응답 결과에 따라 서강 유형이 나타납니다.",
      "본인의 유형에 대한 통계와 전체 통계를 확인할 수 있습니다. ",
    ],
    link: "https://sogangtype.com/",
    mobile: true,
  }),
  Fandolee: makeData({
    id: "Fandolee",
    name: "팬도리 Fandolee",
    startDate: "2023-03",
    endDate: "2023-06",
    type: "3인 팀 프로젝트",
    role: ["프론트엔드 개발", "Figma 디자인", "기획", "DB 설계"],
    stacks: {
      frontend: ["React"],
      backend: ["firebase", "python"],
      database: ["firestore"],
    },
    images: [
      "Fandolee/홈.png",
      "Fandolee/경매.png",
      "Fandolee/경매생성.png",
      "Fandolee/교환.png",
      "Fandolee/마이페이지.png",
    ],
    comment:
      "서강대학교 학부 수업 '캡스톤디자인II' 졸업 프로젝트, KCC 2023 학부생/주니어 논문경진대회 참여작",
    introduction:
      "K-POP 아이돌 팬들의 니즈를 충족시키기 위한 웹 사이트로, 아이돌 굿즈를 경매/교환할 수 있는 웹 사이트 입니다. ",
    description: "",
    background: "",
    functions: [
      "사용자는 자신이 갖고 있는 아이돌 굿즈를 경매탭 또는 교환탭에 업로드합니다.",
      "경매 상품에 대해 다수의 사용자는 채팅을 통해 경매를 진행합니다.",
      "교환 상품에 대해 두 사용자가 채팅을 진행합니다.",
    ],
    github: "https://github.com/Ahyoung-Kim/Fandolee",
  }),
  ssk: makeData({
    id: "ssk",
    name: "수숙관",
    startDate: "2023-07",
    endDate: null,
    type: "5인 팀 프로젝트",
    role: ["프론트엔드 개발", "Figma 디자인"],
    stacks: {
      frontend: ["React Native"],
      backend: ["Spring Boot"],
      database: ["MySQL"],
    },
    images: [
      "ssk/홈.PNG",
      "ssk/수업생성.PNG",
      "ssk/수업정보.PNG",
      "ssk/학생초대코드.PNG",
      "ssk/숙제노트작성.PNG",
      "ssk/숙제인증.PNG",
      "ssk/복습노트작성.PNG",
      "ssk/복습태그관리.PNG",
      "ssk/수업바텀.PNG",
      "ssk/수업일지수정바텀.PNG",
      "ssk/일지생성바텀.PNG",
    ],
    comment: "",
    introduction:
      "'수업 숙제 관리'의 줄임말로, 학생과 선생님이 함께 수업 일정을 공유하며 숙제 및 복습 현황을 관리할 수 있도록 돕는 모바일 어플리케이션입니다.",
    description: "",
    background: "",
    functions: [
      "선생님은 수업을 생성한 뒤 학생을 초대합니다. ",
      "선생님과 학생은 캘린더를 통해 수업 일정을 공유합니다.",
      "수업 및 복습 내용을 등록 및 인증하여 수업을 관리합니다.",
    ],
    mobile: true,
  }),
  portfolio: makeData({
    id: "portfolio",
    name: "포트폴리오 사이트",
    startDate: "2023-08",
    endDate: null,
    type: "1인 개인 프로젝트",
    role: ["전체 디자인 및 개발"],
    stacks: {
      frontend: ["React"],
    },
    images: [],
    comment: "",
    introduction:
      "주니어 개발자 '김아영'을 소개하는 자체제작 웹 사이트 입니다. ",
    description: "",
    background: "",
    functions: [],
    github: "https://github.com/Ahyoung-Kim/Portfolio",
  }),
};
