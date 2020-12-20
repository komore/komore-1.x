# Vibration

The [Vibration API] allows access to the underlying hardware's physical feedback capabilities.

## Vibration observer creation

A vibration observer is an observer that turns a stream of values into vibrations.

```ts
import { createVibrationObserver } from '@komore/web/vibration';

const $: Observable<number | ReadonlyArray<number>>;
const vibrationObserver = createVibrationObserver();

$.subscribe(vibrationObserver);
```

### Number values

When a stream emits a single number, that value is vibration duration in milliseconds.

```ts

of(
  1000 // vibrates for 1000 milliseconds
).subscribe(vibrationObserver);
```

### Pattern values

When a stream emits an array of numbers, the values represent a vibration pattern:

- even indices are vibration durations
- odd indices are pause durations

```ts
of([
  10, // vibrates for 10 milliseconds
  20, // pauses for 20 milliseconds
  30, // vibrates for 30 milliseconds
  40, // pauses for 40 milliseconds
  50, // vibrates for 50 milliseconds
]).subscribe(vibrationObserver);
```

## Error handling

When the observed stream encounters an error, vibration is stopped.

```ts

combin

```


[vibration api]: https://developer.mozilla.org/en-US/docs/Web/API/Vibration_API
