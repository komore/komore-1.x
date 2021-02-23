import { from as rxjsFrom } from 'rxjs';
import type { Observable } from '../observable';
import type { ObservableInput, ObservableInputType } from '../observable-input';

/**
 * Converts various objects and data types into observables
 * @param input Input value
 * @returns Observable
 * @template O Observable input type
 */
export function from<O extends ObservableInput<unknown>>(input: O): Observable<ObservableInputType<O>> {
  return rxjsFrom(input);
}
