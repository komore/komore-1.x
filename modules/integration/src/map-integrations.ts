import { Message } from '@komore/message';
import { map, type OperatorFunction, pipe } from '@komore/reactive';
import { MessageWithIntegrations, MutatedIntegrationTypes } from '../graph/message-with-integrations';
import { mutateIntegrations } from '../graph/mutate-integrations';

/**
 * Operator function that maps integrations
 * @param project Projection function
 * @template MessageTypeName Message type name
 * @template MessageMetadataType Message metadata type
 * @template MessageInputType Message input type
 * @template MessageOutputType Message output type
 * @template MessageType Message type
 * @template IntegrationTypes Integration types
 * @template IntegrationTypesResult Integration types after mapping
 */
export const mapIntegrations = <
  MessageTypeName extends string,
  MessageMetadataType extends object,
  MessageInputType,
  MessageOutputType,
  MessageType extends Message<MessageTypeName, MessageMetadataType, MessageInputType, MessageOutputType>,
  IntegrationTypes extends object,
  MessageWithIntegrationsType extends MessageWithIntegrations<
    MessageTypeName,
    MessageMetadataType,
    MessageInputType,
    MessageOutputType,
    MessageType,
    IntegrationTypes
  >,
  IntegrationTypesResult extends IntegrationTypes
>(
  project: (integrations: IntegrationTypes) => IntegrationTypesResult
): OperatorFunction<
  MessageWithIntegrationsType,
  MutatedIntegrationTypes<MessageWithIntegrationsType, IntegrationTypesResult>
> => pipe(map(message => mutateIntegrations(message, project)));
