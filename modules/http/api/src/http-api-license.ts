/**
 * HTTP API license information
 */
export interface HttpApiLicense {
  /**
   * Name
   */
  readonly name: string;
  /**
   * SPDX license expression
   */
  readonly spdx: string;
  /**
   * URL where the license can be accessed
   */
  readonly url: URL;
}
