import type { Observable } from '@komore/reactive';

export interface FromChildren {
  <ElementType extends Element, K extends string = string>(selectors: K): Observable<ReadonlyArray<ElementType>>;
}
