/**
 * TypeScript API type reference
 */
export interface TypeScriptApiTypeReference {
  /**
   * Type name
   */
  readonly name: string;
  /**
   * Package exporting the type
   *
   * Undefined when the type is not imported from a package (e.g. ambient type definitions)
   */
  readonly package?: string;
  /**
   * Template parameters
   */
  readonly templateParameters?: ReadonlyArray<TypeScriptApiTypeReference>;
}
