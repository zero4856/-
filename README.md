# 제로상담소 익명상담 설치 안내

## GitHub 업로드
압축을 풀고 안의 파일 전부를 `zero4856/zero` 저장소의 현재 `index.html`과 같은 위치에 올리세요.

기존 `index.html`은 새 파일로 교체합니다.

업로드할 파일:
- index.html
- write.html
- check.html
- admin.html
- style-board.css
- app.js
- config.js
- supabase-setup.sql

## Supabase 연결
1. Supabase에서 새 프로젝트를 만듭니다.
2. SQL Editor에서 `supabase-setup.sql` 전체 내용을 실행합니다.
3. Authentication → Users에서 관리자 계정을 생성합니다.
4. Project Settings → API에서 Project URL과 anon public key를 확인합니다.
5. `config.js`의 두 값을 바꾼 뒤 GitHub에 다시 올립니다.

## 접속 주소
- 메인: https://zero4856.github.io/zero/
- 상담 신청: https://zero4856.github.io/zero/write.html
- 답변 확인: https://zero4856.github.io/zero/check.html
- 관리자: https://zero4856.github.io/zero/admin.html

## 중요
`service_role` 키는 절대 GitHub에 올리지 마세요.
