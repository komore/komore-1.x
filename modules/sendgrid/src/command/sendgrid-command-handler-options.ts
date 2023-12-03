import { type Client } from '@sendgrid/client';

import { type EventFromType } from '@komore/event';
import { type Subject } from '@komore/reactive';

import { type sendGridEvent } from '../sendgrid.event';

/**
 * SendGrid command handler otpions
 */
export interface SendGridCommandHandlerOptions {
  /**
   * SendGrid client
   */
  readonly client: Client;
  /**
   * Stream of events
   */
  readonly events: Subject<EventFromType<typeof sendGridEvent>>;
}
