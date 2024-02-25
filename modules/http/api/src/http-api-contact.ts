/**
 * HTTP API contact information
 */
export interface HttpApiContact {
  /**
   * Contact email address
   */
  readonly email?: string;
  /**
   * Name
   */
  readonly name: string;
  /**
   * URL for the contact information
   */
  readonly url: URL;
}
