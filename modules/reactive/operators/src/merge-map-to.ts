import type { Observable, ObservableInputType, OperatorFunction } from '@komore/reactive';
import { mergeMapTo as rxjsMergeMapTo } from 'rxjs/operators';

export function mergeMapTo<OutputType extends Observable<unknown>>(
  innerObservable: OutputType,
  concurrent?: number
): OperatorFunction<unknown, ObservableInputType<OutputType>> {
  return rxjsMergeMapTo(innerObservable, concurrent);
}
