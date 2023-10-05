export default class Fetch {
  #baseUrl = '';
  #headers = {};
  #timeout = 5000;
  constructor() {
    this.#baseUrl = '';
    this.#headers = {};
    this.#timeout = 5000;
  }

  async #httpRequest({ method, url, payload, headers }) {
    try {
      const signal = this.#setRequestTimeout();
      const options = {
        method,
        headers: headers ? headers : this.#headers,
        signal,
      };

      if (payload) options.body = parsePayload(payload);

      const parseurl = this.#baseUrl ? this.#baseUrl + url : url;
      const response = await fetch(parseurl, options);
      if (!response.ok) {
        return this.#handleResponse({
          status: 'fail',
          statusCode: response.status,
        });
      }
      const data = await response.json();
      return this.#handleResponse({
        status: 'success',
        statusCode: response.status,
        data,
      });
    } catch (error) {
      return this.#handleRequestError(error);
    }
  }

  #handleResponse({ status, statusCode, data }) {
    return {
      status,
      statusCode,
      response: data,
    };
  }
  #handleRequestError(error) {
    return {
      status: 'fail',
      errorName: error.name,
      errorMsg: error,
    };
  }
  setBaseUrl(baseUrl) {
    this.#baseUrl = baseUrl;
  }
  setHeaders(headers) {
    this.#headers = headers;
  }
  #setRequestTimeout() {
    // Timeout 기능
    const controller = new AbortController();
    setTimeout(() => {
      controller.abort();
    }, this.#timeout);
    return controller.signal;
  }
  setHeadersConfig(config) {
    if (Array.isArray(config)) {
      for (const { name, data } of config) {
        this.#headers[name] = data;
      }
    } else {
      this.#headers[config.name] = config.data;
    }
  }

  setTimeout(timeout) {
    this.#timeout = timeout;
  }
  get({ url, param, headers }) {
    const parseUrl = param ? parseUrlAndParam({ url, param }) : url;
    return this.#httpRequest({ method: 'GET', url: parseUrl, headers });
  }
  post({ url, payload, headers }) {
    return this.#httpRequest({ method: 'POST', url, payload, headers });
  }
  put({ url, payload, headers }) {
    return this.#httpRequest({ method: 'PUT', url, payload, headers });
  }
  patch({ url, payload, headers }) {
    return this.#httpRequest({ method: 'PATCH', url, payload, headers });
  }
  delete({ url, headers }) {
    return this.#httpRequest({ method: 'DELETE', url, headers });
  }
}

function parseUrlAndParam({ url, data }) {
  // 쿼리파라미터 & 쿼리스트링 파싱
  if (!data) return url;

  if (data !== null && typeof data === 'object') {
    const queryString = Array.isArray(data)
      ? parseArrayToQueryString(data)
      : parseObjectToQueryString(data);
    return `${url}?${queryString}`;
  } else {
    return `${url}/${data}`;
  }
}
function parseObjectToQueryString(obj) {
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
function parseArrayToQueryString(arr) {
  return arr.join('&');
}
function parsePayload(payload) {
  if (payload instanceof FormData) {
    // FormData 일시 직렬화 X
    return payload;
  } else {
    // 객체를 스트링으로 body 직렬화
    return JSON.stringify(payload);
  }
}

/////////////////////////////////////////////////////////////////

// class InitTodoFetch extends Fetch {
//   constructor() {
//     super();
//     this.setBaseUrl('https://jsonplaceholder.typicode.com');
//     this.setTimeout(5000);
//     this.setHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
//     this.setHeadersConfig([
//       {
//         name: 'Authorization',
//         data: 'Bearer a444sdvsadvklasdvjlaksdvjlkasdvjlk',
//       },
//       {
//         name: 'Cookie',
//         data: 'sessionid=YOUR_SESSION_ID; user_id=12345',
//       },
//       {
//         name: 'Accept',
//         data: 'application/json',
//       },
//     ]);
//   }
// }

// const instance = new InitTodoFetch();
// const getTodos = () =>
//   instance.get({
//     url: '/todos',
//   });
// const getTodosParam = (data, obj) =>
//   instance.get({
//     url: '/todos',
//     param: data,
//   });
// const postTodo = data =>
//   instance.post({
//     url: '/todos',
//     payload: data,
//   });

// async function app() {
//   const obj = {
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   };
//   const queryParamsArray = ['param1=value1', 'param2=value2', 'param3=value3'];

//   console.log(await getTodos());
//   console.log(await getTodosParam(queryParamsArray, obj));
//   console.log(await postTodo(obj));
// }
// app();
