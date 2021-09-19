export function toMessageEventData<T>(messageEvent: MessageEvent<T>): T {
  return messageEvent.data;
}
