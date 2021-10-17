# @komore/graph

The `@komore/graph` module helps defining and executing stream processing pipelines.

## Key concepts

- `Source<OutputType>` represents a [source] that emits elements downstream
- `Sink<InputType>` represents a [sink] that consumes elements from upstream
- `Flow<InputType, OutputType>` represents a [flow] that processes elements from upstream to downstream

Familiar RxJS constructs are used to implement those concepts:

```typescript
import { map, of } from '@komore/reactive';

const log = console.log;

of(1, 2, 3).pipe( // source
  map(v => v * 2) // flow
).subscribe(log); // sink
```

[flow]: ../concepts/graph.md#flow
[sink]: ../concepts/graph.md#sink
[source]: ../concepts/graph.md#source
