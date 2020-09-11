# komore Function Module (AWS Lambda)

Support for the AWS Lambda execution environment.

- [Usage](#usage)
- [Lambda Layers](#lambda-layers)
- [Integrations](#integrations)
  - [Alexa](#integration-with-alexa)
  - [AppSync](#integration-with-appsync)
  - [API Gateway](#integration-with-api-gateway)
  - [API Gateway HTTP API](#integration-with-api-gateway-http-api)
  - [Cognito](#integration-with-cognito)
  - [DynamoDB Streams](#integration-with-dynamodb-streams)
  - [Kinesis Data Stream](#integration-with-kinesis-data-streams)
  - [Kinesis Data Firehose](#integration-with-kinesis-data-firehose)
  - [Simple Email Service](#integration-with-simple-email-service)
  - [Simple Notification Service](#integration-with-simple-notification-service)
  - [Simple Queue Service](#integration-with-simple-queue-service)

## Usage

The provider is passed via the function configuration:

```typescript
import { LambdaFunctionProvider } from '@komore/function/aws';

export const exampleFunction = createFunction({ providers: [LambdaFunctionProvider] }).pipe(
  tap(({ message }) => console.log('message', message)),
  mapTo({ hello: 'world' })
);
```

## Lambda Layers

TODO.

## Integrations

AWS Lambda functions may be called from a number of sources via a number of integration methods.

The following table lists the supported integrations:

| Service                              | Trigger type           | Description                            |
|:-------------------------------------|:-----------------------|:---------------------------------------|
| [Amazon Alexa]                       | `aws:alexa`            | Receive smart home events.             |
| [Amazon AppSync]                     | `aws:appsync`          | Resolve GraphQL mutations and queries. |
| [Amazon API Gateway]                 | `aws:api-gateway`      | Handle API requests.                   |
| [Amazon API Gateway HTTP API]        | `aws:api-gateway:http` | Handle API requests (HTTP API).        |
| [Amazon Cognito]                     | `aws:cognito`          | TODO.                                  |
| [Amazon DynamoDB Streams]            | `aws:dynamodb:stream`  | Receive DynamoDB changes.              |
| [Amazon Kinesis Data Streams]        | `aws:kinesis:stream`   | Receive records from a stream.         |
| [Amazon Kinesis Data Firehose]       | `aws:kinesis:firehose` | Process records for a stream.          |
| [Amazon Simple Email Service]        | `aws:ses`              | Process emails.                        |
| [Amazon Simple Notification Service] | `aws:sns`              | Receive notifications from a topic.    |
| [Amazon Simple Queue Service]        | `aws:sqs`              | Receive records from a queue.          |

### Integration with Alexa

### Integration with AppSync

### Integration with API Gateway

### Integration with API Gateway HTTP API

### Integration with DynamoDB Streams

### Integration with Kinesis Data Streams

### Integration with Kinesis Data Firehose

### Integration with Simple Email Service

### Integration with Simple Notification Service

### Integration with Simple Queue Service



[Amazon AppSync]: 