---
title: '블로그 코딩 컨벤션 설정'
date: '2022-02-05 23:21:55'
---
## 코딩 컨벤션
- 읽고, 관리하기 쉬운 코드를 작성하기 위한 일종의 코딩 스타일 규약
- 우리가 코딩을 하거나 협업을 할 때, 이해하기 쉽도록 가독성 높은 코드를 작성하기 위해 규칙을 정해놓는 것이라 생각함
> [https://ui.toast.com/fe-guide/ko_CODING-CONVENTION](https://ui.toast.com/fe-guide/ko_CODING-CONVENTION)

## eslint
- Javscript 에서 코드의 가독성을 높이기 위해 일관된 코드 스타일로 작성하게 도와줌
- 문법 에러 검사 등
```
{
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "parser": "@babel/eslint-parser",
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "airbnb",
    "plugin:prettier/recommended"
  ],
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 8,
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "react-hooks",
    "prettier"
  ],
  "rules": {
    "react/react-in-jsx-scope": 0,
    "react/prefer-stateless-function": 0,
    "react/jsx-filename-extension": 0,
    "react/jsx-one-expression-per-line": 0
  },
  "globals": {
    "React": "writable"
  },
  "requireConfigFile": false
}
```
### 특이사항
- `babel-eslint`, `eslint-plugin-babel` 에서 `@babel/eslint-parser` 로 변경

> https://stackoverflow.com/questions/69554485/eslint-error-must-use-import-to-load-es-module

![babel_eslint_archived](/images/posts/babel_eslint_archived.png)

## prettier
- 정해진 코딩 스타일을 따르도록 변환
```
{
  "printWidth": 80,
  "semi": true,
  "singleQuote": false,
  "tabWidth": 2,
  "useTabs": false,
  "trailingComma": "all"
}
```

> 참고 블로그 
[Next.js-세팅하기-ESLint-Prettier-설정](https://velog.io/@mayinjanuary/Next.js-%EC%84%B8%ED%8C%85%ED%95%98%EA%B8%B0-ESLint-Prettier-%EC%84%A4%EC%A0%95)