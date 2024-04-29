import { type QueryFromType, type QueryHandler } from '@komore/query';

import { type cognitoQuery } from '../cognito.query';

/**
 * Cognito query handler
 */
export type CognitoQueryHandler = QueryHandler<QueryFromType<typeof cognitoQuery>>;
