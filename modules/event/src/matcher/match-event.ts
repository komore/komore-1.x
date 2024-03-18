import { type Event } from '../event';
import { type EventName } from '../event-name';
import { type EventMatcher } from './event-matcher';
import { type EventMatcherCase } from './event-matcher-case';

/**
 * Matches a event, branching based on the event type
 *
 * @param event Event
 * @param matcher Matcher
 * @returns Matcher result
 * @template EventType Event type
 * @template ResultType Result type
 */
export function matchEvent<EventType extends Event, ResultType>(
  event: EventType,
  matcher: EventMatcher<EventType, ResultType>
): ResultType {
  const { name, properties: parameters } = event;
  const handler = matcher[name as EventName<EventType>] as EventMatcherCase<EventType, ResultType>;
  return handler(parameters, event);
}
