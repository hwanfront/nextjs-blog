---
title: '면접 공부한 것 정리 (보완해야댐)'
date: '2022-02-13 21:57:00'
---


useEffect는 일반함수만 받
async는 Promise 객체를 받기 원함

api 호출 을 함수로 뺏을 때, 렌더링 될 때 컴포넌트 전부가 리렌더링 됙 때문에
useCallback을 사용


ajax는 비동기식 자바스크립트 통신
일부분이 바뀌면 전체가 다 바뀌게 되어서 문제가 발생
ajax가 나오면서 통신을 하면 일부분만 바꿔치기가 가능

promise는 비동기 처리에 사용되는 객체
![promise](/images/posts/google-extention-architecture.png)
상태를 가진다
pending(선언), fulfilled(resolve 성공), rejected(실패)
주로 서버에서 받아온 데이터를 화면에 표시할 때
서버에서 데이터를 요청하고 받아오기 위해
then catch => 순서 상관 없음, 체이닝, 순차적으로 넘어감
첫번 째 catch를 찾아 감, 두번 째 catch 문은 X
try catch => ??

async await 차이
왜 나왔나

react는 어떤 통신 사용?

CSR SSR
TDD : 해보진 않았지만 테스트주도
DDD

babel webpack parcel

npm install 중에 문제가 있었던 점
npm audit
npm outdated
npm upgrade

package-lock.json 은 의존성 트리를 그리고 있음
당시 의존성에 대한 정확한 정보를 가진 파일이 생성되는데
개발자들이 동일한 의존성 트리를 생성하여 같은 의존성을 설치 할 수 있게 함.

crossbrowsing
HTML, CSS, Javascript 작성 시 W3C의 웹 규격에 맞는 코딩을 함으로써 
어느 브라우저, 기기에서 사이트가 의도된 대로 보여지고 작동되는 기법
사용 상에 전혀 이상이 없다면 괜찮다고 생각

브라우저 마다 렌더링 엔진이 다양해서 html, js, css 
브라우저 마다 랜더링 엔진이 다르기 때문이다.
작동되지 않는 HTML5, Javascript 코드가 존재
해석하지 못하는 CSS 코드 존재
브라우저 버그들이 존재
브라우저마다 자체적인 CSS 스타일

렌더링 과정?
https://d2.naver.com/helloworld/59361
dom 트리 구축을 위한 html 파싱
렌더트리 구축
렌더트리 배치
렌더트리 그리기

dependencies: {
	"aaaa": "^5.16.2",
}

리액트 렌더링 과정
리액트 라이프 사이클
렌더 타임
class 형태는 라이프사이클을 이해하기 쉬움

오히려 vue2 버전을 쓰면 하나하나 정의가 되어있다더라
라이프사이클을 알고있어야 함

라이프사이클 설명 => class
constructor
생성부터 소멸까지의 흐름이 있음
소멸하지 않으면? 메모리 leak이 쌓이겠죠?
garbage collector 원시 타입이 아닌 reference 타입. 참조하지 않는 

permit 타입, reference 타입
깊은 복사, 얕은 복사
