# 웹-네이티브 통신 프로토콜

`sendMessageToWebView` : 네이티브 앱에서 웹뷰로 메시지를 보내는 함수
`sendMessageToNative` : 웹뷰에서 네이티브 앱으로 메시지를 보내는 함수

## 1. 메시지 구조

웹과 네이티브 환경 사이에서 교환되는 메시지는 다음 JSON 구조를 따라야 합니다:

```json
{
    "type": "<메시지_타입>",
    "payload": <페이로드_객체>
}
```

- `type`: 메시지 타입을 나타내는 문자열 식별자입니다.
- `payload`: 메시지 타입에 관련된 데이터를 포함하는 객체입니다.

## 2. 메시지 타입

### 2.1 TOKEN

네이티브 앱에서 웹 애플리케이션으로 인증 토큰을 전송할 때 사용합니다.

구조:

```json
{
  "type": "TOKEN",
  "payload": {
    "token": "<토큰_문자열>"
  }
}
```

### 2.2 PAGE_CHANGE

애플리케이션 내 페이지 변경을 요청할 때 사용합니다.

구조:

```json
{
  "type": "PAGE_CHANGE",
  "payload": {
    "page": "<페이지_식별자>",
    "id": "<선택적_ID>"
  }
}
```

유효한 `page` 값:

- `"myroute"`: 내 루트 페이지
- `"search"`: 탐색 페이지
- `"route"`: 루트 상세 페이지 (`id` 필요)

`page`가 `"route"`일 경우 `id` 필드가 필요합니다.

## 3. 통신 흐름

### 3.1 네이티브에서 웹으로

1. 토큰 전송:

   - 인증 성공 시 네이티브 앱에서 웹 애플리케이션으로 TOKEN 메시지를 전송합니다.
   - 로그아웃 시 TOKEN payload에 빈 값 ('') 을 넣어 전송합니다.

### 3.2 웹에서 네이티브로

1. 페이지 변경 요청:
   - 웹 애플리케이션에서 앱 내 네비게이션을 요청하기 위해 PAGE_CHANGE 메시지를 전송합니다.

## 4. 메시지 예시

### 4.1 네이티브에서 웹으로 토큰 전달

```json
{
  "type": "TOKEN",
  "payload": "토큰 값"
}
```

### 4.2 홈 화면 - 내 여행 루트 기록 클릭

```json
{
  "type": "PAGE_CHANGE",
  "payload": {
    "page": "myroute"
  }
}
```

### 4.3 홈 화면 - 다른 사람 루트 구경 클릭

```json
{
  "type": "PAGE_CHANGE",
  "payload": {
    "page": "search"
  }
}
```

### 4.4 홈 화면 - 추천 루트, 인기 루트

```json
{
  "type": "PAGE_CHANGE",
  "payload": {
    "page": "route",
    "id": "해당 루트 아이디"
  }
}
```

### 4.5 마이메이지 - 내 루트 항목 클릭

```json
{
  "type": "PAGE_CHANGE",
  "payload": {
    "page": "route",
    "id": "해당 루트 아이디"
  }
}
```
