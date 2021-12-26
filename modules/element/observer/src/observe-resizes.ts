import { Observable, throwError } from '@komore/reactive';

/**
 * Observes an element's resizes
 * @param target Target element
 * @param options Resize observer options
 * @returns Stream of element resizes
 */
export function observeResizes(
  targetOrTargets: Element | ReadonlyArray<Element>,
  options?: ResizeObserverOptions
): Observable<ResizeObserverEntry> {
  if (window.ResizeObserver === undefined) {
    return throwError(() => new Error('ResizeObserver is not supported'));
  }

  return new Observable<ResizeObserverEntry>(subscriber => {
    const resizeObserver = new ResizeObserver(entries => entries.forEach(entry => subscriber.next(entry)));
    const targets = Array.isArray(targetOrTargets) ? targetOrTargets : [targetOrTargets];
    targets.forEach(target => resizeObserver.observe(target, options));
    subscriber.add(() => targets.forEach(target => resizeObserver.unobserve(target)));
  });
}
