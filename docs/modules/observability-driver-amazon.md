# Observability for Amazon Web Services

The `@komore/observability-amazon` module implements [observability] using the [AWS platform].

## Key features

- [CloudWatch Logs] is used to implement logs, log groups and log events
- [CloudWatch Metrics] is used to implement metrics
- [CloudWatch Metrics filters] are used to implement alarms
- [X-Ray] is used to implement tracing

## Installation

The `@komore/observability-amazon` module is published on the Npm registry.

| Tool | Command                                            |
| :--- | :------------------------------------------------- |
| npm  | `npm install @komore/observability-amazon --save`  |
| pnpm | `pnpm install @komore/observability-amazon --save` |
| Yarn | `yarn add @komore/observability-amazon`            |

## Usage

TODO

## Implementation details

### Logging

[CloudWatch Logs] has the concept of [log groups and log streams].

A log stream is a unique source of logs.

A log group is used to group multiple streams with similar settings: retention, monitoring and access control.



#### Log groups

CloudWatch log group names are built from the actual log group's name, the [domain] and an optional prefix.

```
</prefix?>/<domain>/<log_group_name>
```

The prefix is defined using the `KMR_OBSERVABILITY_AMAZON_LOG_PREFIX` environment variable.

The following table offers example combinations:

| Prefix    | Domain      | Log group                   | CloudWatch log group name                      |
| :-------- | :---------- | :-------------------------- | :--------------------------------------------- |
| `example` | `invoicing` | `monthly-report/generation` | `/example/invoicing/monthly-report/generation` |
| _not set_ | `invoicing` | `monthly-report/generation` | `/invoicing/monthly-report/generation`         |
| _not set_ | `billing`   | `payment/automated`         | `/billing/payment/automated`                   |

CloudWatch log groups are lazily created when recording a log fails because the target log group does not exist.

> :information_source: When using [`@komore/stack`], the log groups can be created during deployment.

#### Logs streams

#### Logs events

Logs are recorded using the [`PutLogEvents`] CloudWatch Logs API.

### Metrics

TODO.

### Alarms

Alarms are created using [CloudWatch metric filters]

[`@komore/stack`]: ./stack.md
[`putlogevents`]: https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutLogEvents.html
[amazon cloudwatch]: https://aws.amazon.com/cloudwatch/
[aws platform]: https://aws.amazon.com/
[cloudwatch logs]: https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/WhatIsCloudWatchLogs.html
[cloudwatch metrics]: https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/working_with_metrics.html
[cloudwatch metrics filters]: https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/MonitoringLogData.html
[domain]: ../concepts/domain.md
[log groups and log streams]: https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/Working-with-log-groups-and-streams.html
[observability]: ./observability.md
[x-ray]: https://aws.amazon.com/xray/
