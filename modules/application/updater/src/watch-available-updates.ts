import { empty } from '@komore/reactive';

import { type Update } from './update';

export function watchAvailableUpdates<DataType = undefined>(): Observable<Update<DataType>> {
  return empty;
}

/**
 * Usage: auto apply
watchAvailableUpdates().pipe(switchMapTo(applyUpdates()));
 */
