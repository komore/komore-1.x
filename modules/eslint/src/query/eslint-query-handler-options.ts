import { type ESLint } from 'eslint';

/**
 * ESLint query handler options
 */
export interface EsLintQueryHandlerOptions {
  /**
   * ESLint instance
   */
  readonly esLint: ESLint;
}
