import { matchQuery } from '@komore/query';
import { of } from '@komore/reactive';

import { type GitQueryHandler } from './git-query-handler';
import { type GitQueryHandlerOptions } from './git-query-handler-options';

/**
 * Creates a Git query handler
 *
 * @param handlerOptions Git query handler options
 * @returns Git query handler
 */
export function createGitQueryHandler(handlerOptions: GitQueryHandlerOptions): GitQueryHandler {
  const { cliClient: _ } = handlerOptions;
  return query =>
    matchQuery(query, {
      status: () => of(void 0),
    });
}
