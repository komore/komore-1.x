# Code Generation

The [komore element compiler] generates TypeScript code from element files.

This document describes the process and the rationale behind the generated code.

## Element file

An element file is treated as an HTML file with the following constraints for root nodes:

- there can be one or more script elements
- there can be one or more style elements
- there must be exactly one non-script, non-style, custom element
- non-element nodes such as text nodes are ignored

```html
<script>
  /* script block 1 (optional) */
</script>
<script>
  /* script block 2 (optional) */
</script>
<custom-element><!-- mandatory custom element block --></custom-element>
<style>
  /* style block 1 (optional) */
</style>
<style>
  /* style block 2 (optional) */
</style>
```

## Script elements

### Script imports

### Script exports

### Lifecycle hooks

## Style elements

### Generated styles

## Custom element template

### Extending built-in elements

A custom element can extend a built-in HTML element:

```html
<input as="custom-element-name" />
```

Instead of emitting a class that extends `HTMLElement`, the compiler emits a class that extends the built-in element's
class.

Moreover, the extended tag name is specified when registering the custom element via the `extends` option.

Given the above example, the following code gets emitted:

```ts
class CustomElementClass extends HTMLInputElement {}
customElements.define('custom-element-name', CustomElementClass, { extends: 'input' });
```

Moreover, the call to defin

## Generated implementation

### Custom element class

1. export class CUstomElemntClass extends X
2. constructor, super,

Lazy properties:
https://developers.google.com/web/fundamentals/web-components/best-practices#lazy-properties
Attributes not getting overriden with defaults:
https://developers.google.com/web/fundamentals/web-components/best-practices#dont-override

## Generated type definitions

The generated type definitionss hide implementation details and serve as the API for the custom element.

### Custom element interface

A custom element class is exposed as an interface that extends `HTMLElement`, or the class of an extended built-in
element.

```ts
export interface ExampleCustomElement extends HTMLElement {}
```

A custom element can be instantiated using a new expression, which is also declared.

```ts
declare const ExampleCustomElement: {
  prototype: ExampleCustomElement;
  new (): ExampleCustomElement;
};
```

### Custom element properties

The custom element properties are exposed as a simple property declaration that includes immutability and typing details.

1. interface
2. event map &

[komore element compiler]: ./element-compiler.md
