import { map } from '@komore/reactive';
import { mapToMessageEventData } from '@komore/web';
import { defineWorker } from '@komore/web/worker';
import { computeFactorial } from './compute-factorial';
import { type ComputationInput, type ComputationResult } from './types';

const [observable, observer] = defineWorker<ComputationInput, ComputationResult>();

observable.pipe(
  mapToMessageEventData(),
  map(computeFactorial)
).subscribe(observer);
