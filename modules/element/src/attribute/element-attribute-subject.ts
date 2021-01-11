import type { BehaviorSubject, Observable } from 'rxjs';

/**
 * Element attribute subject
 * @template T Observable value type
 */
export interface ElementAttributeSubject<T> {
  readonly s: BehaviorSubject<string | undefined>;
  readonly $: Observable<T>;
}
