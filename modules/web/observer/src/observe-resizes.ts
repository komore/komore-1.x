import { Observable, throwError } from 'rxjs';

/**
 * Observes element resizes
 * @param target Target element
 * @param options Resize observer options
 * @returns Observable stream of element resizes
 */
export function observeResizes(
  targetOrTargets: Element | ReadonlyArray<Element>,
  options?: ResizeObserverOptions
): Observable<ResizeObserverEntry> {
  if (window.ResizeObserver === undefined) {
    return throwError(() => new Error('ResizeObserver not supported'));
  }

  return new Observable(subscriber => {
    const observer = new ResizeObserver(entries => entries.forEach(entry => subscriber.next(entry)));
    const targets = Array.isArray(targetOrTargets) ? targetOrTargets : [targetOrTargets];
    targets.forEach(target => observer.observe(target, options));
    return () => targets.forEach(target => observer.unobserve(target));
  });
}
