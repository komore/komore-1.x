import { createMessage } from '@komore/message';
import { of } from '@komore/reactive';
import { lastValueFrom } from '@komore/reactive/promise';
import { mapInputTo } from './map-input-to';

describe('map input to operator', () => {
  it('replaces the input when there is no input', async () => {
    given: 'a message without an input'
    const testMessage = createMessage('test-without-input');
    when: 'mapping the input'
    const mutatedMessage$ = of(testMessage).pipe(mapInputTo({ n: 42 }));
    expect: 'the message to be correctly mutated'
    const mutatedMessage = await lastValueFrom(mutatedMessage$);
    expect(mutatedMessage).not.toBe(testMessage);
    expect(mutatedMessage.input).not.toBe(testMessage.input);
    expect(mutatedMessage.input).toEqual({ n: 42 });
    expect(mutatedMessage.output).toBe(testMessage.output);
    expect(mutatedMessage.metadata).toBe(testMessage.metadata);
    expect(mutatedMessage.type).toBe(testMessage.type);
  });

  it('replaces the input when there is already an input', async () => {
    given: 'a message with an input'
    const testMessage = createMessage('test-with-input', {}, { n: 42, b: true }, undefined);
    when: 'mapping the input'
    const mutatedMessage$ = of(testMessage).pipe(mapInputTo({ n: 43 }));
    then: 'the message is correctly mutated'
    const mutatedMessage = await lastValueFrom(mutatedMessage$);
    expect(mutatedMessage).not.toBe(testMessage);
    expect(mutatedMessage.input).not.toBe(testMessage.input);
    expect(mutatedMessage.input).toEqual({ n: 43 });
    expect(mutatedMessage.output).toBe(testMessage.output);
    expect(mutatedMessage.metadata).toBe(testMessage.metadata);
    expect(mutatedMessage.type).toBe(testMessage.type);
  });
});
