# komore Element

Reactive, observable [custom elements].

```html
<script class="MyCustomElement">
  import { attribute, event } from '@komore/element'; // implicit imports

  /**
   * Documentation for someProperty
   */
  export const someProperty = new BehaviorSubject<string>('hello') ?? new Subject<string>(); // with(out) default
  export const someReadonlyProperty = of(42); // always subscribed (and fed to a behavior subject so a getter can return the value)

  const optionSelected = event<EventDetailType>('option-selected'); // causes a createEventDispatcher()
  optionSelected({}); // causes an element.dispatchEvent()

  this // element instance (avoid using it?)

  // attr is an observable of the attribute
  // using number or number enum adds an operator function for conversion
  const attr = attribute<string | enum | number>('attribute-name'); // keyof 

</script>
<style>
</style>
<my-custom-element
  attribute-name="default-value"
  attribute-name-without-default
  attribute-name:boolean="default"
  attribute-name:EnumName="EnumName.Default">
  ${x where x is T | Observable<T> | (state: Observable<State>) => Observable<T>}
  <input is="my-custom-input">
</my-custom-element>
```

## Templates

```html
<!-- text -->
<element-name>Static text: ${expression}</element-name>

<!-- attribute -->
<element-name :attribute="expression"></element-name>
<element-name :[attributeNameExpression]="expression"></element-name>
<element-name ?attribute="boolean-expression"></element-name>
<element-name ?[attributeNameExpression]="boolean-expression"></element-name>

<!-- property -->
<element-name .propertyName="expression"></element-name>
<element-name .[dynamicPropertyNameExpression]="expression"></element-name>

<!-- event listener -->
<element-name @event-name="functionName"></element-name>
<element-name @event-name="onX(event)"></element-name>
<element-name @[dynamic-event-name-expression]="onX(event)"></element-name>
<element-name @event-name.stop="x"><!-- stopPropagation() -->
<element-name @event-name.prevent="x"><!-- preventDefault() -->
<element-name @event-name.capture="x"><!-- addEventListener capture -->
<element-name @event-name.passive="x"><!-- addEventListener passive -->
<element-name @event-name.self="x"><!-- event.target must be event source -->
<element-name @event-name.once="x"><!-- events will be ignored after the first one -->
<element-name @event-name><!-- the expression is optional, e.g. to ignore click/etc, but pointer-events could make more sense -->
```

## Directives

```html
<!-- condition: if -->
<element-name k-if="condition">
</element-name>

<!-- condition: else -->
<element-a k-if="condition">
  condition is true
</element-a>
<element-b k-else>
  condition is false
</element-b>

<!-- condition: else if -->
<element-a k-if="condition1">
  condition1 is true
</element-a>
<element-b k-else-if="condition2">
  condition2 is true
</element-b>
<element-c k-else>
  condition1 and condition2 are false
</element-c>

<!-- condition: switch/case -->
<template-or-element k-switch="statement">
  <template-or-element-a k-case="value-a">
    statement is value-a
  </template-or-element-a>
  <template-or-element-a k-case="value-a">
    statement is value-b
  </template-or-element-a>
  <template-or-element-c k-otherwise>
    none of the cases matched
  </template-or-element-c>
</template-or-element>

<!-- loop -->
<template k-for="let x of y">
</template>

<!-- conditional element -->
<template k-element="ElementClass">
  <!-- can still use slots -->
</template>

<!-- transparent element -->
<template k-for="let anyElement of elements">
  <template k-element="anyElement">
</template>

<!-- conditional display -->
<element-name k-show="condition">
  <!-- display is set to none if condition is false -->
</element-name>
```

## Provided elements

```html
<k-router>
</k-router>
```


[custom elements]: https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements
