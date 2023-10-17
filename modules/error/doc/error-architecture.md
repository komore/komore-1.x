[//]: #title 'Error architecture'
[//]: #description 'komore error module architecture'
[//]: #keyword 'error'
[//]: #keyword 'architecture'
[//]: #keyword '@komore/error'

# Architecture

TODO.

## Error group

TODO.

```ts
import { defineErrorGroup } from '@komore/error';

const exampleError = createErrorGroup(domain, {
  'some.case': errorProperties<{ some: boolean; info: string }>()
  'other.case': errorProperties()
});
```

## Error context

TODO.
