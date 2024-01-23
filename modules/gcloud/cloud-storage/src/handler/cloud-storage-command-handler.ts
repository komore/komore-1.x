import { type CommandFromType, type CommandHandler } from '@komore/command';

import { type cloudStorageCommand } from '../cloud-storage.command';

/**
 * Cloud Storage command handler
 */
export type CloudStorageCommandHandler = CommandHandler<CommandFromType<typeof cloudStorageCommand>>;
