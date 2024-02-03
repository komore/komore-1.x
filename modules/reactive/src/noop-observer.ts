import { noop } from '@komore/functional';
import { type Observer } from './observer';

/**
 * No-operation observer
 */
export const noopObserver: Observer<unknown> = {
  next: noop,
  error: noop,
  complete: noop,
};
