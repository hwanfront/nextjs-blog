---
title: '블로그 코드 컨벤션 설정'
date: '2022-02-05 23:21:55'
---
## eslint
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