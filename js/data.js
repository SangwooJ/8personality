/*
  type: [0, 1, 2, 3, 4, 5, 6, 7]
    0 : 외향성 
    1 : 타인에 대한 관심 
    2 : 타인에 대한 공감
    3 : 예술성
    4 : 창의,상상력
    5 : 지적 호기심, 정보력
    6 : 이성,논리
    7 : 복잡성

  
  weight : 0 ~ 4
  total_max 
    0 : 외향성 - 20
    1 : 타인에 대한 관심 - 20 
    2 : 타인에 대한 공감 - 20
    3 : 예술성 - 20
    4 : 창의,상상력 - 16
    5 : 지적 호기심, 정보력 - 16
    6 : 이성,논리 - 20
    7 : 복잡성 - 16
​*/


const qnaList = [
  {
    q: { question: '1. 주말에 친구들과의 약속이 있습니다. 어느 정도의 규모를 가장 선호 하시나요?', type: [0]},
    a: [
      { answer: '1명의 친구', weight: 0 },
      { answer: '2명의 친구들', weight: 1 },
      { answer: '3명의 친구들', weight: 2 },
      { answer: '4명의 친구들', weight: 3 },
      { answer: '5명 이상의 친구들', weight: 4 },
    ]
  },
  {
    q: { question: '2. 사람들과 함께 할 때 에너지를 얻는 것 같습니다.', type: [0]},
    a: [
      { answer: '매우 그렇다', weight: 4 },
      { answer: '다소 그렇다', weight: 3 },
      { answer: '보통이다', weight: 2 },
      { answer: '다소 아니다', weight: 1 },
      { answer: '전혀 아니다', weight: 0 },
    ]
  },
  {
    q: { question: '3. 활동적인 취미나 활동을 즐깁니다.', type: [0]},
    a: [
      { answer: '매우 그렇다', weight: 4 },
      { answer: '다소 그렇다', weight: 3 },
      { answer: '보통이다', weight: 2 },
      { answer: '다소 아니다', weight: 1 },
      { answer: '전혀 아니다', weight: 0 },
    ]
  },
  {
    q: { question: '4. 다른사람들 앞에서 발표 하는것은 편안하다', type: [0]},
    a: [
      { answer: '매우 그렇다', weight: 4 },
      { answer: '다소 그렇다', weight: 3 },
      { answer: '보통이다', weight: 2 },
      { answer: '다소 아니다', weight: 1 },
      { answer: '전혀 아니다', weight: 0 },
    ]
  },
  {
    q: { question: '5. 모임이나 파티에 참석하는 것을 즐깁니다.', type: [0]},
    a: [
      { answer: '매우 그렇다', weight: 4 },
      { answer: '다소 그렇다', weight: 3 },
      { answer: '보통이다', weight: 2 },
      { answer: '다소 아니다', weight: 1 },
      { answer: '전혀 아니다', weight: 0 },
    ]
  },
  {
    q: { question: '6. 나는 다른 사람들의 이야기를 듣는 것을 좋아한다.', type: [1]},
    a: [
      { answer: '매우 그렇다', weight: 4 },
      { answer: '다소 그렇다', weight: 3 },
      { answer: '보통이다', weight: 2 },
      { answer: '다소 아니다', weight: 1 },
      { answer: '전혀 아니다', weight: 0 },
    ]
  },
  {
    q: { question: '7. 나는 평소에 내 주변 사람들이 어떻게 지내는지 궁금하다', type: [1]},
    a: [
      { answer: '매우 그렇다', weight: 4 },
      { answer: '다소 그렇다', weight: 3 },
      { answer: '보통이다', weight: 2 },
      { answer: '다소 아니다', weight: 1 },
      { answer: '전혀 아니다', weight: 0 },
    ]
  },
  {
    q: { question: '8. 친구들과 같이 시험 공부를 하는 상황이라고 가정하자. 나는 친구들이 무엇을 공부하고 있는지 궁금하다. ', type: [1]},
    a: [
      { answer: '매우 그렇다', weight: 4 },
      { answer: '다소 그렇다', weight: 3 },
      { answer: '보통이다', weight: 2 },
      { answer: '다소 아니다', weight: 1 },
      { answer: '전혀 아니다', weight: 0 },
    ]
  },
  {
    q: { question: '9. 공감여부를 떠나 나는 다른 사람들의 문제나 고민에 대해 듣는것을 좋아한다', type: [1]},
    a: [
      { answer: '매우 그렇다', weight: 4 },
      { answer: '다소 그렇다', weight: 3 },
      { answer: '보통이다', weight: 2 },
      { answer: '다소 아니다', weight: 1 },
      { answer: '전혀 아니다', weight: 0 },
    ]
  },
  {
    q: { question: '10. 나는 내 주변 사람들에게 도움을 주는 것이 뿌듯하다 ', type: [1]},
    a: [
      { answer: '매우 그렇다', weight: 4 },
      { answer: '다소 그렇다', weight: 3 },
      { answer: '보통이다', weight: 2 },
      { answer: '다소 아니다', weight: 1 },
      { answer: '전혀 아니다', weight: 0 },
    ]
  },
  {
    q: { question: '11. 나는 다른 사람들의 문제에 대해 진심으로 걱정한다', type: [2]},
    a: [
      { answer: '매우 그렇다', weight: 4 },
      { answer: '다소 그렇다', weight: 3 },
      { answer: '보통이다', weight: 2 },
      { answer: '다소 아니다', weight: 1 },
      { answer: '전혀 아니다', weight: 0 },
    ]
  },
  {
    q: { question: '12. 나는 다른 사람들의 성공을 진심으로 기뻐한다.', type: [2]},
    a: [
      { answer: '매우 그렇다', weight: 4 },
      { answer: '다소 그렇다', weight: 3 },
      { answer: '보통이다', weight: 2 },
      { answer: '다소 아니다', weight: 1 },
      { answer: '전혀 아니다', weight: 0 },
    ]
  },
  {
    q: { question: '13. 나는 다른 사람들의 감정에 쉽게 공감할 수 있다.', type: [2]},
    a: [
      { answer: '매우 그렇다', weight: 4 },
      { answer: '다소 그렇다', weight: 3 },
      { answer: '보통이다', weight: 2 },
      { answer: '다소 아니다', weight: 1 },
      { answer: '전혀 아니다', weight: 0 },
    ]
  },
  {
    q: { question: '14.  나는 다른 사람들의 감정변화를 본능적으로 감지할 수 있다.', type: [2]},
    a: [
      { answer: '매우 그렇다', weight: 4 },
      { answer: '다소 그렇다', weight: 3 },
      { answer: '보통이다', weight: 2 },
      { answer: '다소 아니다', weight: 1 },
      { answer: '전혀 아니다', weight: 0 },
    ]
  },
  {
    q: { question: '15. 나는 다른 사람들을 기쁘게 할때 감정적인 보람을 느낀다', type: [2]},
    a: [
      { answer: '매우 그렇다', weight: 4 },
      { answer: '다소 그렇다', weight: 3 },
      { answer: '보통이다', weight: 2 },
      { answer: '다소 아니다', weight: 1 },
      { answer: '전혀 아니다', weight: 0 },
    ]
  },
  {
    q: { question: '16. 당신은 일상적인 것들에서 아름다움을 찾을 수 있습니까?', type: [3]},
    a: [
      { answer: '매우 그렇다', weight: 4 },
      { answer: '다소 그렇다', weight: 3 },
      { answer: '보통이다', weight: 2 },
      { answer: '다소 아니다', weight: 1 },
      { answer: '전혀 아니다', weight: 0 },
    ]
  },
  {
    q: { question: '17. 당신은 자신의 감정을 표현하는 데 예술을 사용하거나 사용해 본 적이 있습니까?', type: [3]},
    a: [
      { answer: '매우 그렇다', weight: 4 },
      { answer: '다소 그렇다', weight: 3 },
      { answer: '보통이다', weight: 2 },
      { answer: '다소 아니다', weight: 1 },
      { answer: '전혀 아니다', weight: 0 },
    ]
  },
  {
    q: { question: '18. 당신은 자신만의 예술 스타일이나 방식을 가지고 있습니까?', type: [3]},
    a: [
      { answer: '매우 그렇다', weight: 4 },
      { answer: '다소 그렇다', weight: 3 },
      { answer: '보통이다', weight: 2 },
      { answer: '다소 아니다', weight: 1 },
      { answer: '전혀 아니다', weight: 0 },
    ]
  },
  {
    q: { question: '19. 당신은 다른 사람들의 창조적인 예술 작품에 영감을 받는 경험이 자주 있습니까?', type: [3]},
    a: [
      { answer: '매우 그렇다', weight: 4 },
      { answer: '다소 그렇다', weight: 3 },
      { answer: '보통이다', weight: 2 },
      { answer: '다소 아니다', weight: 1 },
      { answer: '전혀 아니다', weight: 0 },
    ]
  },
  {
    q: { question: '20.예술 작품을 만들어보고 싶은 욕구를 자주 느끼나요?', type: [3]},
    a: [
      { answer: '매우 그렇다', weight: 4 },
      { answer: '다소 그렇다', weight: 3 },
      { answer: '보통이다', weight: 2 },
      { answer: '다소 아니다', weight: 1 },
      { answer: '전혀 아니다', weight: 0 },
    ]
  },
  {
    q: { question: '21. (복권당첨, 죽음 혹은 판타지와 같은) 공상을 할때가 많다. ', type: [4]},
    a: [
      { answer: '매우 그렇다', weight: 4 },
      { answer: '다소 그렇다', weight: 3 },
      { answer: '보통이다', weight: 2 },
      { answer: '다소 아니다', weight: 1 },
      { answer: '전혀 아니다', weight: 0 },
    ]
  },
  {
    q: { question: '22. 새로운 아이디어를 떠올리는 일은 즐거운 일이다', type: [4]},
    a: [
      { answer: '매우 그렇다', weight: 4 },
      { answer: '다소 그렇다', weight: 3 },
      { answer: '보통이다', weight: 2 },
      { answer: '다소 아니다', weight: 1 },
      { answer: '전혀 아니다', weight: 0 },
    ]
  },
  {
    q: { question: '23. 나는 아직 발생하지 않은 상황에 대해 상상할때가 많다', type: [4]},
    a: [
      { answer: '매우 그렇다', weight: 4 },
      { answer: '다소 그렇다', weight: 3 },
      { answer: '보통이다', weight: 2 },
      { answer: '다소 아니다', weight: 1 },
      { answer: '전혀 아니다', weight: 0 },
    ]
  },
  {
    q: { question: '24. 나는 새로운 방법을 개발하여 일을 더 효율적으로 처리하려고 한다.', type: [4]},
    a: [
      { answer: '매우 그렇다', weight: 4 },
      { answer: '다소 그렇다', weight: 3 },
      { answer: '보통이다', weight: 2 },
      { answer: '다소 아니다', weight: 1 },
      { answer: '전혀 아니다', weight: 0 },
    ]
  },
  {
    q: { question: '25. 새로운 지식을 배우는것은 흥미롭다. ', type: [5]},
    a: [
      { answer: '매우 그렇다', weight: 4 },
      { answer: '다소 그렇다', weight: 3 },
      { answer: '보통이다', weight: 2 },
      { answer: '다소 아니다', weight: 1 },
      { answer: '전혀 아니다', weight: 0 },
    ]
  },
  {
    q: { question: '26. 나무위키나 다양한 지식을 전달해주는 유튜브 채널과 같은 지식 컨텐츠를 즐겨본다', type: [5]},
    a: [
      { answer: '매우 그렇다', weight: 4 },
      { answer: '다소 그렇다', weight: 3 },
      { answer: '보통이다', weight: 2 },
      { answer: '다소 아니다', weight: 1 },
      { answer: '전혀 아니다', weight: 0 },
    ]
  },
  {
    q: { question: '27. 커뮤니티나 뉴스를 통해 정보 얻는것을 즐긴다 ', type: [5]},
    a: [
      { answer: '매우 그렇다', weight: 4 },
      { answer: '다소 그렇다', weight: 3 },
      { answer: '보통이다', weight: 2 },
      { answer: '다소 아니다', weight: 1 },
      { answer: '전혀 아니다', weight: 0 },
    ]
  },
  {
    q: { question: '28. 나는 일상적인 상황에서도 새로운 것을 배우려고 노력한다. ', type: [5]},
    a: [
      { answer: '매우 그렇다', weight: 4 },
      { answer: '다소 그렇다', weight: 3 },
      { answer: '보통이다', weight: 2 },
      { answer: '다소 아니다', weight: 1 },
      { answer: '전혀 아니다', weight: 0 },
    ]
  },
  {
    q: { question: '29. 특정 주제에 대해 깊이 탐구하는것을 즐긴다 ', type: [6]},
    a: [
      { answer: '매우 그렇다', weight: 4 },
      { answer: '다소 그렇다', weight: 3 },
      { answer: '보통이다', weight: 2 },
      { answer: '다소 아니다', weight: 1 },
      { answer: '전혀 아니다', weight: 0 },
    ]
  },
  {
    q: { question: '30. 논리적인 토론에 참여 하거나 관전 하는것을 즐긴다 ', type: [6]},
    a: [
      { answer: '매우 그렇다', weight: 4 },
      { answer: '다소 그렇다', weight: 3 },
      { answer: '보통이다', weight: 2 },
      { answer: '다소 아니다', weight: 1 },
      { answer: '전혀 아니다', weight: 0 },
    ]
  },
  {
    q: { question: '31. 나는 어떤 문제를 해결할 때, 가능한 모든 옵션을 고려하려고 노력합니다 ', type: [6]},
    a: [
      { answer: '매우 그렇다', weight: 4 },
      { answer: '다소 그렇다', weight: 3 },
      { answer: '보통이다', weight: 2 },
      { answer: '다소 아니다', weight: 1 },
      { answer: '전혀 아니다', weight: 0 },
    ]
  },
  {
    q: { question: '32. 나는 다른 사람들의 주장이나 견해를 비판적으로 분석하는 것을 즐긴다 ', type: [6]},
    a: [
      { answer: '매우 그렇다', weight: 4 },
      { answer: '다소 그렇다', weight: 3 },
      { answer: '보통이다', weight: 2 },
      { answer: '다소 아니다', weight: 1 },
      { answer: '전혀 아니다', weight: 0 },
    ]
  },
  {
    q: { question: '33. 어떤 주장이나 견해에 동의하기 전에, 그에 대한 증거를 검토합니다. ', type: [6]},
    a: [
      { answer: '매우 그렇다', weight: 4 },
      { answer: '다소 그렇다', weight: 3 },
      { answer: '보통이다', weight: 2 },
      { answer: '다소 아니다', weight: 1 },
      { answer: '전혀 아니다', weight: 0 },
    ]
  },
  {
    q: { question: '34. 자기주도적으로 일하는것 보다 리더의 가이드에 따라 일을 하는것이 더 좋다. ', type: [7]},
    a: [
      { answer: '매우 그렇다', weight: 0 },
      { answer: '다소 그렇다', weight: 1 },
      { answer: '보통이다', weight: 2 },
      { answer: '다소 아니다', weight: 3 },
      { answer: '전혀 아니다', weight: 4 },
    ]
  },
  {
    q: { question: '35. 복잡한 생각을 하는것보다 단순 하게 생각하는것을 선호 한다.  ', type: [7]},
    a: [
      { answer: '매우 그렇다', weight: 0 },
      { answer: '다소 그렇다', weight: 1 },
      { answer: '보통이다', weight: 2 },
      { answer: '다소 아니다', weight: 3 },
      { answer: '전혀 아니다', weight: 4 },
    ]
  },
  {
    q: { question: '36. 생각을 멈추는것이 가능하다. ', type: [7]},
    a: [
      { answer: '매우 그렇다', weight: 0 },
      { answer: '다소 그렇다', weight: 1 },
      { answer: '보통이다', weight: 2 },
      { answer: '다소 아니다', weight: 3 },
      { answer: '전혀 아니다', weight: 4 },
    ]
  },
  {
    q: { question: '37. 여러가지 생각을 동시에 해서 머릿속이 복잡할 때가 종종 있다 ', type: [7]},
    a: [
      { answer: '매우 그렇다', weight: 4 },
      { answer: '다소 그렇다', weight: 3 },
      { answer: '보통이다', weight: 2 },
      { answer: '다소 아니다', weight: 1 },
      { answer: '전혀 아니다', weight: 0 },
    ]
  },
  
]

const infoList = [
  {
    name: '당신의 팔각 성격은 다음과 같습니다',
    desc: ' *복잡성 : 복잡성이 높으면 사고 방식이 복잡하다는것 입니다. 너무 높으면 예민한 성격을 가지게 되거나 ADHD 위험이 높을 수 있습니다. 너무 낮을 경우 생각이 너무 단순한 사람 처럼 보일 수 있습니다.'
  },
  
]
