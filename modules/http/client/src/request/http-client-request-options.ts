/**
 * HTTP client request options
 */
export type HttpClientRequestOptions = Omit<RequestInit, 'headers' | 'method' | 'signal'>;
