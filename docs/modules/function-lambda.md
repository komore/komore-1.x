# AWS Lambda Function

The AWS Lambda function module enables function execution within an [AWS Lambda] host environment.

## Installation

The module can be installed via Npm or Yarn:

```shell
npm install @komore/function-lambda --save
```

```shell
yarn add @komore/function-lambda
```

## Setup

A function source can be given support for new event types via the `lambdaEvents` function.

The following code would add support for events coming from API Gateway, SQS or Kinesis.

```typescript
import { lambdaEventOfType } from '@komore/function-lambda';
import { fromFunction } from '@komore/function';

const source$ = fromFunction('')lambdaEventOfType('aws:api-gateway', 'aws:sqs', 'aws:kinesis'));
```

A function sink can be given support for new result types via the `lambdaResultOfType` function:

```typescript
import { lambdaResultOfType }




## Triggers

AWS Lambda functions may be triggered by a number of events coming from various sources.

The following table lists the currently supported integrations:

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



[Amazon Alexa]: 
[Amazon AppSync]: 
[Amazon API Gateway]: 
[Amazon API Gateway HTTP API]: 
[Amazon Cognito]: 
[Amazon DynamoDB Streams]: 
[Amazon Kinesis Data Streams]: 
[Amazon Kinesis Data Firehose]: 
[Amazon Simple Email Service]: 
[Amazon Simple Notification Service]: 
[Amazon Simple Queue Service]: 
[AWS Lambda]: 
