import { type CommandEventHandler } from '@komore/client';

import { type sendGridCommandEventMap } from '../client/sendgrid-command-event-map';
import { type sendGridCommand } from '../sendgrid.command';
import { type sendGridEvent } from '../sendgrid.event';

export type SendGridCommandEventHandler<CommandName extends keyof typeof sendGridCommandEventMap> = CommandEventHandler<
  typeof sendGridCommand,
  CommandName,
  typeof sendGridEvent
>;
