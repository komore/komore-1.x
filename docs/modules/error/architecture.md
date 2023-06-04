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

const exampleErrorGroup = createErrorGroup(domain, 'Example');
```

## Error type

TODO.

```ts
const exampleError = exampleErrorGroup('SomeCase', errorProperties<{ some: boolean; info: string }>());
const exampleOtherError = exampleErrorGroup('OtherCase'); // no properties
```

## Error context

TODO.
