import type { Observable } from '@komore/reactive';
import { fromEvent, of } from '@komore/reactive';
import { dropValue } from '@komore/reactive/operators';
import type { Form } from './form';

/**
 * Binds a form
 * @param htmlFormElement HTML form element
 * @returns Form
 */
export function bindForm<ValueType extends Record<string, unknown>>(
  htmlFormElement: HTMLFormElement
): Observable<Form<ValueType>> {
  const reset$ = fromEvent(htmlFormElement, 'reset').pipe(dropValue());
  const submit$ = fromEvent(htmlFormElement, 'submit').pipe(dropValue());
  const reset = () => htmlFormElement.reset();
  const submit = () => htmlFormElement.submit();
  const form: Form<ValueType> = {
    reset$,
    submit$,
    reset,
    submit
  };
  return of(form);
}
