import type { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { map } from 'rxjs';
import type { RouterNavigationEvent } from './router-navigation-event';
import { toRouterNavigationEvent } from './to-router-navigation-event';

/**
 * Creates a router navigation event source, as a subject that triggers navigation and an observable that emits whenever
 * a router-based navigation starts
 * @returns Subject and observable
 */
export function createRouterNavigationEventSource(): readonly [
  subject: Subject<string>,
  observable: Observable<RouterNavigationEvent>
] {
  const subject = new Subject<string>();
  const observable = subject.asObservable().pipe(map(toRouterNavigationEvent('router', 'start')));
  return [subject, observable];
}
