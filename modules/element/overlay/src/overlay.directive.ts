import { createDirective } from '@komore/element/directive';
import { of } from '@komore/reactive';
import { switchMap } from '@komore/reactive/operators';
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
