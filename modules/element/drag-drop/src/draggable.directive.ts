import { createDirective } from '@komore/element';
import type { DraggableOptions } from './draggable-options';

/**
 * Draggable directive
 */
export const draggable = createDirective<HTMLElement, DraggableOptions>(element$ => element$.pipe(

));
