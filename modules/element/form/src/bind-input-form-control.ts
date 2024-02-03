import { fromEvent, map } from '@komore/reactive';

import { bindFormControl } from './bind-form-control';
import { type FormControl } from './form-control';

/**
 * Binds an input element
 * @param htmlInputElement HTML input element
 * @returns Form control
 * @template ValueType Value type
 */
export function bindInputFormControl<ValueType>(
  htmlInputElement: HTMLInputElement
): Observable<FormControl<ValueType, HTMLInputElement>> {
  const value$ = fromEvent(htmlInputElement, 'input').pipe(map(() => htmlInputElement.value));
  return bindFormControl<ValueType, HTMLInputElement>(htmlInputElement);
}
