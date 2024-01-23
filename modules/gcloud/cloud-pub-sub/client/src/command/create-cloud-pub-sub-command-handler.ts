import { toEventCausedByCommand } from '@komore/client';
import { matchCommand } from '@komore/command';
import { map, redactValue, tapNext } from '@komore/reactive';

import { type CloudPubSubCommandHandler } from './cloud-pub-sub-command-handler';
import { type CloudPubSubCommandHandlerOptions } from './cloud-pub-sub-command-handler-options';
import { createCloudPubSubSchema } from './schema/create-cloud-pub-sub-schema';
import { deleteCloudPubSubSchema } from './schema/delete-cloud-pub-sub-schema';
import { validateCloudPubSubSchema } from './schema/validate-cloud-pub-sub-schema';
import { createCloudPubSubTopic } from './topic/create-cloud-pub-sub-topic';
import { deleteCloudPubSubTopic } from './topic/delete-cloud-pub-sub-topic';
import { publishCloudPubSubMessage } from './topic/publish-cloud-pub-sub-message';

/**
 * Creates a Cloud Pub/Sub command handler
 *
 * @param handlerOptions Cloud Pub/Sub command handler options
 * @returns Cloud Pub/Sub command handler
 */
export function createCloudPubSubCommandHandler(
  handlerOptions: CloudPubSubCommandHandlerOptions
): CloudPubSubCommandHandler {
  const { pubSub, toEvents, topics } = handlerOptions;
  const createSchema = createCloudPubSubSchema(pubSub);
  const createTopic = createCloudPubSubTopic(pubSub);
  const deleteSchema = deleteCloudPubSubSchema(pubSub);
  const deleteTopic = deleteCloudPubSubTopic(pubSub);
  const publishMessage = publishCloudPubSubMessage(topics);
  const validateSchema = validateCloudPubSubSchema(pubSub);

  return command =>
    matchCommand(command, {
      createSchema,
      createTopic,
      deleteSchema,
      deleteTopic,
      publishMessage,
      validateSchema,
    }).pipe(map(toEventCausedByCommand(command)), tapNext(toEvents), redactValue());
}
