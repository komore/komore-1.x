import { type CommandFromType, type CommandHandler } from '@komore/command';

import { type sendGridCommand } from '../sendgrid.command';

/**
 * SendGrid command handler
 */
export type SendGridCommandHandler = CommandHandler<CommandFromType<typeof sendGridCommand>>;
