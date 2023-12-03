import { Observable } from '@komore/reactive';

/**
 * Returns the current screen as an observable, given screen details
 *
 * @param screenDetails Screen details
 * @returns Observable current screen
 */
export function screenDetailsToCurrentScreen(screenDetails: ScreenDetails): Observable<ScreenDetailed> {
  return new Observable<ScreenDetailed>(subscriber => {
    screenDetails.oncurrentscreenchange = () => subscriber.next(screenDetails.currentScreen);
    subscriber.add(() => {
      screenDetails.oncurrentscreenchange = undefined;
    });
  });
}
