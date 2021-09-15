import type { PropertySyntax } from './syntax/property-syntax';

/**
 * Property definition
 * @deprecated Standard type should be used, cf. https://github.com/microsoft/TypeScript/issues/38593
 */
export interface PropertyDefinition {
  readonly name: string;
  readonly syntax?: PropertySyntax;
  readonly inherits: boolean;
  readonly initialValue?: string;
}
