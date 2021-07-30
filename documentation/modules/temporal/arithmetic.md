# Arithmetic

TODO.

## Adding

Adding to an instant creates a new instant that occurs later in the future.

[`addDateTime(_)`] can add date and/or time units to an instant:

```ts
import { addDateTime, parseLocalDateTime } from '@komore/temporal';

const dateTime = parseLocalDateTime('2020-01-01T12:34:56.789');
const fiveDaysSixHoursLater = addDateTime(dateTime, { days: 5, hours: 6 });
```

Additional functions offer finer granularity and a more expressive name:

| Function               | Description                                     |
| :--------------------- | :---------------------------------------------- |
| [`addDateTime(_)`]     | Adds any combination of date and/or time units. |
| [`addDate(_)`]         | Adds any combination of date units.             |
| [`addTime(_)`]         | Adds any combination of time units.             |
| [`addYears(_)`]        | Adds years to an instant.                       |
| [`addMonths(_)`]       | Adds months to an instant.                      |
| [`addWeeks(_)`]        | Adds weeks to an instant.                       |
| [`addDays(_)`]         | Adds days to an instant.                        |
| [`addHours(_)`]        | Adds hours to an instant.                       |
| [`addMinutes(_)`]      | Adds minutes to an instant.                     |
| [`addSeconds(_)`]      | Adds seconds to an instant.                     |
| [`addMilliseconds(_)`] | Adds milliseconds to an instant.                |
| [`addMicroseconds(_)`] | Adds microseconds to an instant.                |
| [`addNanoseconds(_)`]  | Adds nanoseconds to an instant.                 |

NOTE: While adding negative values is possible, using [`subtract*()`] functions makes the intent clear

## Subtracting

Subtracting from an instant creates a new instant that occurs earlier in the past.

```ts
import { subtractDateTime, parseLocalDateTime } from '@komore/temporal';

const dateTime = parseLocalDateTime('2020-01-01T12:34:56.789');
const threeWeeksFourMinutesEarlier = subtractDateTime(dateTime, { weeks: 3, minutes: 4 });
```

Additional functions offer finer granularity and a more expressive name:

| Function                    | Description                                          |
| :-------------------------- | :--------------------------------------------------- |
| [`subtractDateTime(_)`]     | Subtracts any combination of date and/or time units. |
| [`subtractDate(_)`]         | Subtracts any combination of date units.             |
| [`subtractTime(_)`]         | Subtracts any combination of time units.             |
| [`subtractYears(_)`]        | Subtracts years from an instant.                     |
| [`subtractMonths(_)`]       | Subtracts months from an instant.                    |
| [`subtractWeeks(_)`]        | Subtracts weeks from an instant.                     |
| [`subtractDays(_)`]         | Subtracts days from an instant.                      |
| [`subtractHours(_)`]        | Subtracts hours from an instant.                     |
| [`subtractMinutes(_)`]      | Subtracts minutes from an instant.                   |
| [`subtractSeconds(_)`]      | Subtracts seconds from an instant.                   |
| [`subtractMilliseconds(_)`] | Subtracts milliseconds from an instant.              |
| [`subtractMicroseconds(_)`] | Subtracts microseconds from an instant.              |
| [`subtractNanoseconds(_)`]  | Subtracts nanoseconds from an instant.               |

NOTE: While subtracting negative values is possible, using [`add*()`] functions makes the intent clear

## Difference

A difference between two instants is expressed as a [duration].

[`getDurationBetween(_)`] can compute a [`Duration`] from two instants:

```ts
import { getDurationBetween, parseLocalDateTime } from '@komore/temporal';

const begin = parseLocalDateTime('2020-01-01T12:34:56.789');
const end = parseLocalDateTime('2020-01-04T01:23:45.678');
const duration = getDurationBetween(begin, end);
```

Additional functions offer finer granularity and a more expressive name:

| Function                           | Description                                                |
| :--------------------------------- | :--------------------------------------------------------- |
| [`getDifferenceInYears(_)`]        | Gets the difference between two instants, in years.        |
| [`getDifferenceInMonths(_)`]       | Gets the difference between two instants, in months.       |
| [`getDifferenceInWeeks(_)`]        | Gets the difference between two instants, in weeks.        |
| [`getDifferenceInDays(_)`]         | Gets the difference between two instants, in days.         |
| [`getDifferenceInHours(_)`]        | Gets the difference between two instants, in hours.        |
| [`getDifferenceInMinutes(_)`]      | Gets the difference between two instants, in minutes.      |
| [`getDifferenceInSeconds(_)`]      | Gets the difference between two instants, in seconds.      |
| [`getDifferenceInMilliseconds(_)`] | Gets the difference between two instants, in milliseconds. |
| [`getDifferenceInMicroseconds(_)`] | Gets the difference between two instants, in microseconds. |
| [`getDifferenceInNanoseconds(_)`]  | Gets the difference between two instants, in nanoseconds.  |

[`add*()`]: #adding
[`adddate(_)`]: ../../../../modules/temporal/src/date/add-date.ts
[`adddatetime(_)`]: ../../../../modules/temporal/src/date-time/add-date-time.ts
[`adddays(_)`]: ../../../../modules/temporal/src/date/day/add-days.ts
[`addhours(_)`]: ../../../../modules/temporal/src/time/hour/add-hours.ts
[`addmicroseconds(_)`]: ../../../../modules/temporal/src/time/microsecond/add-microseconds.ts
[`addmilliseconds(_)`]: ../../../../modules/temporal/src/time/millisecond/add-milliseconds.ts
[`addminutes(_)`]: ../../../../modules/temporal/src/time/minute/add-minutes.ts
[`addmonths(_)`]: ../../../../modules/temporal/src/date/month/add-months.ts
[`addnanoseconds(_)`]: ../../../../modules/temporal/src/time/nanosecond/add-nanoseconds.ts
[`addseconds(_)`]: ../../../../modules/temporal/src/time/second/add-seconds.ts
[`addtime(_)`]: ../../../../modules/temporal/src/time/add-time.ts
[`addweeks(_)`]: ../../../../modules/temporal/src/date/week/add-weeks.ts
[`addyears(_)`]: ../../../../modules/temporal/src/date/year/add-years.ts
[`getdifferenceindays(_)`]: ../../../../modules/temporal/src/duration/get-difference-in-days.ts
[`getdifferenceinhours(_)`]: ../../../../modules/temporal/src/duration/get-difference-in-hours.ts
[`getdifferenceinmicroseconds(_)`]: ../../../../modules/temporal/src/duration/get-difference-in-microseconds.ts
[`getdifferenceinmilliseconds(_)`]: ../../../../modules/temporal/src/duration/get-difference-in-milliseconds.ts
[`getdifferenceinminutes(_)`]: ../../../../modules/temporal/src/duration/get-difference-in-minutes.ts
[`getdifferenceinmonths(_)`]: ../../../../modules/temporal/src/duration/get-difference-in-months.ts
[`getdifferenceinnanoseconds(_)`]: ../../../../modules/temporal/src/duration/get-difference-in-nanoseconds.ts
[`getdifferenceinseconds(_)`]: ../../../../modules/temporal/src/duration/get-difference-in-seconds.ts
[`getdifferenceinweeks(_)`]: ../../../../modules/temporal/src/duration/get-difference-in-weeks.ts
[`getdifferenceinyears(_)`]: ../../../../modules/temporal/src/duration/get-difference-in-years.ts
[`getdurationbetween(_)`]: ../../../../modules/temporal/src/duration/get-duration-between.ts
[`subtract*()`]: #subtracting
[`subtractdate(_)`]: ../../../../modules/temporal/src/date/subtract-date.ts
[`subtractdatetime(_)`]: ../../../../modules/temporal/src/date-time/subtract-date-time.ts
[`subtractdays(_)`]: ../../../../modules/temporal/src/date/day/subtract-days.ts
[`subtracthours(_)`]: ../../../../modules/temporal/src/time/hour/subtract-hours.ts
[`subtractmicroseconds(_)`]: ../../../../modules/temporal/src/time/microsecond/subtract-microseconds.ts
[`subtractmilliseconds(_)`]: ../../../../modules/temporal/src/time/millisecond/subtract-milliseconds.ts
[`subtractminutes(_)`]: ../../../../modules/temporal/src/time/minute/subtract-minutes.ts
[`subtractmonths(_)`]: ../../../../modules/temporal/src/date/month/subtract-months.ts
[`subtractnanoseconds(_)`]: ../../../../modules/temporal/src/time/nanosecond/subtract-nanoseconds.ts
[`subtractseconds(_)`]: ../../../../modules/temporal/src/time/second/subtract-seconds.ts
[`subtracttime(_)`]: ../../../../modules/temporal/src/time/subtract-time.ts
[`subtractweeks(_)`]: ../../../../modules/temporal/src/date/week/subtract-weeks.ts
[`subtractyears(_)`]: ../../../../modules/temporal/src/date/year/subtract-years.ts
[duration]: ./duration/README.md
