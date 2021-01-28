# Logging

Recording the events as they happen is an important aspect of [observability].

## Key concepts

- a [log event] describes a unique event
- a [log group] describes a common category for multiple log events
- a [log event record] is a recorded instance of a log event
- a [log] holds a list of log event records

## Groups and events definition

### Create a log group

A log group is created using the [`createLogGroup`] function.

```ts
import { createLogGroup } from '@komore/observability/logging';

const exampleDomainLogGroup = createLogGroup('example-domain');
```

The log group name uniquely identifies the domain for log events defined within the log group.

### Create a log event

A log event is created by calling the [`createLogEvent`] function.

```ts
import { createLogEvent } from '@komore/observability/logging';

const exampleLogEvent = createLogEvent(
  exampleDomainLogGroup, // Log group
  1,                     // Log event identifier
  0,                     // Log event severity
  'something happened'   // Log event message template
);
```

### Define event-specific properties

A log event may optionally feature event-specific properties.

The schema for those properties is defined using the [`props`] function.

```ts
import { createLogEvent, props } from '@komore/observability/logging';

const exampleLogEventWithProperties = createLogEvent(
  exampleDomainLogGroup,
  1,
  0,
  'something happened',
  // Additional event-specific properties
  props<{ property1: string, property2: number }>()
);
```

Event-specific properties may be referenced in the message template:

## Recording log events

## Defining logs

### Creating a log

### Configuring a log

## Log Event

A log represents a group of events that belong together.

A log features a unique name - or path - that is used to quickly identify the subject of the events it contains:

- `/invoices/generation` contains events about invoices generation
- `/billing/payment` contains events about payments

At the [stack] level, a log is also configurable: the access rights and the retention time.

### Creating a log

A log is created using the `createLog` function.

```ts
import { createLog } from '@komore/observability/logging';

/**
 * Log for invoice generation events
 */
export const exampleLog = createLog('/invoices/generation');
```

## Log events

Defining events

### Metadata

## Recording events

## Configuring a log

A log is configured within a stack using the [`configureLog`] function.

```ts
import { configureLog } from '@komore/observability/stack';

configureLog('@project/domain/logs', { exampleLog } => exampleLog, /invoices/generation', {
  tags: {
    /* optional tags (Environment, Stack and Domain are automatically set) */
  }
});
```

[`createlogevent`]: ../../modules/observability/logging/src/create-log-event.ts
[`createloggroup`]: ../../modules/observability/logging/src/create-log-group.ts
[`props`]: ../../modules/observability/logging/src/props.ts
[log event]: #create-a-log-event
[log event identifier]: #log-event-identifier
[log event record]: #recording-log-events
[log group]: #log-groups
[stack]: ./observability/stack.md#log
