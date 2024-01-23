import { createClientCommandEventMap } from '@komore/client';
import { type CommandFromType } from '@komore/command';
import { type EventFromType } from '@komore/event';

import { type cloudStorageCommand } from '../cloud-storage.command';
import { type cloudStorageEvent } from '../cloud-storage.event';

/**
 * Cloud Storage command-to-event map
 */
export const cloudStorageCommandEventMap = createClientCommandEventMap<
  CommandFromType<typeof cloudStorageCommand>,
  EventFromType<typeof cloudStorageEvent>
>()({
  createPreSignedUrl: 'preSignedUrlCreated',
});
