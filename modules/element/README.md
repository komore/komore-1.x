# komore Element

Reactive, observable [custom elements].

```html
<script class="MyCustomElement">
  import { attribute, event } from '@komore/element/compiler'; // implicit imports

  /**
   * Documentation for someProperty
   */
  export const someProperty = new BehaviorSubject<string>('hello') ?? new Subject<string>(); // with(out) default

  export const someReadonlyProperty = of(42); // always subscribed (and fed to a behavior subject so a getter can return the value)

  const optionSelected = event<EventDetailType>('option-selected'); // causes a createEventDispatcher()
  optionSelected({}); // causes an element.dispatchEvent()

  this // element instance (avoid using it?)

  // attr is an observable of the attribute
  // if the attribute was declared as number or boolean, an operator function is added for conversion
  const attr = attribute('attribute-name'); // keyof ElementClassAttributeMap

  // binding elements
  interface ElementBindingMap {
    'bind-id': ElementType
  }

  // watchChild<K extends keyof ElementBindMap>(id: K): Observable<ElmentBindMap[K]>
  const element$ = child('bind-id');
  // for later versions?, should probably be discouraged
  const elements = children('querySelectorAll syntax');

  // lifecycle

  function connected() {
    // TODO: filter with Node.isConnected?
  }

  function disconnected() {

  }

  function adopted() {

  }
  const connected = () => {};

  interface MyCustomElementAttributeMap {
    'attr-1': number;
  }

  class MyCustomElement extends HTMLElement {
    static get observedAttributes() {
      return ['a', 'b', 'c'] as const;
    }

    constructor() {
      super();
    }

    get propertyName(): T {
      return this._kp.propertyName.s.value;
    }

    set propertyName(propertyName: T) {
      this._kp.propertyName.s.next(propertyName);
    }

    private watchAttribute<K extends keyof MyCustomElementAttributeMap>(attributeName: K): Observable<MyCustomElementAttributeMap[K]> {
      return this._kp.propertyName.$;
    }
  }
</script>
<style>
</style>
<my-custom-element
  attribute-name="default-value"
  attribute-name-without-default
  attribute-name:boolean="default"
  attribute-name?="canBeUndefined">
  ${x where x is T | Observable<T> | (state: Observable<State>) => Observable<T>}
  <input is="my-custom-input">
</my-custom-element>
```

## Templates

```html
<!-- text -->
<element-name>Static text: ${expression}</element-name>

<!-- attribute -->
<element-name attribute="value"></element-name>
<element-name attribute="${expression}"></element-name>
<element-name ${attributeNameExpression}="expression"></element-name>
<element-name attribute?="boolean-value"></element-name>
<element-name attribute?="boolean-expression"></element-name>
<element-name ${attributeNameExpression}?="boolean-expression"></element-name>

<!-- property -->
<element-name .propertyName="expression"></element-name>
<element-name .${dynamicPropertyNameExpression}="expression"></element-name>
<element-name .class="stringOrArrayOrBooleanRecordsExpression"></element-name>
<element-name .class.class-name="booleanExpression"></element-name>
<element-name .style.styleName="expression"></element-name>
<element-name .style.--custom-property-name="expression"></element-name>

<!-- event listener -->
<element-name @event-name="functionName"></element-name>
<element-name @event-name="subject$"></element-name><!-- alias for subject$.next(event) -->
<element-name @event-name="onX(event)"></element-name>
<element-name @${dynamic-event-name-expression}="onX(event)"></element-name>
<element-name @event-name.stop="x"><!-- stopPropagation() -->
<element-name @event-name.prevent="x"><!-- preventDefault() -->
<element-name @event-name.capture="x"><!-- addEventListener capture -->
<element-name @event-name.passive="x"><!-- addEventListener passive -->
<element-name @event-name.self="x"><!-- event.target must be event source -->
<element-name @event-name.once="x"><!-- events will be ignored after the first one -->
<element-name @event-name><!-- the expression is optional, e.g. to ignore click/etc, but pointer-events could make more sense -->

<!-- directive -->
<element-name ^directive>
<element-name ^directive="expression">
<element-name ^${dynamicDirective}="expression">

<!-- bind element -->
<element-name #bind-id><!-- can be retrieved with child('bind-id') -->
```

## Directives

```html
<!-- condition: if -->
<element-name ^if="condition">
</element-name>

<!-- condition: else -->
<element-a ^if="condition">
  condition is true
</element-a>
<element-b ^else>
  condition is false
</element-b>

<!-- condition: else if -->
<element-a ^if="condition1">
  condition1 is true
</element-a>
<element-b ^else-if="condition2">
  condition2 is true
</element-b>
<element-c ^else>
  condition1 and condition2 are false
</element-c>

<!-- condition: switch/case -->
<template-or-element ^switch="statement">
  <template-or-element-a ^case="value-a">
    statement is value-a
  </template-or-element-a>
  <template-or-element-a ^case="value-a">
    statement is value-b
  </template-or-element-a>
  <template-or-element-c ^otherwise>
    none of the cases matched
  </template-or-element-c>
</template-or-element>

<!-- loop -->
<template-or-element ^for="let x of y">
</template-or-element>

<!-- conditional element -->
<template ^element="ElementClass">
  <!-- can still use slots -->
</template>

<!-- transparent element -->
<template ^for="let anyElement of elements">
  <template ^element="anyElement">
</template>

<!-- conditional display -->
<element-name ^show="condition">
  <!-- style.display = condition ? null : 'none' -->
</element-name>
```

## Provided elements

```html
<k-router>
</k-router>
```

[custom elements]: https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements
