type HttpHeaders = 'Content-Type' | 'Authorization' | 'Accept' | 'Cookie';
type HttpHeadersMap = {
  [Key in HttpHeaders]?: string;
};
type RequestOptions = RequestInit & {
  url: string;
  params?: object;
  cancelKey?: string;
};
export type FetchResponse<T> = {
  status?: 'success' | 'fail';
  statusCode?: number;
  response?: T;
  errorName?: string;
  errorMsg?: Error;
};
type FetchApis = {
  cancelKey: string;
  abortController: AbortController;
};
export default class Fetch {
  baseUrl: string | '';
  private headers: HttpHeaders | {};
  private fetchApis: FetchApis[];

  constructor() {
    this.baseUrl = '';
    this.headers = {};
    this.fetchApis = [];
  }

  private async httpRequest<T>({
    method,
    url,
    headers,
    body,
    cancelKey,
  }: RequestOptions): Promise<FetchResponse<T>> {
    try {
      const controller = new AbortController();
      // cancelKey 가 있을시
      // this.fetchApis 에 {cancelKey , AbortController} 를 배열에 담아둠
      // fetch 요청중 cancelApi() || allCancelApi() 호출시
      // cancelKey 에 맞는 요청을 abort() 시킴
      if (cancelKey) {
        this.fetchApis = [
          ...this.fetchApis,
          { cancelKey, abortController: controller },
        ];
      }
      const options: RequestInit = {
        method,
        headers: headers ? headers : this.headers,
        signal: controller.signal,
      };

      if (body) {
        options.body = parsePayload(body);
      }

      const parsedUrl = this.baseUrl ? this.baseUrl + url : url;
      const response = await fetch(parsedUrl, options);

      if (!response.ok) {
        return this.handleResponse<T>({
          status: 'fail',
          statusCode: response.status,
        });
      }

      const data = await response.json();
      return this.handleResponse({
        status: 'success',
        statusCode: response.status,
        response: data,
      });
    } catch (error) {
      return this.handleRequestError<T>(error);
    }
  }

  private handleResponse<T>({
    status,
    statusCode,
    response,
  }: FetchResponse<T>) {
    return {
      status,
      statusCode,
      response,
    };
  }

  private handleRequestError<T>(error: any): FetchResponse<T> {
    return {
      status: 'fail',
      errorName: error.name,
      errorMsg: error,
    };
  }

  setBaseUrl(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  setHeaders(headers: HttpHeadersMap) {
    this.headers = headers;
  }

  cancelApi(cancelKey?: string) {
    const cancelApi = this.fetchApis.find(api => api.cancelKey === cancelKey);
    cancelApi?.abortController.abort();
  }
  allCancelApi() {
    this.fetchApis.forEach(api => api.abortController.abort());
  }
  async get<T>({ url, params, headers, cancelKey }: RequestOptions) {
    const parsedUrl = params ? parseUrlAndParam({ url, params }) : url;

    return this.httpRequest<T>({
      method: 'GET',
      url: parsedUrl,
      headers,
      cancelKey,
    });
  }

  async post<T>({ url, body, headers, cancelKey }: RequestOptions) {
    return this.httpRequest<T>({
      method: 'POST',
      url,
      body,
      headers,
      cancelKey,
    });
  }

  async put<T>({ url, body, headers, cancelKey }: RequestOptions) {
    return this.httpRequest<T>({
      method: 'PUT',
      url,
      body,
      headers,
      cancelKey,
    });
  }

  async patch<T>({ url, body, headers, cancelKey }: RequestOptions) {
    return this.httpRequest<T>({
      method: 'PATCH',
      url,
      body,
      headers,
      cancelKey,
    });
  }

  async delete<T>({ url, headers, cancelKey }: RequestOptions) {
    return this.httpRequest<T>({ method: 'DELETE', url, headers, cancelKey });
  }
}

function parseUrlAndParam({
  url,
  params,
}: {
  url: string;
  params?: Record<string, any> | string;
}) {
  if (!params) return url;

  if (params !== null && typeof params === 'object') {
    const queryString = Array.isArray(params)
      ? parseArrayToQueryString(params)
      : parseObjectToQueryString(params);
    return `${url}?${queryString}`;
  } else {
    return `${url}/${params}`;
  }
}

function parseObjectToQueryString(obj: Record<string, any>) {
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

function parseArrayToQueryString(arr: string[]) {
  return arr.join('&');
}

function parsePayload(payload: BodyInit) {
  if (payload instanceof FormData) {
    return payload;
  } else {
    return JSON.stringify(payload);
  }
}
