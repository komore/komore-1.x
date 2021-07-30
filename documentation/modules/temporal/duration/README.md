# Duration

A duration holds the amount of intervening time in a [time interval].

## Format

A duration can be turned into an [ISO 8601] string.

### ISO 8601 duration

### ISO 8601 duration in weeks

`PnYnMnDTnHnMnS`.
The [`getISO8601Duration()`] function returns a full ISO 8601 duration.

```ts
import { createDuration, getISO8601Duration } from '@komore/time';

const duration = createDuration({
  years: 3,
  months: 2,
  days: 1,
  hours: 15,
  minutes: 30,
  seconds: 45
});

const iso8601string = getISO8601Duration(duration);
// P3Y2M1DT15H30M45S
```

The [`getISO8601WeekDuration()`] function returns a simpler ISO 8601 

TODO: ISO 8601

- `PnYnMnDTnHnMnS`
- `PnW`

[`getiso8601duration()`]: ../../../modules/time/src/duration/get-iso-8601-duration.ts
[`getiso8601weekduration()`]: ../../../modules/time/src/duration/get-iso-8601-week-duration.ts
[time interval]: ./interval.md
[iso 8601]: https://en.wikipedia.org/wiki/ISO_8601#Durations
