import { type CommandEventPair } from '@komore/client';
import { type CommandFromType } from '@komore/command';
import { type EventFromType } from '@komore/event';

import { type SendGridApiClient } from '../api/sendgrid-api-client';
import { type sendGridCommand } from '../sendgrid.command';
import { type sendGridEvent } from '../sendgrid.event';

/**
 * SendGrid command handler otpions
 */
export interface SendGridCommandHandlerOptions {
  /**
   * SendGrid API client
   */
  readonly apiClient: SendGridApiClient;
  /**
   * SendGrid events recorder
   */
  readonly toEvents: (
    pair: CommandEventPair<CommandFromType<typeof sendGridCommand>, EventFromType<typeof sendGridEvent>>
  ) => void;
}
