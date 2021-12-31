import { lastValueFrom, of } from 'rxjs';
import { createMessage } from '../create-message';
import { mapMetadata } from './map-metadata';

describe('map metadata operator', () => {
  it('replaces the metadata when there is no metadata', async () => {
    given: 'a message without metadata'
    const testMessage = createMessage('test-without-metadata');
    when: 'mapping the metadata'
    const mutatedMessage$ = of(testMessage).pipe(
      mapMetadata(() => ({
        n: 42
      }))
    );
    then: 'the message is correctly mutated'
    const mutatedMessage = await lastValueFrom(mutatedMessage$);
    expect(mutatedMessage).not.toBe(testMessage);
    expect(mutatedMessage.metadata).not.toBe(testMessage.metadata);
    expect(mutatedMessage.metadata).toEqual({ n: 42 });
    expect(mutatedMessage.input).toBe(testMessage.input);
    expect(mutatedMessage.output).toBe(testMessage.output);
    expect(mutatedMessage.type).toBe(testMessage.type);
  });

  it('replaces the metadata when there is already metadata', async () => {
    given: 'a message with metadata'
    const testMessage = createMessage('test-with-metadata', { n: 42, b: true });
    when: 'mapping the metadata'
    const mutatedMessage$ = of(testMessage).pipe(
      mapMetadata(({ metadata }) => ({
        ...metadata,
        n: metadata.n + 1
      }))
    );
    then: 'the message is correctly mutated'
    const mutatedMessage = await lastValueFrom(mutatedMessage$);
    expect(mutatedMessage).not.toBe(testMessage);
    expect(mutatedMessage.metadata).not.toBe(testMessage.metadata);
    expect(mutatedMessage.metadata).toEqual({ n: 43, b: true });
    expect(mutatedMessage.input).toBe(testMessage.input);
    expect(mutatedMessage.output).toBe(testMessage.output);
    expect(mutatedMessage.type).toBe(testMessage.type);
  });
});
