import { type QueryFromType, type QueryHandler } from '@komore/query';

import { type sqsQuery } from '../sqs.query';

/**
 * SQS query handler
 */
export type SqsQueryHandler = QueryHandler<QueryFromType<typeof sqsQuery>>;
