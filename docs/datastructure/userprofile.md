---
title: '유저 프로필 데이터 구조'
target: '0.1 (pre-1)'
---
# User Profile
유저 프로필 데이터 구조  

유저 프로필 데이터는 전남대학교 포털로부터 필요한 데이터를 수집하기 위해서 저장한 데이터 또는 수집한 데이터입니다. 데이터는 로컬 스토리지에 저장됩니다.  

> 프로그램 설계 목적에 전남대학교 포털과의 연계 서비스가 있었던 만큼, 이 프로젝트는 전남대학교 포털 연계 기능만 지원하는 방향으로 진행하였습니다.  

## userprofileID
```js
localStorage.getItem('userprofileID')
```
사용자의 학번입니다. 전남대학교 포털의 로그인 아이디가 학번이므로, 그대로 포털 로그인에 활용할 수 있습니다.  

> 포털 비밀번호는 수집하지 않습니다. 필요할 때 사용자가 직접 입력하는 방식으로 사용자 본인 인증 기능도 함께 수행하도록 의도하였습니다.  

## userprofileName
```js
localStorage.getItem('userprofileName')
```
사용자 이름입니다. 

## userprofileImgPath (미구현됨)
```js
localStorage.getItem('userprofileImgPath')
```
사용자 프로필 사진의 경로입니다. 이것은 이후, 프로젝트 진행 상황에 따라 프로필 사진을 바이너리로 저장하는 방식으로 변경될 수 있습니다.

## userprofileMajor
```js
localStorage.getItem('userprofileMajor')
```
사용자의 전공 정보입니다.

## userprofileExists
```js
localStorage.getItem('userprofileExists')
```
사용자 정보가 최소한 한번이라도 기록된 적 있는지 기록합니다.  
이 값은 `null` 또는 `(anything)`이어야 합니다.  
