# Vibration

The [Vibration API] allows access to the underlying hardware's physical feedback capabilities.

## Create a vibration observer

A vibration observer is an observer that turns a stream of values into vibrations.

```ts
import { createVibrationObserver } from '@komore/web/vibration';

const $: Observable<number | ReadonlyArray<number>>;
const vibrationObserver = createVibrationObserver();

$.subscribe(vibrationObserver);
```

## Stream values

The observed stream can emit single numbers or arrays of numbers.

### Numbers

When a stream emits a single number, that value is vibration duration in milliseconds.

```ts

of(
  1000 // vibrates for 1000 milliseconds
).subscribe(vibrationObserver);
```

### Patterns

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

### Overrides

Emitted values override each other:

```ts
of(
  100, // vibrates for 100 milliseconds
  50 // but immediately overrides with a 50 milliseconds vibration
).subscribe(vibrationObserver);
```

[Patterns](#patterns) offer a simple, accurate timing mechanism that is preferable to complex pipelines.

## Handle errors

When the observed stream encounters an error, vibration is stopped.

Passing `stopOnError: false` to `createVibrationObserver` will prevent stopping the vibration on error.

## Handle completion

When the observed stream completes, the observer does not stop vibration by default.

Passing `stopOnComplete: true` to `createVibrationObserver` will make the vibration stop on completion.

[vibration api]: https://developer.mozilla.org/en-US/docs/Web/API/Vibration_API
