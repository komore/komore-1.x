import { expectTypeOf } from 'expect-type';
import type { Message } from './message';
import type { MessageInputType } from './message-input-type';

describe('Message input type', () => {
  it('can infer the message input type', () => {
    given: 'a message type with a number input type';
    type TestMessage = Message<'test', Record<symbol, unknown>, number, string>;
    expect: 'the number input type to be inferred';
    expectTypeOf<MessageInputType<TestMessage>>().toEqualTypeOf<number>();
  });
});
