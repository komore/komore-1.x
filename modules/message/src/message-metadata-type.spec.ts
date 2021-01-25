import { expectTypeOf } from 'expect-type';
import type { Message } from './message';
import type { MessageMetadataType } from './message-metadata-type';

describe('Message metadata type', () => {
  it('can infer the message metadata type', () => {
    given: 'a message type with a test metadata type'
    type TestMetadata = Readonly<{ test: string; }>;
    type TestMessage = Message<'test', TestMetadata, number, string>;
    expect: 'the test metadata type to be inferred'
    expectTypeOf<MessageMetadataType<TestMessage>>().toEqualTypeOf<TestMetadata>();
  });
});
