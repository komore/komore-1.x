/**
 * Sanitizer configuration
 */
interface SanitizerConfig {
  readonly allowElements: ReadonlyArray<string>;
  readonly blockElements: ReadonlyArray<string>;
  readonly dropElements: ReadonlyArray<string>;
  readonly allowAttributes: ReadonlyArray<string>;
  readonly dropAttributes: ReadonlyArray<string>;
}

/**
 * Creates a function that sanitizes an HTML string and builds a document fragment
 * @param config Sanitizer configuration
 * @returns Function that sanitizes an HTML string and builds a document fragment
 */
export function toSanitizedHtml(config?: Partial<SanitizerConfig>): (html: string) => DocumentFragment;

/**
 * Creates a function that sanitizes an HTML string
 * @param config Sanitizer configuration
 * @returns Function that sanitizes an HTML string
 */
export function toSanitizedHtml(
  config: Partial<SanitizerConfig> & { readonly sanitizeToString: true }
): (html: string) => string;

export function toSanitizedHtml(
  config?: Partial<SanitizerConfig & { readonly sanitizeToString: boolean }>
): (html: string) => DocumentFragment | string {
  // https://developer.mozilla.org/en-US/docs/Web/API/HTML_Sanitizer_API
  // TODO: const sanitizer = new Sanitizer();
  const sanitizer = {
    sanitizeToString(html: string): string {
      return html;
    },
    sanitize(html: string): DocumentFragment {
      const templateElement = document.createElement('template');
      templateElement.innerHTML = html;
      return document.importNode(templateElement.content, true);
    }
  };

  return config?.sanitizeToString ? html => sanitizer.sanitizeToString(html) : html => sanitizer.sanitize(html);
}
