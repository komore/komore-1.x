/**
 * Returns true if the event was not cancelled
 *
 * @param cancelled Whether the event was cancelled
 * @returns true if the event was not cancelled
 */
export function isEventNotCancelled(cancelled: boolean): boolean {
  return !cancelled;
}
