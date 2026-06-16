# Web-Tool.Shop

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
tools/text/ascii-art/
tools/text/encoding-converter/
tools/text/url-encoder/
tools/text/emoji-tool/
tools/design/box-shadow/
tools/design/glassmorphism/
tools/css-art/art-gallery/
tools/converter/json-formatter/
tools/converter/uuid-generator/
tools/diff/compare/
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
SITE_URL=https://web-tool.shop
ADSENSE_CLIENT=
ADSENSE_PUBLISHER_ID=
GOOGLE_SITE_VERIFICATION=
NAVER_SITE_VERIFICATION=
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

### 새 페이지 다국어 적용 규칙

새 도구나 새 카테고리 페이지를 만들 때는 HTML만 추가하지 말고 아래 항목을 반드시 함께 처리합니다.

1. `assets/js/i18n.js`의 `textTranslations`에 화면에 보이는 모든 고정 문구를 등록합니다.
   - 대상: 내비게이션, breadcrumb, `h1`, 설명문, 카드 제목/설명, 버튼, 라벨, 상태 메시지, 결과 안내문
   - 동적으로 JS에서 만드는 문구도 반드시 등록합니다. 예: `완료했습니다`, `복사되었습니다`, `N개를 찾았습니다`
   - 한 언어만 넣지 않습니다. `ko`, `en`, `ja`, `zh` 4개 언어를 모두 채웁니다.

2. `assets/js/i18n.js`의 `attributeTranslations`에 속성 문구를 등록합니다.
   - 대상: `placeholder`, `aria-label`, `title`
   - 검색창, textarea, 파일 입력 안내, 아이콘 버튼의 접근성 문구는 화면 텍스트가 아니어도 번역 대상입니다.

3. `assets/js/i18n.js`의 `pageTranslations`에 새 URL을 등록합니다.
   - URL은 반드시 실제 배포 경로와 동일하게 씁니다. 예: `/tools/text/emoji-tool/`
   - `title`과 `description`을 `ko`, `en`, `ja`, `zh` 모두 작성합니다.
   - 등록하지 않으면 `?locale=en`처럼 직접 접속했을 때 문서 제목이 홈 기본값으로 떨어질 수 있습니다.

4. HTML 스크립트 순서를 지킵니다.
   - 정적 HTML 문구만 번역하면 되는 페이지:
     ```html
     <script defer src="../../../assets/js/i18n.js"></script>
     <script defer src="./tool.js"></script>
     <script defer src="../../../assets/js/recent-tools.js"></script>
     ```
   - `tool.js`가 초기 렌더링 때 `window.gadgetTranslate()`를 사용하거나 동적 카드를 바로 생성하는 페이지도 `i18n.js`를 먼저 로드합니다.
   - `tool.js` 안의 초기 상태 메시지도 `message("원문")` 같은 번역 래퍼를 통해 출력합니다.

5. 내부 링크는 locale query를 유지해야 합니다.
   - 새 링크는 일반 상대경로로 작성합니다. 예: `href="../design/"`
   - `i18n.js`가 내부 링크에 `?locale=ko|en|ja|zh`를 자동 반영하므로, JS에서 직접 링크를 만들 때도 `a.href`를 정상적인 내부 URL로 둡니다.

6. SEO 등록도 다국어 동작과 함께 확인합니다.
   - `scripts/apply-seo.js`의 `pages` 배열에 새 페이지를 추가합니다.
   - `title`, `description`, `url`, `type`, `category`, `priority`, `changefreq`를 작성합니다.
   - 새 카테고리라면 `breadcrumbFor()`에도 카테고리 breadcrumb를 추가합니다.

7. 검증은 최소 아래 기준으로 합니다.
   ```bash
   npm run build
   node --check assets/js/i18n.js
   node --check tools/category/tool-name/tool.js
   ```
   브라우저에서는 아래를 직접 확인합니다.
   - `/tools/category/tool-name/?locale=ko`
   - `/tools/category/tool-name/?locale=en`
   - `/tools/category/tool-name/?locale=ja`
   - `/tools/category/tool-name/?locale=zh`
   - 언어를 바꾼 뒤 새로고침해도 같은 언어가 유지되는지
   - 내비게이션/카드/버튼/placeholder/동적 결과 문구에 번역 누락이 없는지
   - 문서 `title`과 meta `description`이 홈 기본값으로 떨어지지 않는지

8. 새 페이지 작성 시 피해야 할 패턴
   - HTML에는 새 문구를 추가했지만 `textTranslations`에는 등록하지 않는 것
   - `pageTranslations`에 URL을 빼먹는 것
   - JS에서 `textContent = "완료"`처럼 하드코딩하고 번역 래퍼를 쓰지 않는 것
   - `tool.js`를 `i18n.js`보다 먼저 로드해 초기 렌더링 문구가 번역되지 않는 것
   - 콘솔 인코딩 문제로 한글이 `???` 또는 깨진 문자로 저장된 상태를 그대로 커밋하는 것

### 다국어 점검 체크리스트

- [ ] 새 URL이 `pageTranslations`에 등록되어 있다.
- [ ] 화면 고정 문구가 `textTranslations`에 4개 언어로 등록되어 있다.
- [ ] `placeholder`, `aria-label`, `title`이 `attributeTranslations`에 등록되어 있다.
- [ ] JS 동적 문구가 `window.gadgetTranslate()` 또는 동일한 `message()` 래퍼를 사용한다.
- [ ] `i18n.js`가 `tool.js`보다 먼저 로드된다.
- [ ] `?locale=en`, `?locale=ja`, `?locale=zh` 직접 접속이 자연스럽다.
- [ ] `npm run build` 후 깨진 문자인 `???`가 남아 있지 않다.


## 검색 등록

배포 후 아래 URL이 열리는지 먼저 확인합니다.

```text
https://web-tool.shop/
https://web-tool.shop/robots.txt
https://web-tool.shop/sitemap.xml
```

그 다음 Google Search Console과 네이버 서치어드바이저에 `https://web-tool.shop` 속성을 등록하고, `https://web-tool.shop/sitemap.xml`을 제출합니다.

소유권 확인용 HTML 메타 태그를 발급받으면 `.env`에 아래 값만 넣고 다시 빌드합니다.

```env
GOOGLE_SITE_VERIFICATION=google에서_받은_content_값
NAVER_SITE_VERIFICATION=naver에서_받은_content_값
```

`npm run build` 후 생성된 HTML의 `<head>`에 `google-site-verification`, `naver-site-verification` 메타 태그가 자동 삽입됩니다.

## Google AdSense

AdSense 승인 전에는 콘텐츠와 개인정보처리방침을 먼저 정리합니다. AdSense에서 사이트를 추가한 뒤 발급받은 값이 있으면 `.env`에 입력합니다.

```env
ADSENSE_CLIENT=ca-pub-0000000000000000
ADSENSE_PUBLISHER_ID=pub-0000000000000000
```

`npm run build`를 실행하면 `ADSENSE_CLIENT`가 있을 때 모든 HTML에 Auto ads 스크립트를 삽입하고, `ADSENSE_PUBLISHER_ID`가 있을 때 루트에 `ads.txt`를 생성합니다.

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

