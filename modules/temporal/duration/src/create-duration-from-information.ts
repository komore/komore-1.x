import type { Duration } from './duration';
import { durationMarker } from './duration';
import type { DurationInformation } from './duration-information';

/**
 * Creates a duration from duration information
 * @param durationInformation Duration information
 * @returns Duration
 */
export function createDurationFromInformation(durationInformation: Partial<DurationInformation>): Duration {
  const {
    years = 0,
    months = 0,
    days = 0,
    hours = 0,
    minutes = 0,
    seconds = 0,
    milliseconds = 0
  } = durationInformation;
  const msSeconds = seconds * 1000;
  const msMinutes = minutes * 1000 * 60;
  const msHours = hours * 1000 * 60 * 60;
  const msDays = days * 1000 * 60 * 60 * 24;
  const msMonths = months * 1000 * 60 * 60 * 24 * 30;
  const msYears = years * 1000 * 60 * 60 * 24 * 365;
  return {
    _t: durationMarker,
    _: milliseconds + msSeconds + msMinutes + msHours + msDays + msMonths + msYears
  };
}
