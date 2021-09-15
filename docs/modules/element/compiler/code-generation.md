[//]: #title 'Element Code Generation'
[//]: #description 'komore element compiler code generation'
[//]: #keyword 'element'
[//]: #keyword 'compiler'
[//]: #keyword 'code'
[//]: #keyword 'generation'
[//]: #keyword '@komore/element'
[//]: #keyword '@komore/element/compiler'
[//]: #path 'modules/element/compiler/codegen'

# Code Generation

The [komore element compiler] generates TypeScript code from element files.

This document describes the process and the rationale behind the generated code.

## Element file

An element file is an HTML template that defines:

- the semantic of the element
- the style of the element
- the logic of the element

An element file is compiled into a TypeScript file that includes all the aforementioned details regarding the element,
alongside extra type information that can be used for tooling features.

The following constraints exist regarding the template root nodes:

- there can be one or more `<style>` or `<link>` elements
- there can be one or more `<script>` elements
- there must be exactly one element that is neither a script or style element
- non-element nodes such as text nodes are ignored

```html
<script>
  /* optional script block 1 */
</script>
<script>
  /* optional script block 2 */
</script>
<custom-element><!-- mandatory custom element block --></custom-element>
<style>
  /* optional style block 1 */
</style>
<style>
  /* optional style block 2 */
</style>
```

### Style nodes

`<style>` and `<link>` root elements are used to define an element's style.

Such elements are processed based on their `type` attribute.

| Type        | Description                                                  |
| :---------- | :----------------------------------------------------------- |
| `text/css`  | Processed using the included `@komore/element/compiler/css`  |
| `text/scss` | Processed using the optional `@komore/element-compiler-scss` |

If the `type` attribute is absent, the type defaults to the [`template.style.defaultType`] configuration.

The `media` attribute is preserved, allowing styles defined in the `<style>` or `<link>` element to apply only when a
media query condition is met.

#### `<style>`

TODO.

#### `<link>`

TODO.

### Script nodes

`<script>` root elements are used to define an element's logic.

The script content must be valid TypeScript.

`<script`> elements with a `src` attribute are used to reference external code:

- when `src` is a relative path and `type` is set to `module`, TODO
- when `src` is an absolute path and `type` is set to `module`, TODO

### Semantic nodes

There must be exactly one semantic node, i.e. any node that does not fall into the style or script categories.

There are typically 3 possibilities for this single semantic node:

1. a custom element: `<custom-element>`
2. a custom element that extends an existing element: `<input is="custom-element">`
3. a template, e.g. `<template>`

TODO: detail how attributes/class name/etc are declared

## Style

komore elements facilitate using concise, efficient and documented styles.

An element's styles are part of its shadow DOM: they cannot affect TODO.

## Script

komore is primarily a functional framework, while custom elements - and the DOM in general - rely on a class system.

The element compiler generates a standard class-based interface from the functional offers a way to work with a
functional interface.

This is primarily achieved by placing the element code in the element class constructor:

```ts
class ExampleCustomElement extends HTMLElement {
  constructor() {
    super();
    // custom element code
  }

  #ke()
}
```

### Methods

Exported functions are turned into public methods in the custom element class.

A reference to the subject is kept as a private property so that it may be referenced by those getters and setters.

```ts
const value = 24;
export function f(param: number): string {
  return `example ${value} ${param}`;
}
```

```ts
class ExampleCustomElement extends HTMLElement {
  #f: (param: number) => string;

  constructor() {
    super();
    const value = 24;
    function f(param: number): string {
      return `example ${value} ${param}`;
    }
    this.#f = f;
  }

  get f(): (param: number) => string {
    return this.#f;
  }
}
```

## Semantic

## Generated Script elements

### Script imports

### Script exports

### Lifecycle hooks

## Style elements

### Generated styles

## Custom element template

### Extending built-in elements

A custom element can extend a built-in HTML element:

```html
<input is="custom-element-name" />
```

Instead of emitting a class that extends `HTMLElement`, the compiler emits a class that extends the built-in element's
class.

Moreover, the extended tag name is specified when registering the custom element via the `extends` option.

Given the above example, the following code gets emitted:

```ts
class CustomElementClass extends HTMLInputElement {}
customElements.define('custom-element-name', CustomElementClass, { extends: 'input' });
```

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
[`behaviorsubject`]: ../../../../modules/reactive/src/behavior-subject.ts
[`replaysubject`]: ../../../../modules/reactive/src/replay-subject.ts
[`template.style.defaulttype`]: ./configuration.md#TODO
[`subject`]: ../../../../modules/reactive/src/subject.ts
