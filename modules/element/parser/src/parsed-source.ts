import type { PropertyDefinition } from './style/property-definition';
import type { ParsedElementTemplate } from './template/parsed-element-template';

/**
 * Parsed source
 */
export interface ParsedSource {
  readonly parsedCustomPropertyDefinitions: ReadonlyArray<PropertyDefinition>;
  readonly parsedElementTemplate: ParsedElementTemplate;
  readonly scriptElements: ReadonlyArray<HTMLScriptElement>;
  readonly styleElements: ReadonlyArray<HTMLStyleElement>;
}
