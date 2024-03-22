import { type CommandFromType, type CommandHandler } from '@komore/command';

import { type stepFunctionsCommand } from '../step-functions.command';

/**
 * Step Functions command handler
 */
export type StepFunctionsCommandHandler = CommandHandler<CommandFromType<typeof stepFunctionsCommand>>;
