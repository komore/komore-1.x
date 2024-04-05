import { type MillisecondsSinceEpoch } from './milliseconds-since-epoch';

/**
 * Returns the current number of milliseconds since Epoch
 *
 * @returns Number of milliseconds since Epoch
 */
export function currentMillisecondsSinceEpoch(): MillisecondsSinceEpoch {
  return Temporal.Now.instant().epochMilliseconds as MillisecondsSinceEpoch;
}
