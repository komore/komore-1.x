import { startWith, switchMap, type Observable } from '@komore/reactive';

import { screenDetails } from './screen-details';
import { screenDetailsToCurrentScreen } from './screen-details-to-current-screen';

/**
 * Current screen
 */
export const currentScreen: Observable<ScreenDetailed> = screenDetails.pipe(
  switchMap(details => screenDetailsToCurrentScreen(details).pipe(startWith(details.currentScreen)))
);
