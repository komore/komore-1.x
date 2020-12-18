# komore Function - Alexa

Support for the [Alexa] execution environment.

[Official documentation]

## Install

```shell
npm install @komore/function-alexa
```

or

```shell
yarn add @komore/function-alexa
```

## Usage

The provider is passed via the function configuration:

```typescript
import { alexaFunctionProvider } from '@komore/function-alexa';

export const exampleFunction = createFunction({
  providers: [alexaFunctionProvider()]
});
```

[alexa]: http://
[official documentation]: https://komore.dev/function/azure
