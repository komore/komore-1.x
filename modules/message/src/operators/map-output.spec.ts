import { expectTypeOf } from 'expect-type';
import { lastValueFrom, of } from 'rxjs';
import { createMessage } from '../create-message';
import { mapOutput } from './map-output';

describe('map output operator', () => {
  it('replaces the output when there is no output', async () => {
    given: 'a message without an output'
    const testMessage = createMessage('test-without-output');
    when: 'mapping the output'
    const mutatedMessage$ = of(testMessage).pipe(mapOutput(() => 42 as const));
    then: 'the message is correctly mutated'
    const mutatedMessage = await lastValueFrom(mutatedMessage$);
    expect(mutatedMessage).not.toBe(testMessage);
    expect(mutatedMessage.output).not.toBe(testMessage.output);
    expect(mutatedMessage.output).toBe(42);
    expectTypeOf(mutatedMessage.output).toEqualTypeOf<42>();
    expect(mutatedMessage.input).toBe(testMessage.input);
    expect(mutatedMessage.metadata).toBe(testMessage.metadata);
    expect(mutatedMessage.type).toBe(testMessage.type);
  });

  it('replaces the output when there is already an output', async () => {
    given: 'a message with an output'
    const testMessage = createMessage('test-with-output', {}, undefined, { n: 42, b: true });
    when: 'mapping the output'
    const mutatedMessage$ = of(testMessage).pipe(
      mapOutput(({ output }) => ({
        ...output,
        n: output.n + 1,
        s: 'extra' as const
      }))
    );
    then: 'the message is correctly mutated'
    const mutatedMessage = await lastValueFrom(mutatedMessage$);
    expect(mutatedMessage).not.toBe(testMessage);
    expect(mutatedMessage.output).not.toBe(testMessage.output);
    expect(mutatedMessage.output).toEqual({ n: 43, b: true, s: 'extra' });
    expectTypeOf(mutatedMessage.output).toEqualTypeOf<{ n: number, b: boolean, s: 'extra' }>();
    expect(mutatedMessage.input).toBe(testMessage.input);
    expect(mutatedMessage.metadata).toBe(testMessage.metadata);
    expect(mutatedMessage.type).toBe(testMessage.type);
  });
});
