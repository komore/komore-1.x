import type { BehaviorSubject, Observable } from 'rxjs';

/**
 * Element property subject
 * @template T Observable value type
 */
export interface ElementPropertySubject<T> {
  readonly s: BehaviorSubject<string | undefined>;
  readonly $: Observable<T>;
}
