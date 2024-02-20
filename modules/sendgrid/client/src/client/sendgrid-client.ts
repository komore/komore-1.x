import { type Client } from '@komore/client';

import { type sendGridCommand } from '../sendgrid.command';
import { type sendGridError } from '../sendgrid.error';
import { type sendGridEvent } from '../sendgrid.event';
import { type sendGridQuery } from '../sendgrid.query';
import { type sendGridCommandEventMap } from './sendgrid-command-event-map';

/**
 * SendGrid client
 */
export type SendGridClient = Client<
  typeof sendGridCommand,
  typeof sendGridEvent,
  typeof sendGridQuery,
  typeof sendGridError,
  typeof sendGridCommandEventMap
>;
