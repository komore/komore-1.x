[//]: #title 'Array'
[//]: #description 'komore array module overview'
[//]: #keyword 'array'
[//]: #keyword 'overview'
[//]: #keyword '@komore/array'
[//]: #path-alias 'modules/array/overview'

TODO: remove code

```typescript
import { createCommandGroup } from '@komore/command';
import { defineDomain } from '@komore/domain';
import { createFunction } from '@komore/function';
import { properties } from '@komore/typescript';

const domain = createDomain('example');
const commandGroup = createCommandGroup(domain, 'example group');
const exampleCommand = commandGroup('example command', properties<{}>());

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
