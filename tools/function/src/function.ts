import '@komore/reactive/polyfill';
import '@komore/temporal/polyfill';

import { type LambdaEventContext } from '@komore/aws/lambda';
import { apiGatewayEvent } from '@komore/aws/lambda/api-gateway';
import { kinesisEvent } from '@komore/aws/lambda/kinesis';
import { sqsEvent } from '@komore/aws/lambda/sqs';
import { createFunction, triggeredBy } from '@komore/function';
import { tapNext } from '@komore/reactive';

const mightyLambda = createFunction(
  'mightyLambda',
  triggeredBy(kinesisEvent(), sqsEvent(), event$ => {
    return event$.pipe(tapNext(record => console.log('record!', record)));
  })
);

const gatewayLambda = createFunction(
  'gatewayLambda',
  triggeredBy(apiGatewayEvent(), event$ => {
    return event$.pipe(tapNext(request => console.log('request!', request)));
  })
);

async function main() {
  mightyLambda(void 0, void 0 as unknown as LambdaEventContext);
  gatewayLambda();
}

main();
