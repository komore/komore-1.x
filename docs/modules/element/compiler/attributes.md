# Element attributes

Element attributes are the attributes are declared at the root semantic element in the template file.

## Attribute definition

### Attribute name

Attribute names that start with reserved template characters - `@`, `^`, `.`, `#` - are not taken into account.

### Attribute type and default value

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

### Supported types

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

### Extended types

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
<element-name attr1:string="str" attr2?:string attr3:CustomType="z">
</element-name>
```

```ts
// declaration
export interface ElementClassNameAttributeMap {
  'attr1': string;
  'attr2': string | undefined;
  'attr3': CustomType;
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
```

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
