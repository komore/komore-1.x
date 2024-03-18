import { type ReadonlyRecord } from '@komore/typescript';
import { entriesToObject, objectToEntries } from '@komore/functional';

import { type EventType as GenericEventType } from './event-type';

/**
 * Merges a composite event type into a event type
 *
 * ```ts
 * const compositeEventType = {
 *   eventsX: createEventType(),
 *   eventsY: createEventType()
 * };
 * const eventType = mergeCompositeEventType(compositeEventType);
 * ```
 *
 * @param compositeEventType Composite event type
 * @returns Event type
 */
export function mergeCompositeEventType<EventType extends GenericEventType>(
  compositeEventType: ReadonlyRecord<string, EventType>
): EventType {
  const compositeEventTypeEntries = objectToEntries(compositeEventType);
  const eventTypeEntries = compositeEventTypeEntries.flatMap(([, eventType]) => objectToEntries(eventType));
  return entriesToObject(eventTypeEntries) as EventType;
}
