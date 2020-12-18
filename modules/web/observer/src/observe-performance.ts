import { Observable, throwError } from 'rxjs';

/**
 * Observes performance
 * @param options Performance observer options
 * @returns Observable stream of performance entries
 */
export function observePerformance(options?: PerformanceObserverInit): Observable<PerformanceEntry> {
  if (globalThis.PerformanceObserver === undefined) {
    return throwError(() => new Error('PerformanceObserver not supported'));
  }

  return new Observable<PerformanceEntry>(subscriber => {
    const observer = new PerformanceObserver(entries => entries.getEntries().forEach(entry => subscriber.next(entry)));
    observer.observe(options);
    return () => observer.disconnect();
  });
}
