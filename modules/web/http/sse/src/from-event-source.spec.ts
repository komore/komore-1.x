import { lastValueFrom } from '@komore/reactive/promise';
import { fromEventSource } from './from-event-source';

describe('From event source', () => {
  it.skip('works with an URL', async () => {
    const message$ = fromEventSource(new URL('https://example.org'));
    const message = await lastValueFrom(message$);
    expect(message).toBe('test');
  });
  // TODO: passes init options

  it.skip('works with an existing source', async () => {
    const eventSource = new EventSource('https://example.org');
    const message$ = fromEventSource(eventSource);
    const message = await lastValueFrom(message$);
    expect(message).toBe('test');
  });
  // TODO: doesn't close when transferOwnership is not set
});