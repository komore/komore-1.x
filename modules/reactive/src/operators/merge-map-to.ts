import { mergeMapTo as rxjsMergeMapTo } from 'rxjs';
import { type Observable } from '../observable';
import { type OperatorFunction } from '../operator-function';

export function mergeMapTo<OutputType>(
  innerObservable: Observable<OutputType>,
  concurrent?: number
): OperatorFunction<unknown, OutputType> {
  return rxjsMergeMapTo(innerObservable, concurrent);
}
