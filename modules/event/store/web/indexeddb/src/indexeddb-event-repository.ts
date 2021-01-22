import type { Event } from '@komore/event';
import type { EventRepository } from '@komore/event/store';
import { createDatabase } from '@komore/web/storage/indexeddb';

export function indexedDBEventRepository<EventType extends Event<any, any>>(): EventRepository<EventType> {
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