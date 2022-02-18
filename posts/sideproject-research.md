---
title: '[clipbook] 사이드프로젝트 자료조사'
date: '2022-02-03'
---
> 간략하게 정리만 했음

# React 빌드를 위한 Tool
## 0. 요약
- 정적 페이지에 SEO => gatsby
- 동적 페이지에 SEO => next.js
- 딱히 그런거 상관없 => CRA
- 라고 생각함...
## 1. Create-React-App
- React 공식 SPA (Single-Page Application)
- CSR (client side rendering) 
  - 초기 로드 느림
- Zero-Configuration (대충 아무 설정 필요없이 사용 가능)
- SEO (search engine optimization - 검색 엔진 최적화)  제공 안함 
  - react-helmet 등으로 대체 가능
- 서버 API에 의존
- configs(webpack, jest 등) 수정 시 eject
  - craco, react-app-rewired 등으로 수정 가능
## 2. gatsby
- SPA (Single-Page Application)
- SSR (server side rendering)
- SSG (static site generation - 정적 사이트 생성)
- SEO 또는 AMP( Accelerated Mobile Pages) 필요
- 뛰어난 성능 필요한 경우 사용
- PWA(Progressive Web App) Generator
- graphql 학습 필요
## 3. Next.js
- SSR
- 기본적으로 SSG, 동적 웹사이트 구축 가능 
- SEO 또는 AMP( Accelerated Mobile Pages) 필요
- Zero-Configuration
- 뛰어난 성능 필요한 경우 사용
- code spliting (스크립트 파일을 페이지별로 쪼개서 필요한 파일만 로딩)
- sample code driven development (redux 등 같은 라이브러리를 사용하고 싶을 때 샘플 코드 제공)
## 번외
- webpack 직접 빌드 
  - 🥲
- Remix
  - https://remix.run/
  - 비교적 최근에 나온 React Framework
  - 모 유튜버는 리액트 유료버전인데 무료로 나왔다고 설명함. 
  - 기존 React 앱은 request 를 waterfall 형태로 불러왔다면, Remix는 request를 병렬 로드해서 빠름
  - 흔히 React 앱에 있는 대부분의 코드가 데이터 변경인데 탄력적이고 점진적으로 향상된 데이터 업데이트가 내장
  - 유연한 에러처리 : 클라이언트 측 또는 서버 측 오류가 발생하면  default component 대신 boundary가 표시
- react-boilerplate
  - https://github.com/react-boilerplate/react-boilerplate
- docusaurus
  - https://docusaurus.io/
 
### 참고
> [When to pick Gatsby, Next.Js or Create React App](https://dev.to/alexandrudanpop/react-applications-when-to-pick-gatsby-or-next-js-or-create-react-app-50l1)
> [Kick Off a React JS Project: CRA, Next.js or Gatsby?](https://www.codemotion.com/magazine/frontend/javascript/react-project-cra-nextjs-gatsby/)
> [[4분코딩] 리액트(React)와 찰떡 궁합 Next.js](https://www.youtube.com/watch?v=jg2ha2RIWN0)

---

# React 상태관리 라이브러리
## Timeline
```
2013 - React 등장
2014 - Flux (다양한 라이브러리 등장)
2015 - Redux
2016 - MobX
2018 - Context
2019 - Hooks 등장 (+ React Query, SWR)
2019 - Zustand
2019 - xState
2020 - Jotai, Recoil, Valtio
2021 - useSelectedContext
```
## 상태관리 라이브러리 분류
- flux => redux, zustand
- proxy => mobx, valtio, overmind
- atomic => jotai, recoil

## 러닝커브
- redux > mobx > recoil or jotai 순서
  <!-- - 이유 : fe 옾챗방에다가 걍 물어봄,,, ㅎㅎ;; -->
 <!-- ![image](https://user-images.githubusercontent.com/65995108/150652588-64018696-2779-4d56-95e5-bf596801a4e7.png) -->


## 사용하게 된다면 
1. mobx 
2. redux 
3. recoil 
    - jotai 도 recoil 과 비슷하지만 선택한 이유 : [FEConf korea](https://www.youtube.com/watch?v=0-UaleJZOw8) jotai 보다는 익숙해서
    - 두 개를 비교해보며 사용하는 것도 좋지만 하나에 익숙하도록 집중하는 게 좋아보임
    - [https://ui.toast.com/weekly-pick/ko_20200616](https://ui.toast.com/weekly-pick/ko_20200616)

## 참고
> [react-state-management](https://leerob.io/blog/react-state-management)
> [react-state-management 번역](https://velog.io/@cadenzah/history-of-react-state-management)
> [react-state-management 정리](https://velog.io/@gtah2yk/%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C-%EC%83%81%ED%83%9C%EC%97%90-%EA%B4%80%ED%95%9C-%EC%A0%95%EB%A6%AC-%EA%B8%80)

---

# 웹 컴포넌트 스타일링
- css module
  - css module 이란? 리액트에서 css 클래스가 중첩되는 것을 완벽히 방지하는 기술
- sass (scss)
  - 문법적으로 굉장한 스타일시트
  - 변수나 함수, 조건문 반복문 같은 프로그래밍적인 요소로 css를 컨트롤
- styled-components 또는 emotion
  - CSS in JS, JS 파일 안에 CSS를 포함
  - 스타일을 컴포넌트화

성능면에서는 css > sass > css in js 순
사용량에서는 sass > emotion > styled-components