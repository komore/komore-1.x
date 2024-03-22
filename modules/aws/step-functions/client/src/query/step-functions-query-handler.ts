import { type QueryFromType, type QueryHandler } from '@komore/query';

import { type stepFunctionsQuery } from '../step-functions.query';

/**
 * Step Functions query handler
 */
export type StepFunctionsQueryHandler = QueryHandler<QueryFromType<typeof stepFunctionsQuery>>;
