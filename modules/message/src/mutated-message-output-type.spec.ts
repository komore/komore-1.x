import { expectTypeOf } from 'expect-type';
import type { Message } from './message';
import type { MutatedMessageOutputType } from './mutated-message-output-type';

describe('Mutated message output type', () => {
  it('can mutate the output type of a message', () => {
    given: 'a test message type with a string output type';
    type TestMessage = Message<'test', Record<symbol, never>, number, string>;
    when: 'mutating the output type to a number';
    type MutatedType = MutatedMessageOutputType<TestMessage, number>;
    expect: 'the new message type to have a number output type';
    expectTypeOf<MutatedType>().toEqualTypeOf<Message<'test', Record<symbol, never>, number, number>>();
  });
});
