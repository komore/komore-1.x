import { matchQuery } from '@komore/query';

import { type GitHubQueryHandler } from './github-query-handler';
import { type GitHubQueryHandlerOptions } from './github-query-handler-options';

/**
 * Creates a GitHub query handler
 *
 * @param handlerOptions GitHub query handler options
 * @returns GitHub query handler
 */
export function createGitHubQueryHandler(_handlerOptions: GitHubQueryHandlerOptions): GitHubQueryHandler {
  return query => matchQuery(query, {});
}
