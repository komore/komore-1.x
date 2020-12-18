# Modules

## API

## Application

## Authorization

| Name                         | Description                                   |
|:-----------------------------|:----------------------------------------------|
| [@komore/authorization]      | Base module for authorizations.               |
| [@komore/authorization-abac] | Support for attribute-based access control.   |
| [@komore/authorization-jwt]  | Support for JSON Web Tokens.                  |
| [@komore/authorization-rbac] | Support for role-based access control.        |

## Command

| Name                      | Description                                      |
|:--------------------------|:-------------------------------------------------|
| [@komore/command]         | Base module for command processing and handling. |

## Element

| Name                  | Description                      |
|:----------------------|:---------------------------------|
| [@komore/element]     | Base module for custom elements. |

## Event

| Name                          | Description                                                 |
|:------------------------------|:------------------------------------------------------------|
| [@komore/event]               | Base module for events encompassing a bounded context.      |
| [@komore/event-store]         | Event store features.                                       |
| [@komore/event-store-aws]     | Support for event stores based on [AWS] services.           |
| [@komore/event-store-azure]   | Support for event stores based on [Azure] services.         |
| [@komore/event-store-gcp]     | Support for event stores based on [GCP] services.           |
| [@komore/event-store-indexdb] | Support for event stores based on [IndexedDB].              |

## Function

| Name                        | Description                                                               |
|:----------------------------|:--------------------------------------------------------------------------|
| [@komore/function]          | Base module for functions.                                                |
| [@komore/function-lambda]   | Support for functions within the [AWS Lambda] environment.                |
| [@komore/function-azure]    | Support for functions within the [Microsoft Azure Functions] environment. |
| [@komore/function-firebase] | Support for functions within the [Google Firebase] environment.           |
| [@komore/function-google]   | Support for functions within the [Google Cloud Functions] environment.    |
| [@komore/function-openfaas] | Support for functions within the [OpenFaaS] environment.                  |

## Identity

TODO.

## Integration

| Name                                    | Description                                       |
|:----------------------------------------|---------------------------------------------------|
| [@komore/integration]                   | Base module for integration features.             |
| [@komore/integration-aws]               | Support for integration with [AWS] services.      |
| [@komore/integration-azure]             | Support for integration with [Azure] services.    |
| [@komore/integration-facebook]          | Support for integration with [Facebook] services. |
| [@komore/integration-gcp]               | Support for integration with [GCP] services.      |
| [@komore/integration-gitlab]            | Support for integration with [Gitlab] services.   |
| [@komore/integration-stripe]            | Support for integration with [Stripe] services.   |
| [@komore/integration-twitter]           | Support for integration with [Twitter] services.  |

## Message

| Name
|:------------------|:-------------------------|
| [@komore/message] | Base module for messages |

## Observability

| Name                            | Description                             |
|:--------------------------------|:----------------------------------------|
| [@komore/observability]         | Base module for tracing and monitoring. |

## Process

| Name                                | Description                                               |
|:------------------------------------|:----------------------------------------------------------|
| [@komore/process]                   | Base module for processes.                                |
| [@komore/process-aws]               | Support for [Amazon Step Functions] as a workflow target. |

## Query

| Name
|:-------------------------------|:----------------------------------|
| [@komore/query]                | Base module for queries           |

## Stack

| Name                            | Description                               |
|:--------------------------------|:------------------------------------------|
| [@komore/stack]                 | Base module for stacks.                   |

## Web

| Name
|:-------------------|:----------------------------|
| [@komore/web]      | Base module for web APIs.   |
| [@komore/web]      | Base module for web APIs.   |

## Others

| Name                  | Description                         |
|:----------------------|:------------------------------------|
| [@komore/dev-server]  | Development server.                 |
| [@komore/schematics]  | [Nx] schematics.                    |
| [@komore/vscode]      | Extension for [Visual Studio Code]. |
| [@komore/samples]     | Sample code.                        |
| [@komore/website]     | [komore.dev] portal.                |



[@komore/event]: ./event
[@komore/event-store]: ./event/store
[@komore/event-store-aws]: ./event/store/aws
[@komore/samples]: ./samples
[@komore/website]: ./website
[komore.dev]: https://komore.dev
[AWS]: https://
[AWS Lambda]: https://aws.amazon.com/lambda/
[Firebase]: https://
[GCP]: https://
[IndexedDB]: https://
[Nx]: https://
[Visual Studio Code]: https://




Old:

# komore Core

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
import { apiGatewayRequest, apiGatewayResponse } from '@komore/function-aws';

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