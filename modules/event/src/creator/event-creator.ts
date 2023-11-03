import { type GenericEvent } from '../generic-event';
import { type EventPropertiesType } from '../properties/event-properties-type';

/**
 * Event creator
 *
 * @template EventType Event type
 * @private
 */
export type EventCreator<EventType extends GenericEvent> = {
  readonly type: EventType;
} & EventPropertiesType<EventType> extends void
  ? () => EventType
  : (parameters: EventPropertiesType<EventType>) => EventType;
