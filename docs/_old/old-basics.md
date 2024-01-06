# Old

Reactive functional programming for serverless environments.

object-action framework:

Actions:

- createArticle <= a command (or mutation)
- articleCreated <= an event when the command succeeds (potentially a subscription)
- articleCreationFailed <= an event when the command fails (potentially a subscription)

The request and failure

## TODO

### Representation of the infrastructure

Use a compiler to analyze the AST and generate a representation of the infrastructure?
Sounds overkill... then generate Terraform scripts out of it.

```typescript
import { apiGatewayRequest, apiGatewayResponse } from '@komore/aws/function';

export const myFunction = createFunction('myFunction').pipe(
  from(awsApiGatewayRequest()),
  to(awsApiGatewayResponse()),
  catchError(aws)
);

export myFunction = createSource(ActionTypes).pipe(
  withModule(NestModule), // instantiates the Nest module on the first call and retrieves the Store?Module from the context
  dispatch() // ret
  fromMutation(xx)
  fromQuery(yy)
);

// GOOD + matches ngrx
const createArticle = createAction(
  '[Article] create article request',
  props<{ ... }>()
);

// GOOD + matches ngrx: effects may or may not submit an event (need to configure where they go)
@Injectable()
class MyEffects {
  constructor(private readonly actions$: Actions) {} // Actions

  readonly createArticle$ = createEffect(() => this.actions$.pipe(
    ofType(),
    switchMap(),
    forkJoin(),
    sinkTo()? // just switchMap would work anyway
  ));
}

```
