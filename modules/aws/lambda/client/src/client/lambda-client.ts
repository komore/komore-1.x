import { type AwsClient } from '@komore/aws';

import { type lambdaCommand } from '../lambda.command';
import { type lambdaError } from '../lambda.error';
import { type lambdaEvent } from '../lambda.event';
import { type lambdaQuery } from '../lambda.query';
import { type lambdaCommandEventMapping } from './lambda-command-event-mapping';

/**
 * Lambda client
 */
export type LambdaClient = AwsClient<
  typeof lambdaCommand,
  typeof lambdaCommandEventMapping,
  typeof lambdaEvent,
  typeof lambdaQuery,
  typeof lambdaError
>;
