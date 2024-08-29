# 웹-네이티브 통신 프로토콜

1. `sendMessageToWebView` : 네이티브 앱에서 웹뷰로 메시지를 보내는 함수

2. `sendMessageToNative` : 웹뷰에서 네이티브 앱으로 메시지를 보내는 함수

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

```tsx
type MessageType = 'TOKEN' | 'PAGE_CHANGE' | 'TOKEN_EXPIRED';

interface TokenPayload {
  token: string;
}

interface PageChangePayload {
  page: 'MY_ROUTE' | 'SEARCH' | 'ROUTE' | 'COUPON';
  id?: string;
}

interface NativeMessage {
  type: MessageType;
  payload: TokenPayload | PageChangePayload;
}
```

### 2.1 TOKEN

> 네이티브 앱 ➡️ 웹뷰

앱에서 웹으로 토큰을 전달할 때 사용합니다.

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

> 웹뷰 ➡️ 네이티브 앱

네이티브 앱 내 페이지 변경을 요청할 때 사용합니다.

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

- `MY_ROUTE`: 내 루트 페이지
- `SEARCH`: 탐색 페이지
- `ROUTE`: 루트 상세 페이지 (`id` 필요)
- `COUPON` : 쿠폰 페이지

### 2.3 TOKEN_EXPIRED

> 웹뷰 ➡️ 네이티브 앱

토큰이 만료되어 401 에러가 발생 시 사용합니다.

```json
{
  "type": "TOKEN_EXPIRED"
}
```

## 3. 메시지 예시

### 3.1 네이티브 앱에서 웹뷰로 토큰 전달

```json
{
  "type": "TOKEN",
  "payload": "토큰 값"
}
```

### 3.2 홈 화면 - 내 여행 루트 기록 클릭

```json
{
  "type": "PAGE_CHANGE",
  "payload": {
    "page": "MY_ROUTE"
  }
}
```

### 3.3 홈 화면 - 다른 사람 루트 구경 클릭

```json
{
  "type": "PAGE_CHANGE",
  "payload": {
    "page": "SEARCH"
  }
}
```

### 3.4 홈 화면 - 추천 루트, 인기 루트

```json
{
  "type": "PAGE_CHANGE",
  "payload": {
    "page": "ROUTE",
    "id": "해당 루트 아이디"
  }
}
```
