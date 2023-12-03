/**
 * HTML processor options
 */
export interface HtmlProcessorOptions {
  /**
   * Returns a document fragment, given an HTML string
   */
  readonly createDocumentFragment?: (source: string) => DocumentFragment;
}
