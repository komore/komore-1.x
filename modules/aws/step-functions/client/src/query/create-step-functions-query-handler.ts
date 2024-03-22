import { matchQuery } from '@komore/query';

import { type StepFunctionsQueryHandler } from './step-functions-query-handler';
import { type StepFunctionsQueryHandlerOptions } from './step-functions-query-handler-options';

/**
 * Creates a Step Functions query handler
 *
 * @param handlerOptions Step Functions query handler options
 * @returns Step Functions query handler
 */
export function createStepFunctionsQueryHandler(
  handlerOptions: StepFunctionsQueryHandlerOptions
): StepFunctionsQueryHandler {
  const { apiClient: _ } = handlerOptions;
  return query => matchQuery(query, {});
}
