import { createDirective } from '@komore/element/directive';
import { combineLatest } from '@komore/reactive';

/**
 * Show directive
 */
// should it go to @komore/element/accessibility/show?
export const kShow = createDirective<HTMLElement, boolean, HTMLElement>(({ element, parameters }) => {
  combineLatest({
    element,
    visible: parameters
  }).subscribe(({ element, visible }) => {
    const hidden = !visible;
    element.toggleAttribute('hidden', hidden);
  })
});
