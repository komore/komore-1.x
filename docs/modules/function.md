# @komore/function

The `@komore/function` module allows the execution of pipelines within function environments.

The function arguments act as a [source] and the function result can be set using a [sink].

## Key Concepts

- [`fromFunction`] creates a `FunctionSubject` [source] that emits function arguments
- [`]
- A [`FunctionSubject`] call returns a promise
- A [`FunctionMessage`] features the promise's `resolve` and `reject` functions within its metadata
- [`toFunction`] creates a `FunctionSink` [sink] that 
- [`to]
- A [`FunctionSink`] resolves or rejects a promise

- `FunctionMessage`
- Calling a `FunctionSubject` makes it emit the function arguments and return a promise
- [resolveFunctionPromise] creates a `FunctionSink` [sink]

- [toFunctionResult] creates a [sink] that resolves the promise returned uses function message builders that attempt to turn the function arguments into a [message]

## Installation

The `@komore/function` module can be installed via Npm or Yarn:

```shell
npm install @komore/event-store-aws --save
```

```shell
yarn add @komore/event-store-aws
```

## Promise

The promise holds an important role in the entire process, as it will determine when the function execution ends.

## Unresolved promises

The only way for 


```typescript
import { createFunctionGraph, fromFunction } from '@komore/function';

const exposedFunction = createFunctionGraph(
  'exposedFunction',
  fromFunction<(num: number) => string>(),
  map(n => n.toString())
);
```

## Environment variables

- `KOMORE_FUNCTION_CONCURRENCY_LIMIT`: set to `1` to enable pipe optimizations (for AWS Lambda/etc)

[`fromfunction`]: ../../modules/function/src/from-function.ts
[`functionmessage`]: ../../modules/function/src/function-message.ts
[`functionsubject`]: ../../modules/function/src/function-subject.ts
[message]: ../concepts/graph.md#message
[sink]: ../concepts/graph.md#sink
[source]: ../concepts/graph.md#source
