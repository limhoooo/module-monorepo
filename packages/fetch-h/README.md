## component-h

fetch api 의 보일러플레이트 코드를 추상화하여 <br>
Http 통신을 간단히 사용할수있게 모듈화

### NPM

```
npm i fetch-h
```

### 지원 기능

Http Method<br>
GET POST DELETE PUT PATCH

### 사용예제

```
const fetch = new Fetch
// fetch 설정
fetch.setBaseUrl('');
fetch.setTimeout(5000);
fetch.setHeaders({ 'Content-Type': 'application/json; charset=utf-8' });

fetch.get({ url: `/api/` })
fetch.post({ url: `/api/`,params})
fetch.put({ url: `/api/`,params})
fetch.delete({ url: `/api/${params}`})
fetch.patch({ url: `/api/`,params})
```
