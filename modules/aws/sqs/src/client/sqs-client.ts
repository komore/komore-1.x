import { type AwsClient } from '@komore/aws';

import { type SqsEventType } from '../event/sqs.event';
import { type SqsQueryType } from '../query/sqs.query';

/**
 * SQS client
 */
export interface SqsClient extends AwsClient<SqsCommandType, SqsEventType, SqsQueryType, mapping> {}
