/**
 * Returns an AWS date-time timestamp, given a plain date-time
 *
 * @param dateTime Plain date-time
 * @returns AWS date-time timestamp
 */
export function dateTimeToAwsDateTimeStamp(dateTime: Temporal.PlainDateTime): string {
  const { day, month, year, hour, minute, second } = dateTime;
  const dayString = `${day}`.padStart(2, '0');
  const monthString = `${month}`.padStart(2, '0');
  const yearString = `${year}`.padStart(4, '0');
  const hourString = `${hour}`.padStart(2, '0');
  const minuteString = `${minute}`.padStart(2, '0');
  const secondString = `${second}`.padStart(2, '0');
  return `${yearString}${monthString}${dayString}T${hourString}${minuteString}${secondString}Z`;
}
