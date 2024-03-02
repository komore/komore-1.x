/**
 * Create Content-Type HTTP header options
 */
export interface CreateContentTypeHttpHeaderOptions {
  /**
   * Boundary
   */
  readonly boundary?: string;
  /**
   * Character set
   */
  readonly charset?: string; // TODO: typed character set
}
