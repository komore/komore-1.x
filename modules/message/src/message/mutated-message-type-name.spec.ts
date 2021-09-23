import { expectTypeOf } from 'expect-type';
import type { Message } from './message';
import type { MutatedMessageTypeName } from './mutated-message-type-name';

describe('Mutated message output type', () => {
  it('can mutate the type of a message', () => {
    given: 'a test message type with a "test" type name';
    type TestMessage = Message<'test', Record<symbol, never>, number, string>;
    when: 'mutating the type name to "other-type"';
    type MutatedType = MutatedMessageTypeName<TestMessage, 'other-type'>;
    expect: 'the new message type to have an "other-type" type name';
    expectTypeOf<MutatedType>().toEqualTypeOf<Message<'other-type', Record<symbol, never>, number, string>>();
    expectTypeOf<MutatedType['type']>().toEqualTypeOf<'other-type'>();
  });
});
