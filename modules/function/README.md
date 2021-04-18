# @komore/function

```ts
import { createFunction } from '@komore/function';
import { lambdaTrigger } from '@komore/function-lambda';

const createFunction = createFunctionFactory(lambdaTrigger);
export const myFunction = createFunction('myFunction', lambdaTrigger('api-gateway', ($: InputType) => $.pipe(

)));
```

## Lambda API Gateway function

```typescript
import { fromFunction, toFunctionResult } from '@komore/function';
import { lambdaFunction } from '@komore/function-lambda';

const triggerTypes = lambdaTrigger('api-gateway');


const source$ = fromFunction(triggerTypes);
// source$ is a FunctionSubject<FunctionArgumentTypes, MessageType> / Observable<MessageType>
// source$.next([event, context]); sends the message downstream
// source$(event, context); sends the message downstream and returns a promise
// source$ could already be exported

const graph$ = source$.pipe(
  mapOutputTo('hello world')
);

const exampleFunction = createFunction('exampleFunction', source$, graph$, toFunctionResult(lambdaFunction('api-gateway')));

import { fromFunction } from '@komore/function';
import { apiGatewayRequest, apiGatewayResponse } from '@komore/function-lambda';


const source$ = fromLambdaApiGatewayFunction
const source$ = fromFunction('exampleFunction', lambdaFunction('api-gateway'));

export const exampleFunction = fromFunction(
  'exampleFunction',
  apiGatewayRequest()
).pipe(
  from(lambdaApiGatewayRequest()),
  mapOutput(({ input }) => input.property * 42),
  to(lambdaApiGatewayResponse())/
);
```
