import { type CommandFromType, type CommandHandler } from '@komore/command';

import { type esbuildCommand } from '../esbuild.command';

/**
 * esbuild command handler
 */
export type EsbuildCommandHandler = CommandHandler<CommandFromType<typeof esbuildCommand>>;
