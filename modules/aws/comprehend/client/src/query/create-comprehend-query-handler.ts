import { matchQuery } from '@komore/query';

import { type ComprehendQueryHandler } from './comprehend-query-handler';
import { type ComprehendQueryHandlerOptions } from './comprehend-query-handler-options';

/**
 * Creates a Comprehend query handler
 *
 * @param handlerOptions Comprehend query handler options
 * @returns Comprehend query handler
 */
export function createComprehendQueryHandler(handlerOptions: ComprehendQueryHandlerOptions): ComprehendQueryHandler {
  const { apiClient } = handlerOptions;
  apiClient;
  return query => matchQuery(query, {});
}
