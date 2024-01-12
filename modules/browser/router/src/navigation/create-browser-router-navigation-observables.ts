import { isDefined } from '@komore/functional';
import { distinctUntilChanged, filter, fromEvent, map, shareReplay, startWith, tapNext } from '@komore/reactive';

import { BrowserRouter } from '../browser-router';

/**
 * Creates browser router navigation observables
 *
 * @param navigation Navigation
 * @returns Browser router navigation observables
 * @private
 */
export function createBrowserRouterNavigationObservables(
  navigation: Navigation
): Pick<BrowserRouter, 'canNavigateBackward$' | 'canNavigateForward$' | 'currentUrl$'> {
  const navigateSuccess$ = fromEvent(navigation, 'navigatesuccess').pipe(
    tapNext(ev => console.log('navigate success', ev)),
    shareReplay({ refCount: true })
  );
  const canNavigateBackward$ = navigateSuccess$.pipe(
    map(() => navigation.canGoBack),
    startWith(navigation.canGoBack),
    distinctUntilChanged()
  );
  const canNavigateForward$ = navigateSuccess$.pipe(
    map(() => navigation.canGoForward),
    startWith(navigation.canGoForward),
    distinctUntilChanged()
  );
  const currentUrl$ = navigateSuccess$.pipe(
    map(() => navigation.currentEntry?.url ?? undefined),
    filter(isDefined),
    map(url => new URL(url)),
    distinctUntilChanged()
  );

  return {
    canNavigateBackward$,
    canNavigateForward$,
    currentUrl$,
  };
}
