/**
 * Tests whether a message event comes from a set of possible origins
 *
 * @param origins List of origins that are allowed
 * @returns true if the origin is allowed
 */
export function isMessageEventOriginIn(
  ...origins: ReadonlyArray<string>
): (messageEvent: MessageEvent<unknown>) => boolean {
  const set = new Set<string>(origins);
  return messageEvent => set.has(messageEvent.origin);
}
