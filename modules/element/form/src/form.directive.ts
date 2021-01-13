import { createDirective } from '@komore/element';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import type { FormOptions } from './form-options';

/**
 * Form directive
 * ```ts
 * <form ^form="options">
 * </form>
 * ```
 */
export const form = createDirective<HTMLFormElement, FormOptions>(element$ => element$.pipe(
  switchMap(element => {
    return of(element);
  })
));
