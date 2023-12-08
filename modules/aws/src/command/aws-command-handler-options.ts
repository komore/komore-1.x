import { type EventFromType, type GenericEventType } from '@komore/event';
import { type Subject } from '@komore/reactive';

import { type GenericAwsSdkClient } from '../client/generic-aws-sdk-client';

/**
 * AWS command handler options
 *
 * @template AwsSdkClientType AWS SDK client type
 * @template EventType Event type
 */
export interface AwsCommandHandlerOptions<
  AwsSdkClientType extends GenericAwsSdkClient,
  EventType extends GenericEventType,
> {
  /**
   * AWS client
   */
  readonly client: AwsSdkClientType;
  /**
   * Events
   */
  readonly events: Subject<EventFromType<EventType>>;
}
