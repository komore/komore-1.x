import { type AwsQueryHandler } from '@komore/aws';
import { type QueryFromType } from '@komore/query';

import { type s3Query } from '../s3.query';

/**
 * S3 query handler
 */
export type S3QueryHandler = AwsQueryHandler<QueryFromType<typeof s3Query>>;
