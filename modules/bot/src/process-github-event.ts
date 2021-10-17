import { createFunction } from '@komore/function';
import { toSqsRecords, triggeredBySqs } from '@komore/function-lambda/sqs';
import { mergeMap } from '@komore/reactive';

export const processGithubEvent = createFunction('processGithubEvent', triggeredBySqs(event$ => event$.pipe(
  mergeMap(toSqsRecords)
)));
