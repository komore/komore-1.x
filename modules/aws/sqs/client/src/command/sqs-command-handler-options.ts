import { type SqsApiClient } from '@komore/aws/sqs';
import { type CommandEventRecorder } from '@komore/client';

import { type sqsCommand } from '../sqs.command';
import { type sqsEvent } from '../sqs.event';

/**
 * SQS command handler options
 */
export interface SqsCommandHandlerOptions {
  /**
   * SQS API client
   */
  readonly apiClient: SqsApiClient;
  /**
   * SQS events recorder
   */
  readonly toEvents: CommandEventRecorder<typeof sqsCommand, typeof sqsEvent>;
}
