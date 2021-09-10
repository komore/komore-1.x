/**
 * HTML template processor options
 */
export interface HtmlTemplateProcessorOptions {
  /**
   * Returns a document fragment, given an HTML string
   */
  readonly createDocumentFragment?: (source: string) => DocumentFragment;
}
