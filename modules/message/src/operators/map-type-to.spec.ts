import { lastValueFrom, of } from 'rxjs';
import { createMessage } from '../create-message';
import { mapTypeTo } from './map-type-to';

describe('map type to operator', () => {
  it('replaces the message type', async () => {
    // given: a message
    const testMessage = createMessage('test');
    // when: mapping to another type
    const mutatedMessage = await lastValueFrom(of(testMessage).pipe(mapTypeTo('test2')));
    // then: the new type is set
    expect(mutatedMessage.type).toBe('test2');
    // TODO: test typing => type === 'test2'
  });

  it('preserves extra information', async () => {
    // given: a message with extra information
    const testMessage = {
      ...createMessage('test'),
      extra: true
    };
    // when: mapping to another type
    const mutatedMessage = await lastValueFrom(of(testMessage).pipe(mapTypeTo('test2')));
    // then: the extra information is still present
    expect(mutatedMessage.extra).toBe(testMessage.extra);
  });
});
