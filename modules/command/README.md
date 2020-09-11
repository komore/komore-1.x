# komore Command Module

```typescript
import { createFunction } from '@komore/function';
export const exampleCommandHandler = createFunction(functionConfiguration)
  .pipe( // Observable<{ message: ... }> where message depends on FunctionConfiguration.factory's message type
    withCommandProcessor(exampleCommandProcessor), // Observable<{ message } & { command }>
    withAuthorizationFrom(exampleAuthorizer), // Observable<{ message } & { command } & { authorization }>
    withAggregate(exampleAggregateFactory, ({ command }) => command.exampleAggregateId), // Observable<{ message } & { command } & { authorization } & { aggregate }>
    withCommandHandler(exampleCommandHandler) // Observable<{ message } & { command } & { authorization } & { aggregate } & { events }>
  )
;
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
