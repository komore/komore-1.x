/**
 * HTTP client request options
 */
export type HttpClientRequestOptions = Omit<Request, 'headers' | 'method' | 'signal' | 'url'>;
