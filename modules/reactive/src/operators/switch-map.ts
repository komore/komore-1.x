import { type Observable } from '../observable';
import { type OperatorFunction } from '../operator-function';
import { switchMap as rxjsSwitchMap } from 'rxjs';

/**
 * Projects each source value to an observable which is merged into the output observable
 *
 * Values get emitted only from the most recently projected observable: each newly emitted value causes the projected
 * observable to be unsubscribed from and a new observable to be created.
 * @param project Projection function
 * @template InputType Input type
 * @template OutputType Output type
 */
export function switchMap<InputType, OutputType>(
  project: (value: InputType, index: number) => Observable<OutputType>
): OperatorFunction<InputType, OutputType> {
  return rxjsSwitchMap(project);
}
