import { type TypeScriptExpression } from '../expression/typescript-expression';
import { type TypeScriptImport } from './typescript-import';

/**
 * TypeScript import declaration parameters
 */
export interface TypeScriptImportDeclarationParameters {
  /**
   * Imports
   */
  readonly imports: ReadonlyArray<TypeScriptImport>;
  /**
   * Module specifier
   */
  readonly moduleSpecifier: string | TypeScriptExpression;
}
