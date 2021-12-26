import { expectTypeOf } from 'expect-type';
import { type Message } from './message';
import { type MutatedMessageInputType } from './mutated-message-input-type';

describe('Mutated message input type', () => {
  it('can mutate the input type of a message', () => {
    given: 'a test message type with a number input type';
    type TestMessage = Message<'test', Record<symbol, never>, number, string>;
    when: 'mutating the input type to a string';
    type MutatedType = MutatedMessageInputType<TestMessage, string>;
    expect: 'the new message type to have a string input type';
    expectTypeOf<MutatedType>().toEqualTypeOf<Message<'test', Record<symbol, never>, string, string>>();
  });
});
