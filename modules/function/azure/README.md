# komore Function Module (Azure)

Support for the Azure Function execution environment.

## Usage

The provider is passed via the function configuration:

```typescript
import { AzureFunctionProvider } from '@komore/function/azure';

export const exampleFunction = createFunction({ providers: [AzureFunctionProvider] }).pipe(
  tap(({ message }) => console.log('message', message)),
  mapTo({ hello: 'world' })
);
```
