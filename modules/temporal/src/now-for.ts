/**
 * TODO
 * @param temporal
 * @returns
 * @private
 */
export function nowFor<
  T extends
    | Temporal.PlainDate
    | Temporal.PlainDateTime
    | Temporal.PlainTime
    | Temporal.PlainYearMonth
    | Temporal.PlainMonthDay
    | Temporal.ZonedDateTime,
>(temporal: T): T {
  const now =
    temporal instanceof Temporal.PlainDate
      ? Temporal.Now.plainDateISO()
      : temporal instanceof Temporal.PlainDateTime
        ? Temporal.Now.plainDateTimeISO()
        : temporal instanceof Temporal.PlainTime
          ? Temporal.Now.plainTimeISO()
          : temporal instanceof Temporal.PlainYearMonth
            ? Temporal.Now.plainDateISO().toPlainYearMonth()
            : temporal instanceof Temporal.PlainMonthDay
              ? Temporal.Now.plainDateISO().toPlainMonthDay()
              : Temporal.Now.zonedDateTimeISO(temporal.timeZoneId);
  return now as T;
}
