# komore Function - OpenFaaS

Support for the [OpenFaaS] execution environment.

## Usage

The provider is passed via the function configuration:

```typescript
import { openFaaSProvider } from '@komore/function-openfaas';

export const exampleFunction = createFunction({
  providers: [openFaaSProvider]
});
```
