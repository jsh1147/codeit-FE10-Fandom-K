# Fandom-K

<img src="./src/assets/README_banner.png" alt="Fandom-K 배너"
  style="display: block; margin: 0 auto;"/>

> 코드잇 스프린트 10기 FE 기초 프로젝트 ( 2024.09.24 ~ 2024.10.11 )<br />
> 아이돌 조공 플랫폼 **Fandom-K**

<br />

## 🔗 배포 URL

- [**Fandom-K**](https://codeit-fe10-fandom-k.vercel.app/)

<br />

## 👩‍💻 팀원 소개

<table style="margin: 0 auto; text-align: center;">
  <tr style="font-weight:bold;">
    <td>김지윤</td><td>김희진</td><td>오혁재</td><td>정성현(팀장)</td>
  </tr>
  <tr>
    <td><img src="https://avatars.githubusercontent.com/u/174712986" width="100px"></td>
    <td><img src="https://avatars.githubusercontent.com/u/77238424" width="100px"></td>
    <td><img src="https://avatars.githubusercontent.com/u/176660375" width="100px"></td>
    <td><img src="https://avatars.githubusercontent.com/u/81379968" width="100px"></td>
  </tr>
  <tr>
    <td><a href="https://github.com/21ow">@21ow</a></td>
    <td><a href="https://github.com/devmanta">@devmanta</a></td>
    <td><a href="https://github.com/duckjae12">@duckjae12</a></td>
    <td><a href="https://github.com/jsh1147">@jsh1147</a></td>
  </tr>
</table>

<br />

## 🤝 역할 분담

- **김지윤**
  - 목록 페이지(이달의차트), 모달(투표하기)
  - 전역 CSS, 리소스
- **김희진**
  - 목록 페이지(조공리스트), 모달(후원하기)
  - 크레딧 관리
  - 유저 플로우
- **오혁재**
  - 마이 페이지, 모달(크레딧부족)
  - 서버 데이터 관리 및 통신 API
- **정성현**
  - 랜딩 페이지, 목록 페이지(내크레딧), 모달(크레딧충전)
  - 초기 환경 구성, 라우팅, 레이아웃
  - 문서 작업

<br />

## 🛠 기술 스택

- **개발 환경**

<a href="https://code.visualstudio.com/" style="margin-left: 20px;">
  <img src="https://img.shields.io/badge/vscode-007ACC?" alt="VSCODE"/>
</a>
<a href="https://git-scm.com/">
  <img src="https://img.shields.io/badge/git-F05032?logo=git&logoColor=white" alt="GIT"/>
</a>
<a href="https://github.com/">
  <img src="https://img.shields.io/badge/github-181717?logo=github&logoColor=white" alt="GITHUB"/>
</a>

<br />

- **빌드 및 배포**

<a href="https://www.npmjs.com/" style="margin-left: 20px;">
  <img src="https://img.shields.io/badge/npm-CB3837?logo=npm&logoColor=white" alt="NPM"/>
</a>
<a href="https://vitejs.dev/">
  <img src="https://img.shields.io/badge/vite-7b64ff?logo=vite&logoColor=ffcc25" alt="VITE"/>
</a>
<a href="https://vercel.com/">
  <img src="https://img.shields.io/badge/Vercel-000000?logo=Vercel&logoColor=white" alt="VERCEL"/>
</a>

<br />

- **FE 기술**

<a href="https://developer.mozilla.org/ko/docs/Web/HTML" style="margin-left: 20px;">
  <img src="https://img.shields.io/badge/html-FF6F00?logo=html5&logoColor=white" alt="HTML"/>
</a>
<a href="https://developer.mozilla.org/ko/docs/Web/CSS">
  <img src="https://img.shields.io/badge/css-0051ff?logo=css3&logoColor=white" alt="CSS"/>
</a>
<a href="https://github.com/css-modules/css-modules">
  <img src="https://img.shields.io/badge/css_modules-000000?logo=cssmodules&logoColor=white" alt="CSS MODULES"/>
</a>
<a href="https://developer.mozilla.org/ko/docs/Web/JavaScript">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black" alt="JAVASCRIPT"/>
</a>
<a href="https://react.dev/">
  <img src="https://img.shields.io/badge/react-91e3ff?logo=react&logoColor=087ea4" alt="REACT"/>
</a>
<a href="https://reactrouter.com/">
  <img src="https://img.shields.io/badge/react_router-CA4245?logo=reactrouter&logoColor=white" alt="REACT ROUTER"/>
</a>

<br />

- **품질 관리**

<a href="https://prettier.io/" style="margin-left: 20px;">
  <img src="https://img.shields.io/badge/prettier-2a3571?logo=prettier&logoColor=c4fffd" alt="PRETTEIR"/>
</a>
<a href="https://eslint.org/">
  <img src="https://img.shields.io/badge/eslint-4B32C3?logo=eslint&logoColor=white" alt="ESLINT"/>
</a>
<a href="https://typicode.github.io/husky">
  <img src="https://img.shields.io/badge/husky-8e2f00" alt="HUSKY"/>
</a>

<br />

- **협업 도구**

<a href="https://discord.com/" style="margin-left: 20px;">
  <img src="https://img.shields.io/badge/Discord-5865F2?logo=Discord&logoColor=white" alt="DISCORD"/>
</a>
<a href="https://www.notion.so/">
  <img src="https://img.shields.io/badge/notion-000000?logo=notion&logoColor=white" alt="NOTION"/>
</a>
<a href="https://www.figma.com/">
  <img src="https://img.shields.io/badge/figma-000000?logo=figma&logoColor=ff5c3b" alt="FIGMA"/>
</a>

<br />

## 🗂️ 프로젝트 구조

```
codeit-FE10-Fandom-K
├─ .github                  : GitHub 설정
├─ .husky                   : Husky 설정
├─ public                   : Non-Compile 파일
└─ src                      : Compile 파일
    ├─ apis                 : 통신 API
    ├─ assets               : 미디어
    ├─ components           : 공용 컴포넌트
    │   └─ layout           : 레이아웃
    ├─ constants            : 상수
    ├─ contexts             : 전역 상태
    ├─ hooks                : 커스텀 훅
    ├─ pages                : 페이지
    │   └─ ~Page            : 개별 페이지
    │       └─ components   : 페이지 컴포넌트
    ├─ styles               : 전역 CSS
    └─ utils                : 유틸리티 함수
```

<br />

## 📌 프로젝트 설명

- 추후 작성
