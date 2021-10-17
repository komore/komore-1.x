# Triggers

AWS Lambda functions may be triggered by a number of events coming from various sources.

The following table lists the currently supported integrations:

| Service                        | Trigger function           | Description                             |
| :----------------------------- | :------------------------- | :-------------------------------------- |
| [Amazon API Gateway]           | `aws:api-gateway`          | Handles REST API requests.              |
| [Amazon API Gateway HTTP API]  | `aws:api-gateway:http`     | Handles HTTP API requests.              |
| [Amazon AppSync]               | [`appSyncEventTrigger()`]  | Resolves GraphQL mutations and queries. |
| [Amazon Cognito]               | [`cognitoEventTrigger()`]  | Processes Cognito events.               |
| [Amazon DynamoDB Streams]      | [`dynamoDBEventTrigger()`] | Receives DynamoDB changes.              |
| [Amazon Kinesis Data Streams]  | [`kinesisEventTrigger()`]  | Receives records from a stream.         |
| [Amazon Kinesis Data Firehose] | `aws:kinesis:firehose`     | Processes records for a stream.         |
| [Amazon S3]                    | [`s3EventTrigger()`]       | Receives notifications from a bucket.   |
| [Amazon SES]                   | [`sesEventTrigger()`]      | Processes emails.                       |
| [Amazon SNS]                   | [`snsEventTrigger()`]      | Receives notifications from a topic.    |
| [Amazon SQS]                   | [`sqsEventTrigger()`]      | Receives records from a queue.          |

[`appsynceventtrigger()`]: ../../../../modules/function/lambda/src/app-sync/app-sync-event-trigger.ts
[`cognitoeventtrigger()`]: ../../../../modules/function/lambda/src/cognito/cognito-event-trigger.ts
[`dynamodbeventtrigger()`]: ../../../../modules/function/lambda/src/dynamodb/dynamodb-event-trigger.ts
[`kinesiseventtrigger()`]: ../../../../modules/function/lambda/src/kinesis/kinesis-event-trigger.ts
[`s3eventtrigger()`]: ../../../../modules/function/lambda/src/s3/s3-event-trigger.ts
[`seseventtrigger()`]: ../../../../modules/function/lambda/src/ses/ses-event-trigger.ts
[`snseventtrigger()`]: ../../../../modules/function/lambda/src/sns/sns-event-trigger.ts
[`sqseventtrigger()`]: ../../../../modules/function/lambda/src/sqs/sqs-event-trigger.ts
[amazon appsync]: https://TODO
[amazon api gateway]: https://TODO
[amazon api gateway http api]: https://TODO
[amazon cognito]: ./cognito/README.md
[amazon dynamodb streams]: https://TODO
[amazon kinesis data firehose]: https://TODO
[amazon kinesis data streams]: https://TODO
[amazon s3]: https://TODO
[amazon ses]: https://TODO
[amazon sns]: https://TODO
[amazon sqs]: https://TODO
