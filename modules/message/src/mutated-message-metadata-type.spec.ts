import { expectTypeOf } from 'expect-type';
import type { Message } from './message';
import type { MutatedMessageMetadataType } from './mutated-message-metadata-type';

describe('Mutated message metadata type', () => {
  it('can mutate the metadata type of a message', () => {
    given: 'a test message type with a number input type';
    type TestMessage = Message<'test', Record<symbol, never>, number, string>;
    when: 'mutating the input type to a string';
    type NewMetadataType = Readonly<{ hello: 'world' }>;
    type MutatedType = MutatedMessageMetadataType<TestMessage, NewMetadataType>;
    expect: 'the new message type to have a string input type';
    expectTypeOf<MutatedType>().toEqualTypeOf<Message<'test', NewMetadataType, number, string>>();
  });
});
