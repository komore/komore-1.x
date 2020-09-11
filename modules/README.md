# Modules

## Authorization

TODO.

## Command

| Name                      | Description                                      |
|:--------------------------|:-------------------------------------------------|
| [@komore/command]         | Base module for command processing and handling. |
| [@komore/command/testing] | Support for command testing.                     |
| [@komore/command/nest]    | Support for [Nest] integration.                  |

## Event

| Name                         | Description                                                  |
|:-----------------------------|:-------------------------------------------------------------|
| [@komore/event]              | Base module for event stores encompassing a bounded context. |
| [@komore/event/aws/aurora]   | Support for [Amazon Aurora] as an event store.               |
| [@komore/event/aws/dynamodb] | Support for [Amazon DynamoDB] as an event store.             |
| [@komore/event/testing]      | Support for store testing.                                   |
| [@komore/event/nest]         | Support for [Nest] via the `StoreModule` class.              |

## Function

| Name                        | Description                                              |
|:----------------------------|:---------------------------------------------------------|
| [@komore/function]          | Base module for functions.                               |
| [@komore/function/lambda]   | Support for the [AWS Lambda] environment.                |
| [@komore/function/azure]    | Support for the [Microsoft Azure Functions] environment. |
| [@komore/function/google]   | Support for the [Google Cloud Functions] environment.    |
| [@komore/function/openfaas] | Support for the [OpenFaaS] environment.                  |
| [@komore/function/testing]  | Support for function testing.                            |
| [@komore/function/nest]     | Support for [Nest] integration.                          |

## Identity

TODO.

## Integration

| Name                                    | Description                                 |
|:----------------------------------------|---------------------------------------------|
| [@komore/integration]                   | Integration features.                       |
| [@komore/integration/aws]               | Integration with AWS.                       |
| [@komore/integration/aws/dynamodb]      | Integration with [Amazon DynamoDB].         |
| [@komore/integration/aws/kinesis]       | Integration with [Amazon Kinesis].          |
| [@komore/integration/aws/lambda]        | Integration with [AWS Lambda].              |
| [@komore/integration/aws/s3]            | Integration with [Amazon S3].               |
| [@komore/integration/aws/s3/pre-signer] | Integration with [Amazon S3] (pre-signing). |
| [@komore/integration/aws/ses]           | Integration with [Amazon SES].              |
| [@komore/integration/aws/sns]           | Integration with [Amazon SNS].              |
| [@komore/integration/aws/sqs]           | Integration with [Amazon SQS].              |

## Observability

| Name                            | Description                             |
|:--------------------------------|:----------------------------------------|
| [@komore/observability]         | Base module for tracing and monitoring. |

## Process

| Name                                | Description                                               |
|:------------------------------------|:----------------------------------------------------------|
| [@komore/process]                   | Base module for sagas.                                    |
| [@komore/process/aws/stepfunctions] | Support for [Amazon Step Functions] as a workflow target. |
| [@komore/process/testing]           | Support for process testing.                              |
| [@komore/process/nest]              | Support for [Nest] integration.                           |

## Stack

| Name                            | Description                               |
|:--------------------------------|:------------------------------------------|
| [@komore/stack]                 | Base module for stacks.                   |

## Tools

| Name                  | Description                         |
|:----------------------|:------------------------------------|
| [@komore/schematics]  | [Nx] schematics.                    |
| [@komore/vscode]      | Extension for [Visual Studio Code]. |
| [Development Server]  | Development server.                 |
| [Samples]             | Sample code.                        |
| [Website]             | [komore.dev] documentation portal.  |

pp

[@komore/store]: ./store
[@komore/store/aws/dynamodb]: ./store/aws/dynamodb
[@komore/store/nest]: ./store/nest
[@komore/store/testing]: ./store/testing
[Amazon DynamoDB]: https://aws.amazon.com/dynamodb/
[Amazon S3]: https://aws.amazon.com/s3/
[Amazon SES]: https://aws.amazon.com/ses/
[AWS Lambda]: https://aws.amazon.com/lambda/
[Development Server]: ./dewv-server
[Website]: ./website














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
  );
}

@Injectable({

})
export createFunction({
  module: NestModule,
  sources: []
  function: (event)
}) {
  
}
