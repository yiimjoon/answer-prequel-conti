# 최대표 업무 서류 3종 (4편 소품)

최대표(국선생)가 "나 바빠" 하며 당겨 오는 자기 업무 서류. 촬영용 예시이고 실제 회사 자료가 아니다.
숫자 · 경쟁사(A사 · B사 · C사) · 조사 결과는 모두 지어낸 값이다.
모두 A4 세로 4장(1쪽 표지 요약 + 2~4쪽 상세). PDF를 그대로 인쇄하면 된다.

| 파일 | 제목 | 탑뷰(E4-25) 자리 |
|---|---|---|
| `doc1-gukseonsaeng-rebranding.pdf` | 국선생 리브랜딩 추진 계획 | 맨 왼쪽 |
| `doc2-bibidang-new-brand.pdf` | 비비당 신규 브랜드 런칭 계획 | 가운데 |
| `doc3-overseas-franchise.pdf` | 해외 가맹 사업 추진 계획 | 맨 오른쪽 |

`preview-three-docs-topview.jpg` 는 세 장의 1쪽을 탑뷰처럼 나무 책상 위에 나란히 놓은 미리보기,
`preview-docN-p1.png` ~ `p4.png` 는 쪽별 미리보기다.

## 쓰이는 컷
- E4-24 "나 바빠": 대표 오른쪽(화면 왼쪽)에 놓인 업무 서류를 당긴다
- E4-25 탑뷰: 왼쪽부터 국선생 리브랜딩 · 비비당 · 해외 가맹 (이름 자막은 후작업)
- E4-26~29 앤써가 가까운 서류를 오른손으로 탕 짚고, 카메라가 서류 세 장에서 얼굴로 틸트 업
- 서류 넘기던 손을 멈추는 장면: 2~4쪽이 실제 보고서 속지처럼 표 · 그래프로 채워져 있다

## 쪽 구성

**1쪽(세 문서 공통)** 대외비 · 부서명 · 문서번호 · 결재란(담당/팀장/대표), 큰 제목, 사진 한 장, Ⅰ~Ⅲ 요약.
대표 결재 도장은 doc1 · doc2 에만 찍혀 있다(doc3 은 아직 결재 중이라 빈칸).
2~4쪽은 위에 쪽 머리(문서명 / 대외비), 아래에 `- 2 -` ~ `- 4 -`.

| 문서 | 2쪽 | 3쪽 | 4쪽 |
|---|---|---|---|
| doc1 리브랜딩 | Ⅳ 현황 분석: 연차별 매장 현황 표, 고객 연령대 2021↔2026 막대그래프, 항목별 만족도 표 | Ⅴ 세부 개선안: 현행↔개선 비교표, BI 현행/개선(안) 시안 + 색상 견본, 매장 유형(A/B/C형)별 적용 기준 표 | Ⅵ 소요 예산 표(2026~2028) · 세부 추진 일정 간트표, Ⅶ 기대 효과 및 리스크 표 |
| doc2 비비당 | Ⅳ 시장 분석: 1인 외식 시장 규모(막대)+1인 가구 비중(꺾은선) 그래프, 경쟁 브랜드 비교표, 점심 메뉴 선택 기준 가로막대 | Ⅴ 메뉴별 원가율 표 + 비용 구조 100% 막대, Ⅵ 1호점 입지 후보 3곳 비교 평가표 | Ⅶ 표준 매장 운영 모델 · 월 손익 추정 표, Ⅷ 가맹 확산 4단계 + 누적 매장 수 그래프, Ⅸ 향후 계획 |
| doc3 해외 가맹 | Ⅳ 국가별 시장 비교표 + 평가 점수 막대그래프, Ⅴ 진출 방식(직영/마스터 프랜차이즈/합작) 비교표 | Ⅵ 단계별 추진 일정 간트표(2026 4Q~2028 4Q), Ⅶ 국가별 현지화 과제 표, Ⅷ 추진 체계도 | Ⅸ 예상 손익 표 + 매출/영업이익 그래프, Ⅹ 리스크 대응 표 · 건의 사항 |

그래프는 전부 html 안의 인라인 SVG(엑셀 차트를 한글에 붙여 넣은 모양)라 외부 파일이 필요 없다.

## 모양
앤써 사업안(`../business-plan/business-plan-hwp.pdf`)과 같은 한글 보고서 양식(`../business-plan/hwp.css`)을 쓰고,
회사 문서처럼 보이게 하는 장치(대외비 · 결재란 · 쪽 머리 · 표/그림 번호 · 간트표 등)는 `ceo.css` 에 있다.
탑뷰에서 세 장이 바로 구분되도록 1쪽은 제목을 크게, 가운데에 사진을 한 장씩 크게 넣었다.

글꼴은 HY헤드라인M · HY신명조 · HY중고딕 · HY견고딕 . 한컴오피스가 깔린 PC 에서 PDF 로 뽑았다.
PDF 에 H2hdrM · H2mjsM · H2gtrM · H2gtrE 만 들어가 있다(대체 글꼴 없음).

## 사진 · 도장
1쪽 사진 세 장은 **AI(Codex 이미지 생성)로 만든 예시 사진**이다. 실제 매장 · 음식 사진이 생기면
`img/` 의 같은 이름 jpg 를 바꿔 넣기만 하면 된다(칸 비율 약 2.28:1, `object-fit: cover`).

| 파일 | 쓰는 곳 | 비고 |
|---|---|---|
| `img/storefront.jpg` | doc1 매장 외관 | 간판 글자 "국선생" 정상 |
| `img/bibimbap.jpg` | doc2 대표 메뉴 | |
| `img/worldmap.jpg` | doc3 진출 지도 | 점 대비를 진하게 보정. 위의 핀 · 점선 · 지명은 html 의 SVG 로 겹쳐 그림 |

생성 원본 PNG 와 `img/_log/`(생성 기록)는 용량이 커서 저장소에 올리지 않는다(`.gitignore`). html 은 `img/*.jpg` 와 `img/seal-stamp.png` 만 쓴다.

도장(법인 인감)도 Codex 로 만든 이미지(`img/seal-stamp.png`, 투명 배경)다. 잉크 얼룩 · 빈 곳 · 번짐이 실제 찍은 자국처럼 나왔다.
결재란 대표 칸 위에 살짝 걸치게 놓고 `mix-blend-mode: multiply` 로 선 위에 찍힌 것처럼 보이게 했다. doc1 은 -7°, doc2 는 +4° 기울였다.
도장 글자는 전서체 흉내라 가까이 보면 완벽한 맞춤법은 아니다(실제 인감도 알아보기 어려운 편이라 화면에선 자연스럽다).

### 이미지 생성 프롬프트
- **storefront** — Realistic DSLR photograph, landscape 3:2, eye-level straight-on view of the front of a small modern Korean gukbap (Korean soup and rice) restaurant on a Seoul street, daytime, overcast soft light. A wide dark charcoal signboard across the top with large clean white Hangul letters reading exactly 국선생 (three syllables, correct Korean spelling), small line '한식 · 국밥' beside it. Warm wood frame, large glass windows with warm interior light, a glass door in the middle, a deep red fabric awning, two small potted plants by the door, clean sidewalk. Looks like a real franchise HQ's internal report photo: natural, slightly muted colors, no people, no other text or logos, no watermark.
- **bibimbap** — Realistic food photograph shot exactly top-down (overhead flat lay), landscape 3:2. A hot stone dolsot bibimbap in a black stone bowl on a wooden tray, centered: neatly arranged sections of spinach, julienned carrot, bean sprouts, bracken (gosari), shiitake mushrooms, zucchini, a little beef, a sunny-side-up egg with bright yolk in the center, sesame seeds. Beside it a small dish of gochujang and a pair of stainless steel Korean chopsticks and spoon. Light warm beige table. Soft natural window light, appetizing but natural, like a menu photo in a company's new brand plan. No text, no logo, no watermark.
- **worldmap** — Clean flat world map graphic for a business report, landscape 3:2, Pacific-centered projection (Asia on the left half, the Pacific Ocean in the middle, North and South America on the right half). Continents filled with a light cool gray dot-matrix pattern (small round dots), ocean very pale blue-gray almost white, subtle, minimal, no borders between countries, no text, no labels, no pins, no legend, no watermark. Accurate recognizable continent shapes.
- **seal** (첫 시도는 모델 용량 초과로 실패, 다시 돌려 성공) — Transparent background cutout PNG. A realistic ink impression of an official Korean corporate seal (법인인감) stamped on paper, seen straight-on: round double-ring seal about 1:1, vermilion red ink (#D4161C). Outer ring Hangul text in traditional seal-script (전서체) style around the circle reading 주식회사 국선생, inner center reading 대표이사인 in seal script. Real stamp physics: slightly uneven ink density, a few faint gaps where the ink didn't transfer, slightly blurred edges, a little ink pooling, very slightly rotated. Only the red ink marks, everything else fully transparent. No paper texture in the background, no shadow.

## 인쇄 메모
- 120g 이상 무광지, 단면. 문서마다 4장이다. 넘기는 장면을 생각하면 왼쪽 위 스테이플러 1개를 권한다
  (탑뷰 · 탕 짚는 컷에서 낱장이 필요하면 1쪽만 따로 한 장 더 뽑아 둔다).
- E4-26 손으로 탕 치는 테이크가 여러 번이면 구겨질 수 있으니 넉넉히 뽑아 둔다.
