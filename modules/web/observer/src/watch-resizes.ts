import { Observable, throwError } from 'rxjs';

/**
 * Watches for element resizes
 * @param target Target element
 * @param options Resize observer options
 * @returns Stream of element resizes
 */
export function watchResizes(
  targetOrTargets: Element | ReadonlyArray<Element>,
  options?: ResizeObserverOptions
): Observable<ResizeObserverEntry> {
  if (window.ResizeObserver === undefined) {
    return throwError(() => new Error('ResizeObserver not supported'));
  }

  return new Observable(observer => {
    const resizeObserver = new ResizeObserver(entries => entries.forEach(entry => observer.next(entry)));
    const targets = Array.isArray(targetOrTargets) ? targetOrTargets : [targetOrTargets];
    targets.forEach(target => resizeObserver.observe(target, options));
    return () => targets.forEach(target => resizeObserver.unobserve(target));
  });
}
