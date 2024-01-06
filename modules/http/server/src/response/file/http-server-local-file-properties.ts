import { type MediaType } from '@komore/http';

/**
 * HTTP server local file properties
 */
export interface HttpServerLocalFileProperties {
  /**
   * File name
   */
  readonly fileName?: string;
  /**
   * Media type
   */
  readonly mediaType: MediaType;
}
