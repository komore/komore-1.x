/**
 * TypeScript import
 */
export interface TypeScriptImport {
  /**
   * Alias
   */
  readonly alias?: string;
  /**
   * Name
   */
  readonly name: string;
  /**
   * Whether the import is a type import
   */
  readonly type: boolean;
}
