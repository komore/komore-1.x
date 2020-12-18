import { createMessage } from '@komore/message';
import { Context } from 'aws-lambda';
import { LambdaEvent } from '../lambda-event';
import { LambdaEventTypeTest } from '../lambda-event-types/lambda-event-type-test';
import { LambdaMetadata } from '../lambda-metadata';
import { LambdaProviderType } from './lambda-provider-type';

/**
 * Creates a Lambda provider type
 * @param messageTypeName Message type name
 * @param testEvent Test function
 * @param messageInputBuilder Message input builder
 * @param buildResult Result builder
 * @param buildResultFromError Error result builder
 * @returns Lambda provider type
 * @template LambdaEventType Lambda event type
 * @template MessageTypeName Message type name
 * @template MessageInputType Message input type
 * @template MessageTargetOutputType Message target output type
 * @template FunctionOutputType Function output type
 */
export function createLambdaProviderType<
  LambdaEventType extends LambdaEvent,
  MessageTypeName extends string,
  MessageInputType,
  MessageTargetOutputType,
  FunctionOutputType
>(
  messageTypeName: MessageTypeName,
  testEvent: LambdaEventTypeTest<LambdaEventType>,
  messageInputBuilder: (event: LambdaEventType, context: Context) => MessageInputType,
  buildResult: (output: MessageTargetOutputType, metatada: LambdaMetadata<LambdaEventType>) => FunctionOutputType,
  buildResultFromError: (error: Error, metadata: LambdaMetadata<LambdaEventType>) => FunctionOutputType
): LambdaProviderType<LambdaEventType, MessageTypeName, MessageInputType, MessageTargetOutputType, FunctionOutputType> {
  return {
    testEvent,
    buildMessage: (event, context) =>
      createMessage(
        messageTypeName,
        {
          function: {
            lambda: {
              event,
              context
            }
          }
        },
        messageInputBuilder(event, context)
      ),
    buildResult,
    buildResultFromError
  };
}
