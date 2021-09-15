/**
 * Compiler context import options
 */
export interface CompilerContextImportOptions {
  readonly path: string;
  readonly name: string;
  readonly type?: boolean;
  readonly alias?: string;
}
