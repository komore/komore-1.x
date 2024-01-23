import { type Storage } from '@google-cloud/storage';

import { type CommandEventPair } from '@komore/client';
import { type CommandFromType } from '@komore/command';
import { type EventFromType } from '@komore/event';

import { type cloudStorageCommand } from '../cloud-storage.command';
import { type cloudStorageEvent } from '../cloud-storage.event';

/**
 * Cloud Storage command handler options
 */
export interface CloudStorageCommandHandlerOptions {
  /**
   * Cloud Storage
   */
  readonly storage: Storage;
  /**
   * Cloud Storage events recorder
   */
  readonly toEvents: (
    pair: CommandEventPair<CommandFromType<typeof cloudStorageCommand>, EventFromType<typeof cloudStorageEvent>>
  ) => void;
}
