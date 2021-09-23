import { createMessage } from './create-message';

describe('Create message', () => {
  it('creates a message', () => {
    given: 'a message type and metadata';
    const messageType = 'test-type';
    const messageMetadata = {
      timing: {
        start: new Date()
      },
      tracing: {
        correlationId: 'test-correlation-id',
        span: {
          traceId: 'test-trace-id',
          spanId: 'test-span-id'
        }
      }
    };
    when: 'creating a message';
    const message = createMessage(messageType, messageMetadata);
    then: 'the message contains the type and metadata';
    expect(message.type).toBe(messageType);
    expect(message.metadata).toBe(messageMetadata);
  });
});
