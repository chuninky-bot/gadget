# Gadget Box

GitHub Pages에서 바로 배포할 수 있는 정적 웹 유틸 모음입니다.

## URL 구조

도구는 아래 구조로 추가합니다.

```text
tools/
  category-name/
    index.html
    tool-name/
      index.html
      tool.js
```

예시:

```text
tools/text/word-counter/
tools/developer/json-formatter/
tools/generator/uuid-generator/
```

## GitHub Pages 설정

1. GitHub 저장소에 이 파일들을 push합니다.
2. 저장소의 `Settings > Pages`로 이동합니다.
3. `Build and deployment`에서 `Deploy from a branch`를 선택합니다.
4. Branch는 `main`, 폴더는 `/root`를 선택합니다.
5. `.env`의 `GITHUB_USERNAME` 값을 실제 GitHub 계정명으로 바꿉니다.
6. `npm run build`를 실행하면 `index.html`, `robots.txt`, `sitemap.xml`의 GitHub Pages URL이 자동 반영됩니다.

## 환경 변수

로컬에는 `.env`를 만들고, 저장소에는 `.env.example`만 공유합니다.

```env
GITHUB_USERNAME=YOUR_GITHUB_USERNAME
GITHUB_REPOSITORY_NAME=gadget
```

`npm run build`를 실행하면 `.env` 값을 읽어 GitHub Pages URL을 `index.html`, `robots.txt`, `sitemap.xml`에 반영합니다.

## 디자인 지원 기준

- 다크모드를 지원합니다. 사용자의 OS 또는 브라우저 색상 설정이 어두운 모드이면 자동으로 어두운 테마가 적용되어야 합니다.
- 모바일을 지원합니다. 모든 페이지와 도구는 작은 화면에서도 가로 스크롤 없이 사용할 수 있어야 합니다.
- 레이아웃은 모바일 반응형으로 만듭니다. 카드, 버튼, 입력창, 광고 영역은 화면 너비에 맞게 자연스럽게 줄바꿈되어야 합니다.
- 새 도구를 추가할 때도 공통 CSS 변수와 반응형 그리드 규칙을 우선 사용합니다.

## 스타일 작성 기준

- 기본 스타일 소스는 Less를 사용합니다.
- Less 원본은 `assets/less/styles.less`에 작성합니다.
- GitHub Pages는 Less를 자동 컴파일하지 않으므로, 배포되는 파일은 `assets/css/styles.css`로 컴파일해서 함께 커밋합니다.
- 로컬에서는 `npm install` 후 `npm run build`를 실행합니다. 이 과정에서 Less가 CSS로 자동 변환되고 기본 검사가 함께 실행됩니다.
- HTML은 항상 컴파일된 `assets/css/styles.css`를 참조합니다.

## 다국어 지원 기준

- 한국어, 영어, 일본어, 중국어를 지원합니다.
- 기본 언어는 브라우저 언어 또는 저장된 사용자 선택값을 따르며, 지원하지 않는 언어는 한국어로 표시합니다.
- 모든 주요 페이지 제목, 설명, 내비게이션, 버튼, 입력창 placeholder는 다국어로 표시되어야 합니다.
- 새 도구를 추가할 때는 `assets/js/i18n.js`의 번역 사전에 한국어, 영어, 일본어, 중국어 문구를 함께 추가합니다.

## 광고 적용 위치

각 페이지의 `.ad-slot` 영역이 광고 자리입니다. Google AdSense 승인 후 아래처럼 교체하면 됩니다.

```html
<ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-0000000000000000"
  data-ad-slot="0000000000"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins>
```

AdSense를 붙일 때는 `privacy.html`에 실제 광고/쿠키 처리 내용을 업데이트하세요.

## 새 도구 추가 체크리스트

- 카테고리 `index.html`에 도구 카드 추가
- 홈 `index.html` 추천 도구 또는 검색 목록에 추가
- `sitemap.xml`에 URL 추가
- 각 도구는 가능하면 브라우저 안에서만 처리
- 도구 페이지마다 고유한 `title`과 `description` 작성
- 새 도구의 UI 문구와 메타데이터를 `assets/js/i18n.js`에 4개 언어로 추가
- 모든 도구에는 테스트용 예문을 자동 입력하거나 생성하는 `테스트 예문` 버튼을 추가

## 데이터 형식 유틸 기준

- JSON, XML, SQL, Excel/CSV/TSV처럼 자주 쓰는 데이터 형식 유틸을 우선 추가합니다.
- 포맷터는 브라우저 안에서만 처리하며 입력값을 서버로 전송하지 않습니다.
- 형식 오류가 있으면 가능한 범위에서 자동 복구를 제공합니다. 예: 누락된 닫는 따옴표, `}`, `]`, `)`, XML 닫는 태그, CSV 따옴표, SQL 세미콜론.
- 자동 복구는 원본을 완전히 보장하는 파서가 아니므로, 결과를 상태 메시지와 함께 보여주고 사용자가 복사 전에 확인할 수 있게 합니다.


## 로컬 개발 서버

`npx serve .`는 정적 파일을 서빙할 뿐 브라우저 자동 새로고침을 제공하지 않습니다. 파일 수정 후 자동 반영을 보려면 아래 명령을 사용합니다.

```bash
npm run dev
```

Less를 수정하는 동안에는 별도 터미널에서 아래 명령도 함께 실행합니다.

```bash
npm run watch:css
```

`npm run dev`는 HTML, JS, CSS 파일 변경을 감지해 브라우저를 자동 새로고침합니다. Less는 먼저 `assets/css/styles.css`로 컴파일되어야 하므로 `watch:css`가 필요합니다.
## 로컬 검사

```bash
npm run build
node --check tools/text/word-counter/tool.js
```
