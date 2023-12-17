import { type ESLint } from 'eslint';

import { type Observable } from '@komore/reactive';

/**
 * ESLint query handler options
 */
export interface EsLintQueryHandlerOptions {
  /**
   * ESLint instance
   */
  readonly esLint$: Observable<ESLint>;
}
