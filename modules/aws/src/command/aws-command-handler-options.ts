import { type CommandEventPair } from '@komore/client';
import { type CommandFromType, type GenericCommandType } from '@komore/command';
import { type EventFromType, type GenericEventType } from '@komore/event';
import { type Observable } from '@komore/reactive';

import { type GenericAwsSdkClient } from '../client/generic-aws-sdk-client';

/**
 * AWS command handler options
 *
 * @template AwsSdkClientType AWS SDK client type
 * @template CommandType Command type
 * @template EventType Event type
 */
export interface AwsCommandHandlerOptions<
  AwsSdkClientType extends GenericAwsSdkClient,
  CommandType extends GenericCommandType,
  EventType extends GenericEventType,
> {
  /**
   * AWS client
   */
  readonly client$: Observable<AwsSdkClientType>;
  /**
   * Events recorder
   */
  readonly toEvents: (pair: CommandEventPair<CommandFromType<CommandType>, EventFromType<EventType>>) => void;
}
