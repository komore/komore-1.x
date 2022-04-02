/**
 * Gets a message event's data
 * @param messageEvent Message event
 * @returns Message event data
 * @template T Message event data type
 */
export function messageEventToData<T>(messageEvent: MessageEvent<T>): T {
  return messageEvent.data;
}
