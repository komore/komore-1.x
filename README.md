# komore

komore is a [TypeScript] framework for [Node] meant to ease the creation of services designed around the [CQRS],
[Event Sourcing] and [Saga] patterns in a [serverless], [Function-as-a-Service] environment.

komore functions use [declarative], [functional] and [reactive] programming paradigms with the help of [RxJS]. They can
be executed within an [AWS Lambda], an [Azure Functions] or a [Google Cloud Functions] host.

More information about those concepts can be found in the [architecture] and [development] documentation.

## Concept

komore 

## Development

komore comes with first-class support for [Nx] and [Terraform].

The framework also offers a fully integrated development experience:

- Generate domains, functions and sagas using Nx schematics
- Execute and debug functions locally, with the ability to mock integrated services
- Serve functions with live-reload capabilities
- Monitor and trigger functions using the [VSCode extension]

## Integration

komore can integrate with numerous services, and can easily be extended to support additional services.

### Amazon Web Services

[![Amazon Alexa](./docs/images/aws-alexa.svg =64x64)](./docs/integration/aws/alexa.md "Amazon Alexa")
[![AWS AppSync](./docs/images/aws-appsync.svg =64x64)](./docs/integration/aws/appsync.md "AWS AppSync")
[![Amazon Aurora](./docs/images/aws-aurora.svg =64x64)](./docs/integration/aws/aurora.md "Amazon Aurora")
[![Amazon Chime](./docs/images/aws-chime.svg =64x64)](./docs/integration/aws/chime.md "Amazon Chime")
[![Amazon Comprehend](./docs/images/aws-comprehend.svg =64x64)](./docs/integration/aws/comprehend.md "Amazon Comprehend")
[![Amazon DynamoDB](./docs/images/aws-dynamodb.svg =64x64)](./docs/integration/aws/dynamodb.md "Amazon DynamoDB")
[![Amazon EventBridge](./docs/images/aws-eventbridge.svg =64x64)](./docs/integration/aws/eventbridge.md "Amazon EventBridge")
[![Amazon Kinesis](./docs/images/aws-kinesis.svg =64x64)](./docs/integration/aws/kinesis.md "Amazon Kinesis")
[![AWS Lambda](./docs/images/aws-lambda.svg =64x64)](./docs/integration/aws/lambda.md "AWS Lambda")
[![Amazon Neptune](./docs/images/aws-neptune.svg =64x64)](./docs/integration/aws/neptune.md "Amazon Neptune")
[![Amazon Polly](./docs/images/aws-polly.svg =64x64)](./docs/integration/aws/polly.md "Amazon Polly")
[![Amazon Redshift](./docs/images/aws-redshift.svg =64x64)](./docs/integration/aws/redshift.md "Amazon Redshift")
[![Amazon Rekognition](./docs/images/aws-rekognition.svg =64x64)](./docs/integration/aws/rekognition.md "Amazon Rekognition")
[![Amazon Route53](./docs/images/aws-route53.svg =64x64)](./docs/integration/aws/route53.md "Amazon Route 53")
[![Amazon S3](./docs/images/aws-s3.svg =64x64)](./docs/integration/aws/s3.md "Amazon S3")
[![Amazon SES](./docs/images/aws-ses.svg =64x64)](./docs/integration/aws/ses.md "Amazon SES")
[![Amazon SNS](./docs/images/aws-sns.svg =64x64)](./docs/integration/aws/sns.md "Amazon SNS")
[![Amazon SQS](./docs/images/aws-sqs.svg =64x64)](./docs/integration/aws/sqs.md "Amazon SQS")
[![Amazon Step Functions](./docs/images/aws-stepfunctions.svg =64x64)](./docs/integration/aws/stepfunctions.md "Amazon Step Functions")
[![Amazon Transcribe](./docs/images/aws-transcribe.svg =64x64)](./docs/integration/aws/transcribe.md "Amazon Transcribe")
[![Amazon Translate](./docs/images/aws-translate.svg =64x64)](./docs/integration/aws/translate.md "Amazon Translate")

### Google Cloud Platform

TODO

### Microsoft Azure

TODO

### Recipes

- S3 file download with expiration



[architecture]: ./docs/architecture/README.md
[AWS Lambda]: https://aws.amazon.com/lambda/
[Azure Functions]: https://azure.microsoft.com/services/functions/
[CQRS]: ./docs/architecture/cqrs.md
[declarative]: ./docs/declarative.md
[development]: ./docs/development/README.md
[Event Sourcing]: ./docs/architecture/event-sourcing.md
[Function-as-a-Service]: ./docs/architecture/function-as-a-service.md
[functional]: ./docs/functional.md
[Google Cloud Functions]: https://cloud.google.com/functions/
[Nest]: https://nestjs.com/
[Node]: https://nodejs.org/
[Nx]: https://nx.dev/
[reactive]: ./docs/reactive.md
[RxJS]: https://rxjs.dev/
[Saga]: ./docs/saga.md
[serverless]: https://en.wikipedia.org/wiki/Serverless_computing
[supported services]: ./packages/README.md#integration-packages
[Terraform]: https://www.terraform.io/
[TypeScript]: https://www.typescriptlang.org/
