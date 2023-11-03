import { type CommandHandler } from '@komore/command';

import { type sesCommand } from '../ses.command';

/**
 * SES command handler
 */
export type SesCommandHandler = CommandHandler<typeof sesCommand>;
