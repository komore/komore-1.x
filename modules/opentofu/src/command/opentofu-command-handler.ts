import { type CommandFromType, type CommandHandler } from '@komore/command';

import { type openTofuCommand } from '../opentofu.command';

/**
 * OpenTofu command handler
 */
export type OpenTofuCommandHandler = CommandHandler<CommandFromType<typeof openTofuCommand>>;
