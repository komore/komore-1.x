import { lastValueFrom, of } from 'rxjs';
import { createMessage } from '../create-message';
import { mapInputTo } from './map-input-to';

describe('map input to operator', () => {
  it('replaces the input when there is no input', async () => {
    // given: a message without an input
    const testMessage = createMessage('test-without-input');
    // when: mapping the input
    const $ = of(testMessage).pipe(mapInputTo({ n: 42 }));
    const mutatedMessage = await lastValueFrom($);
    // then: the message is correctly mutated
    expect(mutatedMessage).not.toBe(testMessage);
    expect(mutatedMessage.input).not.toBe(testMessage.input);
    expect(mutatedMessage.input).toEqual({ n: 42 });
    expect(mutatedMessage.output).toBe(testMessage.output);
    expect(mutatedMessage.metadata).toBe(testMessage.metadata);
    expect(mutatedMessage.type).toBe(testMessage.type);
  });

  it('replaces the input when there is already an input', async () => {
    // given: a message with an input
    const testMessage = createMessage('test-with-input', {}, { n: 42, b: true }, undefined);
    // when: mapping the input
    const mutatedMessage = await lastValueFrom(of(testMessage).pipe(mapInputTo({ n: 43 })));
    // then: the message is correctly mutated
    expect(mutatedMessage).not.toBe(testMessage);
    expect(mutatedMessage.input).not.toBe(testMessage.input);
    expect(mutatedMessage.input).toEqual({ n: 43 });
    expect(mutatedMessage.output).toBe(testMessage.output);
    expect(mutatedMessage.metadata).toBe(testMessage.metadata);
    expect(mutatedMessage.type).toBe(testMessage.type);
  });

  it('preserves extra information', async () => {
    // given: a message with extra information
    const testMessage = {
      ...createMessage('test-with-extra'),
      extra: true
    };
    // when: mapping to another input
    const mutatedMessage = await lastValueFrom(of(testMessage).pipe(mapInputTo('new-input' as const)));
    // then: the extra information is still present
    expect(mutatedMessage.extra).toBe(testMessage.extra);
  });
});
