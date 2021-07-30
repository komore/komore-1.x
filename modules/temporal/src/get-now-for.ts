import { Temporal } from '@js-temporal/polyfill';

export function getNowFor<
  T extends
    | Temporal.PlainDate
    | Temporal.PlainDateTime
    | Temporal.PlainTime
    | Temporal.PlainYearMonth
    | Temporal.PlainMonthDay
    | Temporal.ZonedDateTime
>(temporal: T): T {
  const now = (temporal instanceof Temporal.PlainDate)
    ? Temporal.now.plainDateISO()
    : temporal instanceof Temporal.PlainDateTime
    ? Temporal.now.plainDateTimeISO()
    : temporal instanceof Temporal.PlainTime
    ? Temporal.now.plainTimeISO()
    : temporal instanceof Temporal.PlainYearMonth
    ? Temporal.now.plainDateISO().toPlainYearMonth()
    : temporal instanceof Temporal.PlainMonthDay
    ? Temporal.now.plainDateISO().toPlainMonthDay()
    : Temporal.now.zonedDateTimeISO(temporal.timeZone)
  return now as T;
}
