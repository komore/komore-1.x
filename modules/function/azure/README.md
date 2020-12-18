# komore Function - Azure Function

Support for the [Azure Function] execution environment.

[Official documentation]

## Install

```shell
npm install @komore/function-azure
```

or

```shell
yarn add @komore/function-azure
```

## Usage

The provider is passed via the function configuration:

```typescript
import { azureFunctionProvider } from '@komore/function-azure';

export const exampleFunction = createFunction({
  providers: [azureFunctionProvider()]
});
```

[azure function]: https://azure.microsoft.com/en-us/services/functions/
[official documentation]: https://komore.dev/function/azure
