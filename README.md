# 주사위 게임

## 프로젝트 셋팅

Update: index.js, index.html
Delete: react-app 기본 파일 삭제

### index.html

html lang = ko, title = 주사위 게임

### index.js

간단하게 `<h1>` 태그 사용해서 "안녕 리액트" 출력

## 24.11.06 프로젝트 셋팅

Update: index.js
App.js, Dice.js, assets/ 이미지 파일

### index.js

<App />컴포넌트를 사용할 수 있도록 변경

### App Component

기본 컴포넌트.

### Dice Component

주사위 이미지를 보여주는 컴포넌트
`import diceBlue01 from './assets/dict-blue-1.svg`

## 24.11.07 프로젝트 셋팅

### App Component

React의 useState 을 추가

- random 으로 주사위의 숫자를 변경
- 나온 숫자들의 총점 구하기
- 나온 숫자 기록: `[...gameHistory, nextNum]`로 새로운 참조형 값을 만듦.

## 24.11.08 프로젝트 셋팅

### Board Component

주사위를 출력하는 컴포넌트로 분리

### App Component

기존 버튼을 하나로 만든 후 두 개의 Board가 작동할 수 있도록 변경

## 24.11.10 프로젝트 셋팅

### CSS

각 컴포넌트에 css를 통해 디자인 적용
