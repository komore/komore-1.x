import type { ParsedElementTemplate } from './template/parsed-element-template';

/**
 * Parsed source
 */
export interface ParsedSource {
  readonly parsedTemplateElement: ParsedElementTemplate;
  readonly scriptElements: ReadonlyArray<HTMLScriptElement>;
  readonly styleElements: ReadonlyArray<HTMLStyleElement>;
}
