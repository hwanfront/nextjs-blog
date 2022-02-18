---
title: '[udemy] 성장하는 개발자의 학습법'
date: '2022-02-17 21:13:00'
---
# TDD의 철학을 적용해보는 피드백 주도 학습 방법
## TDD 테스트 주도 개발
- Test Driven Develop - 켄트 백
- 테스트를 먼저 만들고, 테스트를 통과하기 위한 코드를 짜는 개발 방법
  - 테스트를 먼저 만들고, 실제 코드를 작성하고
  - 원하는 대로 동작하는지 빠르게 피드백을 받는 것 (핵심)
- 테스트 코드는 의도치 않은 유용한 부산물
- 핵심은 더 자주, 더 빨리 '피드백'을 받는 것
- 결정과 피드백 사이의 갭에 대한 인식
  - 결정과 피드백 사이의 갭을 조절하기 위한 테크닉
- 결정 : 내가 시도하려는 것
- 피드백 : 동작하는지 안하는지 에러메시지와 같은 성공/실패
### 코드
```
test("생년월일을 입력받아 나이를 출력", {
  expect(함수()).toBe(23);
})
```
```
class App() {
  getAge(birthday) {
    return
  }
}
```
```
test("생년월일을 입력받아 나이를 출력", {
  expect(App.getAge(20000101)).toBe(23);
})
```
## 계산기
- 막연하다? 핵심기능은 무엇일까
- 막연한 기능을 쪼개어
```
class Calculator() {
  add(){}
  minus(){}
  multiply(){}
  divide(){}
}
```
- ui 없이 사칙연산이 되는 기능
- input으로 사용자 입력 받고 이벤트 처리
- ui 레이아웃 잡기
- 스타일 입히기
- ...
===
# 개발자 : 지식의 저주
## 지식의 저주
- 다른 사람들과 의사소통을 할 때 다른 사람도 이해할 수 있는 배경을 가지고 있다고 자신도 모르게 추측하여 발생하는 인식적 편견
## 알고있다고 생각하는 기준이 뭘까?
- 본인이 알고 있다면 상대방도 알고 있을 것이라 생각한다.
- 무언가 배웠는데 그 배운걸 안다고 착각한다면 더 이상 공부하는 게 어렵다
## 메타인지
- 아는 것을 안다고 하고 모르는 것을 모른다고 하는 것, 그것이 곧 앎이다 (공자)
## 목표, 타겟 설정
- 어느 회사를 가고 싶다면, 그 회사의 채용 공고를 확인하라

## 아는 만큼 보인다.
- 지식의 저주에 빠지면 아는 만큼 보이는 게 많다
- 아는 만큼 보인다
- 많이 알게 되니 내가 모르는 게 계속 보인다
- 알면 알수록 앞으로도 배워야할 것이 너무 많다
- 내 실력에 비해 배워야할 것들이 많아 압도된다

## 그런데
- 내가 얼만큼 아는지도 모르겠고 회사가 원하는 기준도 모르겠어요
- 기술은 계속 변하잖아요, 이게 의미있는건가요?

## 지식의 저주 탈출하기
- 컴퓨터 공학은 일종의 학문이다
  - 더 이상 개발을 얕보지 말자
  - 어려운 학문임을 인정하자
    - 학문 : 어떤 분야를 체계적으로 배워서 익힘
- 인스턴트 학습의 유혹에 빠지지말자
  - 쉬워 보이는 교육 컨텐츠에 익숙해져 평생 따라할 것인가?
- 언젠가는 이해하겠지
  - 대충 넘어가지말고 러닝 커브를 극복하자
  - 고통스럽지만 완벽하게 이해하도록 노력하자
- 지름길은 없다
  - 나만의 로드맵을 그리자
  - 어차피 선택에 대한 책임은 내가 진다
- 모범 사례(best practices)가 될 것인가
  - 모범 사례만 찾는 하이에나가 될 것인가 (directory structure)
- 포기할 이유를 찾지 않기
  - 스스로 한계를 만들지 않기
  - 합리화 하지 않기
  - 실천하자 그리고 꾸준히 하자

> 포기하면 편하다
> 그러나 노력은 배신하지 않는다

## 교훈
- 지식의 저주에 빠진건 아닌지 지속적으로 점검하자
- 아는 만큼 보인다
- 메타 인지 능력을 향상하자
- 하지만 압도되지 말자

## 약속
- 더 이상 개발을 얕보지 말자
- 인스턴트 학습의 유혹에 빠지지 말자
- 완벽하게 이해하고 넘어가자(No Pain, No Gain)
- 나만의 로드맵을 그리자. 선택에 대한 책임은 내가 진다
- 모범 사례가 되자
- 포기할 이유를 찾기 금지, 합리화 금지 => 꾸준히 실천

### 극복을 못하면 합리화한다.

## 사전질문
- ui를 만든 후 기능을 구현?
  - ui가 핵심이면 ui 우선, 기능이 우선이면 기능 우선
  - 사용자가 먼저 만지는 부분 부터?
- tdd를 테스트 코드 먼저 작성하지 않고 프로덕션 코드 작성하고 테스트 코드를 작성 차이
  - 프로덕션부터 짜면 언제 피드백 받을 수 있을지 모호
  - 테스트 먼저 짜면 피드백을 빨리 받을 수 있음
  - 코드부터 작성하면 답정너같은 느낌, 실패한 테스트의 경우를 알 수 없음
  - 테스트 커버리지 노힉 어려움
- TDD는 코드를 통합할 때 어려움을 겪을 수도 있겠다는 생각이 듭니다. 리팩토링을 주기적으로 해야 될까요? 
결과론적으로 구현하고자 하는 기능은 같은데, 피드백이 구체적으로 어떠한 도움이 될 수 있을지 예시를 알 수 있을까요?
  - 자연스럽게 리팩토링이 녹아들 수 밖에 없음
  - 통합이 수월해질 수 있음
  - 추가적인 상황과 경험이 필요한듯..?
- 어떤 개발자가 좋은 개발자
  - 함께 일하기 좋은 개발자
    - 내가 해결하지 못한 걸 해결, 좋은 분위기, 문화
  - 성과를 이룩하는 개발자
  - 좋은 개발자의 덕목 3가지??
    - 내가 생각하는 좋은 개발자는 상대적이다
  - 회사의 서비스와 비즈니스를 생각
    - 때로는 안좋은 코드일 수도 있지만, 회사의 서비스와 비즈니스를 성공시켜 오히려 좋은 코드가 될 수도 있다고 생각
- 개발에 재능이 없는 것 같습니다, 이 길이 내 길이 맞는걸까?
  - 모두 그렇다
  - 잘하는 사람이 더 열심히 한다
- 유지보수 업무를 맡았을 때 성장을 도모
  - 레거시도 많이 존재하고, 큰 회사에서도 많음
  - 개인공부, 회사에 징징
  - 내가 스스로 이러한 고민을 했을 때 내가 잘하고 있을까 고민
- 현업에서 개발을 하는데 있어서 완벽하게 해내야만 하나요? 공부하는 데 있어서 막힘과 어려움
  - 당연
- FE 지속적 성장, 어떤 것을 바라보고 능력을 향상?
  - 본인이 원하는 모습을 상상
- 주니어에서 시니어 가는 과정 필수적으로 알아야 하는 지식이나 필요한 역량
  - 역량이 있는 개발자
  - 연차, 경력은 상관 무
- 부트캠프 끝나고 혼자하니 힘듦
  - 환경을 다시 찾자
- 기술이 너무 빨리 변한다, 시장이 빨리 변한다. 새로운 기술
  - 공감
  - 많이 시장이 뒤집히고 기술이 단단해지고 있다
  - 비지니스 영역에 더 집중할 수 있다
  - 새로 나온 기술에 대해 느낀 점이 생긴다면 성장한 것
  - 어떻게 받아들이냐에 따라 
  - SW의 본질에 더 생각, 문제를 해결하는 방법, 해결할 수 있는 도구가 나오는 것
  - 상향 평준화가 되고 있음