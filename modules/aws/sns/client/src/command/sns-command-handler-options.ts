import { type SnsApiClient } from '@komore/aws/sns';
import { type CommandEventRecorder } from '@komore/client';

import { type snsCommand } from '../sns.command';
import { type snsEvent } from '../sns.event';

/**
 * SNS command handler options
 */
export interface SnsCommandHandlerOptions {
  /**
   * SNS API client
   */
  readonly apiClient: SnsApiClient;
  /**
   * SNS events recorder
   */
  readonly toEvents: CommandEventRecorder<typeof snsCommand, typeof snsEvent>;
}
