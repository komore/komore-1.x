import { fromEvent, of, redactValue } from '@komore/reactive';

import { type Form } from './form';

/**
 * Binds a form
 * @param htmlFormElement HTML form element
 * @returns Form
 */
export function bindForm<ValueType extends Record<string, unknown>>(
  htmlFormElement: HTMLFormElement
): Observable<Form<ValueType>> {
  const reset$ = fromEvent(htmlFormElement, 'reset').pipe(redactValue());
  const submit$ = fromEvent(htmlFormElement, 'submit').pipe(redactValue()); // TODO: grab values and map to ValueType
  const reset = () => htmlFormElement.reset();
  const submit = () => htmlFormElement.submit();
  const form: Form<ValueType> = {
    reset$,
    submit$,
    reset,
    submit,
  };
  return of(form);
}
