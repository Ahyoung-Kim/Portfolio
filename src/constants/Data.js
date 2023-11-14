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
      "code-tattoo/login.jpg",
      "code-tattoo/upload.jpg",
      "code-tattoo/draft.jpg",
      "code-tattoo/request.jpg",
      "code-tattoo/chat.jpg",
      "code-tattoo/reservation.jpg",
      "code-tattoo/confirm.jpg",
      "code-tattoo/start.jpg",
      "code-tattoo/info.jpg",
      "code-tattoo/start2.jpg",
    ],
    comment: "2022 공개 SW 개발자 대회 출품작(학생부문 우수작)",
    introduction:
      "블록체인을 이용하여 문신 시술 관련 정보를 관리하고, 문신 시술의 안전성과 투명성을 보장하기 위해 제작한 웹 사이트입니다.",
    description:
      "본 프로젝트는 타투 시술 데이터를 민감정보를 취급하여 블록체인에 안전하게 저장하고, 이를 부작용의 원인 추적, 추가 시술 등에서 활용할 수 있게 함으로써 안전하고 검증된 타투 시술을 목적으로 합니다. 회원가입 대상은 타투이스트와 고객으로 분류됩니다. 타투이스트는 본인의 타투 도안과 작업물을 게시물로 업로드하며, 고객은 이 게시물을 조회할 수 있습니다. 고객이 타투이스트에게 원하는 날짜와 시간에 예약 신청을 하게 되면, 타투이스트와 고객은 채팅을 통해 예약 일정을 조율하게 됩니다. 시술이 시작되면 타투이스트는 시술에 쓰인 잉크, 바늘 깊이 등의 정보를 입력합니다. 시술이 종료되면 블록체인에 해당 데이터가 안전하게 저장됩니다. 안전하게 기록된 시술 정보는 부작용 원인 파악 / 추가 시술 / 문신 제거에 활용할 수 있게 됩니다. ",
    background:
      "타투에 대한 대중들의 인식이 많이 개선되었습니다. MZ세대를 중심으로 타트는 하나의 패션 요소가 되었고, 우리는 TV나 길거리에서 타투한 사람을 쉽게 찾아볼 수 있습니다. 국내 타투 시장 규모는 약 1조 3000억으로 추정되며, 타투 온라인 플랫폼을 이용하여 타투에 대한 정보를 제공하는 매체가 등장하기 시작했습니다. 최근 일본은 2020년 타투 시술을 예술로 인정하며, 우리나라는 전세계에서 타투 시술을 의료행위로 규정하는 유일한 나라가 되었습니다. 따라서, 조만간 타투에 대한 논란은 사라지고 국내 타투 산업이 발전하게 될 것입니다. 타투 시술을 받는 사람들이 증가하고 있지만, 타투 시술을 받는 사람의 약 10%는 부작용을 경험하게 됩니다. 대표적인 부작용은 발적, 통증, 감염, 면역관련질환, 색소침착 등이 있습니다. 부작용의 원인은 염료(잉크) 오염, 바늘 재사용, 비위생적 환경 과 더불어 출처를 알 수 없는 잉크 사용, 바늘 주사 깊이, 타투이스트의 숙련도로 관찰되었습니다. 즉, 우리는 해당 정보를 관리하는 것이 중요하다고 판단했습니다. 본 프로젝트에서는 해당 시술 데이터를 민감정보로 취급하여 블록체인에 안전하게 저장합니다. 무결성과 확장성이 확보된 데이터는 부작용 원인 추적, 문신 제거 자료, 문신 실태 자료 목적으로 사용됩니다.",
    functions: [
      "유저는 타투이스트와 고객으로 분류됩니다.",
      "타투이스트는 문신 도안과 작업물을 업로드합니다.",
      "고객은 도안 목록을 확인 및 검색하여 원하는 타투에스트에게 예약 신청을 합니다.",
      "타투이스트와 고객은 채팅상담을 통해 예약을 철회 또는 확정합니다.",
      "타투이스트는 시술 시작 시, 시술에 대한 정보를 단계적으로 입력하여 고객과 공유합니다.",
      "시술이 완료되면 타투이스트와 고객은 시술 정보를 확인합니다.",
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
      "개발자를 꿈꾸는 대학생 또는 직장인에게 프로젝트 경험은 매우 중요한 자산입니다. 하지만 경험이 없거나 지인 없는 사람들에게 프로젝트를 함께할 팀원을 찾는 것은 쉽지 않은 일입니다. 이러한 배경을 바탕으로 3가지 문제점을 발견하였습니다. 첫번째, 프로젝트 모집 경로가 산발적이다. 두번째, 프로젝트 디벨롭의 절차/과정에 무지하다. 마지막으로 프로젝트 팀원에 대한 정보를 알 수 없다. 이러한 문제점들로 인해 많은 사람들이 프로젝트에 대한 두려움을 갖고 있을 수 있다고 판단하였습니다. 때문에 초기 기획은 프로젝트 멤버를 모집하고, 참여할 수 있는 서비스였지만, 이미 존재하는 서비스였습니다. 이후 '개발 정보 부족'에 초점을 두어 서로의 개발 능력 및 정보를 공유할 수 있는 SNS 서비스를 기획하게 되었습니다. [뎁스 devS] 는 헤매고 있는 개발자들에게 레퍼런스를 제공하며, 자신만의 독특한 개발 스토리를 공유할 수 있는 소통의 장을 목적으로 제작되었습니다. ",
    functions: [
      "각 유저는 프로필을 통해 자신의 개발 능력을 어필합니다.",
      "프로필에는 학력, 전공, 포지션등과 같은 소개글과 기술 스택, 공부 기록, 경력, 프로젝트 등을 입력합니다.",
      "유저는 서로 아이돌(팔로잉), 팬(팔로워) 관계를 맺어 소통합니다.",
      "유저는 메인피드를 통해 팔로잉한 유저의 개발 현황을 확인할 수 있습니다.",
      "검색 페이지를 통해 유저를 추천받거나, 검색할 수 있습니다.",
      "프로필에 입력한 해시태그를 통해 동일한 해시태그를 가진 유저를 추천받습니다.",
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
      "유저는 위치 기반으로 주변 CCTV, 치안센터 및 경찰서의 위치를 지도상에서 확인합니다.",
      "유저는 다른 유저에게 보호자 등록 요청을 보내 보호자와 피보호자 관계를 맺습니다.",
      "피보호자는 자신의 위치를 보호자에게 공유할 수 있습니다.",
      "피보호자는 필요시 보호자 또는 경찰서에 긴급 도움 메시지를 전송할 수 있습니다.",
      "치안센터 및 경찰서에 대한 장소 정보를 스크랩할 수 있습니다. ",
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
      "자신의 학과를 선택 후 9여개의 질문에 응답하게 됩니다. 응답 결과에 따라 총 9개의 '서강 유형' 중 자신의 유형과 그 설명을 확인할 수 있습니다. 또한 자신의 학과와 유형에 따른 통계와, 전체 유형별 통계도 함께 확인할 수 있습니다. 배포 후 서강대 학생 약 1500 여명의 유저가 사용하였습니다.",
    background:
      "멋쟁이사자처럼 11기 운영진으로서 동아리 리쿠르팅 홍보를 위해 제작하였습니다. 더 많은 학생의 흥미를 끌 수 있으면서도, '멋쟁이 사자처럼' 이라는 동아리에 관심을 갖도록 기획하였습니다. 서강대학교 맞춤형 디자인, 유형, 질문 등을 자체적으로 제작하였습니다. ",
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
    description:
      "서강대학교 학부 수업 '캡스톤디자인II' 졸업 프로젝트입니다. K-POP 아이돌 굿즈를 경매 또는 교환을 통해 거래할 수 있는 웹 사이트로, '밤부 점수'를 통해 각 유저의 거래 점수를 파악합니다. 유저는 경매 또는 교환하고자 하는 굿즈에 대한 정보를 입력하여 업로드합니다. 경매 굿즈를 업로드할 경우 굿즈의 종류, 아이돌 그룹, 멤버에 따라 현재 시장가에 적절한 경매 가격의 상한, 하한가를 추천받을 수 있습니다. 키워드에 따라 경매 가격 추천을 하기 위해 키워드에 따라 페이스북에서 개발한 워드 임베딩 알고리즘인 FastText를 사용하였습니다. 경매 굿즈에 대해 다수의 사용자는 채팅을 통해 가격을 투찰합니다. 경매 굿즈를 업로드한 사용자는 '낙찰하기' 버튼을 통해 낙찰을 할 수 있으며, 버튼을 누르지 않으면 정해진 기간이 끝난 후 가장 높은 가격을 제시한 사용자에게 자동 낙찰됩니다. 이후 두 사용자는 채팅을 통해 거래 일정을 조율하여 거래를 합니다. 교환 굿즈에 대해 두 사용자는 채팅을 통해 거래를 진행합니다. 거래가 완료되면 교환 굿즈를 업로드한 사용자는 '거래 완료하기' 버튼을 통해 해당 굿즈를 거래 완료 상태로 전환합니다. 각 사용자는 마이페이지를 통해 거래 내역, 찜 목록, 채팅 목록 등을 확인할 수 있습니다.",
    background:
      "K-POP 시장이 전세계적으로 성장함에 따라 K-POP 아이돌 굿즈 시장 또한 지속적으로 성장하고 있습니다. 아이돌 팬덤은 이러한 굿즈를 서로 교환, 판매를 하며 자신이 좋아하는 아티스트에 대한 팬심을 충족시킵니다. 하지만 아이돌 굿즈만을 위한 중고 굿즈 플랫폼의 부재와 기준 없는 판매가의 변동, 알 수 없는 가격정보 등의 문제점을 찾았습니다. 이러한 배경을 바탕으로 아이돌 팬들이 쉽고 빠르게 굿즈를 조회 및 검색할 수 있으면서도 투명하고 공정한 굿즈 거래 시장을 조성하기 위해 '팬도리' 프로젝트를 기획하게 되었습니다.",
    functions: [
      "유저는 경매 또는 교환 탭에서 원하는 굿즈를 조회, 검색, 찜할 수 있습니다.",
      "유저는 자신이 갖고 있는 아이돌 굿즈를 경매 또는 교환 탭에 업로드합니다.",
      "경매 굿즈를 업로드하는 유저는 아이돌 그룹, 멤버, 굿즈 종류 등에 따라 적절한 경매 가격을 추천받을 수 있습니다.",
      "경매 상품에 대해 다수의 사용자는 채팅을 통해 경매를 진행합니다.",
      "교환 상품에 대해 두 사용자가 채팅을 진행합니다.",
      "굿즈를 업로드한 유저는 경매 낙찰 또는 교환 확정을 합니다.",
      "거래가 완료된 굿즈에 대해 거래 정보를 확인할 수 있습니다. ",
      "거래가 완료되면 사용자는 굿즈를 업로드한 사용자에 대해 밤부 점수(거래 점수)를 부여할 수 있습니다.",
    ],
    github: "https://github.com/Ahyoung-Kim/Fandolee",
  }),
  ssk: makeData({
    id: "ssk",
    name: "수숙관",
    startDate: "2023-07",
    endDate: "2023-10",
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
    comment: "구글 플레이 스토어 출시 어플리케이션(예정)",
    introduction:
      "'수업 숙제 관리'의 줄임말로, 학생과 선생님이 함께 수업 일정을 공유하며 숙제 및 복습 현황을 관리할 수 있도록 돕는 모바일 어플리케이션입니다.",
    description:
      "수숙관은 '수업 숙제 관리'의 줄임말로, 학생과 선생님이 함께 수업 일정을 공유하며 숙제 및 복습 현황을 관리할 수 있도록 돕는 모바일 어플리케이션입니다. 유저는 선생님과 학생으로 분류되며, 회원가입 시 역할을 정할 수 있습니다. 선생님은 과목 이름, 수업 시작일, 정규 일정(요일, 시간), 캘린더에 표시될 수업 색상을 입력하여 수업을 생성합니다. 수업 생성 후 초대 코드를 발급하여 학생에게 발송합니다. 학생은 초대 코드를 입력하여 수업에 참여하게 됩니다. 수업 정보 스크린에서 캘린더를 통해 수업 일정을 확인하며, 선생님은 수업이 끝난 뒤 수업 일지에 해당 날짜의 진도 보고와 숙제, 복습 노트를 입력합니다. 학생은 숙제 노트를 확인하고 숙제 인증 피드를 통해 숙제를 인증합니다. 선생님은 숙제 인증 피드에서 학생이 업로드한 숙제 인증에 대해 평가할 수 있습니다. 수숙관을 이용하여 학생과 선생님은 효율적으로 수업에 대한 정보를 관리 및 공유할 수 있습니다. ",
    background:
      "주변에 초, 중, 고, 일반인을 대상으로 과외 수업을 진행하는 지인들을 쉽게 찾아볼 수 있습니다. 하지만 수업 일정의 변경 사항이 있을 경우 선생님은 학생과 학부모에게 일일히 연락을 줘야 한다는 번거로움이 있습니다. 또한 숙제 또는 복습이 잘 진행되고 있는지 확인하는 절차가 필요하며, 전체 진도 내용을 기록해야할 필요성이 있습니다. 요약하자면, 수업 전체 일정, 진도 보고, 숙제/복습 현황 등을 한 번에 관리할 수 있는 서비스를 제공하고자 '수숙관' 프로젝트를 기획하게 되었습니다. ",
    functions: [
      "유저는 선생님과 학생으로 분류됩니다.",
      "각 유저는 홈 화면에서 캘린더 전체 일정 및 오늘의 수업 목록을 확인합니다.",
      "각 유저는 수업 색상을 바꿔 커스텀할 수 있습니다.",
      "선생님은 정보를 입력하여 수업을 생성한 뒤, 학생에게 초대 코드를 발송합니다.",
      "학생은 초대 코드를 입력하여 수업에 참여합니다. ",
      "선생님은 캘린더의 각 날짜를 터치하여 일정을 추가할 수 있습니다.",
      "선생님은 숙제 노트 및 복습 노트를 추가하여 학생에게 알립니다.",
      "학생은 숙제 인증 피드를 통해 숙제를 인증하고, 선생님은 해당 숙제에 대한 평가를 합니다.",
    ],
    mobile: true,
  }),
  portfolio: makeData({
    id: "portfolio",
    name: "포트폴리오 사이트",
    startDate: "2023-08",
    endDate: "2023-11",
    type: "1인 개인 프로젝트",
    role: ["전체 디자인 및 개발"],
    stacks: {
      frontend: ["React"],
    },
    images: [
      "portfolio/about.png",
      "portfolio/stacks.png",
      "portfolio/projects.png",
      "portfolio/archive.png",
      "portfolio/activity.png",
      "portfolio/project.png",
    ],
    comment: "",
    introduction:
      "주니어 개발자 '김아영'을 소개하는 자체제작 웹 사이트 입니다. ",
    description:
      "주니어 개발자 '김아영'을 소개하는 자체제작 웹 사이트 입니다. 카테고리는 ABOUT ME / SKILLS / PROJECTS / ARCHIVE / ATCIVITY 총 5개로 구분되어 있습니다. ABOUT ME 는 간단한 소개 섹션입니다. SKILLS 는 제가 보유 및 경험한 기술 목록 섹션입니다. PROJECTS 는 제가 수행한 개인/팀 프로젝트 목록 세션입니다. ARCHIVE 는 저의 개발 공부 및 소스 코드가 기록된 저장소 목록 섹션입니다. ACTIVITY 는 제가 활동한 동아리 섹션입니다. 각 프로젝트의 이미지 또는 README 버튼을 클릭하면 프로젝트 상세 페이지로 이동합니다.",
    background:
      "초기에는 노션을 통해 포트폴리오를 정리하고자 하였지만, 제 자신을 소개할 수 있는 차별화된 포트폴리오를 위해 제작하게 되었습니다. 디자인 및 구성, 개발 등 모든 것을 자체적으로 제작하였습니다.",
    functions: [
      "소개글, 기술 스택, 프로젝트, 저장소, 활동 내역을 확인할 수 있습니다.",
    ],
    github: "https://github.com/Ahyoung-Kim/Portfolio",
  }),
};
