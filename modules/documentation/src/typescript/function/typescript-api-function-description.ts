import { type TypeScriptApiFunctionDeclarationDescription } from './typescript-api-function-declaration-description';

/**
 * TypeScript API function description
 */
export interface TypeScriptApiFunctionDescription {
  /**
   * Function declarations
   */
  readonly declarations: ReadonlyArray<TypeScriptApiFunctionDeclarationDescription>;
  /**
   * Function name
   */
  readonly name: string;
}
