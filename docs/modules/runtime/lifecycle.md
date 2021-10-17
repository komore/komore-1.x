# Lifecycle

## States

## Events

## Operators

```ts
import { takeUntil, timer } from '@komore/reactive';
import { hostStateIs } from '@komore/runtime';

timer(0, 1000).pipe(
  takeUntil(hostStateIs('running'))
);
```
