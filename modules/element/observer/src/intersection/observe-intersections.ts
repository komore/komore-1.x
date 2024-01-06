import { Observable, throwError } from '@komore/reactive';

import { elementObserverError } from '../element-observer.error';

/**
 * Observes an element's intersections
 *
 * @param target Target element
 * @param options Intersection observer options
 * @returns Stream of element intersection entries
 */
export function observeIntersections(
  target: Element,
  options?: IntersectionObserverInit
): Observable<IntersectionObserverEntry> {
  if (globalThis.IntersectionObserver === undefined) {
    return throwError(() => elementObserverError.intersectionObserverNotSupported());
  }

  return new Observable<IntersectionObserverEntry>(subscriber => {
    const intersectionObserver = new IntersectionObserver(
      entries => entries.forEach(entry => subscriber.next(entry)),
      options
    );
    intersectionObserver.observe(target);
    subscriber.add(() => intersectionObserver.unobserve(target));
  });
}
