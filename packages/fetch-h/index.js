export default class Fetch {
  #baseUrl = null;
  #headers = {};
  #timeout = null;
  constructor(baseUrl, headers, time) {
    this.#baseUrl = baseUrl;
    this.#headers = {
      ...headers,
    };
    this.#timeout = time;
  }

  async #httpRequest(method, url, payload, headers) {
    try {
      // Timeout 기능
      const controller = new AbortController();
      const signal = controller.signal;
      setTimeout(() => {
        controller.abort();
      }, this.#timeout);

      const options = {
        method,
        headers: headers ? headers : this.#headers,
        signal,
      };
      if (payload) {
        // FormData 일시 직렬화 X
        if (payload instanceof FormData) {
          options.body = payload;
        } else {
          // 객체를 스트링으로 body 직렬화
          options.body = JSON.stringify(payload);
        }
      }

      const response = await fetch(this.#baseUrl + url, options);
      if (!response.ok) {
        throw new Error(`Error status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      if (error.name === 'AbortError') {
        // TimeOut Error
        throw new Error(`Timeout Error: ${error}`);
      } else {
        // Network Error
        throw new Error(`Network Error: ${error}`);
      }
    }
  }

  get(url, data, headers) {
    const parseUrl = data ? parseUrlAndParam(url, data) : url;
    return this.#httpRequest('GET', parseUrl, null, headers);
  }
  post(url, data, headers) {
    return this.#httpRequest('POST', url, data, headers);
  }
  put(url, data, headers) {
    return this.#httpRequest('PUT', url, data, headers);
  }
  patch(url, data, headers) {
    return this.#httpRequest('PATCH', url, data, headers);
  }
  delete(url, headers) {
    return this.#httpRequest('DELETE', url, null, headers);
  }
}

function parseUrlAndParam(url, data) {
  // 쿼리파라미터 & 쿼리스트링 파싱
  if (!data) return url;

  if (data !== null && typeof data === 'object') {
    const queryString = objectToQueryString(data);
    return `${url}?${queryString}`;
  } else {
    return `${url}/${data}`;
  }
}
export function objectToQueryString(obj) {
  const queryParams = [];

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const encodedKey = encodeURIComponent(key);
      const encodedValue = encodeURIComponent(obj[key]);

      queryParams.push(`${encodedKey}=${encodedValue}`);
    }
  }

  return queryParams.join('&');
}
/////////////////////////////////////////////////////////////////

// 별도 파일 분리
// ex : http.js
const instanceA = new Fetch(
  'https://jsonplaceholder.typicode.com',
  {
    'Content-Type': 'application/json; charset=utf-8',
  },
  5000,
);
const instanceB = new Fetch(
  'https://test.co.kr',
  {
    'Content-Type': 'application/json; charset=utf-8',
  },
  5000,
);

// 별도 파일 분리
// ex : /api/todo.js
// API 별 export 해서 사용
export const getTodos = () => instanceA.get(`/posts`);
export const postTodos = data => instanceA.post(`/posts`, data);

// 호출하는부분
async function test() {
  const obj = {
    title: 'foo',
    body: 'bar',
    userId: 1,
  };
  const todoList = await getTodos();
  console.log(todoList);
  await postTodos(obj);
}
test();
