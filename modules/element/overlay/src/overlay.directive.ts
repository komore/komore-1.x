import { createDirective } from '@komore/element/directive';
import { of, switchMap } from '@komore/reactive';
import { type OverlayOptions } from './overlay-options';

/**
 * Overlay directive
 * ```ts
 * <div ^kOverlay="options">
 * </div>
 * ```
 */
export const kOverlay = createDirective<HTMLFormElement, OverlayOptions>(({ element, parameters }) => element.pipe(
  switchMap(element => {
    return of(element);
  })
));
