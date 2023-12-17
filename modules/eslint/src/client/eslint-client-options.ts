import { type ESLint } from 'eslint';

/**
 * ESLint client options
 */
export interface EsLintClientOptions extends Omit<ESLint.Options, 'cwd'> {
  /**
   * Base path
   */
  readonly basePath: string;
}
