import { type GenericEvent } from '../generic-event';

export function eventToProperties<EventType extends GenericEvent>(event: EventType): EventType['properties'] {
  return event.properties;
}
