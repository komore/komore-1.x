import { type FormControl } from './form-control';

/**
 * Binds a control
 *
 * @param htmlElement HTML element
 * @returns Form control
 * @template T Value type
 */
export function bindFormControl<ValueType, ElementType extends HTMLElement>(
  htmlElement: ElementType
): Observable<FormControl<ValueType, ElementType>> {
  const formControl: FormControl<ValueType, ElementType> = {
    htmlElement,
  };
}
