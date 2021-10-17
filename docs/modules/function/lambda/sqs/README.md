[//]: #title (SQS Events)
[//]: #description (komore function SQS event trigger)
[//]: #keyword (function)
[//]: #keyword (lambda)
[//]: #keyword (sqs)
[//]: #keyword (@komore/function-lambda)
[//]: #path (modules/function/lambda)
[//]: #see-also (./operators.md)
[//]: #see-also (./testing.md)
[//]: #see-also (../README.md)
[//]: #see-also (./install.md)
[//]: #see-also (./usage.md)
[//]: #see-also (../../concepts/function-as-a-service.md)

# SQS Events

An [Amazon SQS] queue can be used as a trigger for a [Lambda function].

The function receives multiple messages as event records grouped together in a single batch.

Lambda invokes the function [synchronously].

## Defining the function

The function may state that it expects to receive events from SQS using the `sqsTrigger()` function.

Such function is not expected to emit any value and emitted values will be ignored.

The behavior may however be made more explicit using the `dropValue()` operator.

```ts
import { sqsTrigger } from '@komore/function-lambda';
import { dropValue, tapValue } from '@komore/reactive';

export const processQueue = createFunction('processQueue', sqsTrigger(), $ =>
  $.pipe(
    tapValue(event => console.log('SQS event', event)),
    dropValue()
  )
);
```

## Binding the function to the queue

The queue needs to be declared as an [event source] for the function.

```ts
// TODO
```

```hcl
resource "aws_lambda_event_source_mapping" "example" {
  event_source_arn = aws_sqs_queue.queue.arn
  function_name    = aws_lambda_function.function.name
}
```

## Standard vs. FIFO quue

## Controlling the batching process

Lambda polls the SQS queue and invokes the function when records are available.

By default, up to 10 messages may be polled at once and sent as a single event.

To alter that behavior, the [event source]'s batch configuration can be modified:

| Configuration | Description                                                                                         |
| :------------ | :-------------------------------------------------------------------------------------------------- |
| Batch size    | Maximum number of messages to buffer, limited to 10,000 for standard queues and 10 for FIFO queues. |
| Batch window  | Maximum number of seconds to buffer, limited to 300 and only available for standard queues.         |

The following example buffers up to 1000 messages for up to 60 seconds, whichever comes first.

```ts
// TODO
```

```hcl
resource "aws_lambda_event_source_mapping" "example" {
  event_source_arn                   = aws_sqs_queue.queue.arn
  function_name                      = aws_lambda_function.function.name
  batch_size                         = 1000
  maximum_batching_window_in_seconds = 60
}
```

[amazon sqs]: https://aws.amazon.com/sqs
[event source]: ../event-sources.md
[lambda function]: ../README.md
[synchronously]: https://docs.aws.amazon.com/lambda/latest/dg/invocation-sync.html
