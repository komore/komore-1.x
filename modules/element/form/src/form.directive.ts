import { createDirective } from '@komore/element/directive';
import { of, switchMap } from '@komore/reactive';
import { type FormOptions } from './form-options';

/**
 * Form directive
 * ```ts
 * <form ^kForm="options">
 * </form>
 * ```
 */
export const kForm = createDirective<HTMLFormElement, FormOptions>(element$ => element$.pipe(
  switchMap(element => {
    return of(element);
  })
));
