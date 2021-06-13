# Usage


## Configuration

A function source can be given support for specific event types by passing via the `lambdaEvents` function.

The following code would add support for events coming from API Gateway, SQS or Kinesis.

```ts
import { lambdaEventOfType } from '@komore/function-lambda';
import { fromFunction } from '@komore/function';

const source$ = fromFunction('');
lambdaEventOfType('aws:api-gateway', 'aws:sqs', 'aws:kinesis');
```

A function sink can be given support for new result types via the `lambdaResultOfType` function:

```ts
import { lambdaResultOfType }
```
