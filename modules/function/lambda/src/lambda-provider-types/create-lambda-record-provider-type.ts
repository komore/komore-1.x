import { Context } from 'aws-lambda';
import { LambdaEvent } from '../lambda-event';
import { LambdaEventTypeTest } from '../lambda-event-types/lambda-event-type-test';
import { createLambdaVoidProviderType } from './create-lambda-void-provider-type';

type LambdaEventRecordType<LambdaEventType> = LambdaEventType extends Readonly<{
  Records: ReadonlyArray<infer RecordType>;
}>
  ? RecordType
  : never;

/**
 * Creates a Lambda record provider type for events that feature a list of records
 * @param messageTypeName Message type name
 * @param test Test function
 * @returns Lambda record provider type
 * @template RecordType Record type
 * @template EventType Event type
 * @template MessageTypeName Message type name
 */
export function createLambdaRecordProviderType<
  LambdaEventType extends Readonly<{ Records: any[] }>,
  MessageTypeName extends string
>(messageTypeName: MessageTypeName, test: LambdaEventTypeTest<LambdaEventType>) {
  return createLambdaVoidProviderType(
    messageTypeName,
    test,
    (event): ReadonlyArray<LambdaEventRecordType<LambdaEventType>> => event.Records
  );
}
