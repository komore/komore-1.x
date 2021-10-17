# Github Webhooks

TODO.

## Webhook event

```ts

```

## Setup

TODO

### Amazon API Gateway

```ts
import { createFunction } from '@komore/function';
import { fromApiGatewayEvent, toApiGatewayEventBody } from '@komore/function-lambda/api-gateway';
import { fromJson, isDefined } from '@komore/functional';
import type { GithubWebhookEvent } from '@komore/integration-github';
import { map, throwUnless } from '@komore/reactive';

createFunction('handleGithubWebhook', fromApiGatewayEvent(event$ => event$.pipe(
  map(toApiGatewayEventBody),
  throwUnless(isDefined, () => new Error('missing Github webhook event')),
  map(fromJson<GithubWebhookEvent>())
)));
```

### Azure API Gateway

```ts
import { createFunction } from '@komore/function';
import { fromApiGatewayEvent, toApiGatewayEventBody } from '@komore/function-azure/api-gateway';
import { fromJson, isDefined } from '@komore/functional';
import type { GithubWebhookEvent } from '@komore/integration-github';
import { map, throwUnless } from '@komore/reactive';

createFunction('handleGithubWebhook', fromApiGatewayEvent(event$ => event$.pipe(
  map(toApiGatewayEventBody),
  throwUnless(isDefined, () => new Error('missing Github webhook event')),
  map(fromJson<GithubWebhookEvent>())
)));
```

### Google API Gateway

```ts
import { createFunction } from '@komore/function';
import { fromApiGatewayEvent, toApiGatewayEventBody } from '@komore/function-google/api-gateway';
import { fromJson, isDefined } from '@komore/functional';
import type { GithubWebhookEvent } from '@komore/integration-github';
import { map, throwUnless } from '@komore/reactive';

createFunction('handleGithubWebhook', fromApiGatewayEvent(event$ => event$.pipe(
  map(toApiGatewayEventBody),
  throwUnless(isDefined, () => new Error('missing Github webhook event')),
  map(fromJson<GithubWebhookEvent>())
)));
```
