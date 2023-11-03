---
title: Command
description: komore command module overview
keyword: command
keyword: overview
keyword: @komore/command
path-alias: modules/command/usage
---

TODO: remove code

```typescript
import { commandProperties, createCommandType } from '@komore/command';
import { createDomain } from '@komore/domain';
import { createFunction } from '@komore/function';
import { properties } from '@komore/typescript';

const domain = createDomain('example');
const commandType = createCommandType(domain, {
  'example.command': commandProperties<{}>(),
});

export const exampleCommandHandler = createFunction(functionConfiguration, $ =>
  $.pipe(
    // Observable<{ message: ... }> where message depends on FunctionConfiguration.factory's message type
    withCommandProcessor(exampleCommandProcessor), // Observable<{ message } & { command }>
    withAuthorizationFrom(exampleAuthorizer), // Observable<{ message } & { command } & { authorization }>
    withAggregate(exampleAggregateFactory, ({ command }) => command.exampleAggregateId), // Observable<{ message } & { command } & { authorization } & { aggregate }>
    withCommandHandler(exampleCommandHandler) // Observable<{ message } & { command } & { authorization } & { aggregate } & { events }>
  )
);
```

```typescript
import { createReducer, on } from '@komore/reducer';
const exampleEvent = createEvent(
  'example event',
  schema<{ exampleParameter: string }>()
);
export const exampleReducer = createReducer(
  {}, // initial state for new aggregates
  on(exampleEvent, (state, { exampleParameter }, { aggregateKey, size, timestamp }) => ({ // state, event, eventMetadata
    ...state
  })
);
```
