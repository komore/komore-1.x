import { type TypeScriptApiFunctionDescription } from './function/typescript-api-function-description';

/**
 * TypeScript API description
 */
export interface TypeScriptApiDescription {
  /**
   * API name
   */
  readonly name: string;
  /**
   * API exports
   */
  readonly exports: {
    /**
     * API functions
     */
    readonly functions: ReadonlyArray<TypeScriptApiFunctionDescription>;
  };
}
