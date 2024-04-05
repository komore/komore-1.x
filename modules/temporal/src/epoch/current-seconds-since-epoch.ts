import { type SecondsSinceEpoch } from './seconds-since-epoch';

/**
 * Returns the current number of seconds since Epoch
 *
 * @returns Number of seconds since Epoch
 */
export function currentSecondsSinceEpoch(): SecondsSinceEpoch {
  return Temporal.Now.instant().epochSeconds as SecondsSinceEpoch;
}
