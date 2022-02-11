---
title: 'Chrome Extension 개발 이슈'
date: '2022-02-05 23:21:55'
---
# Chrome Extension 개발 이슈
## Chrome Extension Architecture
![chrome-extention-architecture](/images/posts/google-extention-architecture.png)
## ES6 모듈 적용하기
> “How to bundle bunch of dependencies to one file”
- 정적 import 문은 다른 모듈에서 내보낸 바인딩을 가져올 때 사용함
- Javascript 의 경우 Webpack 등 번들러 미들웨어가 `require` 메소드 또는 `import` 키워드를 해결해줌
- 브라우저의 ES2015 지원으로 미들웨어를 사용하지 않고도 `<script>` 태그에 `type="module"`을 추가하면 `import` 키워드를 사용할 수 있음
> html 파일에 `<script type="module" src="your-script.js"></script>` 추가 후 js 파일에서 `import`
---
### popup
- 기본적으로 manifest.json 에서 html파일을 지정함
- manifest.json
```
{
  ...
  "browser_action": {
      "default_popup": "popup.html"
  }
  ...
}
```
- popup.html
```
<script type="module" src="popup.js"></script>
```
- popup.js
```
import { ... } from '...';
```
### content (아직 적용 안해봄, 확인 필요)
- 따로 html을 지정하는 방법 없음
- head 태그에 script 태그를 만들어서 넣으면 scope가 분리되어 `chrome.runtime` 사용하지 못함
- [dynamic-import](https://v8.dev/features/dynamic-import) 사용
- manifest.json
```
{
  ...
  "web_accessible_resources": [
    "content.js",
    ...
  ]
  ...
}
```
- content_script.js
```
(async () => {
  const src = chrome.runtime.getURL("content.js");
  const contentMain = await import(src);
  contentMain.main();
})();
```
- content.js
```
import { ... } from '...';
```
> [how-to-import-es6-modules-in-content-script-for-chrome-extension](https://stackoverflow.com/questions/48104433/how-to-import-es6-modules-in-content-script-for-chrome-extension)
### background - 1. html 파일 이용
- 원래는 js 파일을 script 옵션에 지정하지만 page 지정 방식으로 html 파일을 불러올 수 있음
- manifest.json
```
{
  ...
  "background": {
    "page": "background.html"
  }
  ...
}
```
- background.html
```
<script type="module" src="background.js"></script>
```
- background.js
```
import { ... } from '...';
```
### background - 2. manifest.json 이용
- Chrome 92v 이상부터 manifest.json 에서 type module 설정 가능
- manifest.json (Chrome 92 이상)
```
{
  ...
  "background": {
    "service_worker": "background.js",
    "type": "module"
  },
  ...
}
```
- background.js
```
import { ... } from '...';
```
> [chrome-extension-mv3-modularize-service-worker-js-file](https://stackoverflow.com/questions/66406672/chrome-extension-mv3-modularize-service-worker-js-file)
# vscode 에서 chrome extention api autocomplete 설정
- jsconfig.json 파일 추가
```
{
  "typeAcquisition": {
    "include": [
      "chrome"
    ]
  }
}
```
