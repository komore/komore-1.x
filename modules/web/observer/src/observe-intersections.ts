import { Observable, throwError } from 'rxjs';

/**
 * Observes element intersections
 * @param target Target element
 * @param options Intersection observer options
 * @returns Observable stream of element intersection entries
 */
export function observeIntersections(
  target: Element,
  options?: IntersectionObserverInit
): Observable<IntersectionObserverEntry> {
  if (globalThis.IntersectionObserver === undefined) {
    return throwError(() => new Error('IntersectionObserver not supported'));
  }

  return new Observable<IntersectionObserverEntry>(subscriber => {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => subscriber.next(entry)), options);
    observer.observe(target);
    return () => observer.unobserve(target);
  });
}
