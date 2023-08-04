/**
 * HTTP client request
 */
export interface HttpClientRequest {
  /**
   * Request options
   */
  readonly options?: Omit<Request, 'signal'>;
  /**
   * URL
   */
  readonly url: URL;
}
