# @komore/observability

The `@komore/observability` module helps observing software.

## Key concepts

- [Logs] are used to keep events organized together
- [Log events] describe specific events within a log
- [Metrics] describe measurements over time
- [Traces] describe interactions between components
- [Alarms] are notifications triggered by log events or metrics

Log events and metrics are information that can be observed and are not meant to replace an event source.

In practice, this means log events should be recorded for warnings and errors rather than nominal cases.

[alarms]: ./observability-alarms.md
[logs]: ./observability-logging.md#logs
[log events]: ./observability-logging#.mdlog-events
[metrics]: ./observability-metrics.md
[traces]: ./observability-tracing.md#traces
