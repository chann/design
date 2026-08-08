# Comfort shadcn/ui 제품 언어 정리

- 날짜: 2026-08-08
- 상태: 설계 승인 완료
- 기준 문서: `DESIGN.md` 한국어판

## 목적

Comfort를 shadcn/ui로 만든 제품 디자인 안내서로 더 분명하게 다듬는다. 접근성이
갖춰진 shadcn/ui 컴포넌트에서 시작해 색, 글꼴, 간격, 상태, 움직임을 제품에 맞게
정리하는 흐름을 문서와 웹사이트에서 같은 모습으로 보여 준다.

이번 변경은 새 디자인 시스템을 하나 더 만드는 일이 아니다. shadcn/ui를 유일한
기본 UI 계층으로 삼고, Comfort는 그 위에 제품의 인상과 사용 원칙을 더한다.

## 목표

- `DESIGN.md`와 웹사이트가 같은 색, 글꼴, 간격, 형태, 움직임을 사용한다.
- 모든 화면과 상호작용을 저장소의 shadcn/ui 컴포넌트로 조립한다.
- 장식용 그래픽보다 실제 토큰과 컴포넌트 상태가 보이는 예시를 앞세운다.
- 큰 제목, 넓은 세로 여백, 간결한 문장으로 페이지의 흐름을 선명하게 만든다.
- 카드가 필요하지 않은 곳에서는 글자, 정렬, 여백, 구분선으로 내용을 나눈다.
- 네 언어 홈페이지와 네 DESIGN 문서가 같은 내용을 각 언어에 맞게 전달한다.
- 기존 63개 Component, 15개 Foundation, 336개 정적 경로를 그대로 유지한다.
- 내부 조사 과정과 비교 대상은 결과물 어디에도 드러내지 않는다.

## 바꾸지 않는 것

- `#0066CC`와 `#78B7FF`를 중심으로 한 Comfort의 블루 계열
- `/`, `/ko/`, `/jp/`, `/cn/` 홈페이지 경로
- Principles, Foundations, Components, Legal 문서 경로
- 한국어 `DESIGN.md`를 먼저 고치고 나머지 세 판본을 맞추는 순서
- URL을 기준으로 언어를 고르는 방식
- footer signature가 화면에 다시 들어올 때마다 재생되는 동작
- 키보드, 터치, 다국어, 라이트·다크 테마, reduced motion 지원

## 디자인 방향

### 색

라이트 테마는 밝고 따뜻한 회백색을 바탕으로 쓴다. 다크 테마는 푸른 기운이 강한
회색 대신 검정에 가까운 따뜻한 색을 사용한다. 블루는 버튼, 링크, 선택,
포커스처럼 사용자의 행동을 알려 주는 곳에만 쓴다.

| 역할 | 라이트 | 다크 |
| --- | --- | --- |
| Canvas | `#F7F7F2` | `#131209` |
| Surface | `#FFFFFF` | `#1C1B16` |
| Surface Soft | `#EFEFE9` | `#24231D` |
| Surface Raised | `#FFFFFF` | `#2B2922` |
| Ink | `#171714` | `#F4F4EF` |
| Body | `#46463F` | `#B8B6AC` |
| Muted | `#6F7068` | `#8E8C82` |
| Hairline | `#D8D8D0` | `#3B3931` |
| Primary | `#0066CC` | `#78B7FF` |

넓은 배경에는 장식용 그라데이션을 쓰지 않는다. 색 차이는 영역의 관계나 상태를
설명할 때만 사용한다.

### 글꼴

Geist Variable을 기본 글꼴로 사용하고 Geist Mono는 코드, 토큰, 숫자, 짧은
분류 이름에만 쓴다. 큰 제목은 짧고 조밀하게, 본문은 한 줄이 너무 길지 않게
구성한다.

- Display: 72px, 700, line-height `0.98`, letter-spacing `-0.045em`
- Headline large: 52px, 700, line-height `1.02`, letter-spacing `-0.035em`
- Headline medium: 32px, 680, line-height `1.12`, letter-spacing `-0.022em`
- Body large: 18px, 400, line-height `1.6`
- Body: 16px, 400, line-height `1.6`
- Label: 14px, 600, line-height `1.3`
- Code: 14px, 400, line-height `1.55`

Display 크기는 화면 너비에 따라 `clamp()`로 줄인다. 모바일에서도 낱말을 억지로
쪼개지 않고, 코드와 경로만 영역 안에서 줄바꿈하거나 스크롤한다.

### 여백과 페이지 흐름

기본 영역 사이 간격을 96px로 넓힌다. 한 영역에 여러 카드를 빽빽하게 놓기보다
하나의 큰 문장, 짧은 설명, 실제 예시를 차례로 보여 준다. 서로 다른 내용은
화면 너비를 채우는 배경이나 가는 구분선으로 나눈다. 의미 없는 빈칸을 장식으로
채우지 않는다.

헤더는 화면 위에서 24px 떨어진 둥근 캡슐 형태를 유지한다. 양옆 문서 메뉴는
세로선을 추가하지 않고 여백으로만 본문과 나눈다. 푸터는 간결한 사이트맵과
대형 글자 서명으로 끝낸다.

### 움직임

컨트롤의 반응은 120–180ms 안에 시작한다. 언어와 테마 메뉴는 지금처럼 약
140–150ms에 열리고 100ms 안팎으로 닫힌다.

일반 영역은 480ms 안팎의 opacity와 `translateY` 전환을 사용한다. 이동 거리는
16px 이하로 제한하고 blur는 쓰지 않는다. 큰 전환 문장은 스크롤에 맞춰 단어가
차례로 또렷해진다. 푸터의 글자 서명은 화면에 다시 들어올 때마다 재생한다.

`prefers-reduced-motion`에서는 이동과 단계별 지연을 없앤다. 내용과 현재 상태는
처음부터 모두 보여야 한다.

## shadcn/ui 사용 원칙

`src/components/ui`가 유일한 기본 UI 계층이다. 페이지 전용 컴포넌트는 이곳의
Button, Card, Tabs, Badge, Input, Switch, Separator, Accordion, Sheet,
Dropdown Menu, Scroll Area 등을 조합해 만든다.

기본 HTML 요소는 제목, 영역, 목록, 폼처럼 뜻이 분명한 구조에 그대로 쓴다.
다만 별도의 버튼, 카드, 탭, 메뉴 디자인을 다시 만들지는 않는다. 페이지 CSS는
배치, 글자, 색, 여백, 반응형 구성, 움직임만 맡는다.

새 컴포넌트가 필요하면 다음 순서로 판단한다.

1. 저장소에 있는 shadcn/ui 컴포넌트로 해결할 수 있는지 본다.
2. 여러 shadcn/ui 컴포넌트를 묶은 페이지 전용 조합으로 해결한다.
3. 같은 조합이 여러 페이지에서 반복될 때만 공용 컴포넌트로 올린다.

## 홈페이지 구성

### 헤더

현재의 떠 있는 헤더를 유지하되, 크기와 안쪽 여백을 더 간결하게 맞춘다. 데스크톱
내비게이션과 모바일 Sheet는 같은 목적지와 언어·테마 기능을 제공한다. 모든
버튼과 메뉴는 저장소의 shadcn/ui 구현을 사용한다.

### Hero

Hero는 왼쪽 문장과 오른쪽 `ThemeWorkbench`로 나눈다. 한국어 핵심 문구는 다음
방향으로 쓴다.

- 제목: “shadcn/ui로 시작하고, 제품의 디자인을 완성하세요.”
- 설명: “접근 가능한 컴포넌트는 그대로 두고, 색·글꼴·간격·상태·움직임을
  DESIGN.md에 맞춰 다듬습니다.”
- 주 액션: “DESIGN.md 읽기”

현재의 추상 canvas는 제거한다. `ThemeWorkbench`는 Card와 Tabs를 바탕으로
만든 실제 조작 가능한 예시다.

- Tokens 탭: background, foreground, primary, radius 값을 색과 숫자로 표시
- Components 탭: Button, Input, Badge, Switch가 같은 token을 쓰는 모습
- 탭, 입력, switch, 버튼은 키보드와 포인터로 직접 조작 가능
- 작은 화면에서는 한 열로 쌓이고 가로 스크롤을 만들지 않음

### 수치 행과 전환 문장

Hero 아래에는 4개 언어, 15개 Foundation, 63개 Component를 한 줄로 보여 준다.
수치는 콘텐츠 모듈에서 가져오며 화면이 좁으면 세 줄로 자연스럽게 쌓인다.

이어지는 큰 문장은 “같은 컴포넌트도 제품의 언어를 입으면 전혀 다르게
느껴집니다.”로 정리한다. 단어별 opacity만 스크롤에 맞춰 바뀐다.

### 디자인 원칙

현재 `benefits` 카드는 열린 2열 구성으로 바꾼다. 왼쪽에는 제목과 설명,
오른쪽에는 세 가지 원칙을 구분선으로 나눠 배치한다.

- 익숙한 사용법은 유지한다.
- 제품에 맞는 인상을 더한다.
- 실제 상태에서 결과를 확인한다.

아이콘을 위한 별도 상자는 두지 않는다. 꼭 필요한 아이콘만 제목 옆에 작게 둔다.

### 작업 흐름

작업 흐름은 “컴포넌트는 shadcn/ui에서, 제품다움은 DESIGN.md에서.”라는 제목으로
세 단계를 보여 준다.

1. 필요한 shadcn/ui 컴포넌트를 고른다.
2. 역할에 맞는 token과 상태를 DESIGN.md에 적는다.
3. 실제 화면과 여러 입력 방식에서 결과를 살핀다.

각 단계는 카드 대신 번호, 제목, 설명, Separator로 구성한다.

### 실제 제품 표본

화면 너비를 채우는 중간 영역에는 shadcn/ui 컴포넌트가 Comfort 토큰을 사용하는
모습을 한 화면에 모은다. Tabs로 Preview와 Code를 전환하고, 현재 문서와
Component 상세 페이지로 이동하는 링크를 제공한다. 기존 Component specimen을
다시 쓰며 비슷한 구현을 새로 만들지 않는다.

### FAQ와 CTA

FAQ는 정적인 2열 카드 대신 shadcn/ui Accordion을 사용한다. 질문은 shadcn/ui와
DESIGN.md의 관계, 소스 소유 방식, 접근성, 다국어, 코딩 에이전트 사용 범위를
설명한다.

마지막 CTA는 큰 블루 카드 대신 열린 배치와 상단 구분선을 사용한다. 제목,
짧은 설명, `DESIGN.md 읽기` 버튼만 남긴다.

## 콘텐츠 구조

`HomeContent`는 현재 역할을 유지하되 화면 구성에 맞춰 이름을 다듬는다.

- `proof` → `summary`
- `benefits` → `principles`
- `productProof` → `systemPreview`
- `productProof.reviewed`, `productProof.verification`은 삭제
- `hero`에 Theme Workbench의 tab과 control label 추가

네 언어 파일은 같은 타입을 만족해야 한다. JSX에는 사용자에게 보이는 문장을
직접 넣지 않는다. 한국어 문구를 먼저 정리한 뒤 영어, 일본어, 중국어가 같은 뜻과
말투를 각 언어에 맞게 전한다.

## DESIGN 문서 변경

`DESIGN.md`, `DESIGN.en.md`, `DESIGN.jp.md`, `DESIGN.cn.md`는 다음 내용을 함께
바꾼다.

- YAML 색상, 글꼴, 영역 사이 간격, header 형태
- Overview의 shadcn/ui 중심 제품 설명
- Colors의 따뜻한 light/dark 색상 원칙
- Typography의 Geist Variable 기준과 새 display scale
- Layout의 넓은 세로 흐름과 카드 사용 기준
- Components의 shadcn/ui 단일 기반 원칙
- Interaction & Motion의 480ms 영역 전환과 blur 금지
- Content & Localization의 자연스러운 문장 기준
- Implementation Guide의 shadcn/ui 조합 순서

한국어 문서는 먼저 어색한 용어를 다듬고, 다음으로 문장 길이와 호흡을 손본다.
수치, 색상, 코드 이름, 명령, 링크, 기술 용어의 뜻은 바꾸지 않는다. 이미 자연스러운
문장은 그대로 둔다.

## 오류와 대체 동작

- 저장된 테마를 읽지 못하면 `system` 설정을 사용한다.
- 경로에 맞는 언어가 없으면 기존 404 화면을 보여 준다.
- `IntersectionObserver`를 쓸 수 없으면 영역과 푸터 내용을 처음부터 보여
  준다.
- Theme Workbench가 초기화되기 전에는 첫 번째 탭 내용을 기본으로 보여 준다.
- 콘텐츠 필드가 빠지거나 네 DESIGN 문서의 토큰이 다르면 빌드를 실패시킨다.

## 접근성과 반응형

- 320 CSS px 이상에서 페이지 전체 가로 스크롤이 생기지 않아야 한다.
- 모든 조작 요소는 키보드로 이동하고 사용할 수 있어야 한다.
- focus-visible은 라이트·다크 테마에서 주변 색과 3:1 이상 차이가 나야 한다.
- 일반 글자는 4.5:1, 큰 글자는 3:1 이상 대비를 지킨다.
- `word-break: keep-all`을 자연어에 적용하되 코드와 URL은 안전하게 줄바꿈하거나
  해당 영역에서 스크롤한다.
- 200% text size와 30% 문장 길이 증가에서도 기능과 읽는 순서를 유지한다.

## 확인 방법

### 저장소 확인

- `npm run validate`
- `git diff --check`
- 네 DESIGN 문서의 제목 순서, token key, Component·Foundation 수 비교
- `HeroLetterGlitch`와 관련 CSS가 모두 제거됐는지 확인
- 페이지 전용 상호작용이 `src/components/ui`를 조합하는지 확인
- 내부 조사에 사용한 고유명사와 URL이 결과물에 남지 않았는지 별도 검색
- 한국어 문서와 홈페이지에 어색한 직역어가 남지 않았는지 다시 읽기

### 브라우저 확인

네 홈페이지를 390px와 1440px에서 각각 확인한다.

- hero, Theme Workbench, 전환 문장, FAQ, CTA가 해당 언어로 표시됨
- light, dark, system 테마가 같은 정보 순서를 유지함
- Tabs, Input, Switch, Accordion, Sheet, Dropdown Menu를 키보드로 사용 가능
- reduced motion에서 숨는 내용이 없음
- 가로 오버플로와 콘솔 오류가 없음
- Axe 검사에서 새 접근성 위반이 없음

### 배포 확인

- GitHub Pages workflow 성공
- 네 홈페이지와 대표 문서 경로가 200 응답
- 공개 페이지의 title, description, `lang`, canonical, alternate link 확인
- 로컬 브랜치, 추적 브랜치, 원격 저장소가 같은 커밋을 가리킴

## 예상 파일

- `DESIGN.md`
- `DESIGN.en.md`
- `DESIGN.jp.md`
- `DESIGN.cn.md`
- `README.md`
- `src/index.css`
- `src/pages/home-page.tsx`
- `src/components/theme-workbench.tsx`
- `src/components/site-shell.tsx`
- `src/content/home/types.ts`
- `src/content/home/ko.ts`
- `src/content/home/en.ts`
- `src/content/home/jp.ts`
- `src/content/home/cn.ts`
- `scripts/verify-site.mjs`
- `scripts/verify-scroll-scrub.mjs`

## 작업 순서

1. 이 설계 문서를 저장하고 범위를 확정한다.
2. 네 DESIGN 문서와 공용 token을 같은 값으로 맞춘다.
3. shadcn/ui Theme Workbench와 새 홈페이지 구성을 구현한다.
4. 네 언어 문구를 새 흐름에 맞춰 다듬는다.
5. 저장소, 브라우저, 공개 Pages를 차례로 확인한다.

각 단계는 관련 확인을 마친 뒤 해당 파일만 스테이징해 일반 push한다. force push와
이력 재작성은 하지 않는다.

## 제외 범위

- 84개 문서 페이지 본문의 전체 번역
- 새로운 UI 패키지나 레지스트리 배포
- shadcn/ui 소스를 자동으로 갱신하는 기능
- Component 또는 Foundation 수 변경
- 계정, 분석 도구, 서버 API 추가
- 브라우저 언어에 따른 자동 이동
