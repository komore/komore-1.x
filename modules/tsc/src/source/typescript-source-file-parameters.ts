import { type TypeScriptStatement } from '../statement/typescript-statement';

/**
 * TypeScript source file parameters
 */
export interface TypeScriptSourceFileParameters {
  /**
   * Statements
   */
  readonly statements: ReadonlyArray<TypeScriptStatement>;
}
