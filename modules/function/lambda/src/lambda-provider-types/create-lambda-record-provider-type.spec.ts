import { Message } from '@komore/message';
import { Context, S3Event, S3EventRecord } from 'aws-lambda';
import { expectTypeOf } from 'expect-type';
import { LambdaEvent } from '../lambda-event';
import { LambdaMetadata } from '../lambda-metadata';
import { createLambdaRecordProviderType } from './create-lambda-record-provider-type';

describe('Create Lambda record provider type', () => {
  it('creates a properly typed Lambda record provider type', () => {
    // given: a message type
    const messageTypeName = 'test-message-type' as const;
    // when: creating a Lambda record provider type
    const lambdaProviderType = createLambdaRecordProviderType(messageTypeName, (event): event is S3Event => true);
    // then: the correct types are used
    expectTypeOf(lambdaProviderType.testEvent).parameter(0).toEqualTypeOf<LambdaEvent>();
    expectTypeOf(lambdaProviderType.testEvent).parameter(1).toEqualTypeOf<Context>();
    expectTypeOf(lambdaProviderType.testEvent).returns.toBeBoolean();
    expectTypeOf(lambdaProviderType.buildMessage).parameter(0).toEqualTypeOf<S3Event>();
    expectTypeOf(lambdaProviderType.buildMessage).returns.toMatchTypeOf<
      Message<typeof messageTypeName, LambdaMetadata<LambdaEvent>, ReadonlyArray<S3EventRecord>, void>
    >();
    expectTypeOf(lambdaProviderType.buildResult).returns.toBeVoid();
    expectTypeOf(lambdaProviderType.buildResultFromError).returns.toEqualTypeOf<
      ReturnType<typeof lambdaProviderType.buildResult>
    >();
  });
});
