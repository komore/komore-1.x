import { type Update } from './update';

export function watchAvailableUpdates<DataType = undefined>(): Observable<Update<DataType>> {
  return new Observable<never>();
}

/**
 * Usage: auto apply
watchAvailableUpdates().pipe(switchMapTo(applyUpdates()));
 */
