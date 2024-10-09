# apple Login Plugin

## Setting Up

### 1. apple Developers Setup

- **apple Developers** 사이트에서 설정을 시작합니다.  
  [apple Developers](https://developer.apple.com/account/resources/certificates/list)

#### 1.1 developer 설정

1. 인증서> Identifiers > Sign In with Apple 체크하기

### 2. apple Plugin 설정

#### 2.1 Android 설정

- Android 설정 해당 사항이 없습니다. (X)

#### 2.2 iOS 설정

1. xcode> Siging & Capabilities > Capability > Sign in with Apple 추가

---

## Usage Example

```javascript
let emailObject = aawait appleLogin.appleLogin();

console.log(emailObject.email);
```
