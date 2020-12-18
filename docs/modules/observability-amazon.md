# Observability for Amazon Web Services

The Observability for Amazon Web Services module integrates with the [AWS] platform:

- [CloudWatch Logs] for logs
- [CloudWatch Metrics] for metrics
- [X-Ray] for tracing

## Installation

The module can be installed with Npm or Yarn.

```sh
npm install @komore/observability-amazon --save
```

```sh
yarn add @komore/observability-amazon
```

## Usage

## Implementation details

[CloudWatch Logs] has the concept of [log groups and log streams].

A log stream is a unique source of logs.

A log group is used to group multiple streams with similar settings: retention, monitoring and access control.

### Log groups

CloudWatch log group names are built from the actual log group's name, the [domain] and an optional prefix.

```
</prefix?>/<domain>/<log_group_name>
```

The prefix is defined using the `KOMORE_OBSERVABILITY_AMAZON_LOG_PREFIX` environment variable.

The following table offers example combinations:

| Prefix    | Domain      | Log group                   | CloudWatch log group name                      |
| :-------- | :---------- | :-------------------------- | :--------------------------------------------- |
| `example` | `invoicing` | `monthly-report/generation` | `/example/invoicing/monthly-report/generation` |
| _not set_ | `invoicing` | `monthly-report/generation` | `/invoicing/monthly-report/generation`         |
| _not set_ | `billing`   | `payment/automated`         | `/billing/payment/automated`                   |

CloudWatch log groups are lazily created when recording a log fails because the target log group does not exist.

> :information_source: When using [`@komore/stack`], the log groups can be created during deployment.

### Logs streams



### Logs events

Logs are recorded using the [`PutLogEvents`] CloudWatch Logs API.

### Metrics

### Alarms

Alarms are created using [CloudWatch metric filters]



[`@komore/stack`]: ./stack.md
[`putlogevents`]: https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutLogEvents.html
[amazon cloudwatch]: https://aws.amazon.com/cloudwatch/
[cloudwatch logs]: https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/WhatIsCloudWatchLogs.html
[cloudwatch metrics]: https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/working_with_metrics.html
[cloudwatch metric filters]: https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/MonitoringLogData.html
[domain]: ../concepts/domain.md
[log groups and log streams]: https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/Working-with-log-groups-and-streams.html
[x-ray]: https://aws.amazon.com/xray/
