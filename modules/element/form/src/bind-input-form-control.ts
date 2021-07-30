import type { Observable } from '@komore/reactive';
import { fromEvent } from '@komore/reactive';
import { map } from '@komore/reactive/operators';
import { bindFormControl } from './bind-form-control';
import type { FormControl } from './form-control';

/**
 * Binds an input element
 * @param htmlInputElement HTML input element
 * @returns Form control
 * @template ValueType Value type
 */
export function bindInputFormControl<ValueType>(
  htmlInputElement: HTMLInputElement
): Observable<FormControl<ValueType, HTMLInputElement>> {
  const value$ = fromEvent(htmlInputElement, 'input').pipe(
    map(() => htmlInputElement.value)
  );
  return bindFormControl<ValueType, HTMLInputElement>(htmlInputElement);
}
