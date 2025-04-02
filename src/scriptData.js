const scriptData = [
  {
    id: 100,
    title: "company",
    text: "(1975년 4월, 켄터키 어딘가에 묻힌 금괴를 찾는는 원정대에 선발되기 일주일 전. 당신은 마지막 면접을 위해 회사의 응접실로 들어간다.)",
    choices: [{ text: "x", nextId: 102 }],
  },
  {
    id: 102,
    title: "company",
    text: "(네모반듯하고 특징 없는 가구 탓에 회사 안은 삭막하게 느껴진다. 그러나 의자의 흑색 원목 등받이를 만져보면 각자 생활감과 고쳐 쓴 흔적이 보인다. 테이블 위에 빨간 민트 캔디가 놓여있다.)",
    choices: [{ text: "x", nextId: 104 }],
  },

  {
    id: 104,
    title: "company",
    text: "(당신은 똑같은 모양의 의자들 중 하나를 당겨 자리에 앉는다.)",
    choices: [{ text: "x", nextId: 105 }],
  },
  {
    id: 105,
    title: "company",
    text: "(맞은편에 앉은 회사의 비서, 신시아는 당신을 두고도 서류만 뒤적이더니 메모패드에 무언가 필기하며 운을 뗀다.)",
    choices: [{ text: ". . .", nextId: 106 }],
  },
  {
    id: 106,
    title: "company",
    text: "신시아 : 정보는 미리 검토해뒀습니다. 한 가지 확인하겠는데, 출신지가 어떻게 된다고 하셨죠?",
    choices: [
      { text: "당신 : 난 힐빌의 주민이에요.", nextId: 107 },
      { text: "당신 : 전 힐빌 주민은 아니에요, 외지인이죠.", nextId: 108 },
    ],
  },
  {
    id: 107,
    title: "company",
    text: "신시아 : 주민을 몰라본다고 이상하게 생각하진 마세요, 전 회사 사람들 얼굴도 잘 기억하지 않는다고요.",
    choices: [{ text: "x", nextId: 109 }],
  },
  {
    id: 108,
    title: "company",
    text: "신시아 : 이런 시골 마을에 어쩌다가 오신 건지는 몰라도 운이 좋으시네요. 아니면 아주 나쁘던가. ...",
    choices: [{ text: "x", nextId: 109 }],
  },
  {
    id: 109,
    title: "company",
    text: "신시아 : 어쨌거나, 퀜틴 사장님이 항상 절차를 무시하고 무작정 일을 벌려놔서 골 아플 때가 많지만 그래도 수완은 좋은 분이에요… 어떻게 제안을 받게 됐는지 구체적으로 이야기해 주세요.",
    choices: [
      { text: "당신 : 퀜틴이 먼저 이야기를 꺼냈어요.", nextId: 110 },
      { text: "당신 : 제가 소문을 듣고 먼저 퀜틴을 찾아갔죠.", nextId: 111 },
      {
        text: "당신 : 금괴에 대해 호기심을 표했을 뿐인데 원정대에 함께하지 않으면 큰일 날 거라며 협박당했어요!",
        nextId: 112,
      },
      { text: "당신 : 굳이 그런 것까지 말해야 할 필요가 있나요?", nextId: 113 },
    ],
  },
  {
    id: 110,
    title: "company",
    text: "신시아 : … 퀜틴 사장님이 당신에게서 잠재적 가치를 보셨나 보네요.",
    choices: [{ text: ". . .", nextId: 114 }],
  },
  {
    id: 111,
    title: "company",
    text: "신시아 : 흠… 당신이라면 충분히 그러실 분이라고 생각합니다.",
    choices: [{ text: ". . .", nextId: 114 }],
  },
  {
    id: 112,
    title: "company",
    text: "신시아 : … 납득이 가는 이야기긴 하네요. 그래도 조합이 아니라 우리 회사에 소속되어 다행입니다.",
    choices: [{ text: ". . .", nextId: 114 }],
  },
  {
    id: 113,
    title: "company",
    text: "신시아 : 제가 당신이 소속된 원정대 관리자니까요? … 알았으니 앞으로 회사에 피해 갈 행동만 하지 마세요.",
    choices: [{ text: ". . .", nextId: 114 }],
  },
  {
    id: 114,
    title: "company",
    text: "(신시아가 필기한 종이를 서류 사이에 끼워 넣고 서류뭉치를 가볍게 탁탁 쳐서 정리한 뒤 서류 보관함에 넣는 행동이 물 흐르듯 자연스럽다. 역시 히페리온에서 십오 년을 알 박고 있는 핵심 인물답다. )",
    choices: [{ text: "x", nextId: 115 }],
  },
  {
    id: 115,
    title: "company",
    text: "(웅웅거리는 히터의 화이트 노이즈와 따뜻한 온도 탓에 의식이 몽롱하다. 당신은 십오 년이라는 단어에 조금씩 빨려들어간다. 어렴풋한 과거를 떠올리려던 차에 신시아가 민트 캔디 단지를 열며 상쾌한 향이 훅 풍긴다.)",
    choices: [{ text: "x", nextId: 116 }],
  },
  {
    id: 116,
    title: "company",
    text: "(그녀가 내민 민트 캔디의 시원달달한 인공적인 향이 당신의 의식을 십오 년 전에서 다시 금괴 원정대 선발을 기다리는 지금으로 끌고 온다.)",
    choices: [{ text: ". . .", nextId: 118 }],
  },
  {
    id: 118,
    title: "company",
    text: "신시아 : 원정대를 선발하기까지 얼마 남지 않았는데 기분은 좀 어떠세요?",
    choices: [
      { text: "당신 : 나쁘지 않아요, 선발될 거란 확신이 있어요.", nextId: 119 },
      { text: "당신 : 글쎄요, 어쩐지 불안한 예감이 들어요.", nextId: 120 },
      {
        text: "당신 : 아무런 느낌도 들지 않아요. 그냥 상황이 그렇게 된 것 뿐이니까요.",
        nextId: 121,
      },
    ],
  },
  {
    id: 119,
    title: "company",
    text: "신시아 : 벌써부터 의욕이 넘치니 다행이네요. 부디 그 의욕을 사측에 도움이 되는 방향으로 사용하시기 바랍니다.",
    choices: [{ text: ". . .", nextId: 122 }],
  },
  {
    id: 120,
    title: "company",
    text: "신시아 : 당신도 금괴가 필요하니 찾으러 나서는 것 아닙니까? 의욕을 가져보세요.",
    choices: [{ text: ". . .", nextId: 122 }],
  },
  {
    id: 121,
    title: "company",
    text: "신시아 : 저도 마찬가지입니다. 부디 모두가 이런 침착함을 가지고 원정에 임했으면 좋겠네요.",
    choices: [{ text: ". . .", nextId: 122 }],
  },
  {
    id: 122,
    title: "company",
    text: "신시아 : 금괴를 찾으러 갈 때에는 말을 타고 가기로 약속했어요.",
    choices: [
      { text: "당신 : 누구랑 그런 약속을 했죠?", nextId: 123 },
      { text: "당신 : 말이요?", nextId: 123 },
    ],
  },
  {
    id: 123,
    title: "company",
    text: "신시아 : 정보 제공자와 한 약속이 있거든요, 고리타분한 인디언 노인이에요. 말을 타고 가야 애팔레치아의 산왕이 노하지 않는다나.",
    choices: [{ text: "x", nextId: 124 }],
  },
  {
    id: 124,
    title: "company",
    text: "당신 : 인디언 노인이요?",
    choices: [
      {
        text: "신시아 : 네, 대마초 냄새를 풍기고 다니는 노친네가 한 명 있어요.",
        nextId: 125,
      },
      {
        text: "신시아 : 마을 외곽에 꽤 넓은 승마장을 가지고 있어요, 지금은 아들이 거길 관리하죠.",
        nextId: 125,
      },
      { text: "신시아 : 그냥 치매 노인이에요.", nextId: 125 },
    ],
  },
  {
    id: 125,
    title: "company",
    text: "신시아 : 어쨌거나 말을 타고 갈 거예요. 끔찍한 이야기죠.",
    choices: [],
  },
  {
    id: 126,
    title: "company",
    text: "당신 : 말을 별로 좋아하지 않나 봐요.",
    choices: [
      {
        text: "신시아 : 조교사의 손가락을 먹은 식인 말에 대한 이야기는 동네 개도 알아요.",
        nextId: 128,
      },
      {
        text: "신시아 : 몇 년 전에 고작 다섯살이었던 아이가 발길질에 채여 죽은걸요, 불쌍한 메이.",
        nextId: 128,
      },
      { text: "신시아 : 켄터키에서 지내 보셨으니 아시잖아요.", nextId: 128 },
    ],
  },
  {
    id: 127,
    title: "company",
    text: "당신 : 말을 별로 좋아하지 않나 봐요.",
    choices: [
      {
        text: "신시아 : 당연하죠, 몇 주 전에 조교사가 말에게 손가락을 먹힌 사건이 있는걸요!",
        nextId: 128,
      },
      {
        text: "신시아 : 몇 년 전에 다섯 살짜리 아이가 발 뒷발굽에 채여 죽었어요.",
        nextId: 128,
      },
      {
        text: "신시아 : 좋아할 이유가 어디 있겠어요? 전 모든 동물이 싫어요.",
        nextId: 128,
      },
    ],
  },
  {
    id: 128,
    title: "company",
    text: "신시아 : 산길에서 낙마하면 최소한 골절일 거예요. 원정대는 의료 보험 가입 대상에서 예외 될텐데, 면책 조항이라도 추가해야겠어요.",
    choices: [{ text: "x", nextId: 129 }],
  },
  {
    id: 129,
    title: "company",
    text: "(신시아가 짜증스럽게 머리를 쓸어올리고 안경을 올려 다시 미간을 꾹꾹 눌러댄다.)",
    choices: [{ text: "x", nextId: 130 }],
  },
  {
    id: 130,
    title: "company",
    text: "(방 안을 메우는 공기는 텁텁하고 건조하다. 물이라도 찾으려 시선을 돌리자 신시아와 눈이 마주친다. 신시아의 질문이 메마른 분위기를 가르고 들어온다.)",
    choices: [{ text: "x", nextId: 131 }],
  },
  {
    id: 131,
    title: "company",
    text: "신시아 : 마지막으로 한 가지만 여쭤볼게요.",
    choices: [{ text: "x", nextId: 999 }],
  },
  {
    id: 500,
    title: "worker",
    text: "(1975년 4월, 켄터키 어딘가에 묻힌 금괴를 찾는 원정대에 선발되기 일주일 전. 당신은 마지막 면접을 위해 조합의 회의실로 들어간다.)",
    choices: [{ text: "x", nextId: 502 }],
  },
  {
    id: 502,
    title: "worker",
    text: "(덜걱덜걱 돌아가는 환풍기 프로펠러에는 누런 담배 찌든 때가 껴있고 눅눅한 냄새가 난다. 테이블 위에는 당신을 위해 준비한 듯 미지근하게 식은 맥주 하나가 재떨이 옆에 덜렁 놓여있다.)",
    choices: [{ text: "x", nextId: 504 }],
  },

  {
    id: 504,
    title: "worker",
    text: "(당신은 모양도 크기도 제각각인 의자 하나를 골라잡아 자리에 앉는다.)",
    choices: [{ text: "x", nextId: 505 }],
  },
  {
    id: 505,
    title: "worker",
    text: "(맞은편에 앉은 조나단은 빅 풋 조지가 항상 그 의자에 앉아 회의 시간에 졸아댄다며 의자 고르는 안목을 칭찬하고는 질문한다.)",
    choices: [{ text: ". . .", nextId: 506 }],
  },
  {
    id: 506,
    title: "worker",
    text: "조나단 : 당신에 대해서는 대충 훑어봤어요. 여기 마지막 빈칸은 뭐지? 맞다. 한 가지 확인 할 게- 당신은 주민입니까, 외부인입니까?",
    choices: [
      { text: "당신 : 난 힐빌의 주민이에요.", nextId: 507 },
      { text: "당신 : 전 힐빌 주민은 아니에요, 외지인이죠.", nextId: 508 },
    ],
  },
  {
    id: 507,
    title: "worker",
    text: "조나단 : 농담이에요, 농담! 제가 주민이랑 외지인을 구분도 못 할 리 없죠. ",
    choices: [{ text: "x", nextId: 509 }],
  },
  {
    id: 508,
    title: "worker",
    text: "조나단 : 그럼 그렇지! 어쩐지 새로운 인연을 기대하게 되는 얼굴이었거든요.",
    choices: [{ text: "x", nextId: 509 }],
  },
  {
    id: 509,
    title: "worker",
    text: "조나단 : 캔디스가 당신한테 왜 그런 제안을 했는지 알 것 같기도 하네요, 당신같은 사람들을 은근 마음에 들어하시니까요. … 제안은 구체적으로 어떻게 받게 된 겁니까?",
    choices: [
      { text: "당신 : 캔디스가 먼저 이야기를 꺼냈어요.", nextId: 510 },
      { text: "당신 : 제가 소문을 듣고 먼저 캔디스를 찾아갔죠.", nextId: 511 },
      {
        text: "당신 : 금괴에 대해 호기심을 표했을 뿐인데 원정대에 함께하지 않으면 큰일 날 거라며 협박당했어요!",
        nextId: 512,
      },
      { text: "당신 : 굳이 그런 것까지 말해야 할 필요가 있나요?", nextId: 513 },
    ],
  },
  {
    id: 510,
    title: "worker",
    text: "조나단 : 쓰읍, 진짜로? 위원장님이 당신 좋아하는 거 아닙니까? 하하하.",
    choices: [{ text: ". . .", nextId: 514 }],
  },
  {
    id: 511,
    title: "worker",
    text: "조나단 : 와우. 우리 위원장님 포스 대단한데 당신도 난놈이시네.",
    choices: [{ text: ". . .", nextId: 514 }],
  },
  {
    id: 512,
    title: "worker",
    text: "조나단 : 덜미 잡힐 일을 하질 말았어야지~ 그래도 회사가 아니라 우리 조합에 소속되어 다행이네요.",
    choices: [{ text: ". . .", nextId: 514 }],
  },
  {
    id: 513,
    title: "worker",
    text: "조나단 : 워워. 그냥 알아가보자는 거라고요. 어차피 이제 계속 붙어있을 텐데, 친해지자는 의미에서.",
    choices: [{ text: ". . .", nextId: 514 }],
  },
  {
    id: 514,
    title: "worker",
    text: "(조나단이 서류를 서툴게 정리해 삐걱거리는 서류 보관함에 넣는다. 그가 몇 가지 서류를 더 꺼내 대충 정리하는 동안 당신 앞에 놓인 미지근한 맥주에 맺혀있던 물방울이 도르륵 흘러내려 나무 테이블에 스며든다.)",
    choices: [{ text: "x", nextId: 515 }],
  },
  {
    id: 515,
    title: "worker",
    text: "(오랫동안 그래온 것처럼 테이블에는 물자국 모양의 곰팡이가 군데군데 피어있다. 오래전에 새겨져 영원히 지워지지 않을 것처럼 나뭇결 곳곳에 파고든 곰팡이가 당신의 과거를 떠올리게 한다. )",
    choices: [{ text: "x", nextId: 516 }],
  },
  {
    id: 516,
    title: "worker",
    text: "(그러다 정리를 끝낸 조나단의 상큼한 목소리가 당신의 의식을 까마득한 과거에서 다시 금괴 원정대 선발을 기다리는 지금으로 끌고 온다.)",
    choices: [{ text: ". . .", nextId: 518 }],
  },

  {
    id: 518,
    title: "worker",
    text: "조나단 : 원정대를 선발하기까지 얼마 남지 않았는데 기분은 좀 어때요?",
    choices: [
      { text: "당신 : 나쁘지 않아요, 선발될 거란 확신이 있어요.", nextId: 519 },
      { text: "당신 : 글쎄요, 어쩐지 불안한 예감이 들어요.", nextId: 520 },
      {
        text: "당신 : 아무런 느낌도 들지 않아요. 그냥 상황이 그렇게 된 것 뿐이니까요.",
        nextId: 521,
      },
    ],
  },
  {
    id: 519,
    title: "worker",
    text: "조나단 : 하하. 저도 기대돼요. 뭔가 재밌는 일이 잔뜩 생길 것 같은 예감이 든다고 해야 하나? 재밌는 여정이 아니라고 해도 인생에 한 번쯤은 사나이라면 이런 도전을 해봐야죠!",
    choices: [{ text: ". . .", nextId: 522 }],
  },
  {
    id: 520,
    title: "worker",
    text: "조나단 : 헤이, 벌써부터 그렇게 다운 되어 있으면 어떡해요! 재밌을 거예요. 분명하다니까요?",
    choices: [{ text: ". . .", nextId: 522 }],
  },
  {
    id: 521,
    title: "worker",
    text: "조나단 : 신나지 않아요? 그 금을 찾아내면 할 수 있을 수만 가지 일을 생각해 봐요!",
    choices: [{ text: ". . .", nextId: 522 }],
  },
  {
    id: 522,
    title: "worker",
    text: "조나단 : 금괴를 찾으러 갈 때에는 말을 타고 가기로 약속했어요.",
    choices: [
      { text: "당신 : 누구랑 그런 약속을 했죠?", nextId: 523 },
      { text: "당신 : 말이요?", nextId: 523 },
    ],
  },
  {
    id: 523,
    title: "worker",
    text: "조나단 : 금괴에 대한 정보를 제공해 준 은인이랑 약속했죠. 말을 타고 다니는 인디언 노인 본 적 없습니까?",
    choices: [{ text: "x", nextId: 524 }],
  },
  {
    id: 524,
    title: "worker",
    text: "당신 : 인디언 노인이요?",
    choices: [
      {
        text: "조나단 : 애팔레치아 산맥의 환경을 지키기 위해서 그런 조건을 걸다니 대단하지 않아요?",
        nextId: 525,
      },
      {
        text: "조나단 : *질 좋은 허-브*를 파는 분이죠. 당신이라면 잘 알지 않아요? 아님 말고. 하하하.",
        nextId: 525,
      },
      { text: "조나단 : 존경해 마지않는 제 고조 할아버지죠.", nextId: 525 },
    ],
  },
  {
    id: 525,
    title: "worker",
    text: "조나단 : 어쨌거나 말을 타고 갈 거에요, 벌써부터 신나지 않아요?",
    choices: [],
  },
  {
    id: 526,
    title: "worker",
    text: "당신 : 말을 많이 좋아하나 봐요.",
    choices: [
      {
        text: "조나단 : 당연하죠, 담배나 석탄을 파느니 전 돈이 모이면 목장을 살 거에요.",
        nextId: 528,
      },
      {
        text: "조나단 : 어릴 적에는 제 할아버지께서 조랑말을 태워 주시곤 했죠.",
        nextId: 528,
      },
      { text: "조나단 : 켄터키에서 지내 보셨으니 아시잖아요.", nextId: 528 },
    ],
  },
  {
    id: 527,
    title: "worker",
    text: "당신 : 말을 많이 좋아하나 봐요.",
    choices: [
      {
        text: "조나단 : 말이 켄터키의 중요한 자산이라고들 하잖아요. 당연히 좋아하죠!",
        nextId: 528,
      },
      {
        text: "조나단 : 힐빌에 온 김에 승마장이라도 한 번 돌아봐요. 조랑말도 있거든요.",
        nextId: 528,
      },
      { text: "조나단 : 말처럼 멋진 짐승이 또 없을 거예요.", nextId: 528 },
    ],
  },
  {
    id: 528,
    title: "worker",
    text: "조나단 : 여행길 내내 말과 교감할 걸 생각하면 지루할 틈이 없겠는데요? 승마장에서 쓸만한 안장을 미리 빌려와야겠네요. 남한테 뺏기기 전에!",
    choices: [{ text: "x", nextId: 529 }],
  },
  {
    id: 529,
    title: "worker",
    text: "(조나단이 시원스럽게 하하하 웃으며 자동차보다는 나을 거라며 당신을 격려한다.)",
    choices: [{ text: "x", nextId: 530 }],
  },
  {
    id: 530,
    title: "worker",
    text: "(방 안을 채우는 말에 대한 찬양이 공기를 뜨뜻하게 만든다. 이야기가 길어진다고 생각될 즈음, 조나단의 질문이 들뜬 분위기를 타고 흘러들어온다.)",
    choices: [{ text: "x", nextId: 531 }],
  },
  {
    id: 531,
    title: "worker",
    text: "조나단 : 마지막으로 한 가지만 물어볼게요.",
    choices: [{ text: "x", nextId: 999 }],
  },
  {
    id: 999,
    title: "all",
    text: "",
    choices: [{ text: "x", nextId: "x" }],
  },
];

export default scriptData;
