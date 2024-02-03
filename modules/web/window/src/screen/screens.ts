import { startWith, switchMap } from '@komore/reactive';

import { screenDetails } from './screen-details';
import { screenDetailsToScreens } from './screen-details-to-screens';

/**
 * List of screens
 */
export const screens: Observable<ReadonlyArray<ScreenDetailed>> = screenDetails.pipe(
  switchMap(details => screenDetailsToScreens(details).pipe(startWith(details.screens)))
);
