/**
 * Property definition
 * @deprecated Standard type, cf. https://github.com/microsoft/TypeScript/issues/38593
 */
export interface PropertyDefinition {
  name: string;
  syntax?: string;
  inherits: boolean;
  initialValue?: string;
}
