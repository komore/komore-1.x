
export interface ElementClass<ElementName extends string, BaseType extends HTMLElement = HTMLElement> extends BaseType {
  readonly tagName: Uppercase<ElementName>;
}
