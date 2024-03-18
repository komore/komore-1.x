import { matchQuery } from '@komore/query';
import { type SqsQueryHandler } from './sqs-query-handler';
import { type SqsQueryHandlerOptions } from './sqs-query-handler-options';

/**
 * Creates an SQS query handler
 *
 * @param handlerOptions SQS query handler options
 * @returns SQS query handler
 */
export function createSqsQueryHandler(handlerOptions: SqsQueryHandlerOptions): SqsQueryHandler {
  const { apiClient: _ } = handlerOptions;
  return query => matchQuery(query, {});
}
