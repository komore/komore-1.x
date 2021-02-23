import type { OperatorFunction } from '@komore/reactive';
import { map } from '@komore/reactive/operators';

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
 * Sanitizes HTML
 * @param config Sanitizer configuration
 * @returns Sanitized document fragment
 */
export function sanitizeHtml(config?: Partial<SanitizerConfig>): OperatorFunction<string, DocumentFragment>;

/**
 * Sanitizes HTML
 * @param config Sanitizer configuration
 * @returns Sanitized string
 */
export function sanitizeHtml(
  config: Partial<SanitizerConfig> & Readonly<{ sanitizeToString: true }>
): OperatorFunction<string, string>;

export function sanitizeHtml(
  config?: Partial<SanitizerConfig> | (Partial<SanitizerConfig> & Readonly<{ sanitizeToString: true }>)
): OperatorFunction<string, DocumentFragment | string> {
  // TODO: const sanitizer = new Sanitizer();
  // https://developer.mozilla.org/en-US/docs/Web/API/HTML_Sanitizer_API
  return map(html => {
    if (config !== undefined && ('sanitizeToString' in config) && config.sanitizeToString) {
      // TODO: sanitizer.sanitizeToString(value);
      return html;
    } else {
      // TODO: sanitizer.sanitize(value);
      const templateElement = document.createElement('template');
      templateElement.innerHTML = html;
      return document.importNode(templateElement.content, true);
    }
  });
}
