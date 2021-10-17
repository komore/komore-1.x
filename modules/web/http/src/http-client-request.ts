/**
 * HTTP client request
 */
export type HttpClientRequest = Omit<Request, 'url'> & { readonly url: string | URL };
