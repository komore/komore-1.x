import { matchQuery } from '@komore/query';

import { type Route53QueryHandler } from './route-53-query-handler';
import { type Route53QueryHandlerOptions } from './route-53-query-handler-options';

/**
 * Creates a Route 53 query handler
 *
 * @param handlerOptions Route 53 query handler options
 * @returns Route 53 query handler
 */
export function createRoute53QueryHandler(handlerOptions: Route53QueryHandlerOptions): Route53QueryHandler {
  const { apiClient } = handlerOptions;
  return query => matchQuery(query, {});
}
