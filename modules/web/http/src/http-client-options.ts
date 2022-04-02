/**
 * HTTP client options
 */
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface HttpClientOptions extends Omit<RequestInit, 'signal'> {}
