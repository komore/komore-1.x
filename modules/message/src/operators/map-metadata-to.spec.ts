import { lastValueFrom, of } from 'rxjs';
import { createMessage } from '../create-message';
import { mapMetadataTo } from './map-metadata-to';

describe('map metadata to operator', () => {
  it('replaces the metadata when there is no metadata', async () => {
    // given: a message without metadata
    const testMessage = createMessage('test-without-metadata');
    // when: mapping to another metadata
    const $ = of(testMessage).pipe(mapMetadataTo({ n: 42 }));
    const mutatedMessage = await lastValueFrom($);
    // then: the message is correctly mutated
    expect(mutatedMessage).not.toBe(testMessage);
    expect(mutatedMessage.metadata).not.toBe(testMessage.metadata);
    expect(mutatedMessage.metadata).toEqual({ n: 42 });
    expect(mutatedMessage.input).toBe(testMessage.input);
    expect(mutatedMessage.output).toBe(testMessage.output);
    expect(mutatedMessage.type).toBe(testMessage.type);
  });

  it('replaces the metadata when there is already metadata', async () => {
    // given: a message with metadata
    const testMessage = createMessage('test-with-metadata', { n: 42, b: true });
    // when: mapping to another metadata
    const mutatedMessage = await lastValueFrom(of(testMessage).pipe(mapMetadataTo({ n: 43 })));
    // then: the message is correctly mutated
    expect(mutatedMessage).not.toBe(testMessage);
    expect(mutatedMessage.metadata).not.toBe(testMessage.metadata);
    expect(mutatedMessage.metadata).toEqual({ n: 43 });
    expect(mutatedMessage.input).toBe(testMessage.input);
    expect(mutatedMessage.output).toBe(testMessage.output);
    expect(mutatedMessage.type).toBe(testMessage.type);
  });

  it('preserves extra information', async () => {
    // given: a message with extra information
    const testMessage = {
      ...createMessage('test-with-extra'),
      extra: true
    };
    // when: mapping to another metadata
    const mutatedMessage = await lastValueFrom(of(testMessage).pipe(mapMetadataTo({x: 'new-metadata'})));
    // then: the extra information is still present
    expect(mutatedMessage.extra).toBe(testMessage.extra);
  });
});
