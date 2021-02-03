/**
 * Tests whether an event is a blob event
 * @param event Event
 * @returns true if the event is a blob event
 */
export function isBlobEvent(event: BlobEvent | Event): event is BlobEvent {
  return event.type === '???'; // TODO
}
