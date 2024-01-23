import { type CommandFromType, type CommandHandler } from '@komore/command';

import { type cloudPubSubCommand } from '../../cloud-pub-sub.command';

/**
 * Cloud Pub/Sub command handler
 */
export type CloudPubSubCommandHandler = CommandHandler<CommandFromType<typeof cloudPubSubCommand>>;
