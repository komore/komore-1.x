import { fromArray } from '@komore/reactive';

import { type KinesisEvent } from './kinesis-event';
import { type KinesisEventRecord } from './record/kinesis-event-record';

export function kinesisEventToKinesisRecords(event: KinesisEvent): Observable<KinesisEventRecord> {
  return fromArray(event.Records);
}
