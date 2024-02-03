/**
 * Mocked temporals
 */
export interface MockedTemporals {
  readonly currentInstant: Temporal.Instant;
  readonly currentPlainDate: Temporal.PlainDate;
  readonly currentPlainDateTime: Temporal.PlainDateTime;
  readonly currentPlainTime: Temporal.PlainTime;
  readonly currentTimeZoneId: string;
  readonly currentZonedDateTime: Temporal.ZonedDateTime;
}
