import { type TypeScriptTarget } from '../target/typescript-target';

/**
 * Source text to TypeScript source file options
 */
export interface SourceTextToTypeScriptSourceFileOptions {
  /**
   * File name
   */
  readonly fileName: string;
  /**
   * Target
   *
   * @note Defaults to `'ESNext'`
   */
  readonly target?: TypeScriptTarget;
}
