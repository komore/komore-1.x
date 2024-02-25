import { type TypeScriptTypeMapping } from './typescript-type-mapping';

/**
 * TypeScript type mapping interface parameters
 */
export interface TypeScriptTypeMappingInterfaceParameters {
  /**
   * Interface name
   */
  readonly name: string;
  /**
   * Type mappings
   */
  readonly typeMappings: ReadonlyArray<TypeScriptTypeMapping>;
}
