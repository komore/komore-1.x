import '@komore/reactive/polyfill';
import '@komore/temporal/polyfill';

import { type LambdaEventContext } from '@komore/aws/lambda';
import { apiGatewayEvent } from '@komore/aws/lambda/api-gateway';
import { cognitoEvent } from '@komore/aws/lambda/cognito';
import { dynamoDBEvent } from '@komore/aws/lambda/dynamodb';
import { kinesisEvent } from '@komore/aws/lambda/kinesis';
import { s3Event } from '@komore/aws/lambda/s3';
import { sqsEvent } from '@komore/aws/lambda/sqs';
import { createFunction, triggeredBy } from '@komore/function';
import { cloudFunctionsHttpEvent } from '@komore/gcloud/cloud-functions/http';
import { cloudStorageEvent } from '@komore/gcloud/cloud-functions/storage';
import { redactValue, tapNext } from '@komore/reactive';
import {} from '@komore/aws/lambda/testing';

const queueFunction = createFunction(
  'queueFunction',
  triggeredBy(kinesisEvent(), sqsEvent(), event$ =>
    event$.pipe(
      tapNext(record => console.log(`record from "${record.eventSourceARN}"`, record)),
      redactValue()
    )
  )
);

const httpFunction = createFunction(
  'httpFunction',
  triggeredBy(apiGatewayEvent(), cloudFunctionsHttpEvent(), event$ =>
    event$.pipe(tapNext(request => console.log('request!', request)))
  )
);

const storageFunction = createFunction(
  'storageFunction',
  triggeredBy(s3Event(), cloudStorageEvent(), event$ =>
    event$.pipe(tapNext(event => console.log('storage event', event)))
  )
);

const databaseFunction = createFunction(
  'databaseFunction',
  triggeredBy(dynamoDBEvent(), event$.pipe(tapNext(event => console.log('database event', event))))
);

const cognitoFunction = createFunction(
  'cognitoFunction',
  triggeredBy(cognitoEvent(), event$ => event$.pipe(redactValue()))
);

async function main() {
  queueFunction(void 0, void 0 as unknown as LambdaEventContext);
  httpFunction();
  databaseFunction();
  storageFunction();
  cognitoFunction();
}

main();
