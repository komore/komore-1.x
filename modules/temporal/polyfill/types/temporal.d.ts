import {
  type Intl as IntlPolyfill,
  type Temporal as TemporalPolyfill,
  type toTemporalInstant,
} from '@js-temporal/polyfill';

export declare global {
  interface Date {
    toTemporalInstant: typeof toTemporalInstant;
  }

  namespace Temporal {
    export type ArithmeticOptions = TemporalPolyfill.ArithmeticOptions;
    export type AssignmentOptions = TemporalPolyfill.AssignmentOptions;
    export type ComparisonResult = TemporalPolyfill.ComparisonResult;
    export type DateTimeUnit = TemporalPolyfill.DateTimeUnit;
    export type DateUnit = TemporalPolyfill.DateUnit;
    export type DurationOptions = TemporalPolyfill.DurationOptions;
    export type RoundingMode = TemporalPolyfill.RoundingMode;
    export type TimeUnit = TemporalPolyfill.TimeUnit;
    export type ToInstantOptions = TemporalPolyfill.ToInstantOptions;
    export type ZonedDateTimeAssignmentOptions = TemporalPolyfill.ZonedDateTimeAssignmentOptions;
    export type PluralUnit<T extends DateTimeUnit> = TemporalPolyfill.PluralUnit<T>;
    export type LargestUnit<T extends DateTimeUnit> = TemporalPolyfill.LargestUnit<T>;
    export type SmallestUnit<T extends DateTimeUnit> = TemporalPolyfill.SmallestUnit<T>;
    export type TotalUnit<T extends DateTimeUnit> = TemporalPolyfill.TotalUnit<T>;
    export type ToStringPrecisionOptions = TemporalPolyfill.ToStringPrecisionOptions;
    export type ShowCalendarOption = TemporalPolyfill.ShowCalendarOption;
    export type CalendarTypeToStringOptions = TemporalPolyfill.CalendarTypeToStringOptions;
    export type ZonedDateTimeToStringOptions = TemporalPolyfill.ZonedDateTimeToStringOptions;
    export type InstantToStringOptions = TemporalPolyfill.InstantToStringOptions;
    export type DifferenceOptions<T extends DateTimeUnit> = TemporalPolyfill.DifferenceOptions<T>;
    export type RoundTo<T extends DateTimeUnit> = TemporalPolyfill.RoundTo<T>;
    export type DurationRoundTo = TemporalPolyfill.DurationRoundTo;
    export type DurationTotalOf = TemporalPolyfill.DurationTotalOf;
    export type DurationArithmeticOptions = TemporalPolyfill.DurationArithmeticOptions;
    export type DurationLike = TemporalPolyfill.DurationLike;
    export type Duration = TemporalPolyfill.Duration;
    export const Duration: typeof TemporalPolyfill.Duration;
    export type Instant = TemporalPolyfill.Instant;
    export const Instant: typeof TemporalPolyfill.Instant;
    export type CalendarProtocol = TemporalPolyfill.CalendarProtocol;
    export type CalendarLike = TemporalPolyfill.CalendarLike;
    export type Calendar = TemporalPolyfill.Calendar;
    export const Calendar: typeof TemporalPolyfill.Calendar;
    export type PlainDateLike = TemporalPolyfill.PlainDateLike;
    export type PlainDate = TemporalPolyfill.PlainDate;
    export const PlainDate: typeof TemporalPolyfill.PlainDate;
    export type PlainDateTimeLike = TemporalPolyfill.PlainDateTimeLike;
    export type PlainDateTime = TemporalPolyfill.PlainDateTime;
    export const PlainDateTime: typeof TemporalPolyfill.PlainDateTime;
    export type PlainMonthDayLike = TemporalPolyfill.PlainMonthDayLike;
    export type PlainMonthDay = TemporalPolyfill.PlainMonthDay;
    export const PlainMonthDay: typeof TemporalPolyfill.PlainMonthDay;
    export type PlainTimeLike = TemporalPolyfill.PlainTimeLike;
    export type PlainTime = TemporalPolyfill.PlainTime;
    export const PlainTime: typeof TemporalPolyfill.PlainTime;
    export type TimeZoneProtocol = TemporalPolyfill.TimeZoneProtocol;
    export type TimeZoneLike = TemporalPolyfill.TimeZoneLike;
    export type TimeZone = TemporalPolyfill.TimeZone;
    export const TimeZone: typeof TemporalPolyfill.TimeZone;
    export type PlainYearMonthLike = TemporalPolyfill.PlainYearMonthLike;
    export type PlainYearMonth = TemporalPolyfill.PlainYearMonth;
    export const PlainYearMonth: typeof TemporalPolyfill.PlainYearMonth;
    export type ZonedDateTimeLike = TemporalPolyfill.ZonedDateTimeLike;
    export type ZonedDateTime = TemporalPolyfill.ZonedDateTime;
    export const ZonedDateTime: typeof TemporalPolyfill.ZonedDateTime;
    export type Now = TemporalPolyfill.Now;
    export const Now: typeof TemporalPolyfill.Now;
  }

  declare namespace Intl {
    interface DateTimeFormatRangePart {
      source: 'shared' | 'startRange' | 'endRange';
    }

    export type DateTimeFormat = IntlPolyfill.DateTimeFormatl;
    export type DateTimeFormatOptions = IntlPolyfill.DateTimeFormatOptions;
    export type DateTimeFormat = IntlPolyfill.DateTimeFormat;
    export const DateTimeFormat: typeof IntlPolyfill.DateTimeFormat;
  }
}
