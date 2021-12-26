import { type ParsedElementAttribute } from '../attribute/parsed-element-attribute';

/**
 * Parsed element template
 */
export interface ParsedElementTemplate {
  readonly baseClassName: string;
  readonly baseTagName?: string;
  readonly className: string;
  readonly tagName: string;
  readonly parsedAttributes: ReadonlyArray<ParsedElementAttribute>;
  readonly templateElement: HTMLElement;
}
