import '@komore/reactive/polyfill';
import '@komore/temporal/polyfill';

import { AwsAccessKeyCredentials } from '@komore/aws';
import { createHttpClient } from '@komore/http/client';
import { firstValueFrom } from '@komore/reactive';

import { getHostedZones } from './test/get-hosted-zones';
import { ReadonlyRecord } from '@komore/typescript';

async function main() {
  const availableCredentials = {
    bootstrap: {
      accessKeyId: 'AKIA3ITLDHO4QF46TXJ3',
      secretAccessKey: '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',
    },
    infrastructure: {
      accessKeyId: 'AKIA3ITLDHO4YF34FLMX',
      secretAccessKey: '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',
    },
  } as const satisfies ReadonlyRecord<string, AwsAccessKeyCredentials>;
  const environmentVariables = process.env;
  const credentials = availableCredentials.infrastructure;

  const httpClient = createHttpClient({});
  const hostedZones$ = getHostedZones(httpClient, environmentVariables, credentials);
  const hostedZones = await firstValueFrom(hostedZones$);
  console.log('hosted zones', hostedZones);
}

main();
