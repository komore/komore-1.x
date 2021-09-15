import type { Observable } from '@komore/reactive';

/**
 * Function that returns an observable slot
 * @param slotName Slot name
 * @returns Observable slot element
 */
export interface FromSlot {
  (slotName?: string): Observable<HTMLSlotElement>;
}
