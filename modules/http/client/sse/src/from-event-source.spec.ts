import { lastValueFrom, map } from '@komore/reactive';
import { feature } from '@komore/testing';

import { fromEventSource } from './from-event-source';

feature('From event source', {
  async 'works with an URL'() {
    given: 'TODO';
    const url = new URL('https://example.org');

    when: 'TODO';
    const eventData$ = fromEventSource(url).pipe(map(({ data }) => data as string));
    const eventData = await lastValueFrom(eventData$);

    then: 'TODO';
    eventData === 'test';
  },
  // TODO: passes init options
  async 'works with an existing source'() {
    given: 'TODO';
    const eventSource = new EventSource('https://example.org');

    when: 'TODO';
    const eventData$ = fromEventSource(eventSource).pipe(map(({ data }) => data as string));
    const eventData = await lastValueFrom(eventData$);

    then: 'TODO';
    eventData === 'test';
  },
  // TODO: doesn't close when transferOwnership is not set
});
