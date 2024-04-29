import { type ComprehendApiClient } from '@komore/aws/comprehend';
import { type CommandEventRecorder } from '@komore/client';

import { type comprehendCommand } from '../comprehend.command';
import { type comprehendEvent } from '../comprehend.event';

/**
 * Comprehend command handler options
 */
export interface ComprehendCommandHandlerOptions {
  /**
   * Comprehend API client
   */
  readonly apiClient: ComprehendApiClient;
  /**
   * Comprehend command-to-event recorder
   */
  readonly toEvents: CommandEventRecorder<typeof comprehendCommand, typeof comprehendEvent>;
}
