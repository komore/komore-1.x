import { type Observable, type ReplaySubject } from '@komore/reactive';

/**
 * Element property subject
 * @template T Observable value type
 */
export interface ElementPropertySubject<T> {
  readonly s: ReplaySubject<string | undefined>;
  readonly $: Observable<T>;
}
