import { throwError } from '@komore/reactive';
import { type FromSlot } from './from-slot';

/**
 * fromSlot placeholder implementation
 * @note This should not reached in compiled code as the element compiler replaces the import
 */
export const fromSlotMock: FromSlot = () =>
  throwError(() => new Error('invalid fromSlot import outside the element compiler'));
