import { createDirective } from '@komore/element/directive';
import { type DraggableOptions } from './draggable-options';

/**
 * Draggable directive
 */
export const kDraggable = createDirective<HTMLElement, DraggableOptions>(({ element }) => element.pipe(

));
