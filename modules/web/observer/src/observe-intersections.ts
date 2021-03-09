import { Observable, throwError } from '@komore/reactive';

/**
 * Observes an element's intersections
 * @param target Target element
 * @param options Intersection observer options
 * @returns Stream of element intersection entries
 */
export function observeIntersections(
  target: Element,
  options?: IntersectionObserverInit
): Observable<IntersectionObserverEntry> {
  if (globalThis.IntersectionObserver === undefined) {
    return throwError(() => new Error('IntersectionObserver is not supported'));
  }

  return new Observable<IntersectionObserverEntry>(observer => {
    const intersectionObserver = new IntersectionObserver(
      entries => entries.forEach(entry => observer.next(entry)),
      options
    );
    intersectionObserver.observe(target);
    return () => intersectionObserver.unobserve(target);
  });
}
