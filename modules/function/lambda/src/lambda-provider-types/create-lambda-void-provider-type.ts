import { Context } from 'aws-lambda';
import { LambdaEvent } from '../lambda-event';
import { LambdaEventTypeTest } from '../lambda-event-types/lambda-event-type-test';
import { createLambdaProviderType } from './create-lambda-provider-type';

/**
 * Creates a Lambda provider type for events that do not expect a result from the invocation
 * @param messageTypeName Message type name
 * @param test Test function
 * @param messageInputBuilder Message input builder
 * @returns Lambda provider type
 * @template LambdaEventType Lambda event type
 * @template MessageTypeName Message type name
 * @template MessageInputType Message input type
 */
export function createLambdaVoidProviderType<
  LambdaEventType extends LambdaEvent,
  MessageTypeName extends string,
  MessageInputType
>(
  messageTypeName: MessageTypeName,
  test: LambdaEventTypeTest<LambdaEventType>,
  messageInputBuilder: (event: LambdaEventType, context: Context) => MessageInputType
) {
  return createLambdaProviderType(
    messageTypeName,
    test,
    messageInputBuilder,
    () => {},
    () => {}
  );
}
