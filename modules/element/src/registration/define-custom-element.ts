/**
 * Defines a custom element
 * @param name Name
 * @param constructor Constructor
 * @param options Options
 */
export function defineCustomElement(
  name: string,
  constructor: CustomElementConstructor,
  options?: ElementDefinitionOptions
): void {
  console.log(`[@komore/element] registering ${name}`, constructor, options);
  customElements.define(name, constructor, options);
}
