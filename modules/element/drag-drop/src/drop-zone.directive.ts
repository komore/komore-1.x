import { createDirective } from '@komore/element/directive';
import type { DropZoneOptions } from './drop-zone-options';

/**
 * Drop zone directive
 */
export const kDropZone = createDirective<HTMLElement, DropZoneOptions>(element$ => element$.pipe(

));
