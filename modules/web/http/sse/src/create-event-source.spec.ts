import { lastValueFrom } from 'rxjs';
import { createEventSource } from './create-event-source';

describe('Create event source', () => {
  it('works', async () => {
    const eventSource = createEventSource('https://example.org');

    const x = await lastValueFrom(eventSource);
    expect(x).toBe('test');
  });
});
