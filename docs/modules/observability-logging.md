# Logging

## Log

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

A log is configured within a stack using the `configureLog` function.

```ts
import { configureLog } from '@komore/observability/stack';

configureLog('@project/domain/logs', { exampleLog } => exampleLog, /invoices/generation', {
  tags: {
    /* optional tags (Environment, Stack and Domain are automatically set) */
  }
);
```

[stack]: ./observability/stack.md#log
