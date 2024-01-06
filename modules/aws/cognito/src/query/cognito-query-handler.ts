import { type AwsQueryHandler } from '@komore/aws';
import { type QueryFromType } from '@komore/query';

import { type cognitoQuery } from '../cognito.query';

/**
 * Cognito query handler
 */
export type CognitoQueryHandler = AwsQueryHandler<QueryFromType<typeof cognitoQuery>>;
