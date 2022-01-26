[//]: #title (Element Attributes)
[//]: #description (komore element compiler design: element attributes)
[//]: #keyword (element)
[//]: #keyword (compiler)
[//]: #keyword (design)
[//]: #keyword (attributes)
[//]: #keyword (@komore/element)
[//]: #keyword (@komore/element/compiler)
[//]: #path (modules/element/compiler/design/attributes)

# Element attributes

## Overview

Attributes can be used to enrich the semantic of a custom element, the same way they are used for standard elements.

Attributes are generally tied to matching properties that are used in the element implementation.

Therefore, they are a way to configure an element at the template level but are used indirectly via their matching
properties.

## Rationale

Writing the binding logic for element attributes is repetitive and error-prone.

As such the element compiler aims to greatly reduce the amount of necessary boilerplate code while applying best
practices.

## Best practices

The following best practices are taken into account in the design:

- [Primitive types should be accepted]: strings, but also booleans and numbers should be accepted
- [Attributes and properties should be kept in sync]: two-way binding between attributes and their matching property
- [Global attributes should not be overriden]: global attributes such as `tabindex` or `role` should not be overriden

## Requirements

### Reduce boilerplate when observing attributes

#### Problem: the list of observed attributes needs to be defined

A custom element defines the list of attributes it is going to observe via the `attributeChangedCallback method`:

```ts
class MyCustomElement extends HTMLElement {
  static readonly observedAttributes = ['attr1', 'attr2'];
}
```

#### Solution: define attributes in the element template

Attributes are defined in an element's template root element, next to the custom element itself.

```html
<my-custom-element attr1 attr2>
</my-custom-element>
```

The element compiler generates the `observedAttributes` property based on the template:

```ts
class MyCustomElement extends HTMLElement {
  static get observedAttributes() {
    return ['attr1', 'attr2'] as const;
  }
}
```

#### Problem: setting a default attribute value

An element may need to set a default value for an attribute, either for its own attributes or for global attributes
(e.g. a default value of `0` for the `tabindex` attribute).

This can be done by calling `setAttribute()` from the element constructor but requires verifying that an attribute
value has not already been set, which can occur when upgrading a custom element:

```ts
class MyCustomElement extends HTMLElement {
  constructor() {
    const existingAttributeValue = this.getAttribute('attr1');
    if (existingAttributeValue === null) {
      this.setAttribute('attr1', 'defaultAttr1Value');
    }
  }
}
```

#### Solution: an attribute can be given a default value in the template

An attribute can be given a default value.

```html
<my-custom-element attr1="defaultAttr1Value" attr2>
</my-custom-element>
```

The element compiler generates code that verifies that no attribute value has already been set upon construction.

#### Problem: an attribute is not typed

TODO

#### Solution: an attribute can be given a type in the template

```html

```

#### Problem: an element's attributes are not part of its visible API

An element can use as many attributes as it needs, but there is no automated mechanism allowing discovery of the
available attributes.

Information about available attributes is therefore generally shared via documentation and the information is not
directly available during development while writing templates.

#### Solution: element attribute map and setAttribute/getAttribute method overloads

TODO.

### DOM attributes

In the DOM, attributes can either be a `string` or a `null` value.

An attribute that is present but has no value is an empty string value.

```html
<div attr1="x" attr2></div>
```

```ts
const element = document.querySelector('div') as HTMLDivElement;
element.getAttribute('attr1'); // 'x'
element.getAttribute('attr2'); // ''
element.getAttribute('attr3'); // null
```

Attributes generally have a property counterpart, and both the attribute and property should be kept synchronized.

### Observing attributes

A custom element defines the list of attributes it is going to observe via the `attributeChangedCallback method`:

```ts
class MyCustomElement {
  static readonly observedAttributes = ['attr1', 'attr2'];

  attributeChangedCallback(attributeName: string, oldValue: string | null, newValue: string | null): void {
    console.log(`attribute ${attributeName} value changed from ${oldValue} to ${newValue}`);
  }
}
```

The callback can be used to keep a changed attribute's matching property synchronized.


## Implementation

### Attribute definition

#### Attribute name

Attribute names that start with reserved template characters - `@`, `^`, `.`, `#` - are not taken into account.

#### Attribute type and default value

A limited syntax offers means to configure their behavior while remaining close to the TypeScript syntax:

```html
<element-name name:type="defaultValue"></element-name>
```

An attribute can be made optional with the `?` symbol:

```html
<element-name name?:type="defaultValue"></element-name>
```

When an attribute is optional, the default value may be ommitted:

```html
<element-name name?:type></element-name>
```

When an attribute has no type, the type is inferred to be `boolean` and the attribute presence determines the value:

```html
<element-name name></element-name>
```

#### Supported types

Attribute values are strings, limiting the number of available types to work with while keeping an API that is easy to
use and understand.

With that in mind, the following types are recognized by the element compiler:

| Type                     | Description                                                                       |
| :----------------------- | :-------------------------------------------------------------------------------- |
| `boolean`                | A `boolean` value: `true` or `false`                                              |
| `number`                 | A `number` value, e.g. `4`                                                        |
| `bigint`                 | A `bigint` value, .e.g. `'4n'`                                                    |
| `string`                 | A `string` value, e.g. `str`                                                      |
| `URL`                    | A URL value that can be passed to the `URL` constructor                           |
| `RegExp`                 | A regular expression value that can be passed to the `RegExp` constructor         |
| `Temporal.Duration`      | An ISO 8601 value that can be passed to `Temporal.Duration.from()`                |
| `Temporal.PlainTime`     | An ISO 8601 value that can be passed to `Temporal.PlainTime.from()`               |
| `Temporal.PlainDateTime` | An ISO 8601 date time that can be passed to `Temporal.PlainDateTime.from()`       |
| `Temporal.ZonedDateTime` | An ISO 8601 zoned date time that can be passed to `Temporal.ZonedDateTime.from()` |

#### Extended types

Moreover, types extending those base types may also be used:

```html
<script>
  export type CustomType = 'str1' | 'str2';
</script>
<element-name name:CustomType="str1"></element-name>
```

## Generated code

The generated code for attributes has the following responsibilities:

1. Turning attribute changes into an observable stream of events
2. Turning the stream of attribute change events into valid attribute values
3. Binding attribute values to their matching properties
4. Adding type information to attributes in the element interface declaration

### Attribute definitions

The general element includes an attribute map interface that maps each attribute name to their expected TypeScript type.

```html
<!-- source -->
<script>
  export type CustomType = 'str1' | 'str2';
</script>
<element-name attr1:string="str" attr2?:string attr3:CustomType="z"> </element-name>
```

```ts
// declaration
export interface ElementClassNameAttributeMap {
  attr1: string;
  attr2: string | undefined;
  attr3: CustomType;
}
```

### Observed attributes The generated element inclludes an [`observedAttributes`] static getter with a typed list of

attribute names. ```html

<!-- source -->

<custom-element attr1 attr2> </custom-element>

````

```ts
// declaration
export interface ExampleCustomElement extends HTMLElement {
  static readonly observedAttributes: ['attr1', 'attr2'];
}
````

```ts
// implementation
export class ExampleCustomElement extends HTMLElement {
  static get observedAttributes() {
    return ['attr1', 'attr2'] as const;
  }
}
```

## Attribute change

The generated code uses the [`attributeChangedCallback()`] method to feed a shared [`ElementAttributeChangedEvent`] subject.

```ts
// implementation
import { type ElementAttributeChangedEvent } from '@komore/element';

export class ExampleCustomElement extends HTMLElement {
  #a = new Subject<ElementAttributeChangedEvent>();
  attributeChangedCallback(attributeName: string, oldValue: string | null, newValue: string | null): void {
    this.#a.next({
      attributeName,
      newValue,
      oldValue
    });
  }
}
```

## Attribute set and get

The generated code adds observ

[`observedattributes`]: https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements#using_the_lifecycle_callbacks
[`attributechangedcallback()`]: https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements#using_the_lifecycle_callbacks
[`elementattributechangedevent`]: ../../../../modules/element/src/attribute/element-attribute-changed-event.ts
[attributes and properties should be kept in sync]: https://developers.google.com/web/fundamentals/web-components/best-practices#aim-to-keep-primitive-data-attributes-and-properties-in-sync,-reflecting-from-property-to-attribute,-and-vice-versa.
[global attributes should not be overriden]: https://developers.google.com/web/fundamentals/web-components/best-practices#do-not-override-author-set,-global-attributes.
[primitive types should be accepted]: https://developers.google.com/web/fundamentals/web-components/best-practices#always-accept-primitive-data-strings,-numbers,-booleans-as-either-attributes-or-properties.
