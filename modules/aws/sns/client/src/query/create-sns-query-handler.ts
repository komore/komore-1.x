import { matchQuery } from '@komore/query';
import { empty, expand, fromArray, mergeMap } from '@komore/reactive';

import { type SnsQueryHandler } from './sns-query-handler';
import { type SnsQueryHandlerOptions } from './sns-query-handler-options';
import { listSnsSubscriptions } from '@komore/aws/sns';

/**
 * Creates an SNS query handler
 *
 * @param handlerOptions SNS query handler options
 * @returns SNS query handler
 */
export function createSnsQueryHandler(handlerOptions: SnsQueryHandlerOptions): SnsQueryHandler {
  const { apiClient } = handlerOptions;
  const list = listSnsSubscriptions(apiClient);
  return query =>
    matchQuery(query, {
      listSubscriptions: () =>
        list({}).pipe(
          expand(({ NextToken }) => (NextToken ? list({ NextToken }) : empty)),
          mergeMap(result => fromArray(result.Subscriptions))
        ),
    });
}
