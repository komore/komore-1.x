# @komore/observability

The `@komore/observability` module helps observing software.

## Key concepts

- [Log events] describe an event happening in a software component
- Log events are recorded in [logs]
- Log events have their domain identified by their [log group]
- [Metrics] describe measurements over time
- [Traces] describe interactions between software components
- [Alarms] are notifications triggered by log events or metrics
- [Observability providers] hold the low-level implementation details
- Logs, metrics, traces and alarms are observable technical side-effects
- Logs, metrics, traces and alarms are not meant to replace a domain's event source

## Installation

The `@komore/observability` module is published to the Npm registry.

| Tool | Command                                     |
| :--- | :------------------------------------------ |
| npm  | `npm install @komore/observability --save`  |
| pnpm | `pnpm install @komore/observability --save` |
| Yarn | `yarn add @komore/observability`            |

## Providers

An [observability provider] implements the observability API and performs the tasks of recording logs, metrics and
traces.

The `@komore/observability` package includes the [local observability provider].

Additional providers can be installed:

| Provider                                | Module                                   |
| :-------------------------------------- | :--------------------------------------- |
| [Observability for Amazon Web Services] | `@komore/observability-provider-amazon`  |
| [Observability for Microsoft Azure]     | `@komore/observability-provider-azure`   |
| [Observability for Google Cloud]        | `@komore/observability-provider-google`  |
| [Observability - Browser]               | `@komore/observability-provider-browser` |

[alarms]: ./alarms/README.md
[local observability provider]: ./provider/local.md
[logs]: ./logging/README.md#logs
[log group]: ./logging/README.md#log-groups
[log events]: ./logging/README.md#log-events
[metrics]: ./metrics/README.md
[observability providers]: ./provider/README.md
[observability for amazon web services]: ./provider/amazon.md
[observability for google cloud]: ./provider/google.md
[observability for microsoft azure]: ./provider/azure.md
[observability - browser]: ./observability-browser.md
[observability provider]: ./provider/README.md
[traces]: ./tracing/README.md#traces
