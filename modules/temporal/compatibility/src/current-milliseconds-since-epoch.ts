/**
 * Returns the current number of milliseconds since Epoch
 *
 * @returns Number of milliseconds
 */
export function currentMillisecondsSinceEpoch(): number {
  return Temporal.Now.instant().epochMilliseconds;
}
