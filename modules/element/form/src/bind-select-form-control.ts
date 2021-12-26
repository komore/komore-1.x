import { fromEvent, map, type Observable } from '@komore/reactive';
import { bindFormControl } from './bind-form-control';
import { type FormControl } from './form-control';

/**
 * Binds a select element
 * @param htmlSelectElement HTML select element
 * @returns Form control
 * @template ValueType Value type
 */
export function bindSelectFormControl<ValueType>(
  htmlSelectElement: HTMLSelectElement
): Observable<FormControl<ValueType, HTMLSelectElement>> {
  const value$ = fromEvent(htmlSelectElement, 'input').pipe(
    map(() => {
      const selectedIndex = htmlSelectElement.selectedIndex;
      return selectedIndex !== -1 ? htmlSelectElement.options[selectedIndex].value : undefined;
    })
  );
  return bindFormControl<ValueType, HTMLSelectElement>(htmlSelectElement);
}
