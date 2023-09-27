// url 받아올수있어야함
// base url 지정할수있어야함
// method (GET,POST,PUT,DELETE) 인자로 받아야함
// headers 도 설정가능해야함
// 에러처리

export default class Fetch {
  constructor(baseUrl, headers) {
    this.baseUrl = baseUrl;
    this.headers = {
      'Content-Type': 'application/json; charset=utf-8',
      ...headers,
    };
  }

  async httpRequest(method, url, payload) {
    try {
      const options = {
        method,
        headers: this.headers,
      };
      if (method !== 'GET') {
        options.body = JSON.stringify(payload);
      }
      const response = await fetch(this.baseUrl + url, options);

      if (!response.ok) {
        throw new Error(`Error status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

// async function test() {
//   const fetchApi = new fetch('https://jsonplaceholder.typicode.com', {
//     Authorization: 'aaa',
//   });

//   const aaa = await fetchApi.httpRequest('GET', '/todos/1');
//   const bbb = await fetchApi.httpRequest('POST', '/posts', {
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   });
//   console.log(aaa);
//   console.log(bbb);
// }
// test();
