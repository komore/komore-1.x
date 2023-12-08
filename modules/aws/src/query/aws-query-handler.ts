import { type GenericQuery, type QueryHandler } from '@komore/query';

/**
 * AWS query handler
 *
 * @template AwsQueryType AWS query type
 */
export type AwsQueryHandler<AwsQueryType extends GenericQuery> = QueryHandler<AwsQueryType>;
