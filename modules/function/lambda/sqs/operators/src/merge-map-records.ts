import type { SqsEvent, SqsEventRecord } from '@komore/function-lambda/sqs';
import type { OperatorFunction } from '@komore/reactive';
import { fromArray } from '@komore/reactive';
import { mergeMap } from '@komore/reactive/operators';

export function mergeMapRecords(): OperatorFunction<SqsEvent, SqsEventRecord> {
  return mergeMap(event => fromArray(event.Records));
}
