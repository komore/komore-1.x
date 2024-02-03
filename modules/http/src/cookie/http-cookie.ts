import { type HttpCookieSameSiteOption } from './http-cookie-same-site-option';

/**
 * HTTP cookie
 */
export interface HttpCookie {
  /**
   * Domain the cookie is applicable to
   */
  readonly domain?: string;
  /**
   * Maximum lifetime of the cookie as a timestamp
   */
  readonly expires?: Temporal.ZonedDateTime;
  /**
   * Whether the cookie is HTTP-only, i.e. it cannot be accessed from JavaScript
   */
  readonly httpOnly: boolean;
  /**
   * Maximum age for the cookie, in seconds
   *
   * @note A zero or negative value expires the cookie immediately
   * @note If both `expires` and `maxAge` are set, `maxAge` has precedence
   */
  readonly maxAge?: number;
  /**
   * Cookie name
   */
  readonly name: string;
  /**
   * Whether the cookie should be stored using partitioned storage
   *
   * @experimental {@link https://developer.mozilla.org/en-US/docs/Web/Privacy/Partitioned_cookies Partitioned cookies}
   */
  readonly partitioned: boolean;
  /**
   * Path the cookie is applicable to
   */
  readonly path: string;
  /**
   * Same-site option
   */
  readonly sameSite?: HttpCookieSameSiteOption;
  /**
   * Whether the cookie is secure, i.e. it requires an HTTPS connection
   */
  readonly secure: boolean;
  /**
   * Cookie value
   */
  readonly value: string;
}
