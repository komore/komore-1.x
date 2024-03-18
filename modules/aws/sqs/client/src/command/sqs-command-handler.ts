import { type CommandFromType, type CommandHandler } from '@komore/command';

import { type sqsCommand } from '../sqs.command';

/**
 * SQS command handler
 */
export type SqsCommandHandler = CommandHandler<CommandFromType<typeof sqsCommand>>;
