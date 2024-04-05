/**
 * HTML log layout options
 */
export interface HtmlLogLayoutOptions {
  /**
   * CSS settings
   */
  readonly css?: {
    /**
     * CSS styles
     */
    readonly styles?: string;
    /**
     * CSS path
     */
    readonly path?: string;
  };
  /**
   * Document title
   */
  readonly title: string;
}
