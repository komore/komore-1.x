import { type TypeScriptTarget } from '../target/typescript-target';

/**
 * TypeScript node to source string options
 */
export interface TypeScriptNodeToSourceStringOptions {
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
