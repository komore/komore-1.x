# Layouts

A layout is a function that transforms a log event record into a string.

Layouts are used to format log event records before sending them to [encoders] and [appenders].

```ts
interface Layout<LogEventRecordType extends UntypedLogEventRecord = UntypedLogEventRecord> {
  (logEventRecord: LogEventRecordType): string;
}
```

## Available layouts

The `@komore/observability/logging` module exposes a set of predefined layouts meant to cover common needs.

Additional layouts [can be created] or imported from [other modules].

### Pattern layout

A pattern layout uses a pattern to format a log event record.

A pattern layout is created using the [`createPatternLayout`] function:

```ts
import { createPatternLayout } from '@komore/observability/logging';

const patternLayout = createPatternLayout('%level [%date]: %message', {
  date: {
    locales: ['it', 'en'],
    options: {
      dateStyle: 'full',
      timeStyle: 'long'
    }
  }
});
```

A pattern may contain the following tokens, prefixed with `%`:

| Token                  | Description                                       |
| :--------------------- | :------------------------------------------------ |
| **context**{_context_} | Outputs the log event record's context _name_.    |
| **date**               | Outputs the log event record's timestamp.         |
| **group**              | Outputs the log event's log group name.           |
| **id**                 | Outputs the log event's identifier.               |
| **message**            | Outputs the log event record's formatted message. |
| **property**{_name_}   | Outputs the log event record's property _name_.   |
| **severity**           | Outputs the log event's severity.                 |

## Writing a custom layout

Any function that transforms a log event record to a string may be used as a layout.

```ts
const customLayout: Layout = logEventRecord => logEventRecord.message;
```

Some existing standard methods with a matching signature can therefore also be used directly:

```ts
const customLayout: Layout = JSON.stringify;
```

[identifier]: ./observability-logging.md#
[appenders]: ./observability-logging-appenders.md
[encoders]: ./observability-logging-encoders.md
[other modules]: ./observability.md#implementations
