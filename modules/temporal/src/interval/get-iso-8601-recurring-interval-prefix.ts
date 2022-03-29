/**
 * Gets an ISO 8601 recurring interval prefix from an optional number of recurring repetitions
 * @param recurringRepetitions Recurring repetitions
 * @returns ISO 8601 recurring interval prefix
 * @private
 */
export function getISO8601RecurringIntervalPrefix(recurringRepetitions: number | undefined): string {
  switch (recurringRepetitions) {
    case undefined:
      return '';
    case -1:
      return 'R/';
    default:
      return `R${recurringRepetitions}/`;
  }
}
