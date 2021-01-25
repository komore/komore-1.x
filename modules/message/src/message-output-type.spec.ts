import { expectTypeOf } from 'expect-type';
import type { Message } from './message';
import type { MessageOutputType } from './message-output-type';

describe('Message output type', () => {
  it('can infer the message output type', () => {
    given: 'a message type with a string output type'
    type TestMessage = Message<'test', {}, number, string>;
    expect: 'the string output type to be inferred'
    expectTypeOf<MessageOutputType<TestMessage>>().toEqualTypeOf<string>();
  });
});
