# 홈페이지 국제화와 shadcn/DESIGN.md 제품 모델 설계

## 목적

Comfort Design System을 “shadcn/ui를 기본 골격으로 사용하고, 제품별
`DESIGN.md`로 시각 언어와 동작 계약을 커스터마이징하는 도구”로 명확히
설명한다. 홈페이지는 한국어를 기본으로 영어·일본어·중국어 번역을 독립 URL로
제공하고, 문구를 컴포넌트에서 분리해 텍스트 파일만 수정해도 반영되게 한다.

이번 변경은 다음 사용성 문제도 함께 해결한다.

- 푸터의 63개 컴포넌트 링크가 차지하는 과도한 세로 공간을 제거한다.
- 헤더의 언어·테마 드롭다운이 느리게 나타나는 인상을 줄인다.
- 웹사이트와 네 언어 `DESIGN.md`가 같은 제품 모델을 설명하게 한다.

## 승인된 범위

- `/`는 한국어 홈페이지다.
- `/en/`, `/jp/`, `/cn/`은 각각 영어·일본어·중국어 홈페이지다.
- 홈페이지의 헤더, 홈페이지 본문, 푸터를 활성 언어로 표시한다.
- 기존 Principles, Foundations, Components, Legal 문서 경로와 본문은 현재
  구조를 유지한다. 84개 문서 페이지 전체를 번역하지 않는다.
- 네 `DESIGN.md` 판본은 각 언어로 동일한 제품 모델과 구현 계약을 설명한다.

## 제품 메시지

핵심 흐름은 다음 세 단계로 고정한다.

1. shadcn/ui의 접근 가능한 컴포넌트 소스와 primitive를 시작점으로 삼는다.
2. `DESIGN.md`로 색상, 타이포그래피, 간격, 형태, 상태, 모션, 접근성, 콘텐츠
   규칙을 제품에 맞게 정의한다.
3. 필요한 shadcn 컴포넌트를 프로젝트에 소유한 뒤 `DESIGN.md`의 semantic
   role과 검증 계약을 적용한다.

Comfort는 shadcn/ui를 대체하는 별도 UI 라이브러리로 설명하지 않는다.
`DESIGN.md`도 shadcn 소스를 자동으로 덮어쓰는 테마 파일로 설명하지 않는다.
둘의 관계는 “기본 컴포넌트 소스 + 제품별 디자인 계약”이다.

## 정보 구조와 라우팅

### 홈페이지 로케일

```text
/       -> ko
/en/    -> en
/jp/    -> jp (lang="ja")
/cn/    -> cn (lang="zh-CN")
```

경로가 로케일의 권위 있는 입력이다. 브라우저 언어나 저장된 설정으로 루트
경로를 자동 리다이렉트하지 않는다. 따라서 공유된 URL은 항상 같은 언어를
표시하고 한국어 루트가 기본이라는 계약이 유지된다.

### 문서 경로

기존 `/principles/`, `/foundations/`, `/components/`와 상세 페이지는 prefix를
추가하지 않는다. 번역 홈페이지에서 문서로 이동하면 현재 문서 URL을 사용한다.
홈페이지 언어 메뉴는 같은 홈페이지의 다른 언어 URL로 이동한다.

### 정적 산출물

기존 84개 정적 경로에 `/en`, `/jp`, `/cn`을 추가한다. 생성기는 각 경로에
SPA 진입 HTML을 생성한다. 번역 홈페이지 HTML은 빌드 시점에 `lang`, title,
description, canonical, language alternate를 해당 언어 값으로 기록한다. verifier는
총 87개 경로와 네 홈페이지 파일의 존재 및 정적 metadata를 확인한다.

## 콘텐츠 아키텍처

홈페이지 텍스트는 컴포넌트 JSX에서 제거하고 다음처럼 언어별 모듈로 분리한다.

```text
src/content/home/
  types.ts
  ko.ts
  en.ts
  jp.ts
  cn.ts
  index.ts
```

`types.ts`는 다음 영역을 포함하는 `HomeContent` 계약을 정의한다.

- metadata와 언어 태그
- 헤더·모바일 메뉴·언어 메뉴 레이블
- hero, proof points, benefits, workflow, product proof, FAQ, CTA
- 푸터 소개, 그룹 제목, 법적 링크 레이블
- 접근성용 이름과 구조화 데이터 문구

각 언어 파일은 같은 필드 구조를 만족한다. 배열 길이와 식별자는 시각 컴포넌트가
요구하는 구조를 유지하고, 화면 문구는 해당 파일 안에서만 관리한다. 아이콘 이름,
경로, 컴포넌트 구현과 같은 비번역 데이터는 콘텐츠 파일에 중복하지 않는다.

`index.ts`는 경로에서 로케일을 판별하고 적절한 콘텐츠를 반환한다. 알 수 없는
로케일 prefix는 기존 404 계약을 따른다.

## 컴포넌트 경계

### `App`

- 현재 경로를 `{ locale, route }`로 해석한다.
- 네 홈페이지 경로에만 로케일별 `HomePage`를 렌더링한다.
- 홈페이지 metadata, canonical, alternate `hreflang`, `<html lang>`을 콘텐츠에
  맞춰 갱신한다.
- 기존 문서 metadata와 라우팅 동작은 유지한다.

### `HomePage`

- `HomeContent`를 입력으로 받아 동일한 레이아웃을 렌더링한다.
- JSX 안에 사용자에게 노출되는 영어 문장을 보관하지 않는다.
- FAQ 구조화 데이터도 동일 콘텐츠에서 생성한다.

### `SiteHeader`

- 홈페이지에서는 활성 로케일과 번역된 shell 문구를 받는다.
- 문서 페이지에서는 기존 영어 문구를 기본값으로 사용한다.
- 홈페이지의 언어 메뉴는 같은 홈페이지의 다른 언어 URL로 이동한다.
- 문서 페이지의 기존 DESIGN.md 판본 메뉴는 유지한다.
- 홈페이지에서 `DESIGN.md` 원문·번역 파일 링크는 푸터 리소스 링크로 분리한다.

### `SiteFooter`

- `Components` 그룹과 63개 상세 링크를 제거한다.
- System, Foundations, Resources, Legal만 남겨 균형 있는 4열 구조로 재배치한다.
- 홈페이지에서는 활성 언어의 소개와 그룹/링크 레이블을 사용한다.
- 문서 페이지에서는 기존 영어 기본값을 사용한다.
- 중앙 `Comfort / DESIGN.md` 시그니처와 스크롤 진입 애니메이션은 유지한다.

## 드롭다운 반응 속도

현재 공용 `DropdownMenuContent`의 700ms 전환은 언어·테마 메뉴가 늦게 뜨는
원인이다. 공용 콘텐츠 전환을 다음 계약으로 조정한다.

- 열림: 140ms 안팎
- 닫힘: 100ms 안팎
- 이동 거리: 8px에서 4px 수준으로 축소
- easing: 빠른 감속 계열
- reduced motion: 기존 전역 계약에 따라 이동과 지연 제거

키보드 초점, Escape 닫기, 외부 클릭, 메뉴 항목 선택 등 Radix 동작은 변경하지
않는다.

## DESIGN.md 동기화

`DESIGN.md`, `DESIGN.en.md`, `DESIGN.jp.md`, `DESIGN.cn.md`의 다음 부분에 같은
제품 모델을 각 언어로 반영한다.

- Overview: shadcn/ui가 기본 컴포넌트 소스임을 명시
- Components: shadcn 컴포넌트를 소유하고 semantic role을 적용하는 흐름
- Implementation Contract: `DESIGN.md`가 토큰·상태·접근성·검증을 커스터마이징
  하는 계약임을 명시
- Content & Localization: 한국어 홈페이지와 `/en`, `/jp`, `/cn` 경로 계약
- Layout: 푸터에 전체 컴포넌트 디렉터리를 반복하지 않는 간결한 sitemap 계약
- Interaction & Motion: 빠른 utility dropdown 전환 시간

한국어 `DESIGN.md`는 규범 원문이라는 기존 언어 계약을 유지한다. token key,
heading 순서, 컴포넌트 수, foundation 수는 네 판본에서 동일해야 한다.

## SEO와 접근성

- 루트 홈페이지는 `lang="ko"`, 번역 홈페이지는 각각 `en`, `ja`, `zh-CN`을
  사용한다.
- 각 홈페이지에 번역된 title과 description을 제공한다.
- canonical은 현재 언어 URL을 가리킨다.
- 네 홈페이지를 연결하는 `hreflang`과 `x-default`를 제공한다.
- 언어 전환 링크에 올바른 `hrefLang`과 `lang`을 설정한다.
- 장식 시그니처는 assistive technology에서 숨기고 기존 대체 문구를 유지한다.
- 자연어에는 `word-break: keep-all`, 코드·경로·명령에는 안전한 줄바꿈 계약을
  유지한다.

## 오류와 폴백

- 콘텐츠 맵에 없는 로케일은 한국어로 조용히 대체하지 않고 404로 처리한다.
- 브라우저 저장소가 차단되어도 경로 기반 로케일은 그대로 동작한다.
- JavaScript가 로드되기 전에도 각 정적 홈페이지 HTML은 해당 언어의 `lang`,
  title, description, canonical, language alternate를 제공한다. React가 로드된
  뒤에도 같은 값이 유지된다.
- 콘텐츠 모듈의 필수 필드가 빠지면 TypeScript 또는 verifier 단계에서 빌드를
  실패시킨다.

## 검증 전략

### 정적 검증

- 네 콘텐츠 모듈이 `HomeContent`를 만족하는지 typecheck
- `/`, `/en`, `/jp`, `/cn`과 기존 84개 경로 생성 확인
- footer source에 전체 component catalog mapping이 없는지 확인
- dropdown duration이 새 성능 계약을 만족하는지 확인
- 네 DESIGN 문서에 shadcn + `DESIGN.md` 커스터마이징 계약이 있는지 확인
- canonical, language alternate, 공개 metadata 확인

### 브라우저 검증

각 언어 홈페이지에서 다음을 확인한다.

- 1440px와 390px에서 해당 언어의 hero·header·footer 노출
- 언어 메뉴가 동일 페이지의 다른 언어 URL로 이동
- 드롭다운이 즉시 인지 가능한 속도로 열리고 키보드로 조작 가능
- 가로 오버플로 없음
- 콘솔 오류 없음
- light/dark 및 reduced-motion 동작 유지
- 접근성 자동 검사에서 새 위반 없음

### 배포 검증

- GitHub Pages workflow 성공
- 네 공개 홈페이지 URL이 200을 반환
- 배포 DOM에서 로케일별 `lang`, title, hero, canonical 확인
- 로컬·tracking·live remote parity `0 0` 확인

## 구현 체크포인트

1. `docs`: 이 설계 문서를 저장하고 승인된 범위를 고정한다.
2. `feat(i18n)`: 콘텐츠 타입과 네 언어 홈페이지 경로·metadata를 구현한다.
3. `refactor(shell)`: 번역 가능한 shell과 간소화된 푸터를 구현한다.
4. `perf(menu)`: 공용 드롭다운 전환을 단축하고 회귀 검증을 추가한다.
5. `docs`: 네 DESIGN 문서와 저장소 설명을 제품 모델에 맞춰 동기화한다.
6. 필요한 경우 최종 브라우저/배포 검증에서 발견한 결함을 별도 수정한다.

각 체크포인트는 관련 검증을 통과한 뒤 명시적 경로만 스테이징하고 즉시
`origin/main`에 일반 push한다. force push와 이력 재작성은 하지 않는다.

## 제외 범위

- 84개 문서 페이지의 전체 번역
- 브라우저 언어 기반 자동 리다이렉트
- shadcn/ui와 별도의 패키지 배포 또는 registry 구축
- `DESIGN.md`가 사용자 코드를 자동으로 덮어쓰는 생성기
- 현재 카탈로그의 component/foundation 개수 변경
