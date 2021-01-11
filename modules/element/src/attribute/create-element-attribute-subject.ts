import type { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged, filter, map, startWith } from 'rxjs/operators';
import type { ElementAttributeSubject } from './element-attribute-subject';

/**
 * Creates an element attribute subject
 * @param initialValue Initial value
 * @param transform Transform function
 * @param optional Whether the attribute is optional
 * @returns Element attribute subject
 * @template T Observable value type
 */
// TODO: replace object with Enum<> type
export function createElementAttributeSubject<T extends string | number | boolean | object>(
  initialValue?: T,
  transform?: (attributeValue: string) => T,
  optional: boolean = false
): ElementAttributeSubject<T> {
  const subject = new BehaviorSubject<string | undefined>(undefined);
  let $ = subject.asObservable();

  if (!optional) {
    $ = $.pipe(filter(value => value !== undefined));
  }

  let typed$ = transform
    ? $.pipe(map(value => (value !== undefined ? transform(value) : value)))
    : (($ as any) as Observable<T>);

  if (initialValue !== undefined) {
    typed$ = typed$.pipe(startWith(initialValue));
  }

  typed$ = typed$.pipe(distinctUntilChanged());

  return {
    s: subject,
    $: typed$ as Observable<T>
  };
}
