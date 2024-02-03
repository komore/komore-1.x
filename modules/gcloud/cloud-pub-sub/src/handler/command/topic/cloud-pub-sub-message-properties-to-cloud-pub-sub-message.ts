import { type protos } from '@google-cloud/pubsub';

import { type CommandFromType } from '@komore/command';
import { map, of } from '@komore/reactive';

import { type cloudPubSubCommand } from '../../../cloud-pub-sub.command';
import { type CloudPubSubTopicCache } from '../../cache/cloud-pub-sub-topic-cache';

export function cloudPubSubMessagePropertiesToCloudPubSubMessage(
  encoder: CloudPubSubTopicCache['encoder']
): (
  messageProperties: Omit<CommandFromType<typeof cloudPubSubCommand, 'publishMessage'>['parameters'], 'topicName'>
) => Observable<protos.google.pubsub.v1.IPubsubMessage & { json?: unknown }> {
  return ({ attributes, data, orderingKey }) => {
    const message: protos.google.pubsub.v1.IPubsubMessage = {
      ...(attributes !== undefined ? { attributes: { ...attributes } } : {}),
      ...(orderingKey !== undefined ? { orderingKey } : {}),
    };

    return data === undefined
      ? of(message)
      : data instanceof Uint8Array || typeof data === 'string'
        ? of({ data, ...message })
        : encoder === undefined
          ? of({ json: data, ...message })
          : encoder(data).pipe(map(encodedData => ({ data: encodedData, ...message })));
  };
}
