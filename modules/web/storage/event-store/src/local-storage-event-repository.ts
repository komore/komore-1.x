import { type Event } from '@komore/event';
import { type EventRepository } from '@komore/event/store';

export function localStorageEventRepository<
  EventTypes extends Event<string, Record<string, unknown> | undefined>[]
>(): EventRepository<EventTypes> {
  return {
    loadEvents: (aggregateKey, sequenceStart, sequenceEnd) => {},
    storeEvents: (aggregateKey, events) => {}
  };
}
