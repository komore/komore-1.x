import { type GenericEvent } from '../generic-event';

/**
 * Event matcher case
 */
export interface EventMatcherCase<EventType extends GenericEvent, ResultType> {
  (parameters: EventType['properties'], event: EventType): ResultType;
}
