import { lastValueFrom, of } from '@komore/reactive';
import { createMessage } from '../create-message';
import { mapInput } from './map-input';

describe('map input operator', () => {
  it('replaces the input when there is no input', async () => {
    given: 'a message without an input'
    const testMessage = createMessage('test-without-input');
    when: 'mapping the input'
    const mutatedMessage$ = of(testMessage).pipe(
      mapInput(() => ({
        n: 42
      }))
    );
    const mutatedMessage = await lastValueFrom(mutatedMessage$);
    then: 'the message is correctly mutated'
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
    const mutatedMessage$ = of(testMessage).pipe(
      mapInput(({ input }) => ({
        ...input,
        n: input.n + 1
      }))
    );
    then: 'the message is correctly mutated'
    const mutatedMessage = await lastValueFrom(mutatedMessage$);
    expect(mutatedMessage).not.toBe(testMessage);
    expect(mutatedMessage.input).not.toBe(testMessage.input);
    expect(mutatedMessage.input).toEqual({ n: 43, b: true });
    expect(mutatedMessage.output).toBe(testMessage.output);
    expect(mutatedMessage.metadata).toBe(testMessage.metadata);
    expect(mutatedMessage.type).toBe(testMessage.type);
  });
});
