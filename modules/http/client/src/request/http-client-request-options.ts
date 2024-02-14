/**
 * HTTP client request options
 */
export type HttpClientRequestOptions = Readonly<Omit<RequestInit, 'headers' | 'method' | 'signal'>>;
