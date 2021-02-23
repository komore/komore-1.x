import { MonoTypeOperatorFunction } from '@komore/reactive';
import { sampleTime as rxjsSampleTime } from 'rxjs/operators';

export function randomSample<T>(ratio): MonoTypeOperatorFunction<T> {
  return rxjsSampleTime(period, )
}