import { type Event } from '../event';
import { type EventMatcherCase } from './event-matcher-case';

/**
 * Event matcher
 *
 * @template EventType Possible event types
 * @template ResultType Result type
 */
export type EventMatcher<EventType extends Event, ResultType = void> = {
  [EventName in EventType['name']]: EventMatcherCase<Extract<EventType, { name: EventName }>, ResultType>;
};
