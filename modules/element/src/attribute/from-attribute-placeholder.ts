import { throwError } from '@komore/reactive';
import { type FromAttribute } from './from-attribute';

/**
 * fromAttribute placeholder implementation
 * @note This should not be reachable in compiled code as the element compiler replaces the import
 */
export const fromAttributePlaceholder: FromAttribute<Record<string, unknown>> = () =>
  throwError(() => new Error('invalid fromAttribute import outside the element compiler'));
