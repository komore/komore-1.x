import { Message } from '@komore/message';
import { Context } from 'aws-lambda';
import { LambdaEvent } from '../lambda-event';
import { LambdaEventTypeTest } from '../lambda-event-types/lambda-event-type-test';
import { LambdaMetadata } from '../lambda-metadata';

/**
 * Lambda provider type
 * @template EventType Event type
 * @template MessageTypeName Message type name
 * @template MessageInputType Message input type
 * @template MessageTargetOutputType Message target output type
 * @template FunctionOutputType Function output type
 */
export type LambdaProviderType<
  EventType extends LambdaEvent,
  MessageTypeName extends string,
  MessageInputType,
  MessageTargetOutputType,
  FunctionOutputType
> = Readonly<{
  /**
   * Tests whether the provider can handle the Lambda event
   * @param event Event
   * @param context Context
   * @returns true if the provider can handle the Lambda event
   */
  testEvent: LambdaEventTypeTest<EventType>;

  /**
   * Builds a message from the incoming event
   * @param event Event
   * @param context Context
   * @returns Message
   */
  buildMessage: (
    event: EventType,
    context: Context
  ) => Message<MessageTypeName, LambdaMetadata<EventType>, MessageInputType, undefined>;

  /**
   * Builds a function output from a message output
   * @param output Output
   * @param metadata Lambda-specific metadata
   * @returns Function output
   */
  buildResult: (output: MessageTargetOutputType, metatada: LambdaMetadata<EventType>) => FunctionOutputType;

  /**
   * Builds a function output from an error
   * @param error Error
   * @param metadata Lambda-specific metadata
   * @returns Function output
   */
  buildResultFromError: (error: Error, metadata: LambdaMetadata<EventType>) => FunctionOutputType;
}>;
