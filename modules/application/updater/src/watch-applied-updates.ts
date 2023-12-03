import { NEVER, type Observable } from '@komore/reactive';

import { type Update } from './update';

/**
 * Watches for applied updates
 *
 * @returns Stream of applied updates
 * @template DataType Update data type
 */
export function watchAppliedUpdates<DataType = undefined>(): Observable<Update<DataType>> {
  return NEVER;
}

/*
 Usage (application effect)

updateApplied$ = watchAppliedUpdates().pipe(
  map(update => updateApplied({ update }))
);

reloadAfterUpdate$ = watchEvents().pipe(
  ofType(updateApplied),
  switchMap(({ update }) => showReloadAfterUpdateDialog(update).pipe(
    map(confirmed => confirmed ? reloadAfterUpdateConfirmed(({ update }) : reloadAfterUpdateCancelled({ update }))
  ))
)

reloadAfterUpdate$ = watchEvents().pipe(
  ofType(reloadAfterUpdateConfirmed),
)
  switchMap(update => showUpdateDialog(update)),
  tap()
watchInstalledUpdates().pipe(
  switchMap(update => showUpdateDialog(update).pipe(
    switchMap(shouldUpdate ? )
  ))
    subscribe(() => location.reload());

      window.location.reload();
*/
