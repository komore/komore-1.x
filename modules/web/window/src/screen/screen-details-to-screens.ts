import { Observable } from '@komore/reactive';

/**
 * Returns the list of screens as an observable, given screen details
 *
 * @param screenDetails Screen details
 * @returns Observable list of screens
 */
export function screenDetailsToScreens(screenDetails: ScreenDetails): Observable<ReadonlyArray<ScreenDetailed>> {
  return new Observable<ReadonlyArray<ScreenDetailed>>(subscriber => {
    screenDetails.onscreenschange = () => subscriber.next(screenDetails.screens);
    subscriber.add(() => {
      screenDetails.onscreenschange = undefined;
    });
  });
}
