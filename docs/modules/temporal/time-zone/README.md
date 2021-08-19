# Time Zone

A time zone describes how a local time relates to UTC.

It essentially behaves like a function that accepts an instant and returns an UTC offset, and vice versa.

The [@komore/temporal] module defines a [`TimeZone`] type.

## Time zone identifier

A time zone identifier refers to a specific time zone. It can be:

- a geographical location (e.g. `Europe/Paris` or `Asia/Tokyo`), or
- a single-offset time zone (e.g. `UTC` or `Etc/GMT+3`)

Geographical locations are matched against the [IANA database].

[`parseTimeZone()`] is used to get a time zone reference from a time zone identifier:

```ts
import { parseTimeZone } from '@komore/temporal';

const timeZone = parseTimeZone('Europe/Paris');
```

## Local time zone

The local time zone is the environment's time zone.

[`getLocalTimeZoneId()`] returns the local time zone identifier.

```ts
import { getLocalTimeZoneId } from '@komore/temporal';

const localTimeZoneId = getLocalTimeZoneId();
```

[`getLocalTimeZone()`] returns the local time zone.

```ts
import { getLocalTimeZone } from '@komore/temporal';

const localTimeZone = getLocalTimeZone();
```

## Time zone conversion

TODO.

[`getlocaltimezone()`]: ../../../modules/temporal/src/time-zone/get-local-time-zone.ts
[`getlocaltimezoneid()`]: ../../../modules/temporal/src/time-zone/get-local-time-zone-id.ts
[`parsetimezone()`]: ../../../modules/temporal/src/time-zone/parse-time-zone.ts
[`timezone`]: ../../../modules/temporal/src/time-zone/time-zone.ts
[@komore/temporal]: ./README.md
[iana database]: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List
