import { Message } from '@komore/message';
import { Context } from 'aws-lambda';
import { expectTypeOf } from 'expect-type';
import { LambdaEvent } from '../lambda-event';
import { LambdaMetadata } from '../lambda-metadata';
import { createLambdaVoidProviderType } from './create-lambda-void-provider-type';

describe('Create Lambda void provider type', () => {
  it('creates a properly typed Lambda void provider type', () => {
    // given: a message type
    const messageTypeName = 'test-message-type' as const;
    // when: creating a Lambda void provider type
    const lambdaProviderType = createLambdaVoidProviderType(
      messageTypeName,
      (event): event is LambdaEvent => true,
      () => 'test' as const
    );
    // then: the correct types are used
    expectTypeOf(lambdaProviderType.testEvent).parameter(0).toEqualTypeOf<LambdaEvent>();
    expectTypeOf(lambdaProviderType.testEvent).parameter(1).toEqualTypeOf<Context>();
    expectTypeOf(lambdaProviderType.testEvent).returns.toBeBoolean();
    expectTypeOf(lambdaProviderType.buildMessage).parameter(0).toEqualTypeOf<LambdaEvent>();
    expectTypeOf(lambdaProviderType.buildMessage).returns.toMatchTypeOf<
      Message<typeof messageTypeName, LambdaMetadata<LambdaEvent>, string, void>
    >();
    expectTypeOf(lambdaProviderType.buildResult).returns.toBeVoid();
    expectTypeOf(lambdaProviderType.buildResultFromError).returns.toEqualTypeOf<
      ReturnType<typeof lambdaProviderType.buildResult>
    >();
  });
});
