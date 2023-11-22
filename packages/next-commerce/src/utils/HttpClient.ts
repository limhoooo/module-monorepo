type HttpHeaders = 'Content-Type' | 'Authorization' | 'Accept' | 'Cookie';
type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
type HttpHeadersMap = {
  [Key in HttpHeaders]?: string;
};
export type FetchResponse<T> = PartialPick<FetchState, 'status'> & {
  response: T;
};

export type RequestOptions = PartialPick<FetchState, 'url'>;
type PromiseFetchResponse = Promise<FetchResponse<object>>;

interface FetchState {
  baseUrl: string;
  headers: HttpHeadersMap | {};
  timeout: number;
  url: string;
  method: HttpMethod;
  params: object;
  payload: object;
  status: 'success' | 'fail';
  statusCode: number;
  errorName: string;
  errorMsg: Error;
}

interface FetchMethod {
  httpRequest: (options: RequestOptions) => PromiseFetchResponse;
  handleResponse: (
    response: FetchResponse<object | null>,
  ) => FetchResponse<object | null>;
  handleRequestError: (error: Error) => FetchResponse<null>;
  setBaseUrl: (baseUrl: string) => void;
  setHeaders: (headers: FetchInstance['headers']) => void;
  setRequestTimeout: () => AbortSignal;
  setTimeout: (timeout: number) => void;
  get: (options: RequestOptions) => PromiseFetchResponse;
  post: (options: RequestOptions) => PromiseFetchResponse;
  put: (options: RequestOptions) => PromiseFetchResponse;
  patch: (options: RequestOptions) => PromiseFetchResponse;
  delete: (options: RequestOptions) => PromiseFetchResponse;
}

export type FetchInstance = Pick<
  FetchState,
  'baseUrl' | 'headers' | 'timeout'
> &
  FetchMethod;

export default class Fetch implements FetchInstance {
  baseUrl: string;
  headers: FetchInstance['headers'];
  timeout: number;

  constructor() {
    this.baseUrl = '';
    this.headers = {};
    this.timeout = 5000;
  }

  async httpRequest({
    method,
    url,
    payload,
    headers,
  }: RequestOptions): Promise<FetchResponse<any>> {
    try {
      const signal = this.setRequestTimeout();
      const options: RequestInit = {
        method,
        headers: headers ? headers : this.headers,
        signal,
      };

      if (payload) options.body = parsePayload(payload);

      const parsedUrl = this.baseUrl ? this.baseUrl + url : url;
      const response = await fetch(parsedUrl, options);

      if (!response.ok) {
        return this.handleResponse({
          status: 'fail',
          statusCode: response.status,
          response: null,
        });
      }

      const data = await response.json();
      return this.handleResponse({
        status: 'success',
        statusCode: response.status,
        response: data,
      });
    } catch (error) {
      return this.handleRequestError(error);
    }
  }

  handleResponse({
    status,
    statusCode,
    response,
  }: FetchResponse<object | null>) {
    return {
      status,
      statusCode,
      response,
    };
  }

  handleRequestError(error: any): FetchResponse<null> {
    return {
      status: 'fail',
      errorName: error.name,
      errorMsg: error,
      response: null,
    };
  }

  setBaseUrl(baseUrl: string): void {
    this.baseUrl = baseUrl;
  }

  setHeaders(headers: FetchInstance['headers']): void {
    this.headers = headers;
  }

  setRequestTimeout() {
    const controller = new AbortController();
    setTimeout(() => {
      controller.abort();
    }, this.timeout);
    return controller.signal;
  }

  setTimeout(timeout: number): void {
    this.timeout = timeout;
  }

  async get({ url, params, headers }: RequestOptions) {
    const parsedUrl = params ? parseUrlAndParam({ url, params }) : url;
    return this.httpRequest({ method: 'GET', url: parsedUrl, headers });
  }

  async post({ url, payload, headers }: RequestOptions) {
    return this.httpRequest({ method: 'POST', url, payload, headers });
  }

  async put({ url, payload, headers }: RequestOptions) {
    return this.httpRequest({ method: 'PUT', url, payload, headers });
  }

  async patch({ url, payload, headers }: RequestOptions) {
    return this.httpRequest({ method: 'PATCH', url, payload, headers });
  }

  async delete({ url, headers }: RequestOptions) {
    return this.httpRequest({ method: 'DELETE', url, headers });
  }
}

function parseUrlAndParam({
  url,
  params,
}: {
  url: string;
  params?: Record<string, any> | string;
}): string {
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

function parseObjectToQueryString(obj: Record<string, any>): string {
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

function parseArrayToQueryString(arr: string[]): string {
  return arr.join('&');
}

function parsePayload(payload: object): FormData | string {
  if (payload instanceof FormData) {
    return payload;
  } else {
    return JSON.stringify(payload);
  }
}
