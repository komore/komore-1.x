import { type CommandEventHandler } from '@komore/client';

import { type cloudStorageCommandEventMap } from '../client/cloud-storage-command-event-map';
import { type cloudStorageCommand } from '../cloud-storage.command';
import { type cloudStorageEvent } from '../cloud-storage.event';

/**
 * Cloud Storage command-event handler
 *
 * @private
 */
export type CloudStorageCommandEventHandler<CommandName extends keyof typeof cloudStorageCommandEventMap> =
  CommandEventHandler<typeof cloudStorageCommand, CommandName, typeof cloudStorageEvent>;
