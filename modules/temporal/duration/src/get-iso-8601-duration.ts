import type { Duration } from "./duration";
import { getDurationInformation } from "./get-duration-information";

/**
 * Gets an ISO 8601 duration string
 * @param duration Duration
 * @returns ISO 8601 duration string
 */
export function getISO8601Duration(duration: Duration): string {
  const durationInformation = getDurationInformation(duration);
  const { years, months, days, hours, minutes, seconds, milliseconds } = durationInformation;
  const secondsWithFraction = seconds + milliseconds / 1000;
  return `P${years}Y${months}M${days}DT${hours}H${minutes}M${secondsWithFraction}S`;
}
