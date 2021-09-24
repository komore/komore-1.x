/**
 * Event dispatcher
 * @param eventDetails Event details
 * @returns true if the event's cancellable attribute is true or if the event's preventDefault method was called
 * @template EventDetailType Event detail type
 */
export type EventDispatcher<EventDetailType> = EventDetailType extends void
  ? () => boolean
  : (eventDetails: EventDetailType) => boolean;
// TODO: observable result for asynchronous response?