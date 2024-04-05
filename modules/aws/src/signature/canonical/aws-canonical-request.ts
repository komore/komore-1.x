import { type HttpMethod } from '@komore/http';

/**
 * AWS canonical request
 */
export interface AwsCanonicalRequest {
  /**
   * Canonical headers
   */
  readonly canonicalHeaders: string;
  /**
   * Canonical query string
   */
  readonly canonicalQueryString: string;
  /**
   * Canonical URI
   */
  readonly canonicalUri: string;
  /**
   * Hashed payload
   */
  readonly hashedPayload: string;
  /**
   * HTTP method
   */
  readonly httpMethod: HttpMethod;
  /**
   * Signed header list
   */
  readonly signedHeaderNames: ReadonlyArray<string>;
  /**
   * Signed headers
   */
  readonly signedHeaders: string;
}
