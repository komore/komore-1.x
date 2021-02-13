# Operators Reference

Reference list of operators available in [komore modules].

| Name                                | Module                    | Description                                        |
| :---------------------------------- | :------------------------ | :------------------------------------------------- |
| [`assertThat`]                      | [Operators]               | Asserts that a condition is met                    |
| [`decrementCounter`]                | [Observability - Metrics] | Decrements a counter metric                        |
| [`delayUntil`]                      | [Operators]               |                                                    |
| [`deserializeJson`]                 | [Operators]               |                                                    |
| [`filterMessageOrigin`]             | [Web]                     | Filters a message origin                           |
| [`incrementCounter`]                | [Observability - Metrics] | Increments a counter metric                        |
| [`ignoreErrors`]                    | `@komore/operators`       | Ignores errors                                     |
| [`ignoreGeolocationPositionErrors`] | `@komore/web/geolocation` | Ignores geolocation position errors                |
| [`localizeCurrency`]                | `@komore/element/l10n`    |                                                    |
| [`localizeDate`]                    | `@komore/element/l10n`    |                                                    |
| [`localizeDecimal`]                 | `@komore/element/l10n`    |                                                    |
| [`localizePercentage`]              | `@komore/element/l10n`    |                                                    |
| [`mapToVoid`]                       | [Operators]               |                                                    |
| [`recordLogEvent`]                  | [Observability - Logging] | Records a log event                                |
| [`recordLogEventIf`]                | [Observability - Logging] | Records a log event when a condition is met        |
| [`recordLogEventIfError`]           | [Observability - Logging] | Records a log event when an error condition is met |
| [`recordLogEventOnCompletion`]      | [Observability - Logging] | Records a log event when the observable completes  |
| [`recordLogEventOnError`]           | [Observability - Logging] | Records a log event when the observable errors     |
| [`recordMetric`]                    | [Observability - Metrics] | Records a metric                                   |
| [`recordMetricIf`]                  | [Observability - Metrics] | Records a metric when a condition is met           |
| [`recordMetricIfError`]             | [Observability - Metrics] | Records a metric when an error condition is met    |
| [`recordMetricOnCompletion`]        | [Observability - Metrics] | Records a metric when the observable completes     |
| [`recordMetricOnError`]             | [Observability - Metrics] | Records a metric when the observable errors        |
| [`sanitizeHtml`]                    | [Web]                     | Sanitizes HTML                                     |
| [`serializeJson`]                   | [Operators]               | Serializes JSON                                    |
| [`throwIf`]                         | [Operators]               | Throws if a condition is met                       |
| [`throwOnGeolocationPositionError`] | `@komore/web/geolocation` | Throws on geolocation position errors              |

[`assertthat`]: ../../modules/operators/src/assert-that.ts
[`decrementcounter`]: ../../modules/observability/metrics/operators/src/decrement-counter.ts
[`incrementcounter`]: ../../modules/observability/metrics/operators/src/increment-counter.ts
[`recordlogevent`]: ../../modules/observability/logging/operators/src/record-log-event.ts
[`recordlogeventif`]: ../../modules/observability/logging/operators/src/record-log-event-if.ts
[`recordlogeventiferror`]: ../../modules/observability/logging/operators/src/record-log-event-if-error.ts
[`recordlogeventoncompletion`]: ../../modules/observability/logging/operators/src/record-log-event-on-completion.ts
[`recordlogeventonerror`]: ../../modules/observability/logging/operators/src/record-log-event-on-error.ts
[`recordmetric`]: ../../modules/observability/metrics/operators/src/record-metric.ts
[`recordmetricif`]: ../../modules/observability/metrics/operators/src/record-metric-if.ts
[`recordmetriciferror`]: ../../modules/observability/metrics/operators/src/record-metric-if-error.ts
[`recordmetriconcompletion`]: ../../modules/observability/metrics/operators/src/record-metric-on-completion.ts
[`recordmetriconerror`]: ../../modules/observability/metrics/operators/src/record-metric-on-error.ts
[komore modules]: ./modules.md
[observability - logging]: ../modules/observability-logging-operators.md
[observability - metrics]: ../modules/observability-metrics-operators.md
[observability - tracing]: ../modules/observability-tracing-operators.md
[operators]: ../modules/operators.md
[web]: ../modules/web-operators.md
