import { lastValueFrom, of } from 'rxjs';
import { createMessage } from '../create-message';
import { mapOutput } from './map-output';

describe('map output operator', () => {
  it('replaces the output when there is no output', async () => {
    // given: a message without an output
    const testMessage = createMessage('test-without-output');
    // when: mapping the output
    const $ = of(testMessage).pipe(
      mapOutput(() => ({
        n: 42
      }))
    );
    const mutatedMessage = await lastValueFrom($);
    // then: the message is correctly mutated
    expect(mutatedMessage).not.toBe(testMessage);
    expect(mutatedMessage.output).not.toBe(testMessage.output);
    expect(mutatedMessage.output).toEqual({ n: 42 });
    expect(mutatedMessage.input).toBe(testMessage.input);
    expect(mutatedMessage.metadata).toBe(testMessage.metadata);
    expect(mutatedMessage.type).toBe(testMessage.type);
  });

  it('replaces the output when there is already an output', async () => {
    // given: a message with an output
    const testMessage = createMessage('test-with-output', {}, undefined, { n: 42, b: true });
    // when: mapping the output
    const mutatedMessage = await lastValueFrom(
      of(testMessage).pipe(
        mapOutput(({ output }) => ({
          ...output,
          n: output.n + 1
        }))
      )
    );
    // then: the message is correctly mutated
    expect(mutatedMessage).not.toBe(testMessage);
    expect(mutatedMessage.output).not.toBe(testMessage.output);
    expect(mutatedMessage.output).toEqual({ n: 43, b: true });
    expect(mutatedMessage.input).toBe(testMessage.input);
    expect(mutatedMessage.metadata).toBe(testMessage.metadata);
    expect(mutatedMessage.type).toBe(testMessage.type);
  });

  it('preserves extra information', async () => {
    // given: a message with extra information
    const testMessage = {
      ...createMessage('test-with-extra'),
      extra: true
    };
    // when: mapping to another output
    const mutatedMessage = await lastValueFrom(of(testMessage).pipe(mapOutput(() => 'new-output' as const)));
    // then: the extra information is still present
    expect(mutatedMessage.extra).toBe(testMessage.extra);
  });
});
