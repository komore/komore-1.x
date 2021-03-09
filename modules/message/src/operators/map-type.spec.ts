import { of } from '@komore/reactive';
import { lastValueFrom } from '@komore/reactive/promise';
import { createMessage } from '../create-message';
import { mapType } from './map-type';

describe('Map type operator', () => {
  it('replaces the message type', async () => {
    given: 'a message with a "test" type';
    const testMessage = createMessage('test');
    when: 'mapping the type to the previous type with an "other-" prefix';
    const mutatedMessage$ = of(testMessage).pipe(mapType(({ type }) => `other-${type}`));
    expect: 'a new message with the new type to have been emitted';
    const mutatedMessage = await lastValueFrom(mutatedMessage$);
    expect(mutatedMessage).not.toBe(testMessage);
    expect(mutatedMessage.type).toBe('other-test');
  });
});
