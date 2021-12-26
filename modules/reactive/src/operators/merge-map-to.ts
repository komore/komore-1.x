import { mergeMapTo as rxjsMergeMapTo } from 'rxjs';
import { type Observable } from '../observable';
import { type ObservableInputType } from '../observable-input-type';
import { type OperatorFunction } from '../operator-function';

export function mergeMapTo<OutputType extends Observable<unknown>>(
  innerObservable: OutputType,
  concurrent?: number
): OperatorFunction<unknown, ObservableInputType<OutputType>> {
  return rxjsMergeMapTo(innerObservable, concurrent);
}
