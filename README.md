# git 사용 방법

## git 설치하기

> 💡 Git 다운로드 링크: https://git-scm.com/downloads

## git 사용하기

1. 터미널에 프로젝트 폴더 생성 및 이동 후, 저장소 초기화 하기

   > $git init

2. git 상태확인하기

   > $git status

3. git 이력 확인하기
   > $git log

\*\*❗️ 파일 변경 후, 파일을 staging area에 추가할 수 있도록 꼭 add를 해야한다.

4. 변경 파일 add 하기

   > $git add . //모든 파일 add
   > $git -A // 모든 변경 이력(파일, 폴더) 모두 add
   > $git {파일이름} // 특정 파일만 add

5.commit 하기

> 한 줄 메모 남기기 : commit -m '남길 내용'

6. git 연동하기
   _처음 프로젝트 시작할 때_

   > $git remote add origin {repository git 주소}

7. push 하기

   > $git push origin {branch name}

8. branch 생성하기

   > $git branch {생성할 branch name}

9. branch 이동

   > $git checkout {이동할 branch name}

10. branch 현재 위치 확인 및 branch 목록 확인

    > $git branch
