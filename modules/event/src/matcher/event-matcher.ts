import { type GenericEvent } from '../generic-event';
import { type EventMatcherCase } from './event-matcher-case';

/**
 * Event matcher
 *
 * @template EventType Possible event types
 * @template ResultType Result type
 */
export type EventMatcher<EventType extends GenericEvent, ResultType = void> = {
  [EventName in EventType['name']]: EventMatcherCase<Extract<EventType, { name: EventName }>, ResultType>;
};
