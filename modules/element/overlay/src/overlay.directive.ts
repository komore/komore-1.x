import { createDirective } from '@komore/element';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import type { OverlayOptions } from './overlay-options';

/**
 * Overlay directive
 * ```ts
 * <div ^overlay"options">
 * </div>
 * ```
 */
export const overlay = createDirective<HTMLFormElement, OverlayOptions>(element$ => element$.pipe(
  switchMap(element => {
    return of(element);
  })
));
