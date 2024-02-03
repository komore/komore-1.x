/**
 * Returns the current number of seconds since Epoch
 *
 * @returns Number of seconds
 */
export function currentSecondsSinceEpoch(): number {
  return Temporal.Now.instant().epochSeconds;
}
