import { toEventCausedByCommand } from '@komore/client';
import { matchCommand } from '@komore/command';
import { map, mapTo, tapNext } from '@komore/reactive';

import { type CloudStorageCommandHandler } from './cloud-storage-command-handler';
import { type CloudStorageCommandHandlerOptions } from './cloud-storage-command-handler-options';
import { createCloudStoragePreSignedUrl } from './signed-url/create-cloud-storage-pre-signed-url';

/**
 * Creates a Cloud Storage command handler
 *
 * @param handlerOptions Cloud Storage command handler options
 * @returns Cloud Storage command handler
 */
export function createCloudStorageCommandHandler(
  handlerOptions: CloudStorageCommandHandlerOptions
): CloudStorageCommandHandler {
  const { storage, toEvents } = handlerOptions;
  const createPreSignedUrl = createCloudStoragePreSignedUrl(storage);

  return command =>
    matchCommand(command, {
      createPreSignedUrl,
    }).pipe(map(toEventCausedByCommand(command)), tapNext(toEvents), mapTo(void 0));
}
