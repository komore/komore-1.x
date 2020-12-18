# komore Function - Apache Pulsar

Support for the [Apache Pulsar] execution environment.

[Official documentation]

## Install

```shell
npm install @komore/function-pulsar
```

or

```shell
yarn add @komore/function-pulsar
```

## Usage

The provider is passed via the function configuration:

```typescript
import { pulsarFunctionProvider } from '@komore/function-pulsar';

export const exampleFunction = createFunction({
  providers: [pulsarFunctionProvider()]
});
```

[apache pulsar]: https://pulsar.apache.org/docs/en/functions-overview/
[official documentation]: https://komore.dev/function/pulsar
