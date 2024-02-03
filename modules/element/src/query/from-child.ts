export interface FromChild {
  <ElementType extends Element, K extends string = string>(selectors: K): Observable<ElementType>;
}
