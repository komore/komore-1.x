import type { Observable } from '@komore/reactive';
import { fromEvent } from '@komore/reactive';
import { map } from '@komore/reactive/operators';
import { bindFormControl } from './bind-form-control';
import type { FormControl } from './form-control';

/**
 * Binds an input element
 * @param htmlTextAreaElement HTML input element
 * @returns Form control
 * @template ValueType Value type
 */
export function bindInputFormControl<ValueType>(
  htmlTextAreaElement: HTMLTextAreaElement
): Observable<FormControl<ValueType, HTMLTextAreaElement>> {
  const value$ = fromEvent(htmlTextAreaElement, 'input').pipe(
    map(() => htmlTextAreaElement.value)
  );
  return bindFormControl<ValueType, HTMLTextAreaElement>(htmlTextAreaElement);
}
