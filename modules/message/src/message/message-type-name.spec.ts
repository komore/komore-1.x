import { expectTypeOf } from 'expect-type';
import type { Message } from './message';
import type { MessageTypeName } from './message-type-name';

describe('Message type name', () => {
  it('can infer the message type name', () => {
    given: 'a message type with the "test" type name';
    type TestMessage = Message<'test', Record<symbol, unknown>, number, string>;
    expect: 'the "test" type name to be inferred';
    expectTypeOf<MessageTypeName<TestMessage>>().toEqualTypeOf<'test'>();
  });
});
