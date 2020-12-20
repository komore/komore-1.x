import { Observable, throwError } from 'rxjs';

/**
 * Watches element intersections
 * @param target Target element
 * @param options Intersection observer options
 * @returns Stream of element intersection entries
 */
export function watchIntersections(
  target: Element,
  options?: IntersectionObserverInit
): Observable<IntersectionObserverEntry> {
  if (globalThis.IntersectionObserver === undefined) {
    return throwError(() => new Error('IntersectionObserver not supported'));
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
