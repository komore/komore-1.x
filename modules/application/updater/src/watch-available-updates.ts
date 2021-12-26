import { NEVER, type Observable } from '@komore/reactive';
import { type Update } from './update';

export function watchAvailableUpdates<DataType = undefined>(): Observable<Update<DataType>> {
  return NEVER;
}

/**
 * Usage: auto apply
watchAvailableUpdates().pipe(switchMapTo(applyUpdates()));
 */
