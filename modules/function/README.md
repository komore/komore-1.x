# komore Function Module

```typescript
import { createFunction, createFunctionConfiguration } from '@komore/function';
import { AzureFunctionProvider } from '@komore/azure';
import { GoogleFunctionProvider } from '@komore/google';
import { LambdaFunctionProvider } from '@komore/lambda';
import { OpenFaaSFunctionProvider } from '@komore/openfaas';

const baseFunctionConfiguration = createFunctionConfiguration({
  providers: [
    AzureFunctionProvider,
    GoogleFunctionProvider,
    LambdaFunctionProvider,
    OpenFaaSFunctionProvider
  ]
});

export const exampleFunction = createFunction({
  ...baseFunctionConfiguration,
  name: 'exampleFunction'
}).pipe(
  map(message => 42)
);
```
