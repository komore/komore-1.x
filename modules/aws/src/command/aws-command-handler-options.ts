import { type EventFromType, type GenericEventType } from '@komore/event';
import { type Logger } from '@komore/logging';
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
   * Events
   */
  readonly events: Subject<EventFromType<EventType>>;
  /**
   * Logger
   */
  readonly logger: Logger;
  /**
   * AWS client
   */
  readonly client: AwsSdkClientType;
}
