import { createMessage } from '@komore/message';
import { expectTypeOf } from 'expect-type';
import { of } from '@komore/reactive';
import { lastValueFrom } from '@komore/reactive/promise';
import { mapTypeTo } from './map-type-to';

describe('map type to operator', () => {
  it('replaces the message type', async () => {
    given: 'a message with type "test"';
    const testMessage = createMessage('test');
    when: 'mapping to another type "test2"';
    const mutatedMessage$ = of(testMessage).pipe(mapTypeTo('test2'));
    then: 'the mutated message has the new "test2" type';
    const mutatedMessage = await lastValueFrom(mutatedMessage$);
    expect(mutatedMessage.type).toBe('test2');
    expectTypeOf(mutatedMessage.type).toEqualTypeOf<'test2'>();
  });
});
