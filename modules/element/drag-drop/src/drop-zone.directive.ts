import { createDirective } from '@komore/element';
import type { DropZoneOptions } from './drop-zone-options';

/**
 * Drop zone directive
 */
export const dropZone = createDirective<HTMLElement, DropZoneOptions>(element$ => element$.pipe(

));
