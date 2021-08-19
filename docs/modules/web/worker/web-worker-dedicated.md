# Dedicated Web Worker

## Creation

The [`createWorker()`] function creates a [dedicated worker].

```ts
import { createWorker } from '@komore/web/worker';

const scriptUrl = new URL('worker.js');
const [observer, observable] = createWorker(scriptUrl);
```

[`createworker()`]: ../../modules/web/worker/src/create-worker.ts
[dedicated worker]: ./web-worker.md#dedicated-worker
