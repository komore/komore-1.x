import '@komore/reactive/polyfill';
import '@komore/temporal/polyfill';

import { AsyncLocalStorage } from 'node:async_hooks';

import { type AwsCredentials } from '@komore/aws';
import { createHttpClient } from '@komore/http/client';
import {
  createLogger,
  defaultLogSeverityNames,
  setDefaultLogger,
  patternLogLayout,
  layoutLogEncoder,
  jsonLogEncoder,
} from '@komore/logging';
import { nodeAsyncLogExecutionContext, nodeFileLogAppender, nodeWriteStreamLogAppender } from '@komore/node/logging';
import { firstValueFrom } from '@komore/reactive';
import { type ReadonlyRecord } from '@komore/typescript';

import { getBuckets } from './test/get-buckets';
import { getHostedZone } from './test/get-hosted-zone';
import { getTables } from './test/get-tables';

function getCredentials(): ReadonlyRecord<'bootstrap' | 'infrastructure', AwsCredentials> {
  return {
    bootstrap: {
      accessKeyId: 'AKIA3ITLDHO4QF46TXJ3',
      secretAccessKey: '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',
    },
    infrastructure: {
      accessKeyId: 'AKIA3ITLDHO4YF34FLMX',
      secretAccessKey: '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',
    },
  };
}

function initialize(): void {
  const severityNames = defaultLogSeverityNames();
  const dateTimeFormat = new Intl.DateTimeFormat(['en'], {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    fractionalSecondDigits: 3,
    hour12: false,
  });
  const layout = patternLogLayout({ dateTimeFormat, pattern: '[%date] %domain %name', severityNames });
  const encoder = layoutLogEncoder({ layout });
  const logger = createLogger({
    appenders: [
      nodeWriteStreamLogAppender({ encoder, writeStream: process.stdout }),
      nodeFileLogAppender({ encoder: jsonLogEncoder({}), encoding: 'utf-8', path: './aws.log' }),
    ],
    eventToMessage: _ev => 'hello world',
    executionContext: nodeAsyncLogExecutionContext(asyncLocalStorage),
  });
  setDefaultLogger(logger);
}

async function main() {
  initialize();

  const credentials = getCredentials();
  const region = 'eu-west-3';

  const httpClient = createHttpClient({});
  try {
    const buckets$ = getBuckets({ credentials: credentials.bootstrap, httpClient, region });
    const { Buckets, Owner } = await firstValueFrom(buckets$);
    console.log('buckets', Buckets);
    console.log('buckets owner', Owner);
  } catch (e) {
    console.log('cannot get buckets', JSON.stringify(e, undefined, 2));
  }

  try {
    const tables$ = getTables({ credentials: credentials.bootstrap, httpClient, region });
    const { TableNames } = await firstValueFrom(tables$);
    console.log('tables', TableNames);
  } catch (e) {
    console.log('cannot get tables', JSON.stringify(e, undefined, 2));
  }

  try {
    const hostedZone$ = getHostedZone({
      credentials: credentials.infrastructure,
      httpClient,
      region: 'us-east-1',
    });
    const hostedZone = await firstValueFrom(hostedZone$);
    console.log('hosted zone', JSON.stringify(hostedZone, undefined, 2));
  } catch (e) {
    console.log('cannot get hosted zone', JSON.stringify(e, undefined, 2));
  }
}

const asyncLocalStorage = new AsyncLocalStorage<ReadonlyRecord<string, unknown>>();

asyncLocalStorage.run({ tool: 'aws' }, main);
