# React_Study

## React 특징
1. 가독성
2. 재사용성
3. 유지보수성

## 개발환경구축
- node.js 설치
    npm vs npx
    npx : 최신상태유지 / 공간활용도 / 일회성
    - npm install -g create-react-app
    - sudo npm install -g create-react-app (권한 문제 발생시)
    - create-react-app -V (확인)
    - create-react-app . (사용폴더 내에서 사용)
    - npm run reactstart (실행)

## QnA
1. import시 중괄호 사용 유무의 차이
 : 변수를 보내는 방식에 따른 차이
ex )
    export default A; ---- X
    export B; ---- O
default 붙은경우 중괄호 사용 X
default 붙지않은경우 중괄호 사용 O
