import { Message } from '@komore/message';
import { Context } from 'aws-lambda';
import { expectTypeOf } from 'expect-type';
import { mock } from 'jest-mock-extended';
import { LambdaEvent } from '../lambda-event';
import { LambdaMetadata } from '../lambda-metadata';
import { createLambdaProviderType } from './create-lambda-provider-type';

describe('Create Lambda provider type', () => {
  const mockContext = mock<Context>();
  const mockEvent = mock<LambdaEvent>();

  it('creates a properly typed Lambda provider type', () => {
    // given: a message type
    const messageTypeName = 'test-message-type' as const;
    // when: creating a Lambda provider type
    const lambdaProviderType = createLambdaProviderType(
      messageTypeName,
      (event): event is LambdaEvent => true,
      () => 'test' as const,
      (result: number) => result !== 0,
      error => error.message !== ''
    );
    // then: the correct types are used
    expectTypeOf(lambdaProviderType.testEvent).parameter(0).toEqualTypeOf<LambdaEvent>();
    expectTypeOf(lambdaProviderType.testEvent).parameter(1).toEqualTypeOf<Context>();
    expectTypeOf(lambdaProviderType.testEvent).returns.toBeBoolean();
    expectTypeOf(lambdaProviderType.buildMessage).parameter(0).toEqualTypeOf<LambdaEvent>();
    expectTypeOf(lambdaProviderType.buildMessage).returns.toMatchTypeOf<
      Message<typeof messageTypeName, LambdaMetadata<LambdaEvent>, string, undefined>
    >();
    expectTypeOf(lambdaProviderType.buildResult).parameter(0).toBeNumber();
    expectTypeOf(lambdaProviderType.buildResult).returns.toBeBoolean();
    expectTypeOf(lambdaProviderType.buildResultFromError).returns.toEqualTypeOf<
      ReturnType<typeof lambdaProviderType.buildResult>
    >();
  });

  it('creates a message builder that properly includes metadata', () => {
    // given: a Lambda provider type
    const lambdaProviderType = createLambdaProviderType(
      'test-message-type',
      (event): event is LambdaEvent => true,
      () => 'test' as const,
      (result: number) => result !== 0,
      error => error.message !== ''
    );
    // when: building a message
    const message = lambdaProviderType.buildMessage(mockEvent, mockContext);
    // then: metadata is included
    expect(message.metadata.function.lambda.context).toBe(mockContext);
    expect(message.metadata.function.lambda.event).toBe(mockEvent);
  });
});
