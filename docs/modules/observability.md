# @komore/observability

The `@komore/observability` module helps observing software.

## Key concepts

- [Log events] are recorded in [logs]
- [Log events] have their domain identified by their [log group]
- [Metrics] describe measurements over time
- [Traces] describe interactions between components
- [Alarms] are notifications triggered by log events or metrics
- [Observability drivers] holds the low-level implementation details
- Logs, metrics, traces and alarms are observable technical side-effects
- Logs, metrics, traces and alarms are **NOT** meant to replace a domain's event source

## Installation

The `@komore/observability` module is published on the Npm registry.

| Tool | Command                                     |
| :--- | :------------------------------------------ |
| npm  | `npm install @komore/observability --save`  |
| pnpm | `pnpm install @komore/observability --save` |
| Yarn | `yarn add @komore/observability`            |

## Implementations

The `@komore/observability` package includes the [local observability implementation].

Additional [observability implementations] can be installed.

[alarms]: ./observability-alarms.md
[local observability implementation]: ./observability-local.md
[logs]: ./observability-logging.md#logs
[log group]: ./observability-logging.md#log-groups
[log events]: ./observability-logging.md#log-events
[metrics]: ./observability-metrics.md
[observability implementations]: ./observability-implementations.md
[traces]: ./observability-tracing.md#traces
