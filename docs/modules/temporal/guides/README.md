# @komore/temporal Guides

## Naming convention

| <=              | Ref           | =>               |
| --------------- | ------------- | ---------------- |
| dateToPreceding |               | dateToFollowingX |
|                 |               | timeToFollowingX |
|                 |               |                  |
| isYearBefore    | isSameYearAs  | isYearAfter      |
| isMonthBefore   | isSameMonthAs | isMonthAfter     |
| isWeekBefore    | isSameWeekAs  | isWeekAfter      |

Millenia/century/decade/etc => absolute value vs interval

| <=              | Now                | =>              |
| --------------- | ------------------ | --------------- |
| getLastMillenia | getCurrentMillenia | getNextMillenia |
| getLastCentury  | getCurrentCentury  | getNextCentury  |
| getLastDecade   | getCurrentDecade   | getNextDecade   |
| getLastYear     | getThisYear        | getNextYear     |
| getLastMonth    | getThisMonth       | getNextMonth    |
| getYesterday    | getToday           | getTomorrow     |
| isLastMillenia  | isThisMillenia     | isNextMillenia  |
| isLastCentury   | isThisCentury      | isNextCentury   |
| isLastDecade    | isThisDecade       | isNextDecade    |
| isLastYear      | isThisYear         | isNextYear      |
| isLastMonth     | isThisMonth        | isNextMonth     |
| isLastWeek      | isThisWeek         | isNextWeek      |
| isYesterday     | isToday            | isTomorrow      |

Following vs Next: following from a reference point, next from now

Preceding vs Previous

## Time zone

- ✅ getLocalTimeZoneId
- ✅ getLocalTimeZone
- ✅ temporalToTimeZone
- ✅ temporalToTimeZoneId
- ✅ timeZoneToTimeZoneId
- ✅ temporalWithTimeZone
- ✅ isSameTimeZoneAs
- ✅ timeZoneToTimezoneOffsetAt
- ✅ temporalToTimeZoneOffsetFor

## Extract information

- ✅ dateToMonth
- ✅ dateToDay
- ✅ dateToDayOfWeek
- ✅ dateToDayOfYear
- ✅ timeToHour
- ✅ timeToMinute
- ✅ timeToSecond
- ✅ timeToMillisecond
- ✅ timeToMicrosecond
- ✅ timeToNanosecond

## Add or subtract

- ✅ addMonths
- ✅ addWeeks
- ✅ addDays
- ✅ addHours
- ✅ addMinutes
- ✅ addSeconds
- ✅ addMilliseconds
- ✅ addMicroseconds
- ✅ addNanoseconds
- ✅ subtractMonths
- ✅ subtractWeeks
- ✅ subtractDays
- ✅ subtractHours
- ✅ subtractMinutes
- ✅ subtractSeconds
- ✅ subtractMilliseconds
- ✅ subtractMicroseconds
- ✅ subtractNanoseconds

## Find a temporal in a list

- findEarliestDate
- findEarliestDateIndex
- findLatestDate
- findLatestDateIndex

### Millenia

### Century

- getThisCentury
- getLastCentury
- getNextCentury
- isThisCentury
- isNextCentury
- isLastCentury

- ✅ dateToCentury

### Decade

### Year

- ✅ getThisYear
- ✅ getLastYear
- ✅ getNextYear
- ✅ isThisYear
- ✅ isNextYear
- ✅ isLastYear
- ✅ getElapsedDaysThisYear
- ✅ getRemainingDaysThisYear

- ✅ isYearAfter
- ✅ isYearBefore
- ✅ isSameYearAs
- ✅ isLaterYearThan
- ✅ isEarlierYearThan
- ✅ isLeapYear

- ✅ dateToYear
- ✅ dateToStartOfYear
- ✅ dateToEndOfYear
- ✅ addYears
- ✅ subtractYears

### Month

- ✅ getThisMonth
- ✅ getLastMonth
- ✅ getNextMonth
- ✅ isThisMonth
- isNextMonth
- isLastMonth
- isMonthAfter
- isMonthBefore
- isSameMonthAs
- ✅ dateToStartOfMonth
- ✅ dateToEndOfMonth
- ✅ dateToRemainingDaysInMonth
- ✅ dateToElapsedDaysInMonth
- ✅ getElapsedDaysThisMonth
- ✅ getRemainingDaysThisMonth
- isEarlierMonthThan
- isLaterMonthThan
- ✅ Month
- ✅ MONTHS

### Week

- ✅ isThisWeek
- ✅ isNextWeek
- ✅ isLastWeek
- ✅ isWeekAfter
- ✅ isWeekBefore
- ✅ isSameWeekAs
- ✅ dateToStartOfWeek
- ✅ dateToEndOfWeek
- ✅ dateToWeekOfYear
- ✅ getElapsedDaysThisWeek
- ✅ getRemainingDaysThisWeek

### Week-end

- ✅ isWeekEnd
- ✅ isThisWeekEnd
- ✅ isNextWeekEnd
- ✅ isLastWeekEnd
- isWeekEndAfter
- isWeekEndBefore
- isSameWeekEndAs
- isEarlierWeekEndThan
- isLaterWeekEndThan

### Day

- ✅ getToday
- ✅ getTomorrow
- ✅ getYesterday
- ✅ isToday
- ✅ isTomorrow
- ✅ isYesterday
- ✅ isFirstDayOfYear
- ✅ isLastDayOfYear
- ✅ isFirstDayOfMonth
- ✅ isLastDayOfMonth
- ✅ isFirstDayOfWeek
- ✅ isLastDayOfWeek
- isEarlierDayThan
- isLaterDayThan

### Noon ✅

- ✅ getNoon
- ✅ isNoon
- ✅ isAfterNoon
- ✅ isBeforeNoon
- ✅ timeToNoon

### Midnight

- ✅ getMidnight
- ✅ isMidnight
- ✅ timeToMidnight

### Week day

- ✅ isMonday
- ✅ isTuesday
- ✅ isWednesday
- ✅ isThursday
- ✅ isFriday
- ✅ isSaturday
- ✅ isSunday
- ✅ isWeekDay
- ✅ isEarlierWeekDayThan
- ✅ isLaterWeekDayThan

### Hour

- ✅ isThisHour
- ✅ isNextHour
- ✅ isLastHour
- ✅ isSameHourAs
- isEarlierHourThan
- isLaterHourThan
- ✅ timeToStartOfHour

### Minute

- ✅ isThisMinute
- ✅ isSameMinuteAs

### Second

### Millisecond

### Microsecond

### Nanosecond

### Duration

- ✅ iso8601WeekDurationToDuration
- ✅ durationToISO8601WeekDuration
- ✅ durationToYears
- ✅ durationToMonths
- ✅ durationToWeeks
- ✅ durationToDays
- ✅ durationToHours
- ✅ durationToMinutes
- ✅ durationToSeconds
- ✅ durationToMilliseconds
- ✅ durationToMicroseconds
- ✅ durationToNanoseconds
- ✅ temporalToDurationSince
- ✅ temporalToDurationUntil
- ✅ DurationUnit
- ✅ InvalidISO8601WeekDurationError

### Interval

- ✅ IntervalTemporal
- ✅ IntervalTemporalType
- ✅ Interval
- ✅ RepeatingInterval
- ✅ RepeatingIntervalDirection
- ✅ RepeatingIntervalOptions
- ✅ createInterval
- ✅ createRepeatingInterval
- ✅ iso8601IntervalToInterval
- ✅ iso8601IntervalToRepeatingInterval
- ✅ intervalToISO8601Interval
- ✅ intervalToDuration
- ✅ durationToIntervalUntil
- ✅ durationToIntervalSince
- ✅ intervalToStart
- ✅ intervalToEnd
- ✅ intervalToRepeatingInterval
- ✅ InvalidISO8601IntervalError
- ✅ ISO8601IntervalOptions

### Date time

- ✅ isPast
- ✅ isFuture
- isEarlierThan
- isLaterThan
- dateTimestoEarliestDateTime
- dateTimesToEarliestDateTimeIndex

### Date

- ✅ isEarlierDateThan
- ✅ isLaterDateThan
- ✅ datesToEarliestDate
- ✅ datesToEarliestDateIndex
- ✅ datesToLatestDate
- ✅ datesToLatestDateIndex

### Time

- ✅ isSameTimeAs
- ✅ isEarlierTimeThan
- ✅ isLaterTimeThan
- timesToEarliestTime
- timesToEarliestTimeIndex
- timesToLatestTime
- timestoLatestTimeIndex
