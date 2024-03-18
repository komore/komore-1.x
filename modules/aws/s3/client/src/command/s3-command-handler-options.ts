import { type S3ApiClient } from '@komore/aws/s3';
import { type CommandEventRecorder } from '@komore/client';

import { type s3Command } from '../s3.command';
import { type s3Event } from '../s3.event';

/**
 * S3 command handler options
 */
export interface S3CommandHandlerOptions {
  /**
   * S3 API client
   */
  readonly apiClient: S3ApiClient;
  /**
   * S3 events recorder
   */
  readonly toEvents: CommandEventRecorder<typeof s3Command, typeof s3Event>;
}
