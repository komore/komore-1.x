import type { Event } from '@komore/event';
import type { EventRepository } from '@komore/event/store';

export function localStorageEventRepository<EventTypes extends Event<any, any>[]>(): EventRepository<EventTypes> {
  return {
      loadEvents: (aggregateKey, sequenceStart, sequenceEnd) => {

      },
      saveEvents: (aggregateKeys, )
      aggregateKey: string,
      sequenceStart: number | undefined,
      sequenceEnd: number | undefined
    ): Promise<ReadonlyArray<E>>;
  
  };
}