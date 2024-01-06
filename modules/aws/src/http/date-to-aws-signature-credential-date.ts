import { type Temporal } from '@komore/temporal';

/**
 * Returns a date formatted for an AWS signature credential, given a plain date
 *
 * @param date Date
 * @returns Date formatted for an AWS signature credential
 * @private
 */
export function dateToAwsSignatureCredentialDate(date: Temporal.PlainDate): string {
  const { day, month, year } = date;
  const dayString = `${day}`.padStart(2, '0');
  const monthString = `${month}`.padStart(2, '0');
  const yearString = `${year}`.padStart(4, '0');
  return `${yearString}${monthString}${dayString}`;
}
