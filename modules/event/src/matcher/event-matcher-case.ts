import { type Event } from '../event';

/**
 * Event matcher case
 *
 * @template EventType Event type
 */
export interface EventMatcherCase<EventType extends Event, ResultType> {
  (parameters: EventType['properties'], event: EventType): ResultType;
}
